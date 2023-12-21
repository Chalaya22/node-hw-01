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
  console.table(contacts);
};
listContacts().catch((error) => {
  console.log(error);
});

const getContactById = async (contactId) => {
  const result = await fs.readFile(contactsPath, { encoding: "utf-8" });
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
getContactById("05olLMgyVQdWRwgKfg5J6").catch((error) => {
  console.log(error);
});

const removeContact = async (contactId) => {
  const result = await fs.readFile(contactsPath, { encoding: "utf-8" });
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
removeContact("qdggE76Jtbfd9eWJHrssH").catch((error) => {
  console.log(error);
});

const addContact = async (name, email, phone) => {
  const result = await fs.readFile(contactsPath, { encoding: "utf-8" });
  const contacts = JSON.parse(result);
  contacts.push({
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  });

  console.log("You added contact! New lists of contacts: ");
  console.table(contacts);
};
addContact(
  (name = "Mango"),
  (email = "mango@gmail.com"),
  (phone = "(748) 322 22 22")
).catch((error) => {
  console.log(error);
});
