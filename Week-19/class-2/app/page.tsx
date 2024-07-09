import Image from "next/image";
import revalidate from "./todos/action/actions1";

export default async function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos", {
    next: {
      tags: ["todos"]
    }
  });
  const data = await response.json();
  revalidate()

  return (
    <div>
      {data.todos.map((todo: any) => <div key={todo.id}>
        {todo.title}
        {todo.description}
      </div>)}
    </div>
  );
}
