import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const createFoodItemTableSQL = "CREATE TABLE IF NOT EXISTS FoodItem(\
  itemId INTEGER PRIMARY KEY,\
  name TEXT NOT NULL,\
  quantity INTEGER CHECK(quantity >= 0),\
  expiration REAL);"

const createCategoryTableSQL = "CREATE TABLE IF NOT EXISTS Category(\
  name TEXT,\
  itemId INTEGER,\
  PRIMARY KEY (name, itemId),\
  FOREIGN KEY (itemId) REFERENCES FoodItem(itemId));"

const getInventorySQL = "SELECT * FROM FoodItem;";
const getItemSQL = "SELECT * FROM FoodItem WHERE name = ?;";
const getItemIdSQL = "SELECT itemId FROM FoodItem WHERE name = ?;";
const getItemCategoriesSQL = "SELECT name FROM Category WHERE itemId = ?;";
const getCategoriesSQL = "SELECT UNIQUE name FROM Category;";

const addItemSQL = "INSERT INTO FoodItem (name, icondId, quantity, expiration)\
  VALUES (?, ?, ?, ?);";
const addCategorySQL = "INSERT INTO Category (name) VALUES (?);";
const addCategoryItemSQL = "INSERT INTO Category (itemId, name)\
  VALUES (?, ?);";

const updateItemSQL = "UPDATE FoodItem\
  SET name = ?,\
      iconId = ?,\
      quantity = ?,\
      expiration = ?\
  WHERE itemId = ?;";

const deleteItemSQL = "DELETE FROM FoodItem WHERE itemId = ?;";
const deleteCategorySQL = "DELETE FROM Categories WHERE name = ?;";
const removeCategorySQL = "DELETE FROM Categories WHERE\
 itemId = ? AND name = ?;";

const dbName = "ashtest.db"

export default class Database {

  constructor() {
    this._dbName = dbName;
    let db;
    return new Promise((resolve) => {
      console.log("Plugin integrity check ...");
     /*SQLite.echoTest()
      .then(() => {
          console.log("Integrity check passed ...");*/
          console.log("Opening database ...");
          SQLite.openDatabase({name: dbName, createFromLocation : "./test.sqlite"})
            .then(DB => {
              db = DB;
              this._db = db;
              console.log("Database OPEN");
              db.transaction((tx) => {
                  tx.executeSql(createFoodItemTableSQL);
                  tx.executeSql(createCategoryTableSQL);
              }).then(() => {
                  console.log("Tables created successfully");
              }).catch(error => {
                  console.log(error);
              });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
      /*})
        .catch(error => {
          console.log("echoTest failed - plugin not functional");
        })*/
    });
    _closeDB();
  }

  // _openDB(dbName) {
  //   let db;
  //   return new Promise((resolve) => {
  //     SQLite.openDatabase({name: dbName})
  //       .then(DB => {
  //         db = DB;
  //         this._db = db;
  //         resolve(db);
  //       });
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   });
  // }

  _closeDB() {
    if (this._db) {
      console.log("Closing DB");
      this._db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  }

  getInventory() {
    var inventory = [];
    this._db = SQLite.openDatabase({name: this._dbName});
    this._db.transaction(tx => {
      tx.executeSql(getInventorySQL, [], (tx, results) => {
        for (let i = 0; i < results.rows.length; i++) {
          inventory.push(results.rows.item(i));
        }
      });
    });
    _closeDB()

    return inventory;
  }

  getItem(itemName) {
    var foodItem = null;

    this._db =SQLite.openDatabase({name: this._dbName});
    this._db.transaction(tx => {
      tx.executeSql(getItemSQL, [itemName], (tx, results) => {
        foodItem = results.rows.item(0);
      });
    });
    _closeDB();

    return foodItem;
  }

  getItemCategories(itemName) {
    var categories = [];
    var itemId = -1;

    this._db = SQLite.openDatabase({item: this._dbName});
    this._db.transaction(tx => {
      tx.executeSql(getItemIdSQL, [itemName], (tx, results) => {
        itemId = results.rows.item(0).itemId;
      });
    });

    if (itemId < 1) {
      return categories;
    }

    this._db.transaction(tx => {
      tx.executeSql(getItemCategoriesSQL, [itemId], (tx, results) => {
        for (let i = 0; i < results.length; i++) {
          categories.push(results.rows.item(i));
        }
      });
    });
    _closeDB();

    return categories;
  }

  getAllCategories() {
    var categories = [];

    this._db = SQLite.openDatabase({item: this._dbName});
    this._db.transaction(tx => {
      tx.executeSql(getCategoriesSQL, [], (tx, results) => {
        for (let i = 0; i < results.length; i++) {
          categories.push(results.rows.item(i));
        }
      });
    });
    _closeDB();

    return categories;

  }

  addItem(itemName, iconId, quantity, expiration) {

    this._db = SQLite.openDatabase({name: this._dbName});
    
    this._db.transaction(tx => {
      tx.executeSql(addCategoryItemSQL, [itemId, catName], (tx, results) => {
        rowsChanged = results.rowsAffected;
      });
    });
    _closeDB()
  }

  updateItem(itemName, newItemName, iconId, quantity, expiration) {
    var itemId = -1;
    var rowsChanged = 0;

    this._db = SQLite.openDatabase({name: this._dbName});

    this._db.transaction(tx => {
      tx.executeSql(getItemIdSQL, [itemName], (tx, results) => {
        // TODO: error checking
        itemId = results.rows.item(0).itemId;
      });
    });

    if (itemId < 1) {
      return rowsChanged;
    }

    this._db.transaction(tx => {
      tx.executeSql(updateItemSQL,
        [newItemName, iconId, quantity, expiration, itemId], (tx, results) => {
        rowsChanged = results.rowsAffected;
      });
    });
    _closeDB()

    return rowsChanged;
  }

  addItemCategory(itemName, catName) {
    rowsChanged = 0;
    itemId = -1;

    this._db = SQLite.openDatabase({name: this._dbName});

    this._db.transaction(tx => {
      tx.executeSql(getItemIdSQL, [itemName], (tx, results) => {
        // TODO: error checking
        itemId = results.rows.item(0).itemId;
      });
    });

    if (itemId < 1) {
      return rowsChanged;
    }

    this._db.transaction(tx => {
      tx.executeSql(addCategoryItemSQL, [itemId, catName], (tx, results) => {
        rowsChanged = results.rowsAffected;
      });
    });
    _closeDB()

    return rowsChanged;
  }

  removeCategory(itemName, catName) {
    rowsChanged = 0;
    itemId = -1;

    this._db = SQLite.openDatabase({name: this._dbName});

    this._db.transaction(tx => {
      tx.executeSql(getItemIdSQL, [itemName], (tx, results) => {
        // TODO: error checking
        itemId = results.rows.item(0).itemId;
      });
    });

    if (itemId < 1) {
      return rowsChanged;
    }

    this._db.transaction(tx => {
      tx.executeSql(removeCategorySQL, [itemId, catName], (tx, results) => {
        rowsChanged = results.rowsAffected;
      });
    });
    _closeDB()

    return rowsChanged;
  }

  addCategory(catName) {
    rowsChanged = 0;
    this._db = SQLite.openDatabase({name: this._dbName});

    this._db.transaction(tx => {
      tx.executeSql(addCategorySQL, [catName], (tx, results) => {
        rowsChanged = results.rowsAffected;
      });
    });
  }


}
