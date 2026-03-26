import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bookMap = new Map();

showMenu();

function showMenu() {
  console.log(`
BOOK INVENTORY SYSTEM
1. Add Book
2. Remove Book
3. Search Book
4. Update Book
5. View All Books
6. Exit
`);
  rl.question("Enter your choice: ", handleOption);
}

function handleOption(choice) {
  switch (choice) {

    case '1':
      rl.question("Enter Book ID: ", (id) => {
        if (bookMap.has(id)) {
          console.log("Error: Book ID already exists");
          showMenu();
          return;
        }

        rl.question("Enter Title: ", (title) => {
          rl.question("Enter Author: ", (author) => {
            rl.question("Enter Genre: ", (genre) => {
              bookMap.set(id, { title, author, genre });
              console.log("Book added successfully");
              showMenu();
            });
          });
        });
      });
      break;

    case '2':
      rl.question("Enter Book ID to remove: ", (id) => {
        if (bookMap.has(id)) {
          bookMap.delete(id);
          console.log("Book removed successfully");
        } else {
          console.log("Error: Book not found");
        }
        showMenu();
      });
      break;

    case '3':
      rl.question("Search by (id/title/author/genre): ", (type) => {
        rl.question("Enter search value: ", (value) => {

          let found = false;

          bookMap.forEach((book, bookId) => {
            if (
              (type === 'id' && bookId === value) ||
              (type === 'title' && book.title === value) ||
              (type === 'author' && book.author === value) ||
              (type === 'genre' && book.genre === value)
            ) {
              console.log(`ID: ${bookId}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
              found = true;
            }
          });

          if (!found) {
            console.log("No matching books found");
          }

          showMenu();
        });
      });
      break;

    case '4':
      rl.question("Enter Book ID to update: ", (id) => {
        if (!bookMap.has(id)) {
          console.log("Error: Book not found");
          showMenu();
          return;
        }

        rl.question("Enter New Title: ", (title) => {
          rl.question("Enter New Author: ", (author) => {
            rl.question("Enter New Genre: ", (genre) => {

              bookMap.set(id, { title, author, genre });
              console.log("Book updated successfully");
              showMenu();
            });
          });
        });
      });
      break;

    case '5':
      if (bookMap.size === 0) {
        console.log("No books in inventory");
      } else {
        console.log("Book Inventory:");
        bookMap.forEach((book, id) => {
          console.log(`ID: ${id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
        });
      }
      showMenu();
      break;

    case '6':
      console.log("Exiting Book Inventory System");
      rl.close();
      break;

    default:
      console.log("Invalid choice");
      showMenu();
  }
}
