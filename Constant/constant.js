const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: "Access denied! No Token provided.",
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: "Invalid Token.",
  EXPIRED_TOKEN: "Token has been expired.",
  VERIFICATION_FAILED: "Token verification failed.",
  INTERNAL_SERVER_ERR: "Server error. Please try again later."
};

const AUTH_CONSTANTS = {
  SYSTEM_FAILURE: "Something failed.",
  NO_ACCESS: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED,
  INVALID_USER: "User not found.",
  INACTIVE_ACCOUNT: "This account is not active. Please contact admin.",
  BLOCKED_ACCOUNT: "This account has been rejected or blocked. Please contact admin.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  INVALID_CREDENTIALS_EMAIL: "Invalid email or password.",
  INVALID_CREDENTIALS_MOBILE: "Invalid mobile number or password.",
  INVALID_PASSWORD: "You have entered incorrect password. Please try again with valid password.",
  INVALID_RECOVERY_LINK: "Password link is expired or not valid.",
  PASSWORD_CHANGE_SUCCESS: "Password changed Successfully.",
  CHANGE_PASSWORD_REQUEST_SUCCESS: "Password recovery link has been sent to your registered email.",
  CHANGE_PASSWORD_REQUEST_EMAIL_FAILURE: "Email sending failed. Please try again.",
  INVALID_EMAIL: "This email is not registered. Please sign up to continue.",
  INVALID_MOBILE: "This mobile number is not registered. Please sign up to continue.",
  USER_NOT_APPROVED: "Your account is not approved by admin. Please contact admin for more details.",
};

const OTP_CONSTANTS = {
  FAILED_TO_SEND_OTP: "Failed to send OTP. Please try again.",
  OTP_LENGTH: "The OTP should be 6 digits long.",
  INVALID_OTP: "OTP is not valid.",
  PLEASE_ENTER_OTP: "Please enter otp.",
  NO_USER_REGISTERED_MOBILE: "No user registered with this mobile number.",
  NO_USER_REGISTERED_EMAIL: "No user registered with this email.",
  DUPLICATE_MOBILE_NUMBER: "Mobile number entered is already registered. Please try to login.",
  DUPLICATE_EMAIL: "Email entered is already registered. Please try to login.",
  INVALID_MOBILE_NUMBER: "Invalid mobile number entered. Please provide valid mobile number.",
  INVALID_EMAIL: "Invalid email address entered. Please provide valid email.",
  EMAIL_SENDING_FAILED: "Email sending failed due to some application issue.",
  OTP_GENERATED: "Verification code generated Successfully.",
  OTP_VERIFIED: "OTP verification SUCCESS.",
  OTP_MAX_LIMIT_ERROR: "Max attempts to verify code breached.",
  OTP_EXPIRED: "Verification code expired.",
  OTP_VERIFIED_NEW_USER: "Verification code verified for new user.",
  PLEASE_VERIFY: "Please enter OTP for verification.",
};

const USER_CONSTANTS = {
  PROFILE_UPDATED_SUCCESS: "Profile updated Successfully.",
  ADMIN_ID_REQUIRED: "AdminId is required.",
  USER_NOT_REGISTERED: "User is not registered on this platform. Please signup first.",
  ACCOUNT_DELETED: "This account has been deleted. Please contact admin.",
  INACTIVE_ACCOUNT: "This account is inactive. Please contact admin.",
  PROFILE_INCOMPLETE: "Please complete your profile to continue.",
  INVALID_ID: "Invalid id passed.",
  USER_CREATED_SUCCESS: "User registered Successfully.",
  LOGIN_SUCCESS: "Logged in Successfully.",
  SOCIAL_LOGIN_SUCCESS: "Logged in with social account Successfully.",
  VIEW_PROFILE_SUCCESS: "You are currently viewing your profile.",
  LIST_FETCHED: "User list fetched Successfully.",
  EDIT_PROFILE_SUCCESS: "Your profile has been updated Successfully.",
  NO_USER_FOUND_EMAIL: "No user found with this email.",
  PASSWORD_RESET_SUCCESS: "Your password has been Successfully reset.",
  LOGOUT_SUCCESS: "Logged out Successfully.",
  EMAIL_ALREADY_EXISTS: "This email is already registered.",
  MOBILE_ALREADY_EXISTS: "This mobile number is already registered.",
  USER_ALREADY_EXISTS: "User already exists with these details.",
  VERIFICATION_EMAIL_SUCCESS: "This email has been Successfully verified.",
  EMAIL_VERIFIED: "Email verification completed successfully. You may continue.",
  STATUS_UPDATED: "User status updated successfully.",
  USER_NOT_FOUND: "User not found.",
  PASSWORD_CHANGE_SUCCESS: "Password changes Successfully.",
  INVALID_OLD_PASSWORD: "Incorrect old password.",
  DELETED_SUCCESSFULLY: "This user is deleted Successfully.",
  INVALID_USER_ID: "Invalid userId.",
  LINKED_ACCOUNT_FETCHED: "Linked accounts fetched successfully.",
  AT_LEAST_ONE_LOGIN_REQUIRED: "This is your only login method, so you cannot remove this linked account.",
  INVALID_MOBILE: "Invalid mobile number format.",
  PASSWORD_IS_VALID: "Credentials verified successfully.",
  EMPLOYEE_ID_REQUIRED: "employeeId is required.",
  NOT_ALLOWED_TO_EDIT: "You are not allowed to edit this user.",
  USER_IN_USE: "You are not allowed to delete this user because it is being used in other records.",
  USERS_IN_USE: "You are not allowed to delete one or more users because they are being used in other records.",


};

const DASHBOARD_CONSTANT = {
  DASHBOARD_FETCHED: "Dashboard data retrieved successfully."
};

const FILE_UPLOAD_CONSTANTS = {
  FILE_UPLOAD_SUCCESS: "File uploaded Successfully.",
  FILE_EXPORT_SUCCESS: "File exported Successfully.",
  ONLY_CSV_ALLOWED: "Invalid file type. Only CSV files are allowed.",
  NO_FILE_UPLOADED: "Please upload a media file.",
  FILE_REQUIRED: "File is required.",
  CSV_UPLOAD_SUCCESS: "CSV processed successfully.",
  FAILED_TO_UPLOAD_CSV_DUE_TO_ERR: "CSV has errors. Fix and re-upload.",
  DUPLICATE_COUPON_CODE: "Duplicate couponCodes in database."

};

const NOTIFICATIONS_CONSTANTS = {
  NOTIFICATION_POSTED: "Notification posted successfully.",
  NOTIFICATION_DELETED: "Notification deleted successfully.",
  NO_NOTIFCATION: "No notification yet.",
  NOTIFICATION_FETCHED: "Notification list fetched successfully.",
  NOTIFICATION_MARKED_READ: "Notification(s) marked as read successfully.",
  ALL_NOTIFICATIONS_MARKED_READ: "All notifications marked as read successfully.",
  INVALID_NOTIFICATION_ID: "Invalid notificationId provided.",
  ALL_NOTIFICATIONS_DELETED: "All notifications deleted successfully.",
};

const WEBVIEW_CONSTANTS = {
  WEBVIEW_CREATED: "Document added successfully.",
  WEBVIEW_UPDATED: "Document updated successfully.",
  WEBVIEW_NOT_FOUND: "No document found for the given title.",
  WEBVIEW_LIST_FETCHED: "Document list fetched successfully.",
  WEBVIEW_FETCHED: "Document fetched successfully.",
  WEBVIEW_DELETED: "Document deleted successfully.",
  NOT_FOUND: "Document not found.",
};

const BRAND_CONSTANTS = {
  ALREADY_EXISTS: "Brand already exists with same name.",
  CREATED_SUCCESSFULLY: "Brand created successfully.",
  BRAND_EDIT_SUCCESS: "Brand updated successfully.",
  LIST_FETCHED: "Brand list fetched successfully.",
  NOT_FOUND: "Brand not found.",
  INVALID_ID: "Invalid brandId provided.",
  DELETED_SUCCESSFULLY: "Brand deleted successfully.",
  BRAND_ID_REQUIRED: "Brand Id is required.",
  INVALID_BRAND_IDS: "Invalid brandIds.",
  NO_DUPLICATE_IDS_ALLOWED: "Duplicate brandIds not allowed.",
  BRAND_IDS_MUST_BE_AN_ARRAY: "BrandIds must be a non-empty array.",
  BRAND_IDS_REQUIRED: "BrandIds array is required.",
  INVALID_BRAND_IDS_PROVIDED: "Invalid brandIds provided.",
  BRANDS_DELETED_SUCCESSFULLY: "Brands deleted successfully.",
  BRANDS_NOT_FOUND: "Brand not found.",
  BRAND_IN_USE: "You are not allowed to delete this brand because it is already used in vouchers or campaigns.",
  BRANDS_IN_USE: "You are not allowed to delete one or more brands because they are already used in vouchers or campaigns.",
  BRAND_OVERVIEW_FETCHED: "Brand overview fetched.",
  VOUCHER_ACTIVITY_FETCHED: "Voucher activity fetched.",
  DEPOSIT_LOGS_FETCHED: "Deposit logs fetched successfully."
};

const DATE_CONSTANTS = {
  INVALID_START_DATE: "Start date cannot be in the past. Only today or future dates are allowed.",
  INVALID_END_DATE: "End date must be in the future and greater than the start date.",
  EXPIRY_INVALID: "Expiry date must be in the future.",
}

const VOUCHER_CONSTANTS = {
  ALREADY_EXISTS: "Voucher already exists with same serial number.",
  CREATED_SUCCESSFULLY: "Voucher created successfully.",
  VOUCHER_EDIT_SUCCESS: "Voucher updated successfully.",
  LIST_FETCHED: "Voucher list fetched successfully.",
  NOT_FOUND: "Voucher not found.",
  INVALID_ID: "Invalid voucherId provided.",
  DELETED_SUCCESSFULLY: "Voucher deleted successfully.",
  DUPLICATE_GV_CODE: "Duplicate gvCode, please try again.",
  VOUCHER_IDS_MUST_BE_ARRAY: "voucherIds must be a non-empty array.",
  INVALID_IDS: "Invalid voucherIdS provided",
  VOUCHERS_NOT_FOUND: "Vouchers not found.",
  VOUCHERS_DELETED_SUCCESSFULLY: "Vouchers deleted successfully.",
  VOUCHER_IN_USE: "Voucher cannot be deleted because it is being used in a request or campaign flow.",
  VOUCHERS_IN_USE: "One or more vouchers cannot be deleted because they are being used in a request or campaign flow.",
  DUPLICATE_COUPON_CODE: "Duplicate coupon code for the same brand. Please provide a unique coupon code.",
  QUANTITY_EXCEEDS_SERIAL_RANGE: "Voucher quantity exceeds serial range.",
  INVALID_SERIAL_RANGE: "Invalid serial range.",
  SERIAL_START_AND_SERIAL_END_REQUIRED: "couponSerialStart and couponSerialEnd are required when prefix is provided."
};

const CAMPAIGN_CONSTANTS = {
  NO_CAMPAIGNS_FOUND: "Campaigns not found.",
  ALREADY_EXISTS: "Campaign already exists.",
  CREATED_SUCCESSFULLY: "Campaign created successfully.",
  CAMPAIGN_EDIT_SUCCESS: "Campaign updated successfully.",
  LIST_FETCHED: "Campaign list fetched successfully.",
  NOT_FOUND: "Campaign not found.",
  INVALID_ID: "Invalid campaignId provided.",
  DELETED_SUCCESSFULLY: "Campaign deleted successfully.",
  CAMPAIGN_IN_USE: "Campaign is in use and cannot be deleted.",
  CAMPAIGNS_IN_USE: "One or more campaigns are in use and cannot be deleted.",
  CAMPAIGN_IDS_MUST_BE_ARRAY: "campaignIds must be a non-empty array.",
  VOUCHER_ACTIVITY_FETCHED: "Voucher activity fetched successfully.",
  CAMPAIGN_ID_REQUIRED: "campaignId is required.",
  CAMPAIGN_OVERVIEW_FETCHED: "Campaign overview fetched successfully.",
  INVALID_CAMPAIGN_DATA: "Invalid campaign data provided. Please check your input and try again.",
  PENDING_REQUESTS_FETCHED: "Pending voucher requests fetched successfully.",
  BRAND_WISE_REQUEST_DATA_FETCHED: "Brand-wise request data fetched successfully.",
  VOUCHER_REQUEST_ID_REQUIRED: "voucherRequestId is required.",
  INVALID_REQUEST: "Invalid voucher request.",
  REQUEST_REJECTED: "Voucher request rejected successfully.",
  REQUEST_APPROVED: "Voucher request approved successfully.",
  BRAND_NOT_PART_OF_REQUEST: "The selected brand is not part of this request.",
  EXCEEDS_REQUESTED_VOUCHER_COUNT: "The number of vouchers you are trying to assign exceeds the requested voucher count for this brand.",
  INVALID_VOUCHERS: "Some vouchers are invalid or already redeemed.",
  VOUCHERS_ASSIGNED_SUCCESSFULLY: "Vouchers assigned successfully.",
  CAMPAIGN_TEAMS_FETCHED: "Campaign teams fetched successfully.",
  VOUCHER_COUNT_MISMATCH: "The number of vouchers selected does not match the requested voucher count for this brand.",
  VOUCHERS_ALREADY_ASSIGNED: "Vouchers have already been assigned for this brand in the request.",
  EITHER_REJECTED_OR_RELEASE: "This request has already been either rejected or released, so you cannot release or reject it anymore.",
  ALL_VOUCHERS_NOT_ASSIGNED: "You cannot release this request because not all vouchers have been assigned yet.",
  REQUEST_RELEASED: "Voucher request released successfully.",
  INVALID_VOUCHER_TYPE: "Invalid voucher type for this brand. Expected 'influencer/team' or 'generalUse'.",
  VOUCHER_REDEEMED_SUCCESSFULLY: "Voucher redeemed successfully.",
  INVALID_VOUCHER: "No such voucher found for the provided details, or the voucher is not assigned. Please check the details and try again.",
  REQUEST_CREATED: "Voucher request created successfully.",
  VOUCHER_ASSIGNMENT_FAILED: "Voucher assignment failed. Please ensure all vouchers are valid and active, and try again.",
  VOUCHER_RETURN_FAILED: "Voucher return failed. Please ensure all vouchers are valid and currently assigned, and try again.",
  VOUCHERS_RETURNED_SUCCESSFULLY: "Voucher return request submitted successfully.",
  RETURN_REQUEST_CREATED: "Return request created successfully.",
  RETURN_REQUESTS: "Return voucher requests fetched successfully.",
  RETURN_REQUESTS_DETAILS: "Return request details fetched successfully.",
  REQUEST_ID_NEEDED: "originalVoucherRequestId is required.",
  ACTION_REQUIRED: "originalVoucherRequestId and action (approve/reject) are required.",
  NO_PENDING_REQUESTS: "No pending return requests found."
};

const MARKETING_CONSTANTS = {
  TEAM_ALREADY_EXISTS: "Team already exists with same name.",
  TEAM_CREATED_SUCCESSFULLY: "Team created successfully.",
  TEAM_EDIT_SUCCESS: "Team updated successfully.",
  TEAM_LIST_FETCHED: "Team list fetched successfully.",
  TEAM_NOT_FOUND: "Team not found.",
  INVALID_TEAM_ID: "Invalid teamId provided.",
  TEAM_DELETED_SUCCESSFULLY: "Team deleted successfully.",
  TEAM_IN_USE: "Team cannot be deleted because it is being used in active requests.",
  TEAMS_IN_USE: "One or more teams cannot be deleted because they are being used in active requests.",
  MEMBER_ALREADY_EXISTS: "Team member already exists.",
  MEMBER_CREATED_SUCCESSFULLY: "Team member created successfully.",
  MEMBER_EDIT_SUCCESS: "Team member updated successfully.",
  MEMBER_LIST_FETCHED: "Team members list fetched successfully.",
  MEMBER_NOT_FOUND: "Team member not found.",
  INVALID_MEMBER_ID: "Invalid teamMemberId provided.",
  MEMBER_DELETED_SUCCESSFULLY: "Team member deleted successfully.",
  MEMBER_IN_USE: "Team member cannot be deleted because it is being used in active team requests.",
  MEMBERS_IN_USE: "One or more team members cannot be deleted because they are being used in active team requests.",
  TEAM_IDS_MUST_BE_ARRAY: "TeamIds must be array."
};

module.exports = {
  MIDDLEWARE_AUTH_CONSTANTS,
  AUTH_CONSTANTS,
  OTP_CONSTANTS,
  USER_CONSTANTS,
  DASHBOARD_CONSTANT,
  FILE_UPLOAD_CONSTANTS,
  NOTIFICATIONS_CONSTANTS,
  WEBVIEW_CONSTANTS,
  BRAND_CONSTANTS,
  VOUCHER_CONSTANTS,
  CAMPAIGN_CONSTANTS,
  MARKETING_CONSTANTS,
  DATE_CONSTANTS
};
