import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bookMap = new Map();

showMenu();

function showMenu() {
  console.log(`
1. Add Book
2. View Books
3. Exit
`);

  rl.question("Choose an option: ", (opt) => {
    option(Number(opt));
  });
}

function option(opt) {
  switch (opt) {

    case 1:
      rl.question("Enter Book Title: ", (title) => {
        rl.question("Enter Author: ", (author) => {
          rl.question("Enter Genre: ", (genre) => {

            if (title !== "") {
              const bookId = bookMap.size + 1;
              bookMap.set(bookId, { title, author, genre });

              console.log(
                `Book added: [${bookId}] ${title} | ${author} | ${genre}`
              );
            } else {
              console.log("Title cannot be empty");
            }

            showMenu();
          });
        });
      });
      break;

    case 2:
      if (bookMap.size > 0) {
        console.log("\nBooks List:");
        for (const [bookId, book] of bookMap) {
          console.log(
            `[${bookId}] ${book.title} | ${book.author} | ${book.genre}`
          );
        }
      } else {
        console.log("No books added");
      }
      showMenu();
      break;

    case 3:
      console.log("Exiting...");
      rl.close();
      break;

    default:
      console.log("Invalid option");
      showMenu();
  }
}
