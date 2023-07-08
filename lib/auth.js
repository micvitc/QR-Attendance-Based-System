import { getServerSession } from "next-auth";
import { db } from "./db";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // adapter: PrismaAdapter(db), // Pass Prisma adapter to NextAuth
    session: {      // Configure session options
        strategy: "jwt",
    },
    pages: {        // Configure URLs
        signIn: "/login",
    },
    providers: [    // Configure authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            domain: 'vitstudent.ac.in',
            // authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&access_type=offline&response_type=code&hd=vitstudent.ac.in',
            params: { hd: 'vitstudent.ac.in' }
        })
    ],
    callbacks: {   // Configure callbacks
        async signIn({user, account, profile}) {
            if (profile.hd === 'vitstudent.ac.in') {

              return true;
            } else {
              return false;
            }
          },
        async session({token, session}) {   // Add user id to session
            if(token){
                session.user.id = token.id
                session.user.email = token.email
                session.user.name = token.name
            }
            return session
        },

        // async jwt({token, user}) {             // Add user id to token
        //     const dbUser = await db.ClubMember.findFirst({
        //         where: {
        //             email: token.email
        //         }
        //     })
        //     if(!dbUser){
        //         token.id = user.id
        //         return token;
        //     }

        //     return {
        //         id: dbUser.id,
        //         email: dbUser.email,
        //     }
        // },
        redirect(){
            return "/"
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: false,

};

// Export hook to use session data in components
export const getAuthSession =() => getServerSession(authOptions)