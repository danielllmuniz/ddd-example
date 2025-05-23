"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./entity/address"));
const customer_1 = __importDefault(require("./entity/customer"));
const order_1 = __importDefault(require("./entity/order"));
const order_item_1 = __importDefault(require("./entity/order_item"));
let customer = new customer_1.default("1", "John Doe");
const address = new address_1.default("Street 1", 123, "12345-678", "City");
customer.Address = address;
customer.activate();
const item1 = new order_item_1.default("1", "Item 1", 100, "p1", 2);
const item2 = new order_item_1.default("2", "Item 2", 200, "p2", 2);
const order = new order_1.default("1", customer.id, [item1, item2]);
