const fs = require('fs');
const XLSX = require('xlsx');
const csv = require('csv-parser');

const User = require('../models/User');


exports.uploadCSV = async (req, res) => {
    //  console.log("FILE DATA =>", req.file);


    try {

        const results = [];

        fs.createReadStream(req.file.path)

            .pipe(csv())

            .on('data', (data) => {

                results.push(data);
            })

            .on('end', async () => {

                // insert into MongoDB
                await User.insertMany(results);

                res.json({

                    message: "CSV uploaded successfully",

                    total: results.length

                });
            });

    } catch (error) {

        res.status(500).json({

            message: "Upload failed",

            error: error.message

        });

    }
};
exports.uploadXLSX = async (req, res) => {

    try {

        // read excel file
        const workbook =
            XLSX.readFile(req.file.path);

        // first sheet
        const sheetName =
            workbook.SheetNames[0];

        // get sheet
        const sheet =
            workbook.Sheets[sheetName];

        // convert to JSON
        const data =
            XLSX.utils.sheet_to_json(sheet);

        // insert into DB
        await User.insertMany(data);

        res.json({

            message: "XLSX uploaded successfully",

            total: data.length

        });

    } catch (error) {

        res.status(500).json({

            message: "Upload failed",

            error: error.message

        });

    }
};