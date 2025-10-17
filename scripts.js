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

// Store tasks as objects inside an array for structured data management.
// Allow users to add up to three new tasks to the existing task list.
// Ensure each new task has a unique incremental ID based on the last task in the array.
// Prompt users to enter task details (title, description, status) and store them in an object.
// Alert users when they reach the task limit with the message: "There are enough tasks on your board, please check them in the console." Implement a filter function to display only tasks with the status "done".
// Log all tasks in the console with a clear label for easy review.
// Log only completed tasks (status: "done") in the console under a "Completed Tasks" label for quick reference.