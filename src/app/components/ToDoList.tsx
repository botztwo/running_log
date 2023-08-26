"use client";
import {trpc} from "../_trpc/client"

export default function ToDoList(){
    const getTodos = trpc.getTodos.useQuery();

    return (
        <div>
            <div> Data: {JSON.stringify(getTodos.data)} </div>
        </div>
    );
}
