import { v4 as uuid } from "uuid";
import OrderFactory from "./order.factory";
describe("Order factory unit test", () => {
  it("should create an order", () => {
    const orderProps = {
      id: uuid(),
      customerId: uuid(),
      items: [
        {
          id: uuid(),
          name: "product 1",
          productId: uuid(),
          quantity: 2,
          price: 100,
        },
      ]
    }
    const order = OrderFactory.create(orderProps);

    expect(order.id).toBe(orderProps.id);
    expect(order.customerId).toBe(orderProps.customerId);
    expect(order.items).toHaveLength(1);
  })
})