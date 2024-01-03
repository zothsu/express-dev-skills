const skills = [
  {id: 125223, skill: 'JavaScipt', done: true},
  {id: 127904, skill: 'linux', done: true},
  {id: 139608, skill: 'Express', done: false}
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}