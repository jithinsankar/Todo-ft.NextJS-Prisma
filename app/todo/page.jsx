import Card from "../../components/Card";
import prisma from "../../lib/prisma"


export default async function TodoLists() {
    async function getTodoLists() {
        const data = await prisma.todo.findMany({
            select: {
                id: true,
                todo: true,
                date: true,
            }
        })
        console.count("ran")
        return data;
    }
    const todoLists = await getTodoLists();
    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">

            {todoLists.map(item => {
                return (
                    <Card key={item.id} item={item} />
                )
            })}
        </div>
    )
}