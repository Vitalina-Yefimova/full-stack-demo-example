import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [templates, setTemplates] = useState([]);

  const getUsers = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    setUsers(data);
  };

  const getTemplates = async () => {
    const res = await fetch('http://localhost:3000/templates');
    const data = await res.json();
    setTemplates(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-10">
        <h1 className="text-3xl font-bold text-blue-600">
          Frontend Connected to NestJS API
        </h1>

        {/* Users Section */}
        <div>
          <button
            onClick={getUsers}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded shadow-lg"
          >
            Load Users (PostgreSQL)
          </button>

          {users.length > 0 && (
            <ul className="mt-4 space-y-2 text-left">
              {users.map((u) => (
                <li key={u.id} className="p-3 bg-white rounded shadow">
                  <span className="font-medium">{u.name}</span> — {u.email}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Templates Section */}
        <div>
          <button
            onClick={getTemplates}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-lg"
          >
            Load Templates (MongoDB)
          </button>

          {templates.length > 0 && (
            <div className="mt-4 grid gap-3">
              {templates.map((tpl, i) => (
                <button
                  key={i}
                  className="w-full py-2 rounded font-medium shadow text-white"
                  style={{ backgroundColor: tpl.color }}
                >
                  {tpl.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
