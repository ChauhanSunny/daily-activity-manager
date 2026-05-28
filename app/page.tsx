export default function DailyActivityApp() {
                <option>Medium</option>
                <option>Low</option>
              </select>

              <textarea
                placeholder="Write your notes here..."
                className="w-full border rounded-xl p-3 h-24"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Daily Activity Checklist</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-2xl p-4"
              >
                <div>
                  <h3 className="font-medium text-lg">{task}</h3>
                </div>

                <input type="checkbox" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Daily Expense Tracker</h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Expense Type"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="number"
                placeholder="Amount"
                className="w-full border rounded-xl p-3"
              />

              <textarea
                placeholder="Expense Notes"
                className="w-full border rounded-xl p-3 h-20"
              />

              <button className="bg-black text-white px-5 py-3 rounded-2xl">
                Save Expense
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">End of Day Review</h2>

            <textarea
              placeholder="What did you complete today?"
              className="w-full border rounded-xl p-3 h-24 mb-4"
            />

            <textarea
              placeholder="What can improve tomorrow?"
              className="w-full border rounded-xl p-3 h-24 mb-4"
            />

            <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl">
              Save Review
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Stay Focused 🚀</h2>
          <p className="text-gray-600">
            Small daily improvements lead to long-term success.
          </p>
        </div>
      </div>
    </div>
  );
}
