import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    
    jwt: true,

    providers: [
        Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
            username:{
                type: 'string',
                required: true
            },
            email: {
                type:"email"
            },
            password: {
                type:"password",
                required: true
            },
        },
        authorize: async (credentials) => {
            console.log(credentials)
            return credentials
        },
    }),],
})