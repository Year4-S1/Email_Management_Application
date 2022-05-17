const EmailPref = require("../models/email_model");
const enums = require("../enums/controllers_enums");
const LOG = require("../../controller_log");

const createEmailPref = async (req, res) => {
  if (req.body) {
    const emailPref = new EmailPref(req.body);
    await emailPref
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
        LOG.info(enums.emailPref.CREATE_SUCCESS);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
        LOG.info(enums.emailPref.CREATE_ERROR);
      });
  }
};

const viewEmailPrefByCustomerId = async (req, res) => {
  await EmailPref.find({ customerId: req.params.id })
    .then((data) => {
      res.status(200).send({ data: data });
      LOG.info(enums.emailPref.VIEW_SUCCESS);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
      LOG.info(enums.emailPref.VIEW_UNSUCCESS);
    });
};

const viewEmailPrefById = async (req, res) => {
  if (req.params && req.params.id) {
    await EmailPref.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
        LOG.info(enums.emailPref.VIEW_SUCCESS);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
        LOG.info(enums.emailPref.VIEW_UNSUCCESS);
      });
  }
};

const updateEmailPref = async (req, res) => {
  if (!req.is("application/json")) {
    res.send(400);
  } else {
    await EmailPref.findByIdAndUpdate(
      req.params.id,
      { preference: req.body.preference, prefList: req.body.prefList },
      { new: true },
      function (err, result) {
        if (err) {
          res.status(500).send(body);
          LOG.info(enums.emailPref.UPDATED_ERROR);
        } else {
          res.status(200).send(result);
          LOG.info(enums.emailPref.UPDATED_SUCCESS);
        }
      }
    );
  }
};

const deleteEmailPref = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  await EmailPref.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).send(response);
      LOG.info(enums.emailPref.DELETE_SUCCESS);
    })
    .catch((err) => {
      res.status(500).send(err.message);
      LOG.info(enums.emailPref.DELETE_ERROR);
    });
};

module.exports = {
  createEmailPref,
  viewEmailPrefByCustomerId,
  viewEmailPrefById,
  updateEmailPref,
  deleteEmailPref,
};
