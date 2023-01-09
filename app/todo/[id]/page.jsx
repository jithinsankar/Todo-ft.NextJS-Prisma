import prisma from "../../../lib/prisma"


async function getTodo(id) {
    const data = await prisma.todo.findUnique({ where: { id: +id } })
    return data

}

export default async function todoElement({ params }) {
    const { id } = params
    const todoList = await getTodo(id);
    return (
        <div className="p-4 bg-gray-300 space-y-2 relative">
            {/* <button className="absolute right-4" onClick={() => delTodo(item.id)}>X</button> */}
            <div className="text-2xl">{todoList.todo}</div>
            <div>{todoList.date}</div>
            <div>{todoList.time}</div>
        </div>
    )
}