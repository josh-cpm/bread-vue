export class RecipeMethod {
  constructor(steps, startTime) {
    this.steps = steps;
    this.startTime = startTime;
    this.addTimeToSteps();
    this.addKey();
  }

  addStep() {
    'New Step', 30, 'What should the baker do next?';
    const newStep = {
      title: 'New Step',
      duration: 0,
      instructions: 'Tap to edit description. ',
      randomKey: Math.random(),
    };
    this.steps.push(newStep);
  }

  deleteStep(index) {
    this.steps.splice(index, 1);
  }

  moveStep(index, direction) {
    if (direction === 'up') {
      const temp = this.steps[index - 1];
      this.steps[index - 1] = this.steps[index];
      this.steps[index] = temp;
    } else if (direction === 'down') {
      const temp = this.steps[index + 1];
      this.steps[index + 1] = this.steps[index];
      this.steps[index] = temp;
    }
  }

  editStepTime(index, time) {
    //changes the duration of the prior step
    this.steps[index - 1].duration = Math.round(
      (new Date(time) - new Date(this.steps[index - 1].time)) / (1000 * 60)
    );
    this.steps[index].time = new Date(time);
    this.addTimeToSteps();
  }

  // use duration to add a time prop on all steps
  addTimeToSteps() {
    this.steps.forEach((el, ind) => {
      const start = new Date(this.startTime);
      const totalMin = this.sumPriorSteps(ind, this.steps);
      const time = this.addMinutes(start, totalMin);
      el.time = time;
    });
  }

  // change a dateTime by passing in minutes
  addMinutes(startTime, additionalMin) {
    const time = startTime.setHours(
      startTime.getHours(),
      startTime.getMinutes() + additionalMin
    );
    return time;
  }

  sumPriorSteps(index, array) {
    // sum the duration props steps that came before
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += array[i].duration;
    }
    return sum;
  }

  addKey() {
    this.steps.forEach((el) => (el.randomKey = Math.random()));
  }

  // changeStartTime(newTime, index) {}
}
