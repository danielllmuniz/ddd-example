import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for customer", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "John Doe",
        address: {
          street: "Street 1",
          number: 1,
          zip: "12345",
          city: "City",
        },
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("John Doe");
    expect(response.body.address.street).toBe("Street 1");
    expect(response.body.address.number).toBe(1);
    expect(response.body.address.zip).toBe("12345");
    expect(response.body.address.city).toBe("City");
    expect(response.body.id).toBeDefined();
  })

  it("should not create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "John Doe",
      });
    expect(response.status).toBe(500);
  })

  it("should list a customer", async () => {
    const customerResponse = await request(app)
      .post("/customer")
      .send({
        name: "Jane",
        address: {
          street: "Street 2",
          zip: "12345",
          number: 1234,
          city: "City",
        },
      });

    const response = await request(app)
      .get("/customer")
      .send();

    expect(response.status).toBe(200);
    expect(response.body.customers.length).toBe(1);
    expect(response.body.customers[0].name).toBe("Jane");
    expect(response.body.customers[0].address.street).toBe("Street 2");
    expect(response.body.customers[0].address.number).toBe(1234);
    expect(response.body.customers[0].address.zip).toBe("12345");
    expect(response.body.customers[0].address.city).toBe("City");
  })
})