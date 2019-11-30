CREATE TABLE IF NOT EXISTS FoodItem(
  itemId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  iconId TEXT,
  quantity INTEGER CHECK(quantity >= 0),
  expiration REAL);

  CREATE TABLE IF NOT EXISTS Category(
    name TEXT,
    itemId INTEGER,
    PRIMARY KEY (name, itemId),
    FOREIGN KEY (itemId) REFERENCES FoodItem(itemId));

INSERT INTO FoodItem(name, iconId, quantity, expiration)
  VALUES ("apple", "apple.png", 5, julianday("2019-12-1"));

INSERT INTO FoodItem(name, iconId)
  VALUES ("pizza", "pizza.png");

INSERT INTO FoodItem(name, iconId, quantity, expiration)
  VALUES ("eggs", "eggs.png", 12, julianday("2019-12-20"));

INSERT INTO Category (name, itemId)
    VALUES ("Produce", 1);

INSERT INTO Category (name, itemId)
    VALUES ("Leftovers", 2);

INSERT INTO Category (name, itemId)
    VALUES ("Perishable", 3);

INSERT INTO Category (name, itemId)
    VALUES ("Perishable", 1);

INSERT INTO Category (name)
    VALUES ("Dairy");
