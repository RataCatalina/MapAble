import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const Donate = () => {
  const [active, setActive] = useState("one-time");

  return (
    <section className="p-4 max-w-md mx-auto mb-16 mt-10 ">
      <form action="details" className="space-y-4">
        <h1 className="text-xl font-bold text-center mb-4">Donation Form</h1>

        <div className="flex gap-2 justify-center text-blue-500">
          <button
            type="button"
            onClick={() => setActive("one-time")}
            className={`px-4 py-2 border rounded-md transition-all duration-150 ${
              active === "one-time" ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`}
          >
            One-time
          </button>
          <button
            type="button"
            onClick={() => setActive("monthly")}
            className={`px-4 py-2 border rounded-md flex items-center gap-1 transition-all duration-150 ${
              active === "monthly" ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`}
          >
            <FaHeart />
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setActive("annually")}
            className={`px-4 py-2 border rounded-md transition-all duration-150 ${
              active === "annually" ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`}
          >
            Annually
          </button>
        </div>

        <div>
          <label htmlFor="currency" className="block font-medium mb-1">
            Currency
          </label>
          <select name="currency" id="currency" className="w-full border rounded p-2">
            <option value="mdl">MDL</option>
            <option value="ron">RON</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block font-medium mb-1">
            Enter amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter amount"
            min="1"
            required
            className="w-full border rounded p-2"
          />
        </div>

         <div>
          <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="card" className="block font-medium mb-1">Card Number</label>
          <input
            type="text"
            id="card"
            inputMode="numeric"
            pattern="\d{16}"
            maxLength={16}
            required
            placeholder="1234 5678 9012 3456"
            className="w-full border rounded p-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="expiry" className="block font-medium mb-1">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              required
              placeholder="MM/YY"
              pattern="\d{2}/\d{2}"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block font-medium mb-1">CVV</label>
            <input
              type="password"
              id="cvv"
              required
              placeholder="123"
              pattern="\d{3,4}"
              maxLength={4}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Confirm Donation
        </button>
      </form>
    </section>
  );
};

export default Donate;