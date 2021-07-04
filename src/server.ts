import express, { Application } from "express";
import configure from "./config/server";

const server: Application = express();

export default configure(server);
