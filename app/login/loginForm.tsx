"use client";

import Button from "../button";
import LoadingSpinner from "../loadingSpinner";
import { AnimatePresence } from "framer-motion";
import { isUserLoggedIn, userLogin } from "@/utils/authUtils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkIfLoggedIn() {
      if (await isUserLoggedIn()) {
        return router.push("/dashboard");
      }
    }
    checkIfLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;
    setLoading(true);
    const response = await userLogin(email, password);
    setLoading(false);

    if (
      response.hasOwnProperty("error") &&
      response.error.code == "INVALID_EMAIL_PASSWORD"
    ) {
      return setInvalid(true);
    }

    // Redirect to DashBoard
    router.push("/dashboard");
  };

  const handleInputChange = () => invalid && setInvalid(false);

  return (
    <>
      <AnimatePresence mode="popLayout">
        {loading && <LoadingSpinner />}
      </AnimatePresence>

      <div className="flex flex-col gap-4 text-center z-20">
        <form className="flex flex-col text-left" onSubmit={handleSubmit}>
          <label htmlFor="input-email">Email</label>
          <input
            className={`bg-transparent rounded-lg border ${
              invalid ? "border-red-500" : "border-transparent"
            } px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30`}
            id="input-email"
            type="email"
            placeholder="joseph@email.com"
            onChange={handleInputChange}
            required
          />

          <label className="mt-4" htmlFor="input-password">
            Password
          </label>
          <input
            className={`mb-4 bg-transparent rounded-lg border ${
              invalid ? "border-red-500" : "border-transparent"
            } px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30`}
            id="input-password"
            type="password"
            placeholder="●●●●●●●"
            onChange={handleInputChange}
            minLength={6}
            required
          />

          {/* ▶️ Login / Send Form */}
          <Button
            href="#"
            htmlType="submit"
            text="Login"
            actionButton
            mainActionStyle
          />

          {invalid && (
            <span className="w-full text-center text-red-500 font-bold mt-2">
              Invalid Email or Password
            </span>
          )}
        </form>
      </div>
    </>
  );
}
