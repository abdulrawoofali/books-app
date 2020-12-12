const express = require("express");
const router = express.Router();

const Role = require("../models/role");

/**
 * @method - Post
 * @param - /role
 * @description - adding Role for site Maintenance
 *
 */

router.post("/newRole", (req, res) => {
  new Role(req.body)
    .save()
    .then((role) => res.send(role))
    .catch((err) =>
      res
        .status(rr.code === 11000 ? 422 : 400)
        .send({ msg: err.code === 11000 ? "Role already exist!" : err })
    );
});

router.delete("/role/:id", (req, res) => {
  Role.findByIdAndDelete(req.params.id)
    .then((role) => res.send(role))
    .catch((err) => res.status.send({ msg: err.code }));
});


router.put("/role/:id", (req, res) => {
  Role.findByIdAndUpdate({ id: req.params.id }, req.body)
    .then((role) => res.send(role))
    .catch((err) =>
      res
        .status(rr.code === 11000 ? 422 : 400)
        .send({ msg: err.code === 11000 ? "Role already exist!" : err })
    );
});

/**
 * @method - get
 * @param - /roles
 * @description - gives all roles
 *
 */

router.get("/roles", (req, res) => {
  Role.find()
    .then((roles) => {
      res.send(roles);
    })
    .catch((err) => res.status(400).send(err.messages));
});

/**
 * @method - get
 * @param - /role/:id
 * @description - gives all role by id
 *
 */

router.get("/role/:id", (req, res) => {
  Role.findById(req.params.id)
    .then((role) => {
      res.send(role);
    })
    .catch((err) => res.status(400).send(err.messages));
});

module.exports = router;
