import { Request, Response } from "express";
import { onError, onLost } from "../../src/plugins/error-handler";

describe("onError", () => {
  test("invoke res.error(500, err)", () => {
    let request: Partial<Request> = {};
    let response: Partial<Response> = { error: jest.fn() };
    let error = new Error("Communism has risen!");

    onError(error, request as Request, response as Response, function() { });

    expect(response.error).toHaveBeenCalledWith(500, error);
  });
});

describe("onLost", () => {
  test("invoke res.error(500, err)", () => {
    let request: Partial<Request> = {
      method: "POST",
      url: "/sometimes-things-get-complicated",
    };
    let response: Partial<Response> = {
      fail: jest.fn(),
    };

    onLost(request as Request, response as Response, function() { });

    expect(response.fail).toHaveBeenCalledWith(404, {
      method: request.method,
      url: request.url
    });
  });
});
