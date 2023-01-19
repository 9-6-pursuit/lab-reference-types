/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store)
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {

    if (index > 0){
      stores.splice(index, 1);
    }
    else if (index === stores.length){
      stores.pop();
    }
    else if(index === 0){
      stores.shift();
    }

    return stores

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {


  let arr = [];
  for (let i=0; i<store.boardGames.length; i++){
    arr.push(store.boardGames[i])
  }  

  
  let obj = Object.assign({}, store.address);

  const dupstore1 = {};

  dupstore1.name = store.name;
  dupstore1.boardGames= arr;
  dupstore1.address = obj;


  return dupstore1
  
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
