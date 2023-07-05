"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "components/Signin/UserCard.js"

export default function Signin() {
    const { data: session } = useSession();
    console.log(session);
    if(session) {
        return (
            <>
                <button onClick={() => signOut()} type="button" className="btn btn-primary ">Sign Out of Google</button>
                <UserCard user={session?.user}/>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => signIn()} type="button" className="btn btn-primary ">Sign In with Google</button>
            </>
        )
    }

}