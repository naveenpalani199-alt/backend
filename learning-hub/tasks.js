// Add future days here. Keep each href relative to this hub folder.
const taskDays = [
  {
    day: 1,
    tasks: Array.from({ length: 10 }, (_, index) => ({
      label: `Task ${index + 1}`,
      href: `../JS/Day1/Task${index + 1}.html`
    }))
  },
  {
    day: 3,
    tasks: Array.from({ length: 15 }, (_, index) => ({
      label: `Task ${index + 1}`,
      href: `../JS/Day3/Task${index + 1}.html`
    }))
  }
];

const container = document.querySelector('#days-container');
const count = document.querySelector('#task-count');
const totalTasks = taskDays.reduce((sum, day) => sum + day.tasks.length, 0);
count.textContent = `${totalTasks} tasks`;

for (const day of taskDays) {
  const section = document.createElement('section');
  section.className = 'day-card';
  section.setAttribute('aria-labelledby', `day-${day.day}-title`);

  const heading = document.createElement('div');
  heading.className = 'day-heading';

  const title = document.createElement('h3');
  title.id = `day-${day.day}-title`;
  title.textContent = `Day ${day.day}`;

  const dayTotal = document.createElement('span');
  dayTotal.className = 'day-total';
  dayTotal.textContent = `${day.tasks.length} tasks`;
  heading.append(title, dayTotal);

  const list = document.createElement('div');
  list.className = 'task-list';
  list.setAttribute('aria-label', `Day ${day.day} tasks`);

  for (const task of day.tasks) {
    const link = document.createElement('a');
    link.className = 'task-link';
    link.href = task.href;
    link.textContent = task.label;
    list.append(link);
  }

  section.append(heading, list);
  container.append(section);
}