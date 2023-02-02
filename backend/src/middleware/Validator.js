const Validators = require("./validator/index");

const Validator = (validator) => {
  const validatorJOI = async (req, res, next) => {
    try {
      const validated = await Validators[validator].validateAsync(req.body);
      req.body = validated;
      return next();
    } catch (err) {
      if (err.isJoi) {
        return res.status(422).send({ message: err.message });
      }
      return res.sendStatus(500);
    }
  };
  return validatorJOI;
};

module.exports = Validator;
