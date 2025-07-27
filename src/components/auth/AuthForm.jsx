// // // // // import React, { useState } from "react";
// // // // // import Button from "../ui/Button";
// // // // // import Input from "../ui/Input";

// // // // // const API_URL = "http://localhost:5002/api";

// // // // // const AuthForm = ({ onLogin }) => {
// // // // //   const [isLogin, setIsLogin] = useState(true);
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     phone: "",
// // // // //     password: "",
// // // // //     role: "vendor",
// // // // //     marketArea: "",
// // // // //   });
// // // // //   const [error, setError] = useState("");
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const handleChange = (e) =>
// // // // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     setError("");
// // // // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // // // //     const payload = isLogin
// // // // //       ? { phone: formData.phone, password: formData.password }
// // // // //       : formData;

// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify(payload),
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (!res.ok)
// // // // //         throw new Error(
// // // // //           data.msg || `Server responded with status: ${res.status}`
// // // // //         );
// // // // //       onLogin(data.token);
// // // // //     } catch (err) {
// // // // //       console.error("Authentication Error:", err);
// // // // //       if (err instanceof TypeError && err.message === "Failed to fetch") {
// // // // //         setError("Network error: Could not connect to the server.");
// // // // //       } else {
// // // // //         setError(err.message || "An unknown error occurred.");
// // // // //       }
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
// // // // //         {isLogin ? "Welcome Back" : "Create Account"}
// // // // //       </h2>
// // // // //       <p className="text-center text-gray-500 mb-6">
// // // // //         {isLogin
// // // // //           ? "Log in to view available deals"
// // // // //           : "Sign up to start collaborating"}
// // // // //       </p>
// // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // //         {!isLogin && (
// // // // //           <>
// // // // //             <Input
// // // // //               id="name"
// // // // //               label="Full Name"
// // // // //               type="text"
// // // // //               placeholder="Enter your full name"
// // // // //               value={formData.name}
// // // // //               onChange={handleChange}
// // // // //             />
// // // // //             <Input
// // // // //               id="marketArea"
// // // // //               label="Market Area"
// // // // //               type="text"
// // // // //               placeholder="e.g., Burla Market"
// // // // //               value={formData.marketArea}
// // // // //               onChange={handleChange}
// // // // //             />
// // // // //             <div>
// // // // //               <label
// // // // //                 htmlFor="role"
// // // // //                 className="block text-sm font-medium text-gray-700 mb-1"
// // // // //               >
// // // // //                 I am a
// // // // //               </label>
// // // // //               <select
// // // // //                 id="role"
// // // // //                 value={formData.role}
// // // // //                 onChange={handleChange}
// // // // //                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //               >
// // // // //                 <option value="vendor">Vendor</option>
// // // // //                 <option value="supplier">Supplier</option>
// // // // //               </select>
// // // // //             </div>
// // // // //           </>
// // // // //         )}
// // // // //         <Input
// // // // //           id="phone"
// // // // //           label="Phone Number"
// // // // //           type="tel"
// // // // //           placeholder="Enter your 10-digit phone number"
// // // // //           value={formData.phone}
// // // // //           onChange={handleChange}
// // // // //         />
// // // // //         <Input
// // // // //           id="password"
// // // // //           label="Password"
// // // // //           type="password"
// // // // //           placeholder="Enter your password"
// // // // //           value={formData.password}
// // // // //           onChange={handleChange}
// // // // //         />
// // // // //         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
// // // // //         <Button
// // // // //           type="submit"
// // // // //           disabled={loading}
// // // // //           className="bg-gray-800 hover:bg-gray-900"
// // // // //         >
// // // // //           {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // // // //         </Button>
// // // // //       </form>
// // // // //       <p className="text-center mt-6">
// // // // //         {isLogin ? "Don't have an account?" : "Already have an account?"}
// // // // //         <button
// // // // //           onClick={() => setIsLogin(!isLogin)}
// // // // //           className="text-purple-600 hover:underline font-semibold ml-1"
// // // // //         >
// // // // //           {isLogin ? "Sign Up" : "Log In"}
// // // // //         </button>
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AuthForm;
// // // // import React, { useState } from "react";
// // // // import Button from "../ui/Button";
// // // // import Input from "../ui/Input";

// // // // const API_URL = "http://localhost:5002/api";

// // // // const AuthForm = ({ onLogin, setInitialMode }) => {
// // // //   const [isLogin, setIsLogin] = useState(setInitialMode === "login");
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     password: "",
// // // //     role: "vendor",
// // // //     marketArea: "",
// // // //   });
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);

// // // //   const handleChange = (e) =>
// // // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setError("");
// // // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // // //     const payload = isLogin
// // // //       ? { phone: formData.phone, password: formData.password }
// // // //       : formData;

// // // //     try {
// // // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify(payload),
// // // //       });
// // // //       const data = await res.json();
// // // //       if (!res.ok)
// // // //         throw new Error(
// // // //           data.msg || `Server responded with status: ${res.status}`
// // // //         );
// // // //       onLogin(data.token);
// // // //     } catch (err) {
// // // //       console.error("Authentication Error:", err);
// // // //       if (err instanceof TypeError && err.message === "Failed to fetch") {
// // // //         setError("Network error: Could not connect to the server.");
// // // //       } else {
// // // //         setError(err.message || "An unknown error occurred.");
// // // //       }
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="dark:bg-gray-800 p-2 rounded-lg">
// // // //       <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
// // // //         {isLogin ? "Welcome Back" : "Create Account"}
// // // //       </h2>
// // // //       <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
// // // //         {isLogin
// // // //           ? "Log in to view available deals"
// // // //           : "Sign up to start collaborating"}
// // // //       </p>
// // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // //         {!isLogin && (
// // // //           <>
// // // //             <Input
// // // //               id="name"
// // // //               label="Full Name"
// // // //               type="text"
// // // //               placeholder="Enter your full name"
// // // //               value={formData.name}
// // // //               onChange={handleChange}
// // // //             />
// // // //             <Input
// // // //               id="marketArea"
// // // //               label="Market Area"
// // // //               type="text"
// // // //               placeholder="e.g., Burla Market"
// // // //               value={formData.marketArea}
// // // //               onChange={handleChange}
// // // //             />
// // // //             <div>
// // // //               <label
// // // //                 htmlFor="role"
// // // //                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
// // // //               >
// // // //                 I am a
// // // //               </label>
// // // //               <select
// // // //                 id="role"
// // // //                 value={formData.role}
// // // //                 onChange={handleChange}
// // // //                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700"
// // // //               >
// // // //                 <option value="vendor">Vendor</option>
// // // //                 <option value="supplier">Supplier</option>
// // // //               </select>
// // // //             </div>
// // // //           </>
// // // //         )}
// // // //         <Input
// // // //           id="phone"
// // // //           label="Phone Number"
// // // //           type="tel"
// // // //           placeholder="Enter your 10-digit phone number"
// // // //           value={formData.phone}
// // // //           onChange={handleChange}
// // // //         />
// // // //         <Input
// // // //           id="password"
// // // //           label="Password"
// // // //           type="password"
// // // //           placeholder="Enter your password"
// // // //           value={formData.password}
// // // //           onChange={handleChange}
// // // //         />
// // // //         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
// // // //         <Button
// // // //           type="submit"
// // // //           disabled={loading}
// // // //           className="bg-gray-800 hover:bg-gray-900 dark:bg-purple-600 dark:hover:bg-purple-700"
// // // //         >
// // // //           {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // // //         </Button>
// // // //       </form>
// // // //       <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
// // // //         {isLogin ? "Don't have an account?" : "Already have an account?"}
// // // //         <button
// // // //           onClick={() => setIsLogin(!isLogin)}
// // // //           className="text-purple-600 hover:underline font-semibold ml-1"
// // // //         >
// // // //           {isLogin ? "Sign Up" : "Log In"}
// // // //         </button>
// // // //       </p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AuthForm;

// // // import React, { useState, useEffect } from "react";
// // // import Button from "../ui/Button";
// // // import Input from "../ui/Input";

// // // const API_URL = "http://localhost:5002/api";

// // // const AuthForm = ({ onLogin, setInitialMode }) => {
// // //   const [isLogin, setIsLogin] = useState(true);
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     phone: "",
// // //     password: "",
// // //     role: "vendor",
// // //     marketArea: "",
// // //   });
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     setIsLogin(setInitialMode === "login");
// // //   }, [setInitialMode]);

// // //   const handleChange = (e) =>
// // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError("");
// // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // //     const payload = isLogin
// // //       ? { phone: formData.phone, password: formData.password }
// // //       : formData;

// // //     try {
// // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(payload),
// // //       });
// // //       const data = await res.json();
// // //       if (!res.ok)
// // //         throw new Error(
// // //           data.msg || `Server responded with status: ${res.status}`
// // //         );
// // //       onLogin(data.token);
// // //     } catch (err) {
// // //       console.error("Authentication Error:", err);
// // //       if (err instanceof TypeError && err.message === "Failed to fetch") {
// // //         setError("Network error: Could not connect to the server.");
// // //       } else {
// // //         setError(err.message || "An unknown error occurred.");
// // //       }
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="dark:bg-gray-900 p-2 rounded-lg">
// // //       <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
// // //         {isLogin ? "Welcome Back" : "Create Account"}
// // //       </h2>
// // //       <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
// // //         {isLogin
// // //           ? "Log in to view available deals"
// // //           : "Sign up to start collaborating"}
// // //       </p>
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         {!isLogin && (
// // //           <>
// // //             <Input
// // //               id="name"
// // //               label="Full Name"
// // //               type="text"
// // //               placeholder="Enter your full name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //             />
// // //             <Input
// // //               id="marketArea"
// // //               label="Market Area"
// // //               type="text"
// // //               placeholder="e.g., Burla Market"
// // //               value={formData.marketArea}
// // //               onChange={handleChange}
// // //             />
// // //             <div>
// // //               <label
// // //                 htmlFor="role"
// // //                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
// // //               >
// // //                 I am a
// // //               </label>
// // //               <select
// // //                 id="role"
// // //                 value={formData.role}
// // //                 onChange={handleChange}
// // //                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700"
// // //               >
// // //                 <option value="vendor">Vendor</option>
// // //                 <option value="supplier">Supplier</option>
// // //               </select>
// // //             </div>
// // //           </>
// // //         )}
// // //         <Input
// // //           id="phone"
// // //           label="Phone Number"
// // //           type="tel"
// // //           placeholder="Enter your 10-digit phone number"
// // //           value={formData.phone}
// // //           onChange={handleChange}
// // //         />
// // //         <Input
// // //           id="password"
// // //           label="Password"
// // //           type="password"
// // //           placeholder="Enter your password"
// // //           value={formData.password}
// // //           onChange={handleChange}
// // //         />
// // //         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
// // //         <Button
// // //           type="submit"
// // //           disabled={loading}
// // //           className="bg-gray-800 hover:bg-gray-900 dark:bg-purple-600 dark:hover:bg-purple-700"
// // //         >
// // //           {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // //         </Button>
// // //       </form>
// // //       <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
// // //         {isLogin ? "Don't have an account?" : "Already have an account?"}
// // //         <button
// // //           onClick={() => setIsLogin(!isLogin)}
// // //           className="text-purple-600 hover:underline font-semibold ml-1"
// // //         >
// // //           {isLogin ? "Sign Up" : "Log In"}
// // //         </button>
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default AuthForm;
// // import React, { useState, useEffect } from "react";
// // import Button from "../ui/Button";
// // import Input from "../ui/Input";

// // const API_URL = "http://localhost:5002/api";

// // const AuthForm = ({ onLogin, setInitialMode }) => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     password: "",
// //     role: "vendor",
// //     marketArea: "",
// //   });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     setIsLogin(setInitialMode === "login");
// //   }, [setInitialMode]);

// //   const handleChange = (e) =>
// //     setFormData({ ...formData, [e.target.id]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// //     const payload = isLogin
// //       ? { phone: formData.phone, password: formData.password }
// //       : formData;

// //     try {
// //       const res = await fetch(`${API_URL}${endpoint}`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(payload),
// //       });
// //       const data = await res.json();
// //       if (!res.ok)
// //         throw new Error(
// //           data.msg || `Server responded with status: ${res.status}`
// //         );
// //       onLogin(data.token);
// //     } catch (err) {
// //       console.error("Authentication Error:", err);
// //       if (err instanceof TypeError && err.message === "Failed to fetch") {
// //         setError("Network error: Could not connect to the server.");
// //       } else {
// //         setError(err.message || "An unknown error occurred.");
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="dark:bg-gray-900 p-2 rounded-lg">
// //       <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
// //         {isLogin ? "Welcome Back" : "Create Account"}
// //       </h2>
// //       <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
// //         {isLogin
// //           ? "Log in to view available deals"
// //           : "Sign up to start collaborating"}
// //       </p>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         {!isLogin && (
// //           <>
// //             <Input
// //               id="name"
// //               label="Full Name"
// //               type="text"
// //               placeholder="Enter your full name"
// //               value={formData.name}
// //               onChange={handleChange}
// //             />
// //             <Input
// //               id="marketArea"
// //               label="Market Area"
// //               type="text"
// //               placeholder="e.g., Burla Market"
// //               value={formData.marketArea}
// //               onChange={handleChange}
// //             />
// //             <div>
// //               <label
// //                 htmlFor="role"
// //                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
// //               >
// //                 I am a
// //               </label>
// //               <select
// //                 id="role"
// //                 value={formData.role}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700"
// //               >
// //                 <option value="vendor">Vendor</option>
// //                 <option value="supplier">Supplier</option>
// //               </select>
// //             </div>
// //           </>
// //         )}
// //         <Input
// //           id="phone"
// //           label="Phone Number"
// //           type="tel"
// //           placeholder="Enter your 10-digit phone number"
// //           value={formData.phone}
// //           onChange={handleChange}
// //         />
// //         <Input
// //           id="password"
// //           label="Password"
// //           type="password"
// //           placeholder="Enter your password"
// //           value={formData.password}
// //           onChange={handleChange}
// //         />
// //         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
// //         <Button
// //           type="submit"
// //           disabled={loading}
// //           className="bg-purple-600 hover:bg-purple-700 text-white"
// //         >
// //           {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// //         </Button>
// //       </form>
// //       <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
// //         {isLogin ? "Don't have an account?" : "Already have an account?"}
// //         <button
// //           onClick={() => setIsLogin(!isLogin)}
// //           className="text-purple-600 hover:underline font-semibold ml-1"
// //         >
// //           {isLogin ? "Sign Up" : "Log In"}
// //         </button>
// //       </p>
// //     </div>
// //   );
// // };

// // export default AuthForm;

// import React, { useState, useEffect } from "react";
// import Button from "../ui/Button";
// import Input from "../ui/Input";

// const API_URL = "http://localhost:5002/api";

// const AuthForm = ({ onLogin, setInitialMode }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     password: "",
//     role: "vendor",
//     marketArea: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setIsLogin(setInitialMode === "login");
//   }, [setInitialMode]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.id]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     const endpoint = isLogin ? "/auth/login" : "/auth/register";
//     const payload = isLogin
//       ? { phone: formData.phone, password: formData.password }
//       : formData;

//     try {
//       const res = await fetch(`${API_URL}${endpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
//       if (!res.ok)
//         throw new Error(
//           data.msg || `Server responded with status: ${res.status}`
//         );
//       onLogin(data.token);
//     } catch (err) {
//       console.error("Authentication Error:", err);
//       if (err instanceof TypeError && err.message === "Failed to fetch") {
//         setError("Network error: Could not connect to the server.");
//       } else {
//         setError(err.message || "An unknown error occurred.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="dark:bg-gray-900 p-2 rounded-lg">
//       <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
//         {isLogin ? "Welcome Back" : "Create Account"}
//       </h2>
//       <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
//         {isLogin
//           ? "Log in to view available deals"
//           : "Sign up to start collaborating"}
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {!isLogin && (
//           <>
//             <Input
//               id="name"
//               label="Full Name"
//               type="text"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <Input
//               id="marketArea"
//               label="Market Area"
//               type="text"
//               placeholder="e.g., Burla Market"
//               value={formData.marketArea}
//               onChange={handleChange}
//             />
//             <div>
//               <label
//                 htmlFor="role"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//               >
//                 I am a
//               </label>
//               <select
//                 id="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700"
//               >
//                 <option value="vendor">Vendor</option>
//                 <option value="supplier">Supplier</option>
//               </select>
//             </div>
//           </>
//         )}
//         <Input
//           id="phone"
//           label="Phone Number"
//           type="tel"
//           placeholder="Enter your 10-digit phone number"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <Input
//           id="password"
//           label="Password"
//           type="password"
//           placeholder="Enter your password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         <Button
//           type="submit"
//           disabled={loading}
//           className="bg-purple-600 hover:bg-purple-700 text-white"
//         >
//           {loading ? "Processing..." : isLogin ? "Login" : "Register"}
//         </Button>
//       </form>
//       <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
//         {isLogin ? "Don't have an account?" : "Already have an account?"}
//         <button
//           onClick={() => setIsLogin(!isLogin)}
//           className="text-purple-600 hover:underline font-semibold ml-1"
//         >
//           {isLogin ? "Sign Up" : "Log In"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default AuthForm;

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const API_URL = "http://localhost:5002/api";

const AuthForm = ({ onLogin, setInitialMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    role: "vendor",
    marketArea: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLogin(setInitialMode === "login");
  }, [setInitialMode]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const endpoint = isLogin ? "/auth/login" : "/auth/register";
    const payload = isLogin
      ? { phone: formData.phone, password: formData.password }
      : formData;

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok)
        throw new Error(
          data.msg || `Server responded with status: ${res.status}`
        );
      onLogin(data.token);
    } catch (err) {
      console.error("Authentication Error:", err);
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        setError("Network error: Could not connect to the server.");
      } else {
        setError(err.message || "An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-2 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-2">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>
      <p className="text-center text-gray-400 mb-6">
        {isLogin
          ? "Log in to view available deals"
          : "Sign up to start collaborating"}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <Input
              id="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              id="marketArea"
              label="Market Area"
              type="text"
              placeholder="e.g., Burla Market"
              value={formData.marketArea}
              onChange={handleChange}
            />
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                I am a
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700"
              >
                <option value="vendor">Vendor</option>
                <option value="supplier">Supplier</option>
              </select>
            </div>
          </>
        )}
        <Input
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="Enter your 10-digit phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Register"}
        </Button>
      </form>
      <p className="text-center mt-6 text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-purple-500 hover:underline font-semibold ml-1"
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
