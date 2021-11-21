const userModel = require("../database").userModel;
const dataModel = require("../database").database;


const getUserByEmailIdAndPassword = async(email, password) => {
    let user = userModel.findOne(email);
    return user;
};
const getUserById = async(id) => {
    let user = userModel.findById(id);
    return user;
};

function isUserValid(user, password) {
    return user.password === password;
}


module.exports = {
    getUserByEmailIdAndPassword,
    getUserById,
};