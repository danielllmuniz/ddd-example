import Order from "./order";
import OrderItem from "./order_item";

describe("order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "1", []);
    }).toThrowError("Id is required");
  })

  it("should throw error when customer id is empty", () => {
    expect(() => {
      new Order("1", "", []);
    }).toThrowError("Customer id is required");
  })

  it("should throw error when items are empty", () => {
    expect(() => {
      new Order("1", "1", []);
    }).toThrowError("Items are required");
  })

  it("should calculate total", () => {

    const item = new OrderItem("1", "item 1", 100, "p1", 2);
    const item2 = new OrderItem("2", "item 2", 200, "p2", 2);
    const order = new Order("1", "1", [
      item,
      item2
    ]);
    expect(order.total()).toBe(600);
  })

  it("should throw error if the item qtd is less or equal 0", () => {
    expect(() => {
      const item = new OrderItem("1", "item 1", 100, "p1", 0);
      const order = new Order("1", "1", [item]);
    }).toThrowError("Quantity is required");
  })
})