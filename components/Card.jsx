"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation'
export default function Card({ item }) {
    const router = useRouter();

    async function delTodo(id) {
        const res = await fetch(`api/todos/${id}`, {
            method: 'DELETE',
        })

        const data = res.json()
        console.log(data);

        router.refresh()
    }


    return (
        <div className="p-4 bg-gray-300 space-y-2 relative">
            <button className="absolute right-4" onClick={() => delTodo(item.id)}>X</button>
            <div className="text-2xl">{item.todo}</div>
            <div>{item.date}</div>
            <div>{item.time}</div>
            <div className="pt-4">
                <Link className="border-gray-700 border-[1px] px-4 py-2 hover:bg-gray-400" href={`/todo/${item.id}`}>Details</Link>
            </div>
        </div>
    )
}