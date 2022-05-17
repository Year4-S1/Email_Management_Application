const mongoose = require("mongoose");

const EmailPrefSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  preference: {
    type: String,
    required: true,
  },
  prefList: [
    {
      itemId: String,
    },
  ],
});

const EmailPref = mongoose.model("emailPref", EmailPrefSchema);
module.exports = EmailPref;
