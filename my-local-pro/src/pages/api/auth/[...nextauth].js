import NextAuth from "next-auth";
// import prisma from "@/lib/prisma";
import { db } from "@/lib/prisma/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    pages: {
        signIn: "/"
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        },
        async jwt({ token, user }) {
            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email,
                }
            })

            if (!dbUser) {
                token.id = user.id
                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.picture,
            }
        },
        redirect() {
            return '/'
        }
    }
}

export default NextAuth(authOptions);

// export default async function auth(req, res) {
//     return await NextAuth(req, res, {
//         providers: [
//             GoogleProvider({
//                 clientId: process.env.GOOGLE_CLIENT_ID,
//                 clientSecret: process.env.GOOGLE_CLIENT_SECRET
//             })
//         ],

//         pages: {
//             signIn: "/"
//         },
//         adapter: PrismaAdapter(prisma),
//         session: {
//             strategy: 'jwt'
//         },
//         callbacks: {
//             async session({ token, session }) {
//                 if (token) {
//                     session.user.id = token.id
//                     session.user.name = token.name
//                     session.user.email = token.email
//                     session.user.image = token.picture
//                 }
//                 return session
//             },
//             async jwt({ token, user }) {
//                 const dbUser = await prisma.user.findFirst({
//                     where: {
//                         email: token.email,
//                     }
//                 })

//                 if (!dbUser) {
//                     token.id = user.id
//                     return token
//                 }

//                 return {
//                     id: dbUser.id,
//                     name: dbUser.name,
//                     email: dbUser.email,
//                     picture: dbUser.picture,
//                 }
//             },
//             redirect() {
//                 return '/'
//             }
//         }
//     });
// }