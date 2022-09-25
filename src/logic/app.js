import addProject from "./addProject.js";

const task = (title, description, dueDate, priority) => {
  return {
    title, description, dueDate, priority
  }
}

let task1 = task("Investigar TODO", "Una task con una descripción muy larga que no quepa en la vista general del proyecto para saber como se debería comportar y de esta forma copiar el comportamiento en mi propia aplicación de TODO para el proyecto Odin", new Date(2022, 9, 24), "Normal");

let task2 = task("Investigar TODO", "Una task con una descripción muy larga que no quepa en la vista general del proyecto para saber como se debería comportar y de esta forma copiar el comportamiento en mi propia aplicación de TODO para el proyecto Odin", new Date(2022, 9, 24), "Normal");

let sampleProject = project("Sample Project", [sampleTask1, sampleTask2]);

let projects = [sampleProject];

export default function 