"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (req, res) => {
    console.log(`---- HTTP Method: ${req.method}, URL: ${req.url}`);
    console.log(`host: ${req.headers.host}`);
    const parsedURL = new URL(req.url || '', `http://${req.headers.host}`);
    console.log(`protocol: ${parsedURL.protocol}`);
    console.log(`hostname: ${parsedURL.hostname}`);
    console.log(`port: ${parsedURL.port}`);
    console.log(`pathname: ${parsedURL.pathname}`);
    parsedURL.searchParams.forEach((value, name) => {
        console.log(`search param: ${name}=${value}`);
    });
    if (req.method !== "GET" || parsedURL.pathname == "/favicon.ico") {
        res.writeHead(404, "Not Found");
    }
    else {
        res.writeHead(200, "OK");
        if (!parsedURL.searchParams.has("keyword")) {
            res.write("Hello, HTTP");
        }
        else {
            res.write(`Hello, ${parsedURL.searchParams.get("keyword")}`);
        }
    }
    res.end();
};
exports.handler = handler;
