import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user Home"));
userRouter.get("/edit", (req, res) => res.send("user Edit"));
userRouter.get("/password", (req, res) => res.send("user Password"));

/*
    M data
    V how does the data look
    C function that looks for the data
*/