const fs = require("node:fs/promises");
const path = require("path");
const crypto = require("crypto");
const contactsPath = path.join(__dirname, "./db/contacts.json");

//helper
const readContact = async () => {
  const result = await fs.readFile(contactsPath, {
    encoding: "utf-8",
  });
  return JSON.parse(result);
};
//helper
const writeContact = (contacts) => {
  return fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const contacts = await readContact();
  console.log("list of ContactsPhone: ");
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await readContact();
  const contact = contacts.find((contact) => contact.id === contactId);

  return contact || null;
};

async function removeContact(contactId) {
  const contacts = await readContact();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null; // если не нашлось контакта то findIndex вернет -1
  }
  const newContacts = [
    ...contacts.slice(0, index),
    ...contacts.slice(index + 1),
  ];
  await writeContact(newContacts);
  return contacts[index];
}

const addContact = async (name, email, phone) => {
  const contacts = await readContact();
  const newAddContact = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
  };
  contacts.push(newAddContact);
  await writeContact(contacts);

  console.log("You added contact: ");
  return newAddContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
