class HomeRenovation {
  budget;

  constructor(budget) {
    this.budget = budget;
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask(description, cost, priority) {
    if (this.budget < cost) {
      return `Not enough budget to add '${description}' task.`;
    }

    const newTask = {
      description,
      cost,
      priority
    };

    this.budget -= newTask.cost;

    this.tasks.push(newTask);

    return `The task '${description}' has been successfully added to the renovation plan.`;
  }

  markTaskAsCompleted(description) {
    if (!this.tasks.some(t => t.description === description)) {
      throw new Error(`Task '${description}' not found in the renovation plan.`);
    }

    this.tasks.forEach(t => {
      if (t.description === description) {
        this.completedTasks.push(t);
      }
    });

    const newTasks = this.tasks.filter(t => t.description !== description);
    this.tasks = newTasks;

    return `The task '${description}' has been successfully completed.`;
  }

  getPriorityTasksCount(minimalPriority) {
    if (minimalPriority <= 0) {
      return 'The priority cannot be zero or negative.';
    }

    let tasksCount = 0;

    for (const curTask of this.tasks) {
      if (curTask.priority >= minimalPriority) {
        tasksCount++;
      } else {
        return `No tasks found with priority ${minimalPriority} or higher.`;
      }
    }

    return `You have ${tasksCount} tasks to prioritize.`;
  }

  renovationSummary() {
    if (this.completedTasks.length === 0) {
      throw new Error('No tasks have been completed yet!');
    }

    const result = [];

    result.push(`Budget left $${this.budget}.`);
    result.push(`You have completed ${this.completedTasks.length} tasks.`);
    result.push('Pending tasks in the renovation plan:');

    this.tasks.forEach(t => result.push(`${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`));

    return result.join('\n');
  }
}

const renovation = new HomeRenovation(10000);

console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());