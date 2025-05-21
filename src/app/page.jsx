"use client";

import React, { useState, useEffect } from "react";
import TodoForm from "@/app/components/todoForm";
import TodoList from "@/app/components/todoList";
import {
  addTodo,
  fetchTodos,
  deleteTodo,
  updateTodo,
} from "@/app/lib/service/totoService";

export default function Home() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing && selectedTodo) {
      await updateTodo(selectedTodo.id, title, detail, dueDate);
      setIsEditing(false);
      setSelectedTodo(null);
    } else {
      await addTodo(title, detail, dueDate);
    }
    setTitle("");
    setDetail("");
    setDueDate("");
    await loadTodos();
  };

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setTitle(todo.title);
    setDetail(todo.detail || "");
    setDueDate(todo.dueDate || "");
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    await loadTodos();
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 font-sans flex flex-col items-center gap-10">
      <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow-sm">
        📝 To Do App
      </h1>
      <TodoForm
        title={title}
        setTitle={setTitle}
        detail={detail}
        setDetail={setDetail}
        dueDate={dueDate}
        setDueDate={setDueDate}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
}
