const asyncHandler = require("express-async-handler");
//to get all contact
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
//to get single contact
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});
//to create a new contact
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Contact created" });
});
//to update a existing contact
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated contact for ${req.params.id}` });
});
//to delete contact
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send({ message: `Deleted contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
