import { getServerSession } from "next-auth";
import { db } from "./db";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";

export const authOptions = {
    adapter: PrismaAdapter(db), // Pass Prisma adapter to NextAuth
    session: {      // Configure session options
        strategy: "jwt",
    },
    pages: {        // Configure URLs
        signIn: "/sign-in",
    },
    providers: [    // Configure authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {   // Configure callbacks
        async session({token, session}) {   // Add user id to session
            if(token){
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.username
            }
            return session
        },

        async jwt({token, user}) {             // Add user id to token
            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email
                }
            })
            if(!dbUser){
                token.id = user.id
                return token;
            }
            if(!dbUser.username){
                await db.user.update({
                    where: {
                        id: dbUser.id
                    },
                    data: {
                        username: nanoid(10)
                    }
                })

            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                username: dbUser.username
            }
        },
        redirect(){
            return "/"
        }
    }

};

// Export hook to use session data in components
export const getAuthSession =() => getServerSession(authOptions)