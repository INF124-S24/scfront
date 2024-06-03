import { expressjwt } from "express-jwt";

export const requireSignIn = expressjwt({
    secret: process.env.JWT_SECRET,
})