const User = require('../models/user');

module.exports.register = (params) => {
  let user = new User({
    name: params.name,
    username: params.username,
    email: params.email,
    birthDate: params.birthDate,
    password: params.password
  });

  return user.save().then((user, err) => {
    return (err) ? false : true;
  });
};

module.exports.get = (params) => {
  return User.findById(params.userId).then(user => {
    user.password = undefined;
    return user;
  });
};
