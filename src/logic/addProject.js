import app from '../app';

export default function addProject(projectName) {
  function project(name) {
    const isSelected = true;
    const tasks = [];

    return {
      name,
      isSelected,
      tasks,
    };
  }

  app().addProject(project(projectName));
}
