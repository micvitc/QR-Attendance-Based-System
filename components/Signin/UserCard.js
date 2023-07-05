import { DefaultSession } from "next-auth";
export default function UserCard( { user }) {
    
    return (
        <div >
            <div >
                <p>Current Logged In User</p>
                <h5 >{user?.name}</h5>
                <p >{user?.email}</p>
            </div>
        </div>
    )
}