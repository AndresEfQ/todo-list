export default function addTask(taskArgs) {
  const {
    project, title, description, dueDate,
  } = taskArgs;
  const projectName = project.name;
  const isCompleted = false;

  const task = {
    title,
    description,
    dueDate,
    isCompleted,
    projectName,
  };

  project.tasks.push(task);
}
