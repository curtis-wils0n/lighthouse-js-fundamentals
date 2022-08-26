const judgeVegetable = function(vegetables, metric) {
  let score = 0;
  let winner = "";
  for (let item of vegetables) {
    if (item[metric] > score) {
      score = item[metric];
      winner = item.submitter;
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
