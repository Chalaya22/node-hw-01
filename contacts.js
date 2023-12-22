const { error } = require("console");
const { readFile } = require("fs");
const fs = require("node:fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  const result = await fs.readFile(contactsPath, {
    encoding: "utf-8",
  });
  const contacts = JSON.parse(result);
  console.log("list of ContactsPhone: ");
  return contacts;
};

const getContactById = async (contactId) => {
  const result = await fs.readFile(contactsPath, {
    encoding: "utf-8",
  });
  const contacts = JSON.parse(result);
  const contact = contacts.find((contact) => contact.id === contactId);

  if (contact == null) {
    console.log(
      `Contact by ID "${contactId}" not found in the contact of phone!`
    );
  } else {
    console.log("Contact by ID found in the contact of phone: ");
    return contact;
  }
};

const removeContact = async (contactId) => {
  const result = await fs.readFile(contactsPath, { encoding: "utf-8" });
  const contacts = JSON.parse(result);
  const newContact = contacts.filter((contact) => contact.id === contactId);

  if (newContact.length === contacts.length) {
    console.log(`Phone book contact by ID "${contactId}" not found!`);
  } else {
    console.log(
      `Contact  ${contactId} was removed .Object of delated contact :`
    );
    return newContact;
  }
};

const addContact = async (name, email, phone) => {
  const result = await fs.readFile(contactsPath, { encoding: "utf-8" });
  const contacts = JSON.parse(result);
  const newAddContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newAddContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, undefined, 2));

  console.log("You added contact: ");
  return newAddContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
