const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const service = require("../services/email_service");

module.exports = function () {
  router.post("/create", service.createEmailPref);
  router.get("/view/customer/:id", service.viewEmailPrefByCustomerId);
  router.get("/view/:id", service.viewEmailPrefById);
  router.put("/update/:id", service.updateEmailPref);
  router.delete("/delete/:id", service.deleteEmailPref);

  return router;
};
