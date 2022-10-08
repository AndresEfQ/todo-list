export default function addTask(taskArgs) {

  const {project, title, description, dueDate} = taskArgs;
  let isCompleted = false;
  
  const task = {
    title,
    description,
    dueDate,
    isCompleted,
  };

  project.tasks.push(task);
  console.log(project.tasks);

  
}