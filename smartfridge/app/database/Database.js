import * as SQLite from 'expo-sqlite';

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

const getInventorySQL = 'SELECT * FROM FoodItem';

const dbName = "test.db";

export default class Database {
    constructor(){
      let db;
      db = SQLite.openDatabase(dbName);
        console.log("opened db");
        db.transaction((tx) => {
            tx.executeSql(createFoodItemTableSQL);
            tx.executeSql(createCategoryTableSQL);
        });
    }

    

    getInventory() {
        console.log("getInventory got called");
        var inventory = [];
        this._db = SQLite.openDatabase(dbName);
        this._db.transaction(tx => {
          tx.executeSql(getInventorySQL, inventory, (tx,  results ) => {
            //console.log(results.rows.length);
            console.log(JSON.stringify(results));
            /*for (let i = 0; i < results.rows.length; i++) {
              console.log("executing sql");
              console.log(i);
              inventory.push(results.rows.item(i));
            }*/
          });
        },
        null,
        );
    
        return inventory;
      }
  
}


