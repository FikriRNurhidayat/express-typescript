"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../src/types");
var response_builder_1 = require("../../src/plugins/response-builder");
describe("ok", function () {
    test("called with two arguments should contain status and data object", function () {
        var response = {};
        response.json = jest.fn().mockReturnValue(response);
        response.status = jest.fn().mockReturnValue(response);
        response.ok = response_builder_1.ok;
        response.ok(200, null);
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({
            status: types_1.Status.OK,
            data: null
        });
    });
    test("called with 3 arguments should contain meta object", function () {
        var response = {};
        response.json = jest.fn().mockReturnValue(response);
        response.status = jest.fn().mockReturnValue(response);
        response.ok = response_builder_1.ok;
        response.ok(200, { name: "Fikri" }, { page: 1, per: 10 });
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({
            status: types_1.Status.OK,
            data: { name: "Fikri" },
            meta: {
                page: 1,
                per: 10
            }
        });
    });
});
describe("fail", function () {
    test("called with two arguments should contain status and data object", function () {
        var response = {};
        response.json = jest.fn().mockReturnValue(response);
        response.status = jest.fn().mockReturnValue(response);
        response.fail = response_builder_1.fail;
        response.fail(404, { method: "POST", url: "/sometime-things-get-complicated" });
        expect(response.status).toHaveBeenCalledWith(404);
        expect(response.json).toHaveBeenCalledWith({
            status: types_1.Status.FAIL,
            data: {
                method: "POST",
                url: "/sometime-things-get-complicated"
            }
        });
    });
});
describe("error", function () {
    test("called with two arguments should contain status and data object", function () {
        var uncaughtError = new Error("You can't catch me!");
        var response = {};
        response.json = jest.fn().mockReturnValue(response);
        response.status = jest.fn().mockReturnValue(response);
        response.error = response_builder_1.error;
        response.error(500, uncaughtError);
        expect(response.status).toHaveBeenCalledWith(500);
        expect(response.json).toHaveBeenCalledWith({
            status: types_1.Status.ERROR,
            data: {
                name: uncaughtError.name,
                message: uncaughtError.message,
                stack: uncaughtError.stack
            }
        });
    });
});
