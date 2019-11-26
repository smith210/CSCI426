export class FoodItem {

    constructor(name) {
      this._name = name;
      this._quantity = 0;
      this._expiration = null;
      this._icon = "";
    }
  
    set name(name) {
      this._name = name;
    }
  
    set quantity(x) {
      this._quantity = x;
    }
  
    set expiration(date) {
      this._expiration = new Date(date);
    }
  
    set icon(filename) {
      this._icon = filename;
    }
  
    get name() {
      return this._name;
    }
  
    get quantity() {
      return this._quantity;
    }
  
    get expiration() {
      return this._expiration;
    }
  
    get icon() {
      return this._icon;
    }
  
    get health() {
      if (this._expiration) {
        currentDate = new Date();
        difMs = this._expiration.getTime() - currentDate.getTime();
        difDays = difMs / (1000 * 3600 * 24); // convert ms to days
        health = difDays; // TODO: wtf is health gonna be
        return health;
      }
      return null;
    }
  }
  