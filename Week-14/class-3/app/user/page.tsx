import client from "@/db";


async function fetchData() {
    const user = await client.user.findFirst();

    return {
        email: user?.username,
        name: "Ishav"
    }
}

export default async function User() {
    const user = await fetchData();

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border rounded p-8">
                <div>
                    Name: {user.name}
                </div>
                
                {user.email}
            </div>
        </div>
    );
}