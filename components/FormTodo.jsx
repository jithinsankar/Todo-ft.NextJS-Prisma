'use client'
import Input from "./Input";
import { useRouter } from 'next/navigation'

export default function FormTodo() {
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData)
        const res = await fetch('api/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                todo: formData.get("todo"),
                date: formData.get("date"),
                time: formData.get("time"),
            })
        })

        const data = await res.json();

        router.refresh();
        e.target.reset();
        router.push('/todo')

    }
    return (
        <main className="p-4">
            <h1 className="text-center text-xl">Form ToDo</h1>
            <div className="grid grid-cols-1 place-items-center">
                <form className="bg-gray-200 p-4 w-[80vw] md:w-[40vw] space-y-4" action="POST" onSubmit={handleSubmit}>
                    <Input type="text" name="todo" placeholder="Add task here" />
                    <Input type="date" name="date" placeholder="" />
                    <Input type="time" name="time" placeholder="" />

                    <div className="pt-6">
                        <button className="border-[1px] border-gray-700 rounded-md px-4 py-2 hover:bg-gray-300" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </main>
    )
}