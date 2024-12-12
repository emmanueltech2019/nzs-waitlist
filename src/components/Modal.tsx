import { showToast } from "@/utils/alert";
import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { handleApiError } from "@/utils/errors";
import CircleLoader from "./loader";

interface FormData {
  state: string;
  action: string; // "Buy" or "Sell"
  firstName: string;
  surname: string;
  email: string;
  phone: string;
}

interface AddressModalProps {
  onClose: () => void; // Define the type for the onClose prop
}

const Modal: React.FC<AddressModalProps> = ({ onClose }) => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    state: "",
    action: "",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleActionClick = (action: "Buy" | "Sell") => {
    setFormData((prevData) => ({
      ...prevData,
      action,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await axios.post("waitlist", { data: formData });
      onClose();
      setLoading(false)
      showToast("success", res.data.message);
      window.location.replace('/success ')
    } catch (err) {
      setLoading(false)
        const errorMessage = handleApiError(err, "Failed to join the waitlist");
        showToast("warning", errorMessage);
    }
  };
useEffect(() => {
  axios.get("waitlist")
  .then((res)=>{
    console.log(res)
    setCount(res.data.flength)
  }).catch(()=>{

  })
    
}, [])

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[100%] md:w-[50vw]">
        <h2 className="text-lg font-bold mb-4 text-white text-center bg-[#006838] py-5 px-2">
          {loading?"Wait a moment":"Join our Waitlist"}
        </h2>
        {loading?<><CircleLoader /></>:<form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your state"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              What would you like to do on Naijazone?
            </label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => handleActionClick("Buy")}
                className={`md:px-20 px-5 py-2 border rounded-md ${
                  formData.action === "Buy"
                    ? "border-2 border-[#006838] text-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => handleActionClick("Sell")}
                className={`md:px-20 px-5 py-2 border rounded-md ${
                  formData.action === "Sell"
                    ? "border-2 border-[#006838] text-black"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Sell
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your surname"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="+234"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Later
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Join Now!
            </button>
          </div>
          <p className="mt-4 text-gray-500 text-sm text-center">{count} have joined Naijazone!</p>
        </form>}
        
      </div>
    </div>
  );
};

export default Modal;
