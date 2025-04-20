import React, { useState, useEffect } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    if (operation === "divide" && b === 0) {
      setError("Cannot divide by zero");
      setResult(null);
      return;
    }

    setError("");

    let calcResult;
    switch (operation) {
      case "add":
        calcResult = a + b;
        break;
      case "subtract":
        calcResult = a - b;
        break;
      case "multiply":
        calcResult = a * b;
        break;
      case "divide":
        calcResult = a / b;
        break;
      default:
        calcResult = null;
    }

    setResult(calcResult);
  };

  useEffect(() => {
    if (result !== null) {
      console.log("Calculation Result:", result);
    }
  }, [result]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl transition-all">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Simple Calculator
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
          />
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none"
          >
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (−)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (÷)</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Calculate
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500 font-medium animate-pulse">
            {error}
          </p>
        )}
        {result !== null && !error && (
          <div className="mt-6 text-center text-green-600 text-2xl font-bold animate-fade-in">
             Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};
