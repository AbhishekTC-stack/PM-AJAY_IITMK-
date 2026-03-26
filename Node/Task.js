import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const taskMap = new Map()

showMenu()

function showMenu() {
    console.log(`
1. Add Task
2. View Task
3. Delete Task
4. Exit

`)
    rl.question("Enter the option: ", option)
}

function option(opt) {
    switch (opt) {

        case '1':
            rl.question("Enter the task: ", (task) => {
                if (task !== '') {
                    const taskid = taskMap.size + 1
                    taskMap.set(taskid, task)
                    console.log(`Task Added: ${taskid} ${task}`)
                                    } else {
                    console.log("Add a valid task")
                }
                showMenu()
            })
            break

        case '2':
            if (taskMap.size > 0) {
                console.log("Tasks Added are:")
                taskMap.forEach((task, taskid) => {
                    console.log(`${taskid} ${task}`)
                })
            } else {
                console.log("No Task Added")
            }
            showMenu()
            break

        case '3':rl.question("Enter the taskid : ",(taskid)=>{
                const id=Number(taskid)
                if(taskMap.has(id)){
                    taskMap.delete(id)

                }
                showMenu()
                
            })
             break                   

        case '4':
            console.log("Exiting...")
            rl.close()
            break
    }
}
