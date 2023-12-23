const Contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

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
      console.log("Unknown action:(')");
  }
}

invokeAction(argv);
