"use client";

import { useState } from "react";

export default function Qualification() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-semibold">
          Request received.
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          If your portfolio meets the exposure threshold, you’ll receive next steps within 1 business day.
        </p>
      </section>
    );
  }

  return (
    <section className="py-24 border-t">
      <h2 className="text-3xl font-semibold mb-4">
        Is This a Fit?
      </h2>

      <p className="text-gray-600 max-w-2xl mb-10">
        This assessment is designed for owners and property managers with
        real BEPS exposure. We do not work on speculative or low-risk assets.
      </p>

      <form
        className="grid gap-6 max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Portfolio Size (properties)
          </label>
          <select
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select…</option>
            <option>1–2</option>
            <option>3–10</option>
            <option>10–25</option>
            <option>25+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Primary Asset Type
          </label>
          <select
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select…</option>
            <option>Multifamily</option>
            <option>Office</option>
            <option>Mixed-use</option>
            <option>Medical / Hospital</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Enforcement Concern
          </label>
          <select
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select…</option>
            <option>Near-term penalties</option>
            <option>Unclear compliance pathway</option>
            <option>Capital planning risk</option>
            <option>Board / investor pressure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Work Email
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Request Assessment
        </button>
      </form>
    </section>
  );
}

