import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "AM",
    people: 4,
  });

  const [errors, setErrors] = useState({});
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field])
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) newErrors.email = "This field is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.month || !formData.day || !formData.year)
      newErrors.date = "This field is incomplete";
    if (!formData.hour || !formData.minute)
      newErrors.time = "This field is incomplete";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) console.log("Form submitted:", formData);
  };

  const incrementPeople = () => {
    setFormData((prev) => ({
      ...prev,
      people: Math.min(prev.people + 1, 20),
    }));
  };

  const decrementPeople = () => {
    setFormData((prev) => ({
      ...prev,
      people: Math.max(prev.people - 1, 1),
    }));
  };

  return (
    <div className="mx-auto w-[90%] max-w-md rounded-lg bg-white px-6 py-8 shadow-lg sm:mt-[-13%] sm:max-w-lg sm:p-6 lg:absolute lg:z-1 lg:mt-[-40vh] lg:ml-[40vw] lg:w-[30vw]">
      <div className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full border-b-2 bg-transparent pb-4 text-lg placeholder-gray-400 transition-colors outline-none ${
              errors.name
                ? "border-[#B54949]"
                : "border-gray-300 focus:border-gray-600"
            }`}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-[#B54949]">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full border-b-2 bg-transparent pb-4 text-lg placeholder-gray-400 transition-colors outline-none ${
              errors.email
                ? "border-[#B54949]"
                : "border-gray-300 focus:border-gray-600"
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-[#B54949]">{errors.email}</p>
          )}
        </div>
        <div className="lg:flex lg:gap-10">
          <label className="mb-4 block text-lg font-medium text-gray-700">
            Pick a date
          </label>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="MM"
              maxLength="2"
              value={formData.month}
              onChange={(e) =>
                handleInputChange("month", e.target.value.replace(/\D/g, ""))
              }
              className={`w-16 border-b-2 bg-transparent pb-2 text-center text-lg placeholder-gray-400 transition-colors outline-none ${
                errors.date
                  ? "border-[#B54949]"
                  : "border-gray-300 focus:border-gray-600"
              }`}
            />
            <input
              type="text"
              placeholder="DD"
              maxLength="2"
              value={formData.day}
              onChange={(e) =>
                handleInputChange("day", e.target.value.replace(/\D/g, ""))
              }
              className={`w-16 border-b-2 bg-transparent pb-2 text-center text-lg placeholder-gray-400 transition-colors outline-none ${
                errors.date
                  ? "border-[#B54949]"
                  : "border-gray-300 focus:border-gray-600"
              }`}
            />
            <input
              type="text"
              placeholder="YYYY"
              maxLength="4"
              value={formData.year}
              onChange={(e) =>
                handleInputChange("year", e.target.value.replace(/\D/g, ""))
              }
              className={`w-20 border-b-2 bg-transparent pb-2 text-center text-lg placeholder-gray-400 transition-colors outline-none ${
                errors.date
                  ? "border-[#B54949]"
                  : "border-gray-300 focus:border-gray-600"
              }`}
            />
          </div>
          {errors.date && (
            <p className="mt-2 text-sm text-[#B54949]">{errors.date}</p>
          )}
        </div>
        <div className="lg:flex lg:gap-10">
          <label className="mb-4 block text-lg font-medium text-gray-700">
            Pick a time
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="09"
              maxLength="2"
              value={formData.hour}
              onChange={(e) =>
                handleInputChange("hour", e.target.value.replace(/\D/g, ""))
              }
              className={`w-16 border-b-2 bg-transparent pb-2 text-center text-lg placeholder-gray-400 transition-colors outline-none ${
                errors.time
                  ? "border-[#B54949]"
                  : "border-gray-300 focus:border-gray-600"
              }`}
            />
            <input
              type="text"
              placeholder="00"
              maxLength="2"
              value={formData.minute}
              onChange={(e) =>
                handleInputChange("minute", e.target.value.replace(/\D/g, ""))
              }
              className={`w-16 border-b-2 bg-transparent pb-2 text-center text-lg placeholder-gray-400 transition-colors outline-none ${
                errors.time
                  ? "border-[#B54949]"
                  : "border-gray-300 focus:border-gray-600"
              }`}
            />
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                className="flex items-center space-x-2 border-b-2 border-gray-300 bg-transparent pb-2 text-lg transition-colors outline-none hover:border-gray-600"
              >
                <span>{formData.ampm}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    showTimeDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showTimeDropdown && (
                <div className="absolute top-full left-0 z-10 mt-1 w-20 rounded border border-gray-200 bg-white shadow-lg">
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange("ampm", "AM");
                      setShowTimeDropdown(false);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    AM
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange("ampm", "PM");
                      setShowTimeDropdown(false);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    PM
                  </button>
                </div>
              )}
            </div>
          </div>
          {errors.time && (
            <p className="mt-2 text-sm text-[#B54949]">{errors.time}</p>
          )}
        </div>
        <div className="flex items-center justify-between border-b-2 border-gray-300 pb-4">
          <button
            type="button"
            onClick={decrementPeople}
            className="flex h-8 w-8 items-center justify-center rounded text-xl font-bold hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-lg font-medium">{formData.people} people</span>
          <button
            type="button"
            onClick={incrementPeople}
            className="flex h-8 w-8 items-center justify-center rounded text-xl font-bold hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full cursor-pointer border-2 border-[#111] bg-[#111] py-4 font-medium tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-[#111]"
        >
          MAKE RESERVATION
        </button>
      </div>
    </div>
  );
};

export default Form;
