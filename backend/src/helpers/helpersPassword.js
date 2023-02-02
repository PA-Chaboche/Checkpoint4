const argon = require("argon2");

const hashPassword = async (password) => {
  const hashedPassword = await argon.hash(password);
  return hashedPassword;
};

const verifyPassword = async (password, hashePassword) => {
  const verifiedPassword = await argon.verify(hashePassword, password);
  return verifiedPassword;
};

module.exports = {
  hashPassword,
  verifyPassword,
};
