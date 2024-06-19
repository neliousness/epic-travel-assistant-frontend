import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../utils/ApiHelper";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const loginData = {
      userEmail,
      userPassword,
    };

    if (userPassword === userConfirmPassword) {
      registerUser(loginData);

      toast.success("Successfully registered");

      return navigate("/");
    } else {
      toast.error("Passwords dont match");
    }
  };

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Lets get you started
            </h2>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="contact-email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="New password"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="password"
                placeholder="Confirm your password"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={userConfirmPassword}
                onChange={(e) => setUserConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create your account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
