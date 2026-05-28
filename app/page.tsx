"use client";

import { useEffect, useState } from "react";

export default function DailyActivityApp() {
  const defaultTasks = [
    "Morning Routine",
    "Learning / Study",
    "Office / Work",
    "Exercise / Walk",
    "Personal Work",
    "Tomorrow Planning",
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [newTask, setNewTask] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [expense, setExpense] = useState({ type: "", amount: "", note: "" });

  const [review, setReview] = useState({ done: "", improve: "" });

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem("daily_app_v2");
    if (saved) {
      const data = JSON.parse(saved);
      setTasks(data.tasks || defaultTasks);
      setChecked(data.checked || []);
      setExpense(data.expense || expense);
      setReview(data.review || review);
      setTheme(data.theme || "light");
    }
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem(
      "daily_app_v2",
      JSON.stringify({ tasks, checked, expense, review, theme })
    );
  }, [tasks, checked, expense, review, theme]);

  const toggleTask = (i: number) => {
    const copy = [...checked];
    copy[i] = !copy[i];
    setChecked(copy);
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]);
    setChecked([...checked, false]);
    setNewTask("");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={
        "min-h-screen transition-all duration-500 p-6 " +
        (isDark ? "bg-black text-white" : "bg-gray-100 text-black")
      }
    >
      <div className="max-w-5xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-900 rounded-3xl p-6 shadow">
          <div>
            <h1 className="text-4xl font-bold">
              Daily Activity Manager 🚀
            </h1>
            <p className="text-gray-500">
              Build discipline. Track progress. Improve daily.
            </p>
          </div>

          {/* Theme Button */}
          <button
            onClick={() =>
              setTheme(isDark ? "light" : "dark")
            }
            className={
              "px-5 py-2 rounded-2xl font-semibold transition " +
              (isDark
                ? "bg-white text-black"
                : "bg-black text-white")
            }
          >
            {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* ADD TASK */}
        <div className="rounded-3xl p-6 shadow bg-white dark:bg-gray-900">
          <h2 className="text-xl font-bold mb-3">Add Task</h2>

          <div className="flex gap-2">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full p-3 border rounded-xl text-black"
              placeholder="Enter new task..."
            />
            <button
              onClick={addTask}
              className="bg-black text-white px-6 rounded-xl"
            >
              Add
            </button>
          </div>
        </div>

        {/* TASK LIST */}
        <div className="rounded-3xl p-6 shadow bg-white dark:bg-gray-900">
          <h2 className="text-xl font-bold mb-4">Today's Tasks</h2>

          {tasks.map((t, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 border rounded-xl mb-2"
            >
              <span className={checked[i] ? "line-through opacity-50" : ""}>
                {t}
              </span>
              <input
                type="checkbox"
                checked={checked[i] || false}
                onChange={() => toggleTask(i)}
              />
            </div>
          ))}
        </div>

        {/* EXPENSE + REVIEW */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Expense */}
          <div className="rounded-3xl p-6 shadow bg-white dark:bg-gray-900">
            <h2 className="text-xl font-bold mb-3">Expense Tracker</h2>

            <input
              className="w-full p-2 border rounded-xl mb-2 text-black"
              placeholder="Type"
              value={expense.type}
              onChange={(e) =>
                setExpense({ ...expense, type: e.target.value })
              }
            />

            <input
              className="w-full p-2 border rounded-xl mb-2 text-black"
              placeholder="Amount"
              value={expense.amount}
              onChange={(e) =>
                setExpense({ ...expense, amount: e.target.value })
              }
            />

            <textarea
              className="w-full p-2 border rounded-xl text-black"
              placeholder="Notes"
              value={expense.note}
              onChange={(e) =>
                setExpense({ ...expense, note: e.target.value })
              }
            />
          </div>

          {/* Review */}
          <div className="rounded-3xl p-6 shadow bg-white dark:bg-gray-900">
            <h2 className="text-xl font-bold mb-3">End of Day Review</h2>

            <textarea
              className="w-full p-2 border rounded-xl mb-2 text-black"
              placeholder="What did you complete?"
              value={review.done}
              onChange={(e) =>
                setReview({ ...review, done: e.target.value })
              }
            />

            <textarea
              className="w-full p-2 border rounded-xl text-black"
              placeholder="What to improve?"
              value={review.improve}
              onChange={(e) =>
                setReview({ ...review, improve: e.target.value })
              }
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500">
          🚀 Built by You — Real Working Productivity App
        </div>

      </div>
    </div>
  );
}
