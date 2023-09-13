const User = require("../models/user");
const auth = require("../auth");
const bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(10);

module.exports = {
  register: async (params) => {
    let hash = bcrypt.hashSync(params.password, salt);
    let user = new User({
      name: params.name,
      birthDate: params.birthDate,
      email: params.email,
      password: hash,
    });
    const result = await user.save();
    return result;
  },

  get: async (params) => {
    const user = await User.findById(params.userId);
    user.password = undefined;
    return user;
  },

  login: async (params) => {
    const user = await User.findOne({ email: params.email });
    if (user === null) return false;
    const isPasswordMatched = bcrypt.compareSync(
      params.password,
      user.password
    );
    if (isPasswordMatched) {
      return { accessToken: auth.createAccessToken(user.toObject()) };
    } else {
      return false;
    }
  },
};
