const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const argv = require("yargs").argv;
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await listContacts().catch((error) => {
        console.log(error);
      });
      return console.table(contactList);

    case "get":
      const contactById = await getContactById(id).catch((error) => {
        console.log(error);
      });
      return console.table(contactById);

    case "add":
      const addContactById = await addContact(name, email, phone).catch(
        (error) => {
          console.log(error);
        }
      );
      return console.table(addContactById);

    case "remove":
      const removedById = await removeContact(id).catch((error) => {
        console.log(error);
      });
      return console.table(removedById);

    default:
  }
}

invokeAction(argv);
