/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

// const store = {
//   name: "Gamestoria",
//   boardGames: ["Terra Mystica", "Alhambra", "Scythe", "Carcassonne", "Azul"],
//   address: {
//     street: "42-11 Broadway",
//     city: "Astoria",
//     state: "NY",
//     zip: "11103",
//   },
// };

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
  stores.splice(index, 1)
  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {

  store = {
      name: "Gamestoria",
      boardGames: ["Terra Mystica", "Alhambra", "Scythe", "Carcassonne", "Azul"],
      address: {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      }
};
// store.address = {
//   street: "42-11 Broadway",
//   city: "Astoria",
//   state: "NY",
//   zip: "11103",
// }
// // store.boardGames.push('new')
// store.boardGames.splice(4, 1);
//  store.boardGames.push("Splendor")
// store.boardGames.concat(["Splendor", "7 Wonders", "Concept"]);
  // store.boardGames = new Array("Azul", "Splendor", "7 Wonders", "Concept")
// store.boardGames = ["Azul", "Splendor", "7 Wonders", "Concept"]
// console.log(store)
return store

}



module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
