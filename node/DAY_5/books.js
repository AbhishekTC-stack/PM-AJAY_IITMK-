import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const taskMap = new Map();

showMenu();

function showMenu() {
  console.log(`
1. Add Book
2. Remove Book
3. Search Book
4. View Books
5. Update Books
6. Exit
  `);

  rl.question("Choose an option: ", option);
}

function option(opt) {
  switch (opt) {

    
    case "1":
      rl.question("Enter Book ID: ", (bookIdInput) => {
      rl.question("Enter Title: ", (title) => {
        rl.question("Enter Author: ", (author) => {
          rl.question("Enter Genre: ", (genre) => {

              if (title && author && genre) {
                const bookId = Number(bookIdInput);

                taskMap.set(bookId, {
                  title,
                  author,
                  genre
                });

                console.log(`Book added: [${bookId}] ${title} by ${author}`);
              } else {
                console.log("Please enter valid book details");
              }

              showMenu();
            });
          });
        });
      });
      break;

    
    case "2":
      rl.question("Enter the Book ID to delete: ", (bookId) => {
        const id = Number(bookId);

        if (taskMap.has(id)) {
          taskMap.delete(id);
          console.log(`Book [${id}] deleted`);
        } else {
          console.log("Book not found");
        }
        showMenu();
      });
      break;

case "3":
  rl.question("Search by (id / title / author / genre): ", (type) => {
    rl.question("Enter search value: ", (value) => {

      let found = false;

      for (const [id, book] of taskMap) {
        if (
          (type=="id" && id==Number(value)) ||
          (type=="title" && book.title==value) ||
          (type=="author" && book.author==value) ||
          (type=="genre" && book.genre==value)
        ) {
          console.log(
            `[${id}] Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`
          );
          found = true;
        }
      }
      if (!found) {
        console.log("No matching books found");
      }

      showMenu();
    });
  });
  break;



    
    case "4":
      if (taskMap.size > 0) {
        console.log("Books are:");
        for (const [id, book] of taskMap) {
          console.log(
            `[${id}] Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`
          );
        }
      } else {
        console.log("No books added");
      }
      showMenu();
      break;


      
      
      case "5":
  rl.question("Enter the Book ID to update: ", (bookId) => {
    

    if (!taskMap.has(id)) {
      console.log("Invalid Book ID");
      showMenu();
      return;
    }

    
    rl.question(`Enter new Title (${book.title}): `, (title) => {
      rl.question(`Enter new Author (${book.author}): `, (author) => {
        rl.question(`Enter new Genre (${book.genre}): `, (genre) => {

          taskMap.set(id, { title,author,genre });

          console.log(`Book [${id}] updated successfully`);
          showMenu();
        });
      });
    });
  });
  break;


    
    case "6":
      console.log("Exiting book manager");
      rl.close();
      break;

    default:
      console.log("Invalid option");
      showMenu();
  }
}





