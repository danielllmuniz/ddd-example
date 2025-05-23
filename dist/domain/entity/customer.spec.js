"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const customer_1 = __importDefault(require("./customer"));
describe("customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new customer_1.default("", "John Doe");
        }).toThrowError("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            new customer_1.default("1", "");
        }).toThrowError("Name is required");
    });
    it("should change name", () => {
        const customer = new customer_1.default("1", "John Doe");
        customer.changeName("Jane Doe");
        expect(customer.name).toBe("Jane Doe");
    });
    it("should activate customer", () => {
        const customer = new customer_1.default("1", "John Doe");
        const address = new address_1.default("Street 1", 1, "Zipcode", "City");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should throw error when address is undefined", () => {
        expect(() => {
            const customer = new customer_1.default("1", "John Doe");
            customer.activate();
        }).toThrowError("Address is required to activate a customer");
    });
    it("should deactivate customer", () => {
        const customer = new customer_1.default("1", "John Doe");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });
    it("should add reward points", () => {
        const customer = new customer_1.default("1", "John Doe");
        expect(customer.rewardPoints).toBe(0);
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });
});
