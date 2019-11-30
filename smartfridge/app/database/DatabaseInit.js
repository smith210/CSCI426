import SQLite from "react-native-sqlite-storage";

const createFoodItemTableSQL = "CREATE TABLE IF NOT EXISTS FoodItem(\
  itemId INTEGER PRIMARY KEY,\
  name TEXT NOT NULL,\
  iconId INTEGER,\
  quantity INTEGER CHECK(quantity >= 0),\
  expiration REAL);"

const createCategoryTableSQL = "CREATE TABLE IF NOT EXISTS Category(\
  name TEXT,\
  itemId INTEGER,\
  PRIMARY KEY (name, itemId),\
  FOREIGN KEY (itemId) REFERENCES FoodItem(itemId));"


export class DatabaseInit {

}
