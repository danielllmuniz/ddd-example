"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const send_email_when_product_is_created_handler_1 = __importDefault(require("../product/handler/send-email-when-product-is-created.handler"));
const product_created_event_1 = __importDefault(require("../product/product-created.event"));
const event_dispatcher_1 = __importDefault(require("./event-dispatcher"));
describe("Domain events tests", () => {
    it("should registar an event handler", () => {
        const eventDispatcher = new event_dispatcher_1.default();
        const eventHandler = new send_email_when_product_is_created_handler_1.default();
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toHaveLength(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
    });
    it("should unregister an event handler", () => {
        const eventDispatcher = new event_dispatcher_1.default();
        const eventHandler = new send_email_when_product_is_created_handler_1.default();
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toHaveLength(1);
        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toHaveLength(0);
    });
    it("should unregister all event handlers", () => {
        const eventDispatcher = new event_dispatcher_1.default();
        const eventHandler = new send_email_when_product_is_created_handler_1.default();
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toHaveLength(1);
        eventDispatcher.unregisterAll();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBe(undefined);
    });
    it("should notify all event handlers", () => {
        const eventDispatcher = new event_dispatcher_1.default();
        const eventHandler = new send_email_when_product_is_created_handler_1.default();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
        const productCreatedEvent = new product_created_event_1.default({
            name: "Product 1",
            description: "Product 1 description",
            price: 10,
        });
        eventDispatcher.notify(productCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    });
});
