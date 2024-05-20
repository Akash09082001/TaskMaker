"use server"

import { connectToMongoDB } from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        await connectToMongoDB();
        await Todo.create({ title, description });

        return NextResponse.json({ message: "Todo is Created" }, { status: 201 });
    } catch (error) {
        console.error("Failed to add Todo:", error);
        return NextResponse.json({ message: "Failed to Create Todo", error: error.message }, { status: 500 });
    }
}

export async function GET(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
        try {
            await connectToMongoDB();
            const todo = await Todo.findById(id);

            if (!todo) {
                return NextResponse.json({ message: "Todo not found by ID" }, { status: 404 });
            }

            return NextResponse.json({ todo }, { status: 200 });
        } catch (error) {
            console.error("Failed to Fetch Todo by ID:", error);
            return NextResponse.json({ message: "Failed to Fetch Todo", error: error.message }, { status: 500 });
        }
    } else {
        try {
            await connectToMongoDB();
            const todos = await Todo.find();

            if (!todos || todos.length === 0) {
                return NextResponse.json({ message: "Todo List is Empty" }, { status: 200 });
            }

            return NextResponse.json({ todos }, { status: 200 });
        } catch (error) {
            console.error("Failed to Fetch Todos:", error);
            return NextResponse.json({ message: "Failed to Fetch Todos", error: error.message }, { status: 500 });
        }
    }
}

export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "ID is required" }, { status: 400 });
        }

        await connectToMongoDB();
        await Todo.findByIdAndDelete(id);

        return NextResponse.json({ message: "Todo is Deleted" }, { status: 200 });
    } catch (error) {
        console.error("Failed to Delete Todo by ID:", error);
        return NextResponse.json({ message: "Failed to Delete Todo", error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    try {
        const { title: newTitle, description: newDescription } = await request.json();

        await connectToMongoDB();
        const todo = await Todo.findByIdAndUpdate(id, { title: newTitle, description: newDescription }, { new: true });

        if (!todo) {
            return NextResponse.json({ message: "Todo not found by ID" }, { status: 404 });
        }

        console.log('Todo updated successfully:', todo);
        return NextResponse.json({ message: "Todo is Updated", todo }, { status: 200 });

    } catch (error) {
        console.error("Failed to Update Todo by ID:", error);
        return NextResponse.json({ message: "Failed to Update Todo", error: error.message }, { status: 500 });
    }
}
