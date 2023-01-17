/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [sexe, setSexe] = React.useState("");
  const [age, setAge] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup();
  };

  
    /*
    const [info, setInfo] = useState({
    username: "",
    password: "",
    email: "",
    role: "Client",
    age: 0,
    firstname: "",
    lastname: "",
    telephone: "",
    city: "",
    sexe: "",
  });
  const [error, setError] = useState(false);
     */
    
  const signup = async () => {

    try {

      /**
       *  async function register() {
       try {
      const data = await axios.post("http://localhost:3001/auth/register", {
        username: info.username,
        password: info.password,
        email: info.email,
        type: info.role,
        age: parseInt(info.age),
        firstname: info.firstname,
        lastname: info.lastname,
        telephone: info.telephone,
        city: info.city,
        sexe: info.sexe,
      });
      if (data.data.role === "SuperViser") {
        window.location.href = "/dashboard";
        localStorage.setItem("user", JSON.stringify(data.data.user));
      } else if (data.data.role === "Etudiant") {
        window.location.href = "/etudiant/etudiantDashboard";
        localStorage.setItem("user", JSON.stringify(data.data.user));
      }
    } catch (err) {
      setError(true);
    }
  }
       */
      // const response = await fetch("http://localhost:3000/api/signup", {
      // method: "POST",
      // headers: {
      // "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      // name,
      // email,
      // password,
      // }),
      // });
      // const data = await response.json();
      const localStorage = window.localStorage;
      localStorage.setItem("token", name + email + password);
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
            Create an ETUDMA account
          </h1>
        </div>

        <form className="mt-6">
          <div className="mb-2">
            <label
              for="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text" 
               placeholder="Name"
              //value={info.name}
              className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setName(e.target.value)}
              // onChange={(e) => {  setInfo({ ...info, name: e.target.value });}}
            />
              <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              /** placeholder="Email"
                value={info.email}
                onChange={(e) => {
                  setInfo({ ...info, email: e.target.value });
                }} */
              className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Username
              </label>
              <input
                type="text"
                /** placeholder="Username"
                value={info.username}
                onChange={(e) => {
                  setInfo({ ...info, username: e.target.value });
                }} */
                className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setUsername(e.target.value)}
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
              /** placeholder="Password"
                value={info.password}
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }} */
              className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Sexe
              </label>
              <input
                type="text"
                /** placeholder="Sexe"
                value={info.sexe}
                onChange={(e) => {
                  setInfo({ ...info, sexe: e.target.value });
                }} */
                className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone
              </label>
              <input
                type="text"
                /** placeholder="Telephone"
                value={info.phone}
                onChange={(e) => {
                  setInfo({ ...info, phone: e.target.value });
                }} */
                className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>{" "}
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Address
              </label>
              <input
                type="text"
                /**placeholder="Address"
                value={info.address}
                onChange={(e) => {
                  setInfo({ ...info, address: e.target.value });
                }} */
                className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>{" "}
            <div className="mb-2">
              <label
                for="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Age
              </label>
              <input
                type="number"
                /** placeholder="Age"
                value={info.age}
                type="number"
                onChange={(e) => {
                  setInfo({ ...info, age: e.target.value });
                }} */
                className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              You are ?
            </label>
            <select
              className="block w-full px-4 py-2 mt-2 text-[#0071BD] bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student" 
              /** onChange={(e) => {
                  setInfo({ ...info, role: "Etudiant" });
                }}
                checked={info.role === "Etudiant"} */>Student</option>
              <option value="teacher"
              /** onChange={(e) => {
                  setInfo({ ...info, role: "SuperViser" });
                }}
                checked={info.role === "SuperViser"} */
              >SuperViser</option>
            </select>
          </div>

          
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0071BD] rounded-md hover:bg-[#0071BD] focus:outline-none focus:bg-[#0071BD]"
              onClick={handleSubmit}
              //onClick={register}
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#0071BD] hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
