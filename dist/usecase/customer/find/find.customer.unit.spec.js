"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../../../domain/customer/entity/customer"));
const address_1 = __importDefault(require("../../../domain/customer/entity/address"));
const find_customer_usecase_1 = __importDefault(require("./find.customer.usecase"));
const customer = new customer_1.default("123", "John");
const address = new address_1.default("Street", 123, "zip", "city");
customer.changeAddress(address);
const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(customer)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    };
};
describe("Test find customer use case", () => {
    it("should find a customer", () => __awaiter(void 0, void 0, void 0, function* () {
        const customerRepository = MockRepository();
        const usecase = new find_customer_usecase_1.default(customerRepository);
        const input = {
            id: "123",
        };
        const output = {
            id: "123",
            name: "John",
            address: {
                street: "Street",
                city: "city",
                number: 123,
                zip: "zip",
            },
        };
        const result = yield usecase.execute(input);
        expect(result).toEqual(output);
    }));
    it("should not find a customer", () => __awaiter(void 0, void 0, void 0, function* () {
        const customerRepository = MockRepository();
        customerRepository.find.mockImplementation(() => {
            throw new Error("Customer not found");
        });
        const usecase = new find_customer_usecase_1.default(customerRepository);
        const input = {
            id: "123",
        };
        expect(() => {
            return usecase.execute(input);
        }).rejects.toThrow("Customer not found");
    }));
});
