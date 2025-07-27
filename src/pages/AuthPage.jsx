// // // // // // // // import React, { useState } from "react";
// // // // // // // // import Button from "../components/ui/Button";
// // // // // // // // import Card from "../components/ui/Card";
// // // // // // // // import Input from "../components/ui/Input";

// // // // // // // // const API_URL = "http://localhost:5002/api";

// // // // // // // // const AuthPage = ({ onLogin }) => {
// // // // // // // //   const [isLogin, setIsLogin] = useState(true);
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     name: "",
// // // // // // // //     phone: "",
// // // // // // // //     password: "",
// // // // // // // //     role: "vendor",
// // // // // // // //     marketArea: "",
// // // // // // // //   });
// // // // // // // //   const [error, setError] = useState("");
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const handleChange = (e) =>
// // // // // // // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setLoading(true);
// // // // // // // //     setError("");
// // // // // // // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // // // // // // //     const payload = isLogin
// // // // // // // //       ? { phone: formData.phone, password: formData.password }
// // // // // // // //       : formData;

// // // // // // // //     try {
// // // // // // // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify(payload),
// // // // // // // //       });
// // // // // // // //       const data = await res.json();
// // // // // // // //       if (!res.ok) throw new Error(data.msg || "An error occurred");
// // // // // // // //       onLogin(data.token);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError(err.message);
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // // // //       <div className="w-full max-w-md">
// // // // // // // //         <Card className="shadow-2xl">
// // // // // // // //           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
// // // // // // // //             {isLogin ? "Welcome Back" : "Create Account"}
// // // // // // // //           </h2>
// // // // // // // //           <p className="text-center text-gray-500 mb-6">
// // // // // // // //             {isLogin
// // // // // // // //               ? "Log in to view available deals"
// // // // // // // //               : "Sign up to start collaborating"}
// // // // // // // //           </p>
// // // // // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //             {!isLogin && (
// // // // // // // //               <>
// // // // // // // //                 <Input
// // // // // // // //                   id="name"
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Full Name"
// // // // // // // //                   value={formData.name}
// // // // // // // //                   onChange={handleChange}
// // // // // // // //                 />
// // // // // // // //                 <Input
// // // // // // // //                   id="marketArea"
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Market Area (e.g., Burla Market)"
// // // // // // // //                   value={formData.marketArea}
// // // // // // // //                   onChange={handleChange}
// // // // // // // //                 />
// // // // // // // //                 <div>
// // // // // // // //                   <select
// // // // // // // //                     id="role"
// // // // // // // //                     value={formData.role}
// // // // // // // //                     onChange={handleChange}
// // // // // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //                   >
// // // // // // // //                     <option value="vendor">I am a Vendor</option>
// // // // // // // //                     <option value="supplier">I am a Supplier</option>
// // // // // // // //                   </select>
// // // // // // // //                 </div>
// // // // // // // //               </>
// // // // // // // //             )}
// // // // // // // //             <Input
// // // // // // // //               id="phone"
// // // // // // // //               type="tel"
// // // // // // // //               placeholder="Phone Number"
// // // // // // // //               value={formData.phone}
// // // // // // // //               onChange={handleChange}
// // // // // // // //             />
// // // // // // // //             <Input
// // // // // // // //               id="password"
// // // // // // // //               type="password"
// // // // // // // //               placeholder="Password"
// // // // // // // //               value={formData.password}
// // // // // // // //               onChange={handleChange}
// // // // // // // //             />
// // // // // // // //             {error && (
// // // // // // // //               <p className="text-red-500 text-sm text-center">{error}</p>
// // // // // // // //             )}
// // // // // // // //             <Button type="submit" disabled={loading}>
// // // // // // // //               {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // // // // // // //             </Button>
// // // // // // // //           </form>
// // // // // // // //           <p className="text-center mt-6">
// // // // // // // //             {isLogin ? "Don't have an account?" : "Already have an account?"}
// // // // // // // //             <button
// // // // // // // //               onClick={() => setIsLogin(!isLogin)}
// // // // // // // //               className="text-blue-600 hover:underline font-semibold ml-1"
// // // // // // // //             >
// // // // // // // //               {isLogin ? "Sign Up" : "Log In"}
// // // // // // // //             </button>
// // // // // // // //           </p>
// // // // // // // //         </Card>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AuthPage;

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import Button from "../components/ui/Button";
// // // // // // // // import Card from "../components/ui/Card";
// // // // // // // // import Input from "../components/ui/Input";

// // // // // // // // const API_URL = "http://localhost:5002/api";

// // // // // // // // const AuthPage = ({ onLogin }) => {
// // // // // // // //   const [isLogin, setIsLogin] = useState(true);
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     name: "",
// // // // // // // //     phone: "",
// // // // // // // //     password: "",
// // // // // // // //     role: "vendor",
// // // // // // // //     marketArea: "",
// // // // // // // //   });
// // // // // // // //   const [error, setError] = useState("");
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const handleChange = (e) =>
// // // // // // // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setLoading(true);
// // // // // // // //     setError("");
// // // // // // // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // // // // // // //     const payload = isLogin
// // // // // // // //       ? { phone: formData.phone, password: formData.password }
// // // // // // // //       : formData;

// // // // // // // //     try {
// // // // // // // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify(payload),
// // // // // // // //       });
// // // // // // // //       const data = await res.json();
// // // // // // // //       if (!res.ok) throw new Error(data.msg || "An error occurred");
// // // // // // // //       onLogin(data.token);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError(err.message);
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// // // // // // // //       <div className="w-full max-w-md">
// // // // // // // //         <Card className="shadow-2xl">
// // // // // // // //           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
// // // // // // // //             {isLogin ? "Welcome Back" : "Create Account"}
// // // // // // // //           </h2>
// // // // // // // //           <p className="text-center text-gray-500 mb-6">
// // // // // // // //             {isLogin
// // // // // // // //               ? "Log in to view available deals"
// // // // // // // //               : "Sign up to start collaborating"}
// // // // // // // //           </p>
// // // // // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //             {!isLogin && (
// // // // // // // //               <>
// // // // // // // //                 <Input
// // // // // // // //                   id="name"
// // // // // // // //                   label="Full Name"
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Enter your full name"
// // // // // // // //                   value={formData.name}
// // // // // // // //                   onChange={handleChange}
// // // // // // // //                 />
// // // // // // // //                 <Input
// // // // // // // //                   id="marketArea"
// // // // // // // //                   label="Market Area"
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="e.g., Burla Market"
// // // // // // // //                   value={formData.marketArea}
// // // // // // // //                   onChange={handleChange}
// // // // // // // //                 />
// // // // // // // //                 <div>
// // // // // // // //                   <label
// // // // // // // //                     htmlFor="role"
// // // // // // // //                     className="block text-sm font-medium text-gray-700 mb-1"
// // // // // // // //                   >
// // // // // // // //                     I am a
// // // // // // // //                   </label>
// // // // // // // //                   <select
// // // // // // // //                     id="role"
// // // // // // // //                     value={formData.role}
// // // // // // // //                     onChange={handleChange}
// // // // // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //                   >
// // // // // // // //                     <option value="vendor">Vendor</option>
// // // // // // // //                     <option value="supplier">Supplier</option>
// // // // // // // //                   </select>
// // // // // // // //                 </div>
// // // // // // // //               </>
// // // // // // // //             )}
// // // // // // // //             <Input
// // // // // // // //               id="phone"
// // // // // // // //               label="Phone Number"
// // // // // // // //               type="tel"
// // // // // // // //               placeholder="Enter your 10-digit phone number"
// // // // // // // //               value={formData.phone}
// // // // // // // //               onChange={handleChange}
// // // // // // // //             />
// // // // // // // //             <Input
// // // // // // // //               id="password"
// // // // // // // //               label="Password"
// // // // // // // //               type="password"
// // // // // // // //               placeholder="Enter your password"
// // // // // // // //               value={formData.password}
// // // // // // // //               onChange={handleChange}
// // // // // // // //             />
// // // // // // // //             {error && (
// // // // // // // //               <p className="text-red-500 text-sm text-center">{error}</p>
// // // // // // // //             )}
// // // // // // // //             <Button type="submit" disabled={loading}>
// // // // // // // //               {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // // // // // // //             </Button>
// // // // // // // //           </form>
// // // // // // // //           <p className="text-center mt-6">
// // // // // // // //             {isLogin ? "Don't have an account?" : "Already have an account?"}
// // // // // // // //             <button
// // // // // // // //               onClick={() => setIsLogin(!isLogin)}
// // // // // // // //               className="text-blue-600 hover:underline font-semibold ml-1"
// // // // // // // //             >
// // // // // // // //               {isLogin ? "Sign Up" : "Log In"}
// // // // // // // //             </button>
// // // // // // // //           </p>
// // // // // // // //         </Card>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AuthPage;

// // // // // // // import React, { useState } from "react";
// // // // // // // import Button from "../components/ui/Button";
// // // // // // // import Card from "../components/ui/Card";
// // // // // // // import Input from "../components/ui/Input";
// // // // // // // import Hero from "../components/layout/Hero";

// // // // // // // const API_URL = "http://localhost:5002/api";

// // // // // // // const AuthPage = ({ onLogin }) => {
// // // // // // //   const [isLogin, setIsLogin] = useState(true);
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     phone: "",
// // // // // // //     password: "",
// // // // // // //     role: "vendor",
// // // // // // //     marketArea: "",
// // // // // // //   });
// // // // // // //   const [error, setError] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   const handleChange = (e) =>
// // // // // // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setLoading(true);
// // // // // // //     setError("");
// // // // // // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // // // // // //     const payload = isLogin
// // // // // // //       ? { phone: formData.phone, password: formData.password }
// // // // // // //       : formData;

// // // // // // //     try {
// // // // // // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify(payload),
// // // // // // //       });
// // // // // // //       const data = await res.json();
// // // // // // //       if (!res.ok)
// // // // // // //         throw new Error(
// // // // // // //           data.msg || `Server responded with status: ${res.status}`
// // // // // // //         );
// // // // // // //       onLogin(data.token);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Authentication Error:", err);
// // // // // // //       if (err instanceof TypeError && err.message === "Failed to fetch") {
// // // // // // //         setError("Network error: Could not connect to the server.");
// // // // // // //       } else {
// // // // // // //         setError(err.message || "An unknown error occurred.");
// // // // // // //       }
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
// // // // // // //       <Hero />
// // // // // // //       <div className="w-full max-w-md lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
// // // // // // //         <Card className="shadow-2xl animation-fade-in">
// // // // // // //           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
// // // // // // //             {isLogin ? "Welcome Back" : "Create Account"}
// // // // // // //           </h2>
// // // // // // //           <p className="text-center text-gray-500 mb-6">
// // // // // // //             {isLogin
// // // // // // //               ? "Log in to view available deals"
// // // // // // //               : "Sign up to start collaborating"}
// // // // // // //           </p>
// // // // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //             {!isLogin && (
// // // // // // //               <>
// // // // // // //                 <Input
// // // // // // //                   id="name"
// // // // // // //                   label="Full Name"
// // // // // // //                   type="text"
// // // // // // //                   placeholder="Enter your full name"
// // // // // // //                   value={formData.name}
// // // // // // //                   onChange={handleChange}
// // // // // // //                 />
// // // // // // //                 <Input
// // // // // // //                   id="marketArea"
// // // // // // //                   label="Market Area"
// // // // // // //                   type="text"
// // // // // // //                   placeholder="e.g., Burla Market"
// // // // // // //                   value={formData.marketArea}
// // // // // // //                   onChange={handleChange}
// // // // // // //                 />
// // // // // // //                 <div>
// // // // // // //                   <label
// // // // // // //                     htmlFor="role"
// // // // // // //                     className="block text-sm font-medium text-gray-700 mb-1"
// // // // // // //                   >
// // // // // // //                     I am a
// // // // // // //                   </label>
// // // // // // //                   <select
// // // // // // //                     id="role"
// // // // // // //                     value={formData.role}
// // // // // // //                     onChange={handleChange}
// // // // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // //                   >
// // // // // // //                     <option value="vendor">Vendor</option>
// // // // // // //                     <option value="supplier">Supplier</option>
// // // // // // //                   </select>
// // // // // // //                 </div>
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //             <Input
// // // // // // //               id="phone"
// // // // // // //               label="Phone Number"
// // // // // // //               type="tel"
// // // // // // //               placeholder="Enter your 10-digit phone number"
// // // // // // //               value={formData.phone}
// // // // // // //               onChange={handleChange}
// // // // // // //             />
// // // // // // //             <Input
// // // // // // //               id="password"
// // // // // // //               label="Password"
// // // // // // //               type="password"
// // // // // // //               placeholder="Enter your password"
// // // // // // //               value={formData.password}
// // // // // // //               onChange={handleChange}
// // // // // // //             />
// // // // // // //             {error && (
// // // // // // //               <p className="text-red-500 text-sm text-center">{error}</p>
// // // // // // //             )}
// // // // // // //             <Button type="submit" disabled={loading}>
// // // // // // //               {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // // // // // //             </Button>
// // // // // // //           </form>
// // // // // // //           <p className="text-center mt-6">
// // // // // // //             {isLogin ? "Don't have an account?" : "Already have an account?"}
// // // // // // //             <button
// // // // // // //               onClick={() => setIsLogin(!isLogin)}
// // // // // // //               className="text-blue-600 hover:underline font-semibold ml-1"
// // // // // // //             >
// // // // // // //               {isLogin ? "Sign Up" : "Log In"}
// // // // // // //             </button>
// // // // // // //           </p>
// // // // // // //         </Card>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AuthPage;

// // // // // // import React, { useState } from "react";
// // // // // // import Button from "../components/ui/Button";
// // // // // // import Card from "../components/ui/Card";
// // // // // // import Input from "../components/ui/Input";
// // // // // // import Hero from "../components/layout/Hero";

// // // // // // const API_URL = "http://localhost:5002/api";

// // // // // // const AuthPage = ({ onLogin }) => {
// // // // // //   const [isLogin, setIsLogin] = useState(true);
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     phone: "",
// // // // // //     password: "",
// // // // // //     role: "vendor",
// // // // // //     marketArea: "",
// // // // // //   });
// // // // // //   const [error, setError] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const handleChange = (e) =>
// // // // // //     setFormData({ ...formData, [e.target.id]: e.target.value });

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);
// // // // // //     setError("");
// // // // // //     const endpoint = isLogin ? "/auth/login" : "/auth/register";
// // // // // //     const payload = isLogin
// // // // // //       ? { phone: formData.phone, password: formData.password }
// // // // // //       : formData;

// // // // // //     try {
// // // // // //       const res = await fetch(`${API_URL}${endpoint}`, {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify(payload),
// // // // // //       });
// // // // // //       const data = await res.json();
// // // // // //       if (!res.ok)
// // // // // //         throw new Error(
// // // // // //           data.msg || `Server responded with status: ${res.status}`
// // // // // //         );
// // // // // //       onLogin(data.token);
// // // // // //     } catch (err) {
// // // // // //       console.error("Authentication Error:", err);
// // // // // //       if (err instanceof TypeError && err.message === "Failed to fetch") {
// // // // // //         setError("Network error: Could not connect to the server.");
// // // // // //       } else {
// // // // // //         setError(err.message || "An unknown error occurred.");
// // // // // //       }
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
// // // // // //       <Hero />
// // // // // //       <div className="w-full max-w-md lg:w-1/2 mt-10 lg:mt-0 lg:pl-16">
// // // // // //         <Card className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl animation-fade-in">
// // // // // //           <h2 className="text-3xl font-bold text-center text-white mb-2">
// // // // // //             {isLogin ? "Vendor Login" : "Join the Network"}
// // // // // //           </h2>
// // // // // //           <p className="text-center text-purple-200 mb-6">
// // // // // //             {isLogin
// // // // // //               ? "Log in to view available deals"
// // // // // //               : "Sign up to start collaborating"}
// // // // // //           </p>
// // // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //             {!isLogin && (
// // // // // //               <>
// // // // // //                 <Input
// // // // // //                   id="name"
// // // // // //                   label="Full Name"
// // // // // //                   type="text"
// // // // // //                   placeholder="Enter your full name"
// // // // // //                   value={formData.name}
// // // // // //                   onChange={handleChange}
// // // // // //                 />
// // // // // //                 <Input
// // // // // //                   id="marketArea"
// // // // // //                   label="Market Area"
// // // // // //                   type="text"
// // // // // //                   placeholder="e.g., Burla Market"
// // // // // //                   value={formData.marketArea}
// // // // // //                   onChange={handleChange}
// // // // // //                 />
// // // // // //                 <div>
// // // // // //                   <label
// // // // // //                     htmlFor="role"
// // // // // //                     className="block text-sm font-medium text-purple-200 mb-1"
// // // // // //                   >
// // // // // //                     I am a
// // // // // //                   </label>
// // // // // //                   <select
// // // // // //                     id="role"
// // // // // //                     value={formData.role}
// // // // // //                     onChange={handleChange}
// // // // // //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // // //                   >
// // // // // //                     <option value="vendor">Vendor</option>
// // // // // //                     <option value="supplier">Supplier</option>
// // // // // //                   </select>
// // // // // //                 </div>
// // // // // //               </>
// // // // // //             )}
// // // // // //             <Input
// // // // // //               id="phone"
// // // // // //               label="Phone Number"
// // // // // //               type="tel"
// // // // // //               placeholder="Enter your 10-digit phone number"
// // // // // //               value={formData.phone}
// // // // // //               onChange={handleChange}
// // // // // //             />
// // // // // //             <Input
// // // // // //               id="password"
// // // // // //               label="Password"
// // // // // //               type="password"
// // // // // //               placeholder="Enter your password"
// // // // // //               value={formData.password}
// // // // // //               onChange={handleChange}
// // // // // //             />
// // // // // //             {error && (
// // // // // //               <p className="text-red-300 text-sm text-center font-semibold">
// // // // // //                 {error}
// // // // // //               </p>
// // // // // //             )}
// // // // // //             <Button
// // // // // //               type="submit"
// // // // // //               disabled={loading}
// // // // // //               className="bg-white text-purple-600 hover:bg-purple-100"
// // // // // //             >
// // // // // //               {loading ? "Processing..." : isLogin ? "Login" : "Register"}
// // // // // //             </Button>
// // // // // //           </form>
// // // // // //           <p className="text-center text-purple-200 mt-6">
// // // // // //             {isLogin ? "Don't have an account?" : "Already have an account?"}
// // // // // //             <button
// // // // // //               onClick={() => setIsLogin(!isLogin)}
// // // // // //               className="text-white hover:underline font-semibold ml-1"
// // // // // //             >
// // // // // //               {isLogin ? "Sign Up" : "Log In"}
// // // // // //             </button>
// // // // // //           </p>
// // // // // //         </Card>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AuthPage;

// // // // // import React from "react";
// // // // // import Hero from "../components/layout/Hero";
// // // // // import Navbar from "../components/layout/Navbar";

// // // // // // In a full application, the login/signup form would likely be on a separate
// // // // // // page or in a modal. For this redesign, we are focusing on the landing page experience.
// // // // // // The form logic is preserved below but is not rendered.

// // // // // const AuthPage = ({ onLogin }) => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Navbar user={null} />
// // // // //       <Hero />
// // // // //       {/* The form is no longer displayed directly on the hero page to maintain a clean look.
// // // // //                 It would be triggered by the "Sign Up" or a "Login" button. */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AuthPage;

// // // // // import React, { useState } from "react";
// // // // // import Hero from "../components/layout/Hero";
// // // // // import Navbar from "../components/layout/Navbar";
// // // // // import Modal from "../components/ui/Modal";
// // // // // import AuthForm from "../components/auth/AuthForm";

// // // // // const AuthPage = ({ onLogin }) => {
// // // // //   const [showAuthModal, setShowAuthModal] = useState(false);

// // // // //   return (
// // // // //     <div>
// // // // //       <Navbar user={null} onAuthClick={() => setShowAuthModal(true)} />
// // // // //       <Hero onAuthClick={() => setShowAuthModal(true)} />

// // // // //       <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
// // // // //         <AuthForm onLogin={onLogin} />
// // // // //       </Modal>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AuthPage;

// // // // import React, { useState } from "react";
// // // // import Hero from "../components/layout/Hero";
// // // // import Navbar from "../components/layout/Navbar";
// // // // import Modal from "../components/ui/Modal";
// // // // import AuthForm from "../components/auth/AuthForm";

// // // // const HowItWorks = () => (
// // // //   <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
// // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // // //       <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
// // // //         How It Works
// // // //       </h2>
// // // //       <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
// // // //         A simple, 3-step process to save on your daily supplies.
// // // //       </p>
// // // //       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
// // // //         {/* Step 1 */}
// // // //         <div className="flex flex-col items-center">
// // // //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// // // //             1
// // // //           </div>
// // // //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// // // //             Create or Join a Deal
// // // //           </h3>
// // // //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// // // //             Find a group deal for an item you need, or start a new one if it
// // // //             doesn't exist.
// // // //           </p>
// // // //         </div>
// // // //         {/* Step 2 */}
// // // //         <div className="flex flex-col items-center">
// // // //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// // // //             2
// // // //           </div>
// // // //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// // // //             Meet the Target
// // // //           </h3>
// // // //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// // // //             Other vendors in your market join the deal until the bulk quantity
// // // //             target is met.
// // // //           </p>
// // // //         </div>
// // // //         {/* Step 3 */}
// // // //         <div className="flex flex-col items-center">
// // // //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// // // //             3
// // // //           </div>
// // // //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// // // //             Deal Confirmed
// // // //           </h3>
// // // //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// // // //             A local supplier confirms the deal. You get high-quality goods at a
// // // //             lower price!
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   </section>
// // // // );

// // // // const AuthPage = ({ onLogin, isDarkMode, toggleTheme }) => {
// // // //   const [showAuthModal, setShowAuthModal] = useState(false);
// // // //   const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'

// // // //   const handleAuthClick = (mode) => {
// // // //     setAuthMode(mode);
// // // //     setShowAuthModal(true);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <Navbar
// // // //         user={null}
// // // //         onAuthClick={handleAuthClick}
// // // //         isDarkMode={isDarkMode}
// // // //         toggleTheme={toggleTheme}
// // // //       />
// // // //       <Hero onAuthClick={handleAuthClick} />
// // // //       <HowItWorks />

// // // //       <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
// // // //         <AuthForm onLogin={onLogin} setInitialMode={authMode} />
// // // //       </Modal>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AuthPage;
// // // import React, { useState } from "react";
// // // import Hero from "../components/layout/Hero";
// // // import Navbar from "../components/layout/Navbar";
// // // import Modal from "../components/ui/Modal";
// // // import AuthForm from "../components/auth/AuthForm";

// // // const HowItWorks = () => (
// // //   <section
// // //     id="how-it-works"
// // //     className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
// // //   >
// // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // //       <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
// // //         How It Works
// // //       </h2>
// // //       <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
// // //         A simple, 3-step process to save on your daily supplies.
// // //       </p>
// // //       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
// // //         {/* Step 1 */}
// // //         <div className="flex flex-col items-center">
// // //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// // //             1
// // //           </div>
// // //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// // //             Create or Join a Deal
// // //           </h3>
// // //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// // //             Find a group deal for an item you need, or start a new one if it
// // //             doesn't exist.
// // //           </p>
// // //         </div>
// // //         {/* Step 2 */}
// // //         <div className="flex flex-col items-center">
// // //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// // //             2
// // //           </div>
// // //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// // //             Meet the Target
// // //           </h3>
// // //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// // //             Other vendors in your market join the deal until the bulk quantity
// // //             target is met.
// // //           </p>
// // //         </div>
// // //         {/* Step 3 */}
// // //         <div className="flex flex-col items-center">
// // //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// // //             3
// // //           </div>
// // //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// // //             Deal Confirmed
// // //           </h3>
// // //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// // //             A local supplier confirms the deal. You get high-quality goods at a
// // //             lower price!
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </section>
// // // );

// // // const AuthPage = ({ onLogin, isDarkMode, toggleTheme }) => {
// // //   const [showAuthModal, setShowAuthModal] = useState(false);
// // //   const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'

// // //   const handleAuthClick = (mode) => {
// // //     setAuthMode(mode);
// // //     setShowAuthModal(true);
// // //   };

// // //   return (
// // //     <div>
// // //       <Navbar
// // //         user={null}
// // //         onAuthClick={handleAuthClick}
// // //         isDarkMode={isDarkMode}
// // //         toggleTheme={toggleTheme}
// // //       />
// // //       <Hero onAuthClick={handleAuthClick} />
// // //       <HowItWorks />

// // //       <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
// // //         <AuthForm onLogin={onLogin} setInitialMode={authMode} />
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default AuthPage;
// // import React, { useState } from "react";
// // import Hero from "../components/layout/Hero";
// // import Navbar from "../components/layout/Navbar";
// // import Modal from "../components/ui/Modal";
// // import AuthForm from "../components/auth/AuthForm";

// // const HowItWorks = () => (
// //   <section
// //     id="how-it-works"
// //     className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
// //   >
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //       <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
// //         How It Works
// //       </h2>
// //       <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
// //         A simple, 3-step process to save on your daily supplies.
// //       </p>
// //       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
// //         {/* Step 1 */}
// //         <div className="flex flex-col items-center">
// //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// //             1
// //           </div>
// //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// //             Create or Join a Deal
// //           </h3>
// //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// //             Find a group deal for an item you need, or start a new one if it
// //             doesn't exist.
// //           </p>
// //         </div>
// //         {/* Step 2 */}
// //         <div className="flex flex-col items-center">
// //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// //             2
// //           </div>
// //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// //             Meet the Target
// //           </h3>
// //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// //             Other vendors in your market join the deal until the bulk quantity
// //             target is met.
// //           </p>
// //         </div>
// //         {/* Step 3 */}
// //         <div className="flex flex-col items-center">
// //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
// //             3
// //           </div>
// //           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
// //             Deal Confirmed
// //           </h3>
// //           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
// //             A local supplier confirms the deal. You get high-quality goods at a
// //             lower price!
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // const AuthPage = ({ onLogin, isDarkMode, toggleTheme }) => {
// //   const [showAuthModal, setShowAuthModal] = useState(false);
// //   const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'

// //   const handleAuthClick = (mode) => {
// //     setAuthMode(mode);
// //     setShowAuthModal(true);
// //   };

// //   return (
// //     <div className="bg-gray-50 dark:bg-gray-900">
// //       <Navbar
// //         user={null}
// //         onAuthClick={handleAuthClick}
// //         isDarkMode={isDarkMode}
// //         toggleTheme={toggleTheme}
// //       />
// //       <Hero onAuthClick={handleAuthClick} />
// //       <HowItWorks />

// //       <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
// //         <AuthForm onLogin={onLogin} setInitialMode={authMode} />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default AuthPage;

// import React, { useState } from "react";
// import Hero from "../components/layout/Hero";
// import Navbar from "../components/layout/Navbar";
// import Modal from "../components/ui/Modal";
// import AuthForm from "../components/auth/AuthForm";

// const HowItWorks = () => (
//   <section
//     id="how-it-works"
//     className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
//   >
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//       <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
//         How It Works
//       </h2>
//       <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//         A simple, 3-step process to save on your daily supplies.
//       </p>
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
//         {/* Step 1 */}
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
//             1
//           </div>
//           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
//             Create or Join a Deal
//           </h3>
//           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
//             Find a group deal for an item you need, or start a new one if it
//             doesn't exist.
//           </p>
//         </div>
//         {/* Step 2 */}
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
//             2
//           </div>
//           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
//             Meet the Target
//           </h3>
//           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
//             Other vendors in your market join the deal until the bulk quantity
//             target is met.
//           </p>
//         </div>
//         {/* Step 3 */}
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-2xl font-bold">
//             3
//           </div>
//           <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
//             Deal Confirmed
//           </h3>
//           <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
//             A local supplier confirms the deal. You get high-quality goods at a
//             lower price!
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const AuthPage = ({ onLogin, isDarkMode, toggleTheme }) => {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'

//   const handleAuthClick = (mode) => {
//     setAuthMode(mode);
//     setShowAuthModal(true);
//   };

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900">
//       <Navbar
//         user={null}
//         onAuthClick={handleAuthClick}
//         isDarkMode={isDarkMode}
//         toggleTheme={toggleTheme}
//       />
//       <Hero onAuthClick={handleAuthClick} />
//       <HowItWorks />

//       <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
//         <AuthForm onLogin={onLogin} setInitialMode={authMode} />
//       </Modal>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from "react";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import Modal from "../components/ui/Modal";
import AuthForm from "../components/auth/AuthForm";

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-extrabold text-white">How It Works</h2>
      <p className="mt-4 text-lg text-gray-300">
        A simple, 3-step process to save on your daily supplies.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 text-purple-300 text-2xl font-bold">
            1
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">
            Create or Join a Deal
          </h3>
          <p className="mt-2 text-base text-gray-400">
            Find a group deal for an item you need, or start a new one if it
            doesn't exist.
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 text-purple-300 text-2xl font-bold">
            2
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">Meet the Target</h3>
          <p className="mt-2 text-base text-gray-400">
            Other vendors in your market join the deal until the bulk quantity
            target is met.
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 text-purple-300 text-2xl font-bold">
            3
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">Deal Confirmed</h3>
          <p className="mt-2 text-base text-gray-400">
            A local supplier confirms the deal. You get high-quality goods at a
            lower price!
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AuthPage = ({ onLogin }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="bg-gray-900">
      <Navbar user={null} onAuthClick={handleAuthClick} />
      <Hero onAuthClick={handleAuthClick} />
      <HowItWorks />

      <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
        <AuthForm onLogin={onLogin} setInitialMode={authMode} />
      </Modal>
    </div>
  );
};

export default AuthPage;
