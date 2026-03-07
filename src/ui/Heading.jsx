import React from "react";

function Headers({ head, subHead1, subHead2, head1 }) {
  return (
    <div>
      <div className="mb-3">
        <h1 className="text-3xl font-bold w-full text-gray-800">{head}</h1>
        <h1 className="text-3xl font-bold w-full text-gray-800">{head1}</h1>
      </div>
      <div className="pt-3">
        <p className="text-xl font text-gray-600 w-full font-medium">
          {subHead1}
        </p>
        <p className="text-xl font text-gray-600 w-full font-medium">
          {subHead2}
        </p>
      </div>
    </div>
  );
}

export default Headers;
