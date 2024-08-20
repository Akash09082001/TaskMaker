"use server"

import { revalidateTag } from "next/cache";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3002"
const apiUrl = baseUrl + "/api/todos";

console.log(apiUrl);

export const getTodos = async () => {
    try {
        console.log(apiUrl);
        const res = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: { tags: ['todos'] },
            cache: "no-store"
        });
        console.log(res.ok, res.status);
        if (!res.ok) {
            throw new Error(res);
        }
        const data = await res.json();
        return {
            ok: res.ok,
            todos: data.todos,
        };
    } catch (error) {
        console.error("Failed to Fetch Todos:", error);
        throw new Error('Failed to Fetch Todos');
    }
};

export const addTodo = async (title, description) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store",
            body: JSON.stringify({ title, description }),
        });
        if (!res.ok) {
            throw new Error("Internal Server Error")
        }
        revalidateTag('todos');
        const responseData = await res.json();
        return responseData;
    } catch (error) {
        console.error("Failed to Add Todo:", error);
        throw new Error('Failed to Add Todo');
    }
}

export const getTodoById = async (id) => {

    try {
        const res = await fetch(apiUrl + `?id=${id}`, { cache: "no-store" })

        if (!res.ok) {
            throw new Error('Failed to Fetch Todo By id');
        }

        return await res.json();

    } catch (error) {
        console.error("Failed to Fetch Todo:", error);
        throw new Error('Failed to Fetch Todo');
    }
}

export const updateTodoById = async (id, newTitle, newDescription) => {
    try {
        const res = await fetch(apiUrl + `?id=${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store",
            body: JSON.stringify({ title: newTitle, description: newDescription })
        });

        console.log('API update response:', res);

        if (!res.ok) {
            throw new Error('Failed to Edit Todo By id');
        }
        revalidateTag('todos');

        const responseData = await res.json();
        return responseData;

    } catch (error) {
        console.error("Failed to Edit Todo:", error);
        throw new Error('Failed to Edit Todo');
    }
};

export const removeTodo = async (id) => {

    try {
        const res = await fetch(apiUrl + `?id=${id}`, { method: "DELETE", cache: "no-store" })

        if (!res.ok) {
            throw new Error('Internal Server Error');
        }
        revalidateTag('todos');

        return { success: true, message: 'Todo removed successfully' };

    } catch (error) {
        console.error("Failed to Remove Todo:", error);
        throw new Error('Failed to Remove Todos');
    }
}