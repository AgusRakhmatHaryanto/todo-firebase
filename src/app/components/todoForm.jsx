"use client";
import React from "react";

export default function TodoForm({
  handleSubmit,
  title,
  setTitle,
  detail,
  setDetail,
  dueDate,
  setDueDate,
  isEditing,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg border border-purple-200"
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        {isEditing ? "Edit Todo" : "Add New Todo"}
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-purple-600">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-purple-600">
          Detail
        </label>
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          rows={3}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-semibold text-purple-600">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow hover:opacity-90 font-semibold transition-all duration-200"
      >
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}
