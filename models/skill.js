const skills = [
  {id: 125223, skill: 'JavaScipt', done: true},
  {id: 127904, skill: 'HTML/CSS', done: true},
  {id: 139608, skill: 'Express', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills would be done :)
  skill.done = true;
  skills.push(skill);
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding an object within an array
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}