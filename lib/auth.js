import axios from "axios"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({

    jwt: true,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {
                    type: 'string',
                    required: true
                },
                email: {
                    type: "email"
                },
                password: {
                    type: "password",
                    required: true
                },
            },
            authorize: async (credentials) => {
                let userData=null;
                try {
                    let { data, status } = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/Login/Login', {
                        username: credentials.username,
                        password: credentials.password,
                        email: credentials.email
                    });
                    
                    userData=data
                } catch (error) {
                    console.log(error)
                }
                console.log(userData)
                return userData;
            },
        }),],
})