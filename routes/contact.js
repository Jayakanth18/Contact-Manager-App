const router = require("express").Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

// router.route('/').get(getContacts).post(createContact)
// we can chain the methods in similiar routes like this to avoid repeated code.
//example: router.route("/").get(getContacts).post(createContact)

router.get("/", getContacts);

router.get("/:id", getContact);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

// example
// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
