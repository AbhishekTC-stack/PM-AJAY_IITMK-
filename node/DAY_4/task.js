import read from "readline";

const rl = read.createInterface({
  input: process.stdin,
  output: process.stdout
});

const taskMap = new Map();

showMenu();

function showMenu() {
  console.log(`
1. Add Task
2. View Task
3. Delete Task
4. Update Task
5. Exit
`);

  rl.question("Choose an option: ", (opt) => {
    option(Number(opt));
  });
}

function option(opt) {
  switch (opt) {

    case 1:
      rl.question("Add Task: ", (task) => {
        if (task !== '') {
          const taskId = taskMap.size + 1;
          taskMap.set(taskId, task);
          console.log(`Task added : [${taskId}] ${task}`);
        } else {
          console.log("Add a valid task");
        }
        showMenu();
      });
      break;

    case 2:
      if (taskMap.size > 0) {
        console.log("Tasks:");
        for (const [taskId, task] of taskMap) {
          console.log(`[${taskId}] ${task}`);
        }
      } else {
        console.log("No tasks added");
      }
       showMenu();
      break;


   case 3:
  rl.question('Enter the Task ID to delete: ', (taskId) => {
    taskId = Number(taskId);

    if (taskMap.has(taskId)) {
      taskMap.delete(taskId);
      console.log(`Task [${taskId}] deleted successfully`);
    } else {
      console.log("Invalid Task ID");
    }

    showMenu();
  });
  break;

         break;

         case 4:
            rl.question('Enetr the task to update :',(NewtaskId)=>{
                 
            })


      case 5:console.log('task manager is exiting..')
      rl.close;
      break;

      showMenu();
      
   

    default:
      console.log("Invalid option");
      showMenu();
  }
}
