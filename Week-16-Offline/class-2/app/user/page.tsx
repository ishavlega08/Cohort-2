import { AppBar } from "@/components/AppBar";
import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async  function User() {
    const session = await getServerSession(NEXT_AUTH);

    return <div>
        <AppBar />
        User Component
        {JSON.stringify(session)}
    </div>
}