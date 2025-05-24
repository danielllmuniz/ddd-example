"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("../entity/address"));
const customer_factory_1 = __importDefault(require("./customer.factory"));
describe("Customer factory unit tests", () => {
    it("should create a customer", () => {
        const customer = customer_factory_1.default.create("Customer 1");
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer 1");
        expect(customer.address).toBeUndefined();
        expect(customer.rewardPoints).toBe(0);
    });
    it("should create a customer with address", () => {
        const address = new address_1.default("Street 1", 1, "Zipcode 1", "City 1");
        const customer = customer_factory_1.default.createWithAddress("John Doe", address);
        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John Doe");
        expect(customer.address).toBe(address);
    });
});
