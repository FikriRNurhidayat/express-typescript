import { Response } from "express";
import { Status } from "../../src/types";
import { error, fail, ok } from "../../src/plugins/response-builder";

describe("ok", () => {
  test("called with two arguments should contain status and data object", () => {
    let response: Partial<Response> = {};

    response.json = jest.fn().mockReturnValue(response);
    response.status = jest.fn().mockReturnValue(response);
    response.ok = ok;

    response.ok(200, null);
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      status: Status.OK,
      data: null
    });
  });

  test("called with 3 arguments should contain meta object", () => {
    let response: Partial<Response> = {};

    response.json = jest.fn().mockReturnValue(response);
    response.status = jest.fn().mockReturnValue(response);
    response.ok = ok;

    response.ok(200, { name: "Fikri" }, { page: 1, per: 10 });

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      status: Status.OK,
      data: { name: "Fikri" },
      meta: {
        page: 1,
        per: 10
      }
    });
  })
});

describe("fail", () => {
  test("called with two arguments should contain status and data object", () => {
    let response: Partial<Response> = {};

    response.json = jest.fn().mockReturnValue(response);
    response.status = jest.fn().mockReturnValue(response);
    response.fail = fail;

    response.fail(404, { method: "POST", url: "/sometime-things-get-complicated" });
    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      status: Status.FAIL,
      data: {
        method: "POST",
        url: "/sometime-things-get-complicated"
      }
    });
  });
});

describe("error", () => {
  test("called with two arguments should contain status and data object", () => {
    let uncaughtError = new Error("You can't catch me!");
    let response: Partial<Response> = {};

    response.json = jest.fn().mockReturnValue(response);
    response.status = jest.fn().mockReturnValue(response);
    response.error = error;

    response.error(500, uncaughtError);
    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({
      status: Status.ERROR,
      data: {
        name: uncaughtError.name,
        message: uncaughtError.message,
        stack: uncaughtError.stack
      }
    });
  });
});
