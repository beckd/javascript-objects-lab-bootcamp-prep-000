var recipes = {
  sandwichA: 'ham',
  sandwichB: 'turkey',
  sandwichC: 'tuna'
};
// Updating an Object (non-destructively)
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}
// Deleting an Object (non-destructively)
function deleteFromObjectByKey(object, key, value) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}
