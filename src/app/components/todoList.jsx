import React from "react";
import TodoItem from "./todoItem";

export default function TodoList({ todos, onEdit, onDelete }) {
  return (
    <div className="w-full max-w-md space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-600 text-sm">
          No tasks yet. Add one above! 🎯
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
