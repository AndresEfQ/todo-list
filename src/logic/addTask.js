export default function addTask(title, description, dueDate) {

  (function task(title, description, dueDate) {

    let isCompleted = false;
    
    return {
      title,
      description,
      dueDate,
      isCompleted,
    };

  }(title, description, dueDate, isCompleted))
}