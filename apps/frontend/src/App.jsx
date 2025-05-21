import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [inputs, setInputs] = useState([]);

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

  const getInputs = async () => {
    const res = await fetch('http://localhost:3000/inputs');
    const data = await res.json();
    setInputs(data);
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


        {/* Inputs Section */}
        <div>
          <div className="space-y-2">
            <button
              onClick={getInputs}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded shadow-lg"
            >
              Load Inputs (MongoDB)
            </button>
          </div>

          {inputs.length > 0 && (
            <div className="mt-4 space-y-2 text-left">
              {inputs.map((input) => (
                <div
                  key={input._id}
                  className="p-3 bg-white rounded shadow text-sm"
                >
                  <div><strong>Label:</strong> {input.label}</div>
                  <div><strong>Type:</strong> {input.type}</div>
                  <div><strong>Placeholder:</strong> {input.placeholder}</div>
                  <div><strong>Required:</strong> {input.required ? 'Yes' : 'No'}</div>
                  <div><strong>Order:</strong> {input.order}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
