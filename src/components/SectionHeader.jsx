import React from "react";

export default function SectionHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {action && (
        <button className="text-sm font-semibold">
          {action}
        </button>
      )}
    </div>
  );
}