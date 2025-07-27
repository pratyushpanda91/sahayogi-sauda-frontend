// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import reactLogo from "./assets/react.svg";
// // // // // // // // // // import viteLogo from "/vite.svg";

// // // // // // // // // // function App() {
// // // // // // // // // //   const [count, setCount] = useState(0);

// // // // // // // // // //   return <div className="text-3xl font-bold underline">App</div>;
// // // // // // // // // // }

// // // // // // // // // // export default App;

// // // // // // // // // // import React from "react";
// // // // // // // // // // import ReactDOM from "react-dom/client";
// // // // // // // // // // import App from "./App.jsx";
// // // // // // // // // // import "./index.css";

// // // // // // // // // // ReactDOM.createRoot(document.getElementById("root")).render(
// // // // // // // // // //   <React.StrictMode>
// // // // // // // // // //     <App />
// // // // // // // // // //   </React.StrictMode>
// // // // // // // // // // );

// // // // // // // // // // import React from "react";
// // // // // // // // // // import { useAuth } from "./hooks/useAuth";
// // // // // // // // // // import Navbar from "./components/layout/Navbar";
// // // // // // // // // // import AuthPage from "./pages/AuthPage";
// // // // // // // // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // // // // // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // // // // // // // export default function App() {
// // // // // // // // // //   const { token, user, login, logout } = useAuth();

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="bg-gray-50 min-h-screen font-sans">
// // // // // // // // // //       <Navbar user={user} onLogout={logout} />
// // // // // // // // // //       <main>
// // // // // // // // // //         {!token ? (
// // // // // // // // // //           <AuthPage onLogin={login} />
// // // // // // // // // //         ) : user?.role === "vendor" ? (
// // // // // // // // // //           <VendorDashboard token={token} user={user} />
// // // // // // // // // //         ) : user?.role === "supplier" ? (
// // // // // // // // // //           <SupplierDashboard token={token} user={user} />
// // // // // // // // // //         ) : (
// // // // // // // // // //           <div className="p-10 text-center text-red-500">
// // // // // // // // // //             Error: User role is not recognized. Please log out and try again.
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </main>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // import React from "react";
// // // // // // // // // import { useAuth } from "./hooks/useAuth";
// // // // // // // // // import Navbar from "./components/layout/Navbar";
// // // // // // // // // import AuthPage from "./pages/AuthPage";
// // // // // // // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // // // // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // // // // // // export default function App() {
// // // // // // // // //   const { token, user, login, logout } = useAuth();

// // // // // // // // //   return (
// // // // // // // // //     <div className="font-sans">
// // // // // // // // //       {token && <Navbar user={user} onLogout={logout} />}
// // // // // // // // //       <main>
// // // // // // // // //         {!token ? (
// // // // // // // // //           <AuthPage onLogin={login} />
// // // // // // // // //         ) : user?.role === "vendor" ? (
// // // // // // // // //           <VendorDashboard token={token} user={user} />
// // // // // // // // //         ) : user?.role === "supplier" ? (
// // // // // // // // //           <SupplierDashboard token={token} user={user} />
// // // // // // // // //         ) : (
// // // // // // // // //           <div className="p-10 text-center text-red-500">
// // // // // // // // //             Error: User role is not recognized. Please log out and try again.
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </main>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import React from "react";
// // // // // // // // import { useAuth } from "./hooks/useAuth";
// // // // // // // // import Navbar from "./components/layout/Navbar";
// // // // // // // // import AuthPage from "./pages/AuthPage";
// // // // // // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // // // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // // // // // export default function App() {
// // // // // // // //   const { token, user, login, logout } = useAuth();

// // // // // // // //   // Set a consistent background for the entire app experience
// // // // // // // //   const backgroundClass = token ? "bg-slate-100" : "bg-white";

// // // // // // // //   return (
// // // // // // // //     <div className={`font-sans min-h-screen ${backgroundClass}`}>
// // // // // // // //       <main>
// // // // // // // //         {!token ? (
// // // // // // // //           <AuthPage onLogin={login} />
// // // // // // // //         ) : (
// // // // // // // //           <>
// // // // // // // //             <Navbar user={user} onLogout={logout} />
// // // // // // // //             {user?.role === "vendor" ? (
// // // // // // // //               <VendorDashboard token={token} user={user} />
// // // // // // // //             ) : user?.role === "supplier" ? (
// // // // // // // //               <SupplierDashboard token={token} user={user} />
// // // // // // // //             ) : (
// // // // // // // //               <div className="p-10 text-center text-red-500">
// // // // // // // //                 Error: User role is not recognized. Please log out and try
// // // // // // // //                 again.
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </>
// // // // // // // //         )}
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // import React from "react";
// // // // // // // // import { useAuth } from "./hooks/useAuth";
// // // // // // // // import Navbar from "./components/layout/Navbar";
// // // // // // // // import AuthPage from "./pages/AuthPage";
// // // // // // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // // // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // // // // // export default function App() {
// // // // // // // //   const { token, user, login, logout } = useAuth();

// // // // // // // //   // Set a consistent background for the entire app experience
// // // // // // // //   const backgroundClass = token ? "bg-slate-100" : "bg-white";

// // // // // // // //   return (
// // // // // // // //     <div className={`font-sans min-h-screen ${backgroundClass}`}>
// // // // // // // //       <main>
// // // // // // // //         {!token ? (
// // // // // // // //           <AuthPage onLogin={login} />
// // // // // // // //         ) : (
// // // // // // // //           <>
// // // // // // // //             <Navbar user={user} onLogout={logout} />
// // // // // // // //             {user?.role === "vendor" ? (
// // // // // // // //               <VendorDashboard token={token} user={user} />
// // // // // // // //             ) : user?.role === "supplier" ? (
// // // // // // // //               <SupplierDashboard token={token} user={user} />
// // // // // // // //             ) : (
// // // // // // // //               <div className="p-10 text-center text-red-500">
// // // // // // // //                 Error: User role is not recognized. Please log out and try
// // // // // // // //                 again.
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </>
// // // // // // // //         )}
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useAuth } from "./hooks/useAuth";
// // // // // // // import Navbar from "./components/layout/Navbar";
// // // // // // // import AuthPage from "./pages/AuthPage";
// // // // // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // // // // export default function App() {
// // // // // // //   const { token, user, login, logout } = useAuth();
// // // // // // //   const [isDarkMode, setIsDarkMode] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const isDark = localStorage.getItem("theme") === "dark";
// // // // // // //     setIsDarkMode(isDark);
// // // // // // //   }, []);

// // // // // // //   useEffect(() => {
// // // // // // //     if (isDarkMode) {
// // // // // // //       document.documentElement.classList.add("dark");
// // // // // // //       document.body.classList.add("dark");
// // // // // // //       localStorage.setItem("theme", "dark");
// // // // // // //     } else {
// // // // // // //       document.documentElement.classList.remove("dark");
// // // // // // //       document.body.classList.remove("dark");
// // // // // // //       localStorage.setItem("theme", "light");
// // // // // // //     }
// // // // // // //   }, [isDarkMode]);

// // // // // // //   const toggleTheme = () => {
// // // // // // //     setIsDarkMode((prevMode) => !prevMode);
// // // // // // //   };

// // // // // // //   const backgroundClass = token
// // // // // // //     ? "bg-gray-100 dark:bg-gray-900"
// // // // // // //     : "bg-white dark:bg-gray-900";

// // // // // // //   return (
// // // // // // //     <div className={`font-sans min-h-screen ${backgroundClass}`}>
// // // // // // //       <main>
// // // // // // //         {!token ? (
// // // // // // //           <AuthPage
// // // // // // //             onLogin={login}
// // // // // // //             isDarkMode={isDarkMode}
// // // // // // //             toggleTheme={toggleTheme}
// // // // // // //           />
// // // // // // //         ) : (
// // // // // // //           <>
// // // // // // //             <Navbar
// // // // // // //               user={user}
// // // // // // //               onLogout={logout}
// // // // // // //               isDarkMode={isDarkMode}
// // // // // // //               toggleTheme={toggleTheme}
// // // // // // //             />
// // // // // // //             {user?.role === "vendor" ? (
// // // // // // //               <VendorDashboard token={token} user={user} />
// // // // // // //             ) : user?.role === "supplier" ? (
// // // // // // //               <SupplierDashboard token={token} user={user} />
// // // // // // //             ) : (
// // // // // // //               <div className="p-10 text-center text-red-500">
// // // // // // //                 Error: User role is not recognized. Please log out and try
// // // // // // //                 again.
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useAuth } from "./hooks/useAuth";
// // // // // // import Navbar from "./components/layout/Navbar";
// // // // // // import AuthPage from "./pages/AuthPage";
// // // // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // // // export default function App() {
// // // // // //   const { token, user, login, logout } = useAuth();
// // // // // //   const [isDarkMode, setIsDarkMode] = useState(() => {
// // // // // //     // Check for saved theme in localStorage or user's OS preference
// // // // // //     if (localStorage.theme === "dark") {
// // // // // //       return true;
// // // // // //     }
// // // // // //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
// // // // // //   });

// // // // // //   useEffect(() => {
// // // // // //     if (isDarkMode) {
// // // // // //       document.documentElement.classList.add("dark");
// // // // // //       document.body.classList.add("dark");
// // // // // //       localStorage.setItem("theme", "dark");
// // // // // //     } else {
// // // // // //       document.documentElement.classList.remove("dark");
// // // // // //       document.body.classList.remove("dark");
// // // // // //       localStorage.setItem("theme", "light");
// // // // // //     }
// // // // // //   }, [isDarkMode]);

// // // // // //   const toggleTheme = () => {
// // // // // //     setIsDarkMode((prevMode) => !prevMode);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="font-sans min-h-screen">
// // // // // //       <main>
// // // // // //         {!token ? (
// // // // // //           <AuthPage
// // // // // //             onLogin={login}
// // // // // //             isDarkMode={isDarkMode}
// // // // // //             toggleTheme={toggleTheme}
// // // // // //           />
// // // // // //         ) : (
// // // // // //           <>
// // // // // //             <Navbar
// // // // // //               user={user}
// // // // // //               onLogout={logout}
// // // // // //               isDarkMode={isDarkMode}
// // // // // //               toggleTheme={toggleTheme}
// // // // // //             />
// // // // // //             {user?.role === "vendor" ? (
// // // // // //               <VendorDashboard token={token} user={user} />
// // // // // //             ) : user?.role === "supplier" ? (
// // // // // //               <SupplierDashboard token={token} user={user} />
// // // // // //             ) : (
// // // // // //               <div className="p-10 text-center text-red-500">
// // // // // //                 Error: User role is not recognized. Please log out and try
// // // // // //                 again.
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </>
// // // // // //         )}
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useAuth } from './hooks/useAuth';
// // // // // import Navbar from './components/layout/Navbar';
// // // // // import AuthPage from './pages/AuthPage';
// // // // // import VendorDashboard from './pages/VendorDashboard';
// // // // // import SupplierDashboard from './pages/SupplierDashboard';

// // // // // export default function App() {
// // // // //     const { token, user, login, logout } = useAuth();
// // // // //     const [isDarkMode, setIsDarkMode] = useState(() => {
// // // // //         if (localStorage.theme === 'dark') {
// // // // //             return true;
// // // // //         }
// // // // //         return window.matchMedia('(prefers-color-scheme: dark)').matches;
// // // // //     });

// // // // //     useEffect(() => {
// // // // //         if (isDarkMode) {
// // // // //             document.documentElement.classList.add('dark');
// // // // //             document.body.classList.add('dark');
// // // // //             localStorage.setItem('theme', 'dark');
// // // // //         } else {
// // // // //             document.documentElement.classList.remove('dark');
// // // // //             document.body.classList.remove('dark');
// // // // //             localStorage.setItem('theme', 'light');
// // // // //         }
// // // // //     }, [isDarkMode]);

// // // // //     const toggleTheme = () => {
// // // // //         setIsDarkMode(prevMode => !prevMode);
// // // // //     };

// // // // //     return (
// // // // //         <div className="font-sans min-h-screen">
// // // // //             <main>
// // // // //                 {!token ? (
// // // // //                     <AuthPage onLogin={login} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
// // // // //                 ) : (
// // // // //                     <>
// // // // //                         <Navbar user={user} onLogout={logout} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
// // // // //                         {user?.role === 'vendor' ? (
// // // // //                             <VendorDashboard token={token} user={user} />
// // // // //                         ) : user?.role === 'supplier' ? (
// // // // //                             <SupplierDashboard token={token} user={user} />
// // // // //                         ) : (
// // // // //                             <div className="p-10 text-center text-red-500">
// // // // //                                 Error: User role is not recognized. Please log out and try again.
// // // // //                             </div>
// // // // //                         )}
// // // // //                     </>
// // // // //                 )}
// // // // //             </main>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // import React, { useState, useEffect } from "react";
// // // // import { useAuth } from "./hooks/useAuth";
// // // // import Navbar from "./components/layout/Navbar";
// // // // import AuthPage from "./pages/AuthPage";
// // // // import VendorDashboard from "./pages/VendorDashboard";
// // // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // // export default function App() {
// // // //   const { token, user, login, logout } = useAuth();
// // // //   const [isDarkMode, setIsDarkMode] = useState(() => {
// // // //     if (localStorage.theme === "dark") {
// // // //       return true;
// // // //     }
// // // //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
// // // //   });

// // // //   useEffect(() => {
// // // //     if (isDarkMode) {
// // // //       document.documentElement.classList.add("dark");
// // // //       document.body.classList.add("dark");
// // // //       localStorage.setItem("theme", "dark");
// // // //     } else {
// // // //       document.documentElement.classList.remove("dark");
// // // //       document.body.classList.remove("dark");
// // // //       localStorage.setItem("theme", "light");
// // // //     }
// // // //   }, [isDarkMode]);

// // // //   const toggleTheme = () => {
// // // //     setIsDarkMode((prevMode) => !prevMode);
// // // //   };

// // // //   return (
// // // //     <div className="font-sans min-h-screen">
// // // //       <main>
// // // //         {!token ? (
// // // //           <AuthPage
// // // //             onLogin={login}
// // // //             isDarkMode={isDarkMode}
// // // //             toggleTheme={toggleTheme}
// // // //           />
// // // //         ) : (
// // // //           <>
// // // //             <Navbar
// // // //               user={user}
// // // //               onLogout={logout}
// // // //               isDarkMode={isDarkMode}
// // // //               toggleTheme={toggleTheme}
// // // //             />
// // // //             {user?.role === "vendor" ? (
// // // //               <VendorDashboard token={token} user={user} />
// // // //             ) : user?.role === "supplier" ? (
// // // //               <SupplierDashboard token={token} user={user} />
// // // //             ) : (
// // // //               <div className="p-10 text-center text-red-500">
// // // //                 Error: User role is not recognized. Please log out and try
// // // //                 again.
// // // //               </div>
// // // //             )}
// // // //           </>
// // // //         )}
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useEffect } from "react";
// // // import { useAuth } from "./hooks/useAuth";
// // // import Navbar from "./components/layout/Navbar";
// // // import AuthPage from "./pages/AuthPage";
// // // import VendorDashboard from "./pages/VendorDashboard";
// // // import SupplierDashboard from "./pages/SupplierDashboard";

// // // export default function App() {
// // //   const { token, user, login, logout } = useAuth();
// // //   const [isDarkMode, setIsDarkMode] = useState(() => {
// // //     // On initial load, prefer localStorage, then OS preference
// // //     if (localStorage.theme === "dark") return true;
// // //     if (localStorage.theme === "light") return false;
// // //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
// // //   });

// // //   useEffect(() => {
// // //     // This effect synchronizes the component state with the DOM and localStorage
// // //     const root = window.document.documentElement;
// // //     if (isDarkMode) {
// // //       root.classList.add("dark");
// // //       localStorage.setItem("theme", "dark");
// // //     } else {
// // //       root.classList.remove("dark");
// // //       localStorage.setItem("theme", "light");
// // //     }
// // //   }, [isDarkMode]);

// // //   const toggleTheme = () => {
// // //     setIsDarkMode((prevMode) => !prevMode);
// // //   };

// // //   return (
// // //     <div className="font-sans min-h-screen">
// // //       <main>
// // //         {!token ? (
// // //           <AuthPage
// // //             onLogin={login}
// // //             isDarkMode={isDarkMode}
// // //             toggleTheme={toggleTheme}
// // //           />
// // //         ) : (
// // //           <>
// // //             <Navbar
// // //               user={user}
// // //               onLogout={logout}
// // //               isDarkMode={isDarkMode}
// // //               toggleTheme={toggleTheme}
// // //             />
// // //             {user?.role === "vendor" ? (
// // //               <VendorDashboard token={token} user={user} />
// // //             ) : user?.role === "supplier" ? (
// // //               <SupplierDashboard token={token} user={user} />
// // //             ) : (
// // //               <div className="p-10 text-center text-red-500">
// // //                 Error: User role is not recognized. Please log out and try
// // //                 again.
// // //               </div>
// // //             )}
// // //           </>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect } from "react";
// // import { useAuth } from "./hooks/useAuth";
// // import Navbar from "./components/layout/Navbar";
// // import AuthPage from "./pages/AuthPage";
// // import VendorDashboard from "./pages/VendorDashboard";
// // import SupplierDashboard from "./pages/SupplierDashboard";

// // export default function App() {
// //   const { token, user, login, logout } = useAuth();
// //   const [isDarkMode, setIsDarkMode] = useState(() => {
// //     // On initial load, prefer localStorage, then OS preference
// //     if (localStorage.theme === "dark") return true;
// //     if (localStorage.theme === "light") return false;
// //     return window.matchMedia("(prefers-color-scheme: dark)").matches;
// //   });

// //   useEffect(() => {
// //     // This effect synchronizes the component state with the DOM and localStorage
// //     const root = window.document.documentElement;
// //     const body = window.document.body;

// //     if (isDarkMode) {
// //       root.classList.add("dark");
// //       body.classList.add("dark"); // This line is crucial for body background styles
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       root.classList.remove("dark");
// //       body.classList.remove("dark"); // This line is crucial for body background styles
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [isDarkMode]);

// //   const toggleTheme = () => {
// //     setIsDarkMode((prevMode) => !prevMode);
// //   };

// //   return (
// //     <div className="font-sans min-h-screen">
// //       <main>
// //         {!token ? (
// //           <AuthPage
// //             onLogin={login}
// //             isDarkMode={isDarkMode}
// //             toggleTheme={toggleTheme}
// //           />
// //         ) : (
// //           <>
// //             <Navbar
// //               user={user}
// //               onLogout={logout}
// //               isDarkMode={isDarkMode}
// //               toggleTheme={toggleTheme}
// //             />
// //             {user?.role === "vendor" ? (
// //               <VendorDashboard token={token} user={user} />
// //             ) : user?.role === "supplier" ? (
// //               <SupplierDashboard token={token} user={user} />
// //             ) : (
// //               <div className="p-10 text-center text-red-500">
// //                 Error: User role is not recognized. Please log out and try
// //                 again.
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </main>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { useAuth } from "./hooks/useAuth";
// import Navbar from "./components/layout/Navbar";
// import AuthPage from "./pages/AuthPage";
// import VendorDashboard from "./pages/VendorDashboard";
// import SupplierDashboard from "./pages/SupplierDashboard";

// export default function App() {
//   const { token, user, login, logout } = useAuth();
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     if (localStorage.theme === "dark") return true;
//     if (localStorage.theme === "light") return false;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     const body = window.document.body;

//     if (isDarkMode) {
//       root.classList.add("dark");
//       body.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       body.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className="font-sans min-h-screen">
//       <main>
//         {!token ? (
//           <AuthPage
//             onLogin={login}
//             isDarkMode={isDarkMode}
//             toggleTheme={toggleTheme}
//           />
//         ) : (
//           <>
//             <Navbar
//               user={user}
//               onLogout={logout}
//               isDarkMode={isDarkMode}
//               toggleTheme={toggleTheme}
//             />
//             {user?.role === "vendor" ? (
//               <VendorDashboard token={token} user={user} />
//             ) : user?.role === "supplier" ? (
//               <SupplierDashboard token={token} user={user} />
//             ) : (
//               <div className="p-10 text-center text-red-500">
//                 Error: User role is not recognized. Please log out and try
//                 again.
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/layout/Navbar";
import AuthPage from "./pages/AuthPage";
import VendorDashboard from "./pages/VendorDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";

export default function App() {
  const { token, user, login, logout } = useAuth();

  // Set dark mode permanently
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="font-sans min-h-screen">
      <main>
        {!token ? (
          <AuthPage onLogin={login} />
        ) : (
          <>
            <Navbar user={user} onLogout={logout} />
            {user?.role === "vendor" ? (
              <VendorDashboard token={token} user={user} />
            ) : user?.role === "supplier" ? (
              <SupplierDashboard token={token} user={user} />
            ) : (
              <div className="p-10 text-center text-red-500">
                Error: User role is not recognized. Please log out and try
                again.
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
