function solveCurTask(obj) {
  if (!obj.dizziness) {
    return obj;
  }

  obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
  obj.dizziness = false;

  return obj;
}

console.log(solveCurTask({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true
}));