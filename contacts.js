const { error } = require("console");
const { readFile, writeFile } = require("fs");
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

  return contact || null;
};

async function removeContact(contactId) {
  const result = await fs.readFile(contactsPath, {
    encoding: "utf-8",
  });
  const contacts = JSON.parse(result);
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const newContacts = [
    ...contacts.slice(0, index),
    ...contacts.slice(index + 1),
  ];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return contacts[index];
}

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
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  console.log("You added contact: ");
  return newAddContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
