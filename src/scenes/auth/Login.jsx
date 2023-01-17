/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
//  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      /*try {
      const data = await axios.post("http://localhost:3001/auth/login", {
        email: email,
        password: password,
      });
      if (data.status === 200) {
        if (data.data.user.role === "SuperViser") {
          window.location.href = "/dashboard";
          localStorage.setItem("user", JSON.stringify(data.data.user));
         
          setShowDash(true);
        } else if (data.data.user.role === "Etudiant") {
          window.location.href = "/etudiant/etudiantDashboard";
          localStorage.setItem("user", JSON.stringify(data.data.user));

          setShowDash(true);
        }
      }
    } catch (err) {
      setError(true);
    }*/

      //   const response = await fetch("http://localhost:3000/api/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email,
      //       password,
      //     }),
      //   });
      //   const data = await response.json();
      const localStorage = window.localStorage;
      localStorage.setItem("token", email + password);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#141B2D]">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex flex-col items-center justify-center mt-2">
          <img
            className="h-48 w-48 rounded-md"
            src="/assets/logo.png"
            alt="logo"
          />
          <h1 className="text-3xl font-semibold text-center text-[#0071BD]">
            Sign in to your ETUDMA account
          </h1>
        </div>

        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0071BD] rounded-md hover:bg-[#0071BD] focus:outline-none focus:bg-[#0071BD]"
              onClick={handleSubmit}
           //   onClick={login}
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-[#0071BD] hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
