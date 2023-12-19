const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  const result = await fs.readFile(contactsPath);
  const contacts = JSON.parse(result);
  console.log("list of ContactsPhone: ");
  console.table(contacts);
};
listContacts();

const getContactById = async (contactId) => {
  const result = await fs.readFile(contactsPath);
  const contacts = JSON.parse(result);
  const contact = contacts.find((contact) => contact.id === contactId);
  console.log(`Get contact of phone by ID ${contactId}:`);
  console.table(contact);

  if (contact == null) {
    console.log(
      `Contact by ID "${contactId}" not found in the contact of phone!`
    );
  }
};
getContactById("05olLMgyVQdWRwgKfg5J6");

const removeContact = async (contactId) => {
  const result = await fs.readFile(contactsPath);
  const contacts = JSON.parse(result);
  const newContact = contacts.filter((contact) => contact.id === contactId);
  console.log(
    `Contact  ${contactId} was removed .Object of delated contacts :`
  );
  console.table(newContact);
  if (newContact.length === contacts.length) {
    console.log(`Phone book contact by ID "${contactId}" not found!`);
  }
};
removeContact("qdggE76Jtbfd9eWJHrssH");
