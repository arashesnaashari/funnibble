"use client";
import { useState } from "react";
import ArrowIcon from "./arrowIcon";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you! Your email has been submitted.");
        setEmail(""); // Clear the input field
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.log(err);

      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800"
        >
          <div className="flex flex-row items-center -translate-x-3">
            <ArrowIcon />
            Join the Waitlist{" "}
          </div>
        </button>
      </div>
      {message && <p className="text-green-500">{message}</p>}
    </>
  );
}
