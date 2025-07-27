// // import React from "react";

// // const Button = ({
// //   children,
// //   onClick,
// //   className = "",
// //   type = "button",
// //   disabled = false,
// // }) => (
// //   <button
// //     type={type}
// //     onClick={onClick}
// //     disabled={disabled}
// //     className={`w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
// //   >
// //     {children}
// //   </button>
// // );

// // export default Button;

// import React from "react";

// const Button = ({
//   children,
//   onClick,
//   className = "",
//   type = "button",
//   disabled = false,
// }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     disabled={disabled}
//     className={`w-full px-4 py-2.5 font-bold text-white rounded-lg transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
//   >
//     {children}
//   </button>
// );

// export default Button;

import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full px-4 py-2.5 font-bold text-white rounded-lg transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

export default Button;
