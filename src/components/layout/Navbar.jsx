// // // // // // // // import React from "react";
// // // // // // // // import Button from "../ui/Button";

// // // // // // // // const Navbar = ({ user, onLogout }) => (
// // // // // // // //   <nav className="bg-white shadow-sm sticky top-0 z-50">
// // // // // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // // //       <div className="flex justify-between items-center h-16">
// // // // // // // //         <div className="flex-shrink-0">
// // // // // // // //           <h1 className="text-2xl font-bold text-gray-800">
// // // // // // // //             🤝 Sahayogi Sauda
// // // // // // // //           </h1>
// // // // // // // //         </div>
// // // // // // // //         {user && (
// // // // // // // //           <div className="flex items-center space-x-4">
// // // // // // // //             <span className="text-gray-600 hidden sm:block">
// // // // // // // //               Welcome, <span className="font-semibold">{user.role}</span> @{" "}
// // // // // // // //               <span className="font-semibold">{user.marketArea}</span>
// // // // // // // //             </span>
// // // // // // // //             <Button
// // // // // // // //               onClick={onLogout}
// // // // // // // //               className="w-auto bg-red-500 hover:bg-red-600"
// // // // // // // //             >
// // // // // // // //               Logout
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   </nav>
// // // // // // // // );

// // // // // // // // export default Navbar;

// // // // // // // import React from "react";

// // // // // // // const Navbar = ({ user, onLogout }) => (
// // // // // // //   <nav className="bg-white/30 backdrop-blur-lg shadow-sm sticky top-0 z-50">
// // // // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // //       <div className="flex justify-between items-center h-16">
// // // // // // //         <div className="flex-shrink-0">
// // // // // // //           <h1 className="text-2xl font-bold text-white flex items-center">
// // // // // // //             <span className="text-3xl mr-2">🤝</span>
// // // // // // //             Sahayogi Sauda
// // // // // // //           </h1>
// // // // // // //         </div>
// // // // // // //         {user && (
// // // // // // //           <div className="flex items-center space-x-4">
// // // // // // //             <div className="text-right hidden sm:block">
// // // // // // //               <p className="text-white font-semibold capitalize">{user.role}</p>
// // // // // // //               <p className="text-purple-200 text-sm">{user.marketArea}</p>
// // // // // // //             </div>
// // // // // // //             <button
// // // // // // //               onClick={onLogout}
// // // // // // //               className="px-4 py-2 font-semibold text-purple-600 bg-white rounded-lg hover:bg-purple-100 transition duration-200"
// // // // // // //             >
// // // // // // //               Logout
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   </nav>
// // // // // // // );

// // // // // // // export default Navbar;
// // // // // // import React from "react";

// // // // // // const Navbar = ({ user, onLogout }) => (
// // // // // //   <nav className="bg-transparent sticky top-0 z-50">
// // // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //       <div className="flex justify-between items-center h-20 border-b border-gray-200">
// // // // // //         <div className="flex-shrink-0">
// // // // // //           <h1 className="text-2xl font-bold text-gray-800 flex items-center">
// // // // // //             <span className="text-3xl mr-2">🤝</span>
// // // // // //             Sahayogi Sauda
// // // // // //           </h1>
// // // // // //         </div>
// // // // // //         {user ? (
// // // // // //           <div className="flex items-center space-x-4">
// // // // // //             <div className="text-right hidden sm:block">
// // // // // //               <p className="text-gray-800 font-semibold capitalize">
// // // // // //                 {user.role}
// // // // // //               </p>
// // // // // //               <p className="text-gray-500 text-sm">{user.marketArea}</p>
// // // // // //             </div>
// // // // // //             <button
// // // // // //               onClick={onLogout}
// // // // // //               className="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
// // // // // //             >
// // // // // //               Logout
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <button className="px-5 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition duration-200">
// // // // // //             Sign Up
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   </nav>
// // // // // // );

// // // // // // export default Navbar;

// // // // // import React from "react";

// // // // // const Navbar = ({ user, onLogout, onAuthClick }) => (
// // // // //   <nav className="bg-transparent sticky top-0 z-50">
// // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //       <div className="flex justify-between items-center h-20 border-b border-gray-200">
// // // // //         <div className="flex-shrink-0">
// // // // //           <h1 className="text-2xl font-bold text-gray-800 flex items-center">
// // // // //             <span className="text-3xl mr-2">🤝</span>
// // // // //             Sahayogi Sauda
// // // // //           </h1>
// // // // //         </div>
// // // // //         {user ? (
// // // // //           <div className="flex items-center space-x-4">
// // // // //             <div className="text-right hidden sm:block">
// // // // //               <p className="text-gray-800 font-semibold capitalize">
// // // // //                 {user.role}
// // // // //               </p>
// // // // //               <p className="text-gray-500 text-sm">{user.marketArea}</p>
// // // // //             </div>
// // // // //             <button
// // // // //               onClick={onLogout}
// // // // //               className="px-4 py-2 font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
// // // // //             >
// // // // //               Logout
// // // // //             </button>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <button
// // // // //             onClick={onAuthClick}
// // // // //             className="px-5 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition duration-200"
// // // // //           >
// // // // //             Sign Up
// // // // //           </button>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   </nav>
// // // // // );

// // // // // export default Navbar;

// // // // import React from "react";

// // // // const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
// // // //   <button
// // // //     onClick={toggleTheme}
// // // //     className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
// // // //   >
// // // //     {isDarkMode ? (
// // // //       <svg
// // // //         xmlns="http://www.w3.org/2000/svg"
// // // //         className="h-5 w-5"
// // // //         viewBox="0 0 20 20"
// // // //         fill="currentColor"
// // // //       >
// // // //         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
// // // //       </svg>
// // // //     ) : (
// // // //       <svg
// // // //         xmlns="http://www.w3.org/2000/svg"
// // // //         className="h-5 w-5"
// // // //         viewBox="0 0 20 20"
// // // //         fill="currentColor"
// // // //       >
// // // //         <path
// // // //           fillRule="evenodd"
// // // //           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-3.536a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 10a1 1 0 01-1-1H2a1 1 0 110-2h1a1 1 0 011 1zm1.636 3.536a1 1 0 010 1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm3.536-2.121a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
// // // //           clipRule="evenodd"
// // // //         />
// // // //       </svg>
// // // //     )}
// // // //   </button>
// // // // );

// // // // const Navbar = ({ user, onLogout, onAuthClick, isDarkMode, toggleTheme }) => (
// // // //   <nav className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
// // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //       <div className="flex justify-between items-center h-20 border-b border-gray-200 dark:border-gray-700">
// // // //         <div className="flex-shrink-0">
// // // //           <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
// // // //             <span className="text-3xl mr-2">🤝</span>
// // // //             Sahayogi Sauda
// // // //           </h1>
// // // //         </div>
// // // //         <div className="flex items-center space-x-4">
// // // //           <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
// // // //           {user ? (
// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="text-right hidden sm:block">
// // // //                 <p className="text-gray-800 dark:text-white font-semibold capitalize">
// // // //                   {user.role}
// // // //                 </p>
// // // //                 <p className="text-gray-500 dark:text-gray-400 text-sm">
// // // //                   {user.marketArea}
// // // //                 </p>
// // // //               </div>
// // // //               <button
// // // //                 onClick={onLogout}
// // // //                 className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
// // // //               >
// // // //                 Logout
// // // //               </button>
// // // //             </div>
// // // //           ) : (
// // // //             <button
// // // //               onClick={() => onAuthClick("signup")}
// // // //               className="px-5 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition duration-200"
// // // //             >
// // // //               Sign Up
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   </nav>
// // // // );

// // // // export default Navbar;
// // // import React from "react";

// // // const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
// // //   <button
// // //     onClick={toggleTheme}
// // //     className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
// // //   >
// // //     {isDarkMode ? (
// // //       <svg
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-5 w-5"
// // //         viewBox="0 0 20 20"
// // //         fill="currentColor"
// // //       >
// // //         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
// // //       </svg>
// // //     ) : (
// // //       <svg
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-5 w-5"
// // //         viewBox="0 0 20 20"
// // //         fill="currentColor"
// // //       >
// // //         <path
// // //           fillRule="evenodd"
// // //           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-3.536a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 10a1 1 0 01-1-1H2a1 1 0 110-2h1a1 1 0 011 1zm1.636 3.536a1 1 0 010 1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm3.536-2.121a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
// // //           clipRule="evenodd"
// // //         />
// // //       </svg>
// // //     )}
// // //   </button>
// // // );

// // // const Navbar = ({ user, onLogout, onAuthClick, isDarkMode, toggleTheme }) => (
// // //   <nav className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
// // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //       <div className="flex justify-between items-center h-20 border-b border-gray-200 dark:border-gray-700">
// // //         <div className="flex-shrink-0">
// // //           <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
// // //             <span className="text-3xl mr-2">🤝</span>
// // //             Sahayogi Sauda
// // //           </h1>
// // //         </div>
// // //         <div className="flex items-center space-x-4">
// // //           <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
// // //           {user ? (
// // //             <div className="flex items-center space-x-4">
// // //               <div className="text-right hidden sm:block">
// // //                 <p className="text-gray-800 dark:text-white font-semibold capitalize">
// // //                   {user.role}
// // //                 </p>
// // //                 <p className="text-gray-500 dark:text-gray-400 text-sm">
// // //                   {user.marketArea}
// // //                 </p>
// // //               </div>
// // //               <button
// // //                 onClick={onLogout}
// // //                 className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
// // //               >
// // //                 Logout
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <div className="flex items-center space-x-2">
// // //               <button
// // //                 onClick={() => onAuthClick("login")}
// // //                 className="px-5 py-2 font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
// // //               >
// // //                 Login
// // //               </button>
// // //               <button
// // //                 onClick={() => onAuthClick("signup")}
// // //                 className="px-5 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition duration-200"
// // //               >
// // //                 Sign Up
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </nav>
// // // );

// // // export default Navbar;

// // import React from "react";

// // const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
// //   <button
// //     onClick={toggleTheme}
// //     className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
// //   >
// //     {isDarkMode ? (
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         className="h-5 w-5"
// //         viewBox="0 0 20 20"
// //         fill="currentColor"
// //       >
// //         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
// //       </svg>
// //     ) : (
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         className="h-5 w-5"
// //         viewBox="0 0 20 20"
// //         fill="currentColor"
// //       >
// //         <path
// //           fillRule="evenodd"
// //           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-3.536a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 10a1 1 0 01-1-1H2a1 1 0 110-2h1a1 1 0 011 1zm1.636 3.536a1 1 0 010 1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm3.536-2.121a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
// //           clipRule="evenodd"
// //         />
// //       </svg>
// //     )}
// //   </button>
// // );

// // const Navbar = ({ user, onLogout, onAuthClick, isDarkMode, toggleTheme }) => (
// //   <nav className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="flex justify-between items-center h-20 border-b border-gray-200 dark:border-gray-700">
// //         <div className="flex-shrink-0">
// //           <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
// //             <span className="text-3xl mr-2">🤝</span>
// //             Sahayogi Sauda
// //           </h1>
// //         </div>
// //         <div className="flex items-center space-x-4">
// //           <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
// //           {user ? (
// //             <div className="flex items-center space-x-4">
// //               <div className="text-right hidden sm:block">
// //                 <p className="text-gray-800 dark:text-white font-semibold capitalize">
// //                   {user.role}
// //                 </p>
// //                 <p className="text-gray-500 dark:text-gray-400 text-sm">
// //                   {user.marketArea}
// //                 </p>
// //               </div>
// //               <button
// //                 onClick={onLogout}
// //                 className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
// //               >
// //                 Logout
// //               </button>
// //             </div>
// //           ) : (
// //             <div className="flex items-center space-x-2">
// //               <button
// //                 onClick={() => onAuthClick("login")}
// //                 className="px-5 py-2 font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
// //               >
// //                 Login
// //               </button>
// //               <button
// //                 onClick={() => onAuthClick("signup")}
// //                 className="px-5 py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
// //               >
// //                 Sign Up
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   </nav>
// // );

// // export default Navbar;

// import React from "react";

// const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
//   <button
//     onClick={toggleTheme}
//     className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
//   >
//     {isDarkMode ? (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//       </svg>
//     ) : (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="currentColor"
//       >
//         <path
//           fillRule="evenodd"
//           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-3.536a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 10a1 1 0 01-1-1H2a1 1 0 110-2h1a1 1 0 011 1zm1.636 3.536a1 1 0 010 1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm3.536-2.121a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z"
//           clipRule="evenodd"
//         />
//       </svg>
//     )}
//   </button>
// );

// const Navbar = ({ user, onLogout, onAuthClick, isDarkMode, toggleTheme }) => (
//   <nav className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex justify-between items-center h-20 border-b border-gray-200 dark:border-gray-700">
//         <div className="flex-shrink-0">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
//             <span className="text-3xl mr-2">🤝</span>
//             Sahayogi Sauda
//           </h1>
//         </div>
//         <div className="flex items-center space-x-4">
//           <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <div className="text-right hidden sm:block">
//                 <p className="text-gray-800 dark:text-white font-semibold capitalize">
//                   {user.role}
//                 </p>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">
//                   {user.marketArea}
//                 </p>
//               </div>
//               <button
//                 onClick={onLogout}
//                 className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => onAuthClick("login")}
//                 className="px-5 py-2 font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => onAuthClick("signup")}
//                 className="px-5 py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
//               >
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

import React from "react";

const Navbar = ({ user, onLogout, onAuthClick }) => (
  <nav className="bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20 border-b border-gray-700">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <span className="text-3xl mr-2">🤝</span>
            Sahayogi Sauda
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-white font-semibold capitalize">
                  {user.role}
                </p>
                <p className="text-gray-400 text-sm">{user.marketArea}</p>
              </div>
              <button
                onClick={onLogout}
                className="px-4 py-2 font-semibold bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onAuthClick("login")}
                className="px-5 py-2 font-semibold text-gray-200 rounded-lg hover:bg-gray-800 transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => onAuthClick("signup")}
                className="px-5 py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
