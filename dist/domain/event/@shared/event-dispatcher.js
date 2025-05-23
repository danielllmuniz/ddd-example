"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventDispatcher {
    constructor() {
        this.eventHandlers = {};
    }
    get getEventHandlers() {
        return this.eventHandlers;
    }
    notify(event) {
        const eventName = event.constructor.name;
        if (this.eventHandlers[eventName]) {
            this.eventHandlers[eventName].forEach((eventHandler) => {
                eventHandler.handle(event);
            });
        }
    }
    register(eventName, eventHandler) {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(eventHandler);
    }
    unregister(eventName, eventHandler) {
        if (!this.eventHandlers[eventName]) {
            throw new Error(`Event ${eventName} not registered`);
        }
        const index = this.eventHandlers[eventName].indexOf(eventHandler);
        if (index === -1) {
            throw new Error(`Event handler not registered for event ${eventName}`);
        }
        this.eventHandlers[eventName].splice(index, 1);
    }
    unregisterAll() {
        this.eventHandlers = {};
    }
}
exports.default = EventDispatcher;
