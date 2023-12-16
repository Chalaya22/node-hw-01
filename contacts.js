const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");
// TODO: задокументувати кожну функцію
// function listContacts() {
//   // ...твій код. Повертає масив контактів.
//    const contacts = await fs.readFile(contactsPath);
// }
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

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
module.exports = { listContacts, getContactById, removeContact, addContact };
