const Contacts = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await Contacts.listContacts().catch((error) => {
        console.log(error);
      });
      return console.table(contactList);

    case "get":
      const contactById = await Contacts.getContactById(id).catch((error) => {
        console.log(error);
      });
      return console.table(contactById);

    case "add":
      const addContactById = await Contacts.addContact(
        name,
        email,
        phone
      ).catch((error) => {
        console.log(error);
      });
      return console.table(addContactById);

    case "remove":
      const removedById = await Contacts.removeContact(id).catch((error) => {
        console.log(error);
      });
      return console.table(removedById);

    default:
  }
}

invokeAction(argv);
