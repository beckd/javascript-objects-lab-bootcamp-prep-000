var recipes = {
  sandwichA: 'ham',
  sandwichB: 'turkey',
  sandwichC: 'tuna'
};
// Updating an Object (non-destructively)
Object.assign({[sandwichD]: 'salami'}, recipes);
return recipes;
// Deleting an Object (non-destructively)
var newObj2 = Object.assign({}, recipes);
delete newObj2.sandwichB;
// Delete object by key (destructively)
delete recipes.sandwichA;
// updating and object with key and value (destructively)
recipes.sandwichE = 'roast beef';
console.log(recipes)
