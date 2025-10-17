//Storing tasks as objects inside an array for structured data management.
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

//While loop to keep adding up to three new tasks to the existing task list.
while (initialTasks.length < 6) {
  addTasks();
}

//If statement to alert users when they reach the task limit with a message.
if (initialTasks.length === 6) {
  alert("There are enough tasks on your board, please check them in the console.")
}

//Function to prompt the users to enter task details and store them in an object.
//Followed by a while loop to validate the task status input and an alent if the status entered is incorrect.
function addTasks () {
  const taskTitle = prompt("Enter the task title");
  const taskDescription = prompt("Enter the task description");
  let taskStatus = prompt("Enter the task status (todo, doing, done)").toLowerCase();

  while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing' or 'done'")
    taskStatus = prompt("Enter the task status (todo, doing, done)").toLowerCase();
  }
//Ensuring each new task has a unique incremental ID and adds the new task to the back of the existing task list.
  const newTask = {
    id: initialTasks.length + 1,
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  };
  
  initialTasks.push(newTask);
}

//Implementing a filter function to display only tasks with the status "done".
const getCompletedTasks = () => 
  initialTasks.filter((task) => task.status === "done");


//Logging all tasks in the console with a clear label.
console.log("All Tasks:", initialTasks);

//Logging only completed tasks (status: "done") in the console under a "Completed Tasks" label.
console.log("Completed Tasks:", getCompletedTasks());