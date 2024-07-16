import NextAuth, { DefaultSession } from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    export interface Session {
        user: {
            userId?: string;
            role?: string;
            backendToken?: string;
        } & DefaultSession["user"];
    }
    export interface User {
        userId?: string;
        userName?: string;
        userImage: string;
        role?: string;
        backendToken?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userId?: string;
        role?: string;
        backendToken?: string;
    }
}