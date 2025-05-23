"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new order_1.default("", "1", []);
        }).toThrowError("Id is required");
    });
    it("should throw error when customer id is empty", () => {
        expect(() => {
            new order_1.default("1", "", []);
        }).toThrowError("Customer id is required");
    });
    it("should throw error when items are empty", () => {
        expect(() => {
            new order_1.default("1", "1", []);
        }).toThrowError("Items are required");
    });
    it("should calculate total", () => {
        const item = new order_item_1.default("1", "item 1", 100, "p1", 2);
        const item2 = new order_item_1.default("2", "item 2", 200, "p2", 2);
        const order = new order_1.default("1", "1", [
            item,
            item2
        ]);
        expect(order.total()).toBe(600);
    });
    it("should throw error if the item qtd is less or equal 0", () => {
        expect(() => {
            const item = new order_item_1.default("1", "item 1", 100, "p1", 0);
            const order = new order_1.default("1", "1", [item]);
        }).toThrowError("Quantity is required");
    });
});
