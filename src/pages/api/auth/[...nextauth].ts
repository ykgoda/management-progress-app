import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                userId: {label: "ログインID", type: "text"},
                password: {label: "パスワード", type: "password"},
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const user = {
                    id: "1",
                    userId: 'aiueo',
                    userName: 'aiueo',
                    password: '12345',
                    userImage: '',
                    // name: "user1",
                    // email: "user1@example.com",
                    // role: "user",
                    // backendToken: "backendToken",
                };

                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,  
    // pages: {
    //     signIn: "/login",
    // },
    callbacks: {
        jwt({token, user}) {
            if (user) {
                token.userId = user.userId;
                token.userName = user.userName;
                token.role = user.role;
                token.backendToken = user.backendToken;
            }
            return token;
        },
        session({session, token}) {
            session.user.userId = token.userId;
            session.user.userName = token.userName;
            session.user.role = token.role;
            session.user.backendToken = token.backendToken;
            return session;
        },
    }
})