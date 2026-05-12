const bcrypt = require('bcrypt');




const UserCrudSchema = require('../models/userCrud');
const upload = require('../middleware/upload');






exports.addUser = async (req, res) => {

    const { email, name, role, mobile, password, status } = req.body;
    try {
        const existingUser = await UserCrudSchema.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserCrudSchema.create({
            email,
            name,
            mobile,
            password: hashedPassword,
            role,
            status
        });
        // 4. send response
        res.json({
            message: "User created successfully",
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role,
                status: newUser.status
            }
        });
    }
    catch (error) {

        // 5. handle error properly
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
}
exports.GetUsers = async (req, res) => {

    const { status, sortBy, limit, offset, search } = req.body;

    console.log("bodyyyy", req.body);

    try {

        let filter = {};

        if (status) {
            filter.status = status;
        }
        if (search) {
            filter.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    email: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }


        let query = UserCrudSchema
            .find(filter)
            .select('-password')
            .skip(Number(offset))
            .limit(Number(limit));


        if (sortBy === 'asc') {
            query = query.sort({ name: 1 });
        }

        if (sortBy === 'desc') {
            query = query.sort({ name: -1 });
        }


        // execute query
        const users = await query;

        res.json({
            limit,
            offset,
            totalUsers: users.length,
            list: users
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};
exports.UpdateUser = async (req, res) => {

    // console.log("req", req.body);

    const { id, name, status } = req.body;
    console.log("body----", req.body)

    try {

        // check if user exists
        const existingUser = await UserCrudSchema.findById(id);

        if (!existingUser) {
            return res.json({
                message: "User does not exist"
            });
        }

        await UserCrudSchema.updateOne(
            { _id: id },      // which user
            { name: name, status: status }, // what to update

        );

        // send response
        res.json({
            message: "Updated successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};
exports.DeleteUser = async (req, res) => {

    const { id } = req.body;
    console.log("khdgufd", req.body)

    try {
        const existingUser = await UserCrudSchema.findOne({ _id: id });
        console.log("existingUser", existingUser)


        if (!existingUser) {
            return res.json({ message: "User Does not exists" });
        }
        await UserCrudSchema.deleteOne(
            { _id: id }
        );
        // 4. send response
        res.json({
            message: "User Deleted successfully",

        });
    }
    catch {

    }

}


