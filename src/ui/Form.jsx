import React, { useState } from "react";

function Form({ inputFields }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputDetails, setInputDetails] = useState(() =>
    inputFields.reduce((obj, cur) => {
      obj[cur.name] = "";
      return obj
    }, {}),
  );
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleinputChange = (event) => {
    const { name, value } = event.target;
    setInputDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full">
      {inputFields.map((obj) => (
        <div className="w-full mb-6">
          {obj.type === "radio" ? (
            <div>
              <p>
                Are you an Agency?<span className="text-red-600">*</span>
              </p>
              <div className=" flex gap-8">
                <label>
                  <input
                    type="radio"
                    name="company" // All radio buttons in the group must share the same name
                    value="Yes"
                    checked={selectedOption === "Yes"} // 'checked' prop controls the selection
                    onChange={handleOptionChange} // 'onChange' handler updates the state
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="company"
                    value="No"
                    checked={selectedOption === "No"}
                    onChange={handleOptionChange}
                  />
                  No
                </label>
              </div>
            </div>
          ) : (
            <div className="relative w-full">
              <label
                htmlFor={obj.name}
                className="absolute -top-2 left-3 px-3 text-sm bg-gray-100 text-purple-600"
              >
                {obj.label}
              </label>

              <input
                type={obj.type}
                id={obj.name}
                required={obj.required}
                value={inputDetails[obj.name]}
                placeholder={obj.placeHolder}
                className="border border-gray-300 rounded-lg text-gray-600 px-3 py-2 w-full outline-0"
                onChange={handleinputChange}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Form;
