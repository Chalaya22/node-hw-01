const argv = require("yargs").argv;
const contacts = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      contacts.getContactById(id);
      break;

    case "add":
      contacts.addContact();
      break;

    case "remove":
      contacts.removeContact(id);
      break;

    default:
  }
}

invokeAction(argv);
