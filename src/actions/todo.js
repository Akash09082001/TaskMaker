"use server"

import { revalidateTag } from "next/cache"

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000"
const apiUrl = baseUrl + "/api/todos"

export const getTodos = async () => {
	try {
		const res = await fetch(apiUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: { tags: ["todos"] },
		})
		if (!res.ok) throw new Error(res)
		const data = await res.json()
		return {
			ok: res.ok,
			todos: data.todos ?? [],
		}
	} catch (error) {
		console.error("Failed to Fetch Todos:", error)
		throw new Error("Failed to Fetch Todos")
	}
}

export const addTodo = async ({ title, description }) => {
	try {
		const res = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title, description }),
		})
		if (!res.ok) throw new Error(res)
		revalidateTag("todos")
		return await res.json()
	} catch (error) {
		console.error("Failed to Add Todo:", error)
		throw new Error("Failed to Add Todo")
	}
}

export const getTodoById = async id => {
	try {
		const res = await fetch(apiUrl + `?id=${id}`)

		if (!res.ok) throw new Error(res)

		return await res.json()
	} catch (error) {
		console.error("Failed to Fetch Todo:", error)
		throw new Error("Failed to Fetch Todo")
	}
}

export const updateTodoById = async ({ _id, title, description }) => {
	try {
		const res = await fetch(apiUrl + `?id=${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title, description }),
		})

		if (!res.ok) throw new Error(res)
		revalidateTag("todos")

		const responseData = await res.json()
		return responseData
	} catch (error) {
		console.error("Failed to Edit Todo:", error)
		throw new Error("Failed to Edit Todo")
	}
}

export const removeTodo = async id => {
	try {
		const res = await fetch(apiUrl + `?id=${id}`, {
			method: "DELETE",
		})

		if (!res.ok) throw new Error(res)
		revalidateTag("todos")

		return { success: true, message: "Todo removed successfully" }
	} catch (error) {
		console.error("Failed to Remove Todo:", error)
		throw new Error("Failed to Remove Todos")
	}
}
