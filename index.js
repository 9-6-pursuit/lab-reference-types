/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. 
 *                        See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store);
  return stores;

}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from 
 *                         the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {

  // console.log(stores[0]);
  // console.log(stores[1]);
  // console.log(stores[2]);
  
  // console.log(typeof index)
  // console.log(typeof stores)
  // console.log(index.length)
  stores.splice(index, 1)
  
  
  return stores
  // 1 1 0 2

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between 
 * the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. 
 *                        See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as 
 *                   the store that was inputted.
 */
function duplicateStore(store) {

    return JSON.parse(JSON.stringify(store));
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
