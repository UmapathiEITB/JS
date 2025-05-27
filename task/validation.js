/**
 * Error Message Configurations
 */
const error_messages = {
    "empty": "This field is required",
    "name": "Please enter valid name",
    "email": "Please enter valid email",
    "phone": "Please enter valid phone number",
    "mobile": "Please enter valid mobile number",
    "state": "Please enter valid state",
    "postcode": "Please enter valid postcode",
    "year": "Please enter valid year",
    "city": "Please enter valid city",
    "ndis_number": "Please enter valid ABN",
    "file_upload_type": "Please upload valid file",
    "file_upload_limit": "Maximum file upload limit 5MB",
    "file_upload_length": "You are allowed to upload a maximum of 2 files",
    "birthdate": "Please select your birth",
    "experience": "Please enter valid experience",
    "dob": "Please select valid DOB",
    "usi": "Please enter valid USI",
};

/**
 * Form Validations
 */
const validation = {
    /**
     * Name validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "name_validation": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty)
        } else if (!/^[a-zA-Z\s]+$/.test(input)) {
            return error_message_handler(error_messages.name);
        } else {
            return success_message_handler('Name');
        }
    },
    /**
     * Experience validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "experience": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty)
        } else {
            return success_message_handler('Name');
        }
    },
    /**
     * Email validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "email": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input)) {
            return error_message_handler(error_messages.email);
        } else {
            return success_message_handler('Email');
        }
    },
    /**
     * State Validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "state": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (!/^[a-zA-Z\s]+$/.test(input)) {
            return error_message_handler(error_messages.state);
        } else {
            return success_message_handler('State');
        }
    },
    /**
     * City Validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "city": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (!/^[a-zA-Z\s]+$/.test(input)) {
            return error_message_handler(error_messages.city);
        } else {
            return success_message_handler('City');
        }
    },
    /**
     * Phone number validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "phone_number": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (input !== 'NAN' && !/^\d{10}$/.test(input)) {
            return error_message_handler(error_messages.phone);
        } else {
            return success_message_handler('Phone Number');
        }
    },
    /**
     * Mobile number validation
     * @param {*} input 
     * @returns  {boolean, error_messages}
     */
    "mobile_number": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (input !== 'NAN' && !/^\d{10}$/.test(input)) {
            return error_message_handler(error_messages.mobile);
        } else {
            return success_message_handler('Phone Number');
        }
    },

    /**
     * Postcode validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "usi_number": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (!/^[a-zA-Z0-9]{10}$/.test(input)) {
            return error_message_handler(error_messages.usi);
        } else {
            return success_message_handler('usi');
        }

    },





    /**
     * Postcode validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "post_code": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (input !== 'NAN' && !/^\d{4}$/.test(input)) {
            return error_message_handler(error_messages.postcode);
        } else {
            return success_message_handler('Post Code');
        }
    },
    /**
     * Year validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "year": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else {
            return success_message_handler('year');
        }
    },
    /**
     * ABN number validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "ndis_number": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (input !== 'NAN' && !/^\d{11}$/.test(input)) {
            return error_message_handler(error_messages.ndis_number);
        } else {
            return success_message_handler('ABN Number');
        }
    },
    /**
     * File upload validation
     * Note : The validation will work only single file upload not multiple
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "file_upload": (input, value) => {
        if (checkempty(value)) {
            return error_message_handler(error_messages.empty);
        } else {
            //allowed file type configuration
            const allowedExtensions = ['.ipdf', '.txt', '.doc', '.docx', '.avif', '.webp', '.png', '.pdf', '.svg', '.jpg', '.jpeg'];
            //get the file from uploaded file
            const file = input[0].files;

            if (file) {
                //get the file extension from uploaded file
                const fileExtension = '.' + file[0].name.split('.').pop().toLowerCase();
                //get the file size from uploaded file
                const fileSize = file[0].size;
                if (file.length === 0) {
                    return error_message_handler(error_messages.empty);
                } else if (file.length === 3) {
                    return error_message_handler(error_messages.file_upload_length);
                } else if (!allowedExtensions.includes(fileExtension)) {
                    return error_message_handler(error_messages.file_upload_type);
                } else if (fileSize > 5242880) {
                    return error_message_handler(error_messages.file_upload_limit);
                } else {
                    return success_message_handler('File Upload');
                }
            } else {
                return error_message_handler(error_messages.empty);
            }

        }
    },
    /**
     * Not empty validation
     * Note : Required field validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "not_empty": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else {
            return success_message_handler('Valid');
        }
    },
    /**
     * Age validation
     * Note : Age is under 14
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "age": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (Number(input) < 14) {
            return error_message_handler('You must be 14 years or older to apply for this course');
        } else {
            return success_message_handler('Valid');
        }
    },
    /**
     * Birthdate Validtion
     * Note : Birthdate field validation
     * @param {*} input 
     * @returns {boolean, error_messages}
     */
    "birthdate": (input) => {
        if (checkempty(input)) {
            return error_message_handler(error_messages.empty);
        } else if (!isValidDate(input)) {
            return error_message_handler('Invalid date format');
        } else if (!isAcceptableAge(input)) {
            return error_message_handler('You must be 14 years or older to apply for this course');
        } else {
            return success_message_handler('Birthdate');
        }
    }
};

/**
 * Check the value is empty
 * @param {*} input 
 * @returns {boolean}
 */
const checkempty = (input) => {
    if (input === '' || input === undefined) {
        return true;
    } else {
        return false;
    }
}
const isValidDate = (dateString) => {
    const regEx = /^\d{2}\/\d{2}\/\d{4}$/; // Updated regex for MM/DD/YYYY format
    if (!dateString.match(regEx)) return false;

    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`); // Create date using YYYY-MM-DD format
    const timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) return false;

    return dateString === `${day}/${month}/${year}`;
}

/**
 * Checks if the birthdate is within an acceptable age range
 * @param {*} dateString 
 * @returns {boolean}
 */
const isAcceptableAge = (dateString) => {
    const birthDate = dateString.split('/');
    const today = new Date();
    let age = today.getFullYear() - birthDate[2];
    return age >= 14 && age <= 120;
}



const error_message_handler = (err_message) => {
    return { "status": false, "message": err_message }
}

const success_message_handler = (vaidation_type) => {
    return { "status": true, "message": vaidation_type + ' validation success' }
}