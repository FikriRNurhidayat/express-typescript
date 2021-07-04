import request from "supertest";
import server from "../src/server";

describe("Server", () => {
  test("startable", async () => {
    const response = await request(server).get('/')
    expect(response.statusCode).toEqual(200);
  });
});
