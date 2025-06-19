const Ajv = require("ajv");
const schema = require("../schemas/schema.json");

const addFormats = require("ajv-formats"); 

const ajv = new Ajv({ allErrors: false });
addFormats(ajv); // Add formats like 'email', 'uri', etc.

const validateSchema = (schemaName) => {
    return (req, res, next) => {
        const validate = ajv.compile(schema[schemaName]);
        const valid = validate(req.body);

        if (!valid) {
            const err = validate.errors[0];

            let errorMessage;

            if (err.keyword === "required") {
                errorMessage = `${err.params.missingProperty} is missing!`;
            }  else if (err.keyword === "format") {
                errorMessage = `${err.instancePath} must be a valid ${err.params.format}.`;
            }else {
                errorMessage = err.message;
            }

            return res.status(400).json({ error: errorMessage });
        }

        next();
    };
};

module.exports = validateSchema;
