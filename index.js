var recipes = {
  sandwichA: 'ham',
  sandwichB: 'turkey',
  sandwichC: 'tuna'
};
// Updating an Object (non-destructively)
function updateObjectWithKeyAndValue(recipes, newSandwich) {
  var newSandwich = Object.assign( {[sandwichD]: 'salami'}, recipes);
  return newSandwich;
}
// Deleting an Object (non-destructively)
function deleteFromObjectByKey(recipes, sandwichB, newSandwich1) {
  var newSandwich1 = Object.assign({}, recipes);
  delete newSandwich1[sandwichB];
  return newSandwich1;
}
// Delete object by key (destructively)
delete recipes.sandwichA;
// updating and object with key and value (destructively)
recipes.sandwichE = 'roast beef';
console.log(recipes)
