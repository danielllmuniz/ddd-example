"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId, items) {
        this._total = 0;
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    get id() {
        return this._id;
    }
    get customerId() {
        return this._customerId;
    }
    get items() {
        return this._items;
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("Customer id is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items are required");
        }
        if (this._items.some((item) => item.quantity <= 0)) {
            throw new Error("Quantity is required");
        }
        return true;
    }
    total() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
}
exports.default = Order;
