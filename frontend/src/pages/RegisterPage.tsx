import React, { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { InputField } from "../components/InputField";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      await register(username, password);
      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.error("Username already taken. Please choose another one.");
        } else {
          toast.error("An unexpected error occurred");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center text-white">
          Register
        </h1>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleRegister} label="Register" />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
