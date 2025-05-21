import React from "react";

export default function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <div className="p-4 bg-white/90 rounded-lg shadow border border-purple-100">
      <h3 className="text-lg font-bold text-purple-700">{todo.title}</h3>
      <p className="text-sm text-gray-700">{todo.detail}</p>
      {todo.dueDate && (
        <p className="text-xs text-gray-500 mt-1">📅 Due: {todo.dueDate}</p>
      )}
      <div className="mt-3 flex gap-4">
        <button
          onClick={() => onEdit(todo)}
          className="text-blue-600 hover:underline font-medium"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-600 hover:underline font-medium"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
