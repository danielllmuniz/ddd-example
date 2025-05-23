import Address from "../entity/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit tests", () => {
  it("should create a customer", () => {
    const customer = CustomerFactory.create("Customer 1");
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Customer 1");
    expect(customer.address).toBeUndefined();
    expect(customer.rewardPoints).toBe(0);
  })

  it("should create a customer with address", () => {
    const address = new Address(
      "Street 1",
      1,
      "Zipcode 1",
      "City 1",
    )
    const customer = CustomerFactory.createWithAddress("John Doe", address);
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John Doe");
    expect(customer.address).toBe(address);
  })
})