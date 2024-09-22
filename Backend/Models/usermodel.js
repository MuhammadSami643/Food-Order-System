const { default: mongoose } = require("mongoose");
const userSchema = require("../Schema/userSchema");

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = userModel;
