"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_handler_1 = require("../../src/plugins/error-handler");
describe("onError", function () {
    test("invoke res.error(500, err)", function () {
        var request = {};
        var response = { error: jest.fn() };
        var error = new Error("Communism has risen!");
        error_handler_1.onError(error, request, response, function () { });
        expect(response.error).toHaveBeenCalledWith(500, error);
    });
});
describe("onLost", function () {
    test("invoke res.error(500, err)", function () {
        var request = {
            method: "POST",
            url: "/sometimes-things-get-complicated",
        };
        var response = {
            fail: jest.fn(),
        };
        error_handler_1.onLost(request, response, function () { });
        expect(response.fail).toHaveBeenCalledWith(404, {
            method: request.method,
            url: request.url
        });
    });
});
