// // // // // // import React from "react";

// // // // // // const Input = ({ id, type, placeholder, value, onChange, required = true }) => (
// // // // // //   <input
// // // // // //     id={id}
// // // // // //     type={type}
// // // // // //     placeholder={placeholder}
// // // // // //     value={value}
// // // // // //     onChange={onChange}
// // // // // //     required={required}
// // // // // //     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //   />
// // // // // // );

// // // // // // export default Input;

// // // // // // import React from "react";

// // // // // // const Input = ({ id, label, type, ...props }) => (
// // // // // //   <div>
// // // // // //     <label
// // // // // //       htmlFor={id}
// // // // // //       className="block text-sm font-medium text-gray-700 mb-1"
// // // // // //     >
// // // // // //       {label}
// // // // // //     </label>
// // // // // //     <input
// // // // // //       id={id}
// // // // // //       type={type}
// // // // // //       {...props}
// // // // // //       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //     />
// // // // // //   </div>
// // // // // // );

// // // // // // export default Input;

// // // // // import React from "react";

// // // // // const Input = ({ id, label, type, ...props }) => (
// // // // //   <div>
// // // // //     <label
// // // // //       htmlFor={id}
// // // // //       className="block text-sm font-medium text-gray-700 mb-1"
// // // // //     >
// // // // //       {label}
// // // // //     </label>
// // // // //     <input
// // // // //       id={id}
// // // // //       type={type}
// // // // //       {...props}
// // // // //       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //     />
// // // // //   </div>
// // // // // );

// // // // // export default Input;
// // // // import React from "react";

// // // // const Input = ({ id, label, type, ...props }) => (
// // // //   <div>
// // // //     <label
// // // //       htmlFor={id}
// // // //       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
// // // //     >
// // // //       {label}
// // // //     </label>
// // // //     <input
// // // //       id={id}
// // // //       type={type}
// // // //       {...props}
// // // //       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
// // // //     />
// // // //   </div>
// // // // );

// // // // export default Input;

// // // import React from "react";

// // // const Input = ({ id, label, type, ...props }) => (
// // //   <div>
// // //     <label
// // //       htmlFor={id}
// // //       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
// // //     >
// // //       {label}
// // //     </label>
// // //     <input
// // //       id={id}
// // //       type={type}
// // //       {...props}
// // //       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
// // //     />
// // //   </div>
// // // );

// // // export default Input;

// // import React from "react";

// // const Input = ({ id, label, type, ...props }) => (
// //   <div>
// //     <label
// //       htmlFor={id}
// //       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
// //     >
// //       {label}
// //     </label>
// //     <input
// //       id={id}
// //       type={type}
// //       {...props}
// //       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
// //     />
// //   </div>
// // );

// // export default Input;

// import React from "react";

// const Input = ({ id, label, type, ...props }) => (
//   <div>
//     <label
//       htmlFor={id}
//       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//     >
//       {label}
//     </label>
//     <input
//       id={id}
//       type={type}
//       {...props}
//       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
//     />
//   </div>
// );

// export default Input;

import React from "react";

const Input = ({ id, label, type, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-300 mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...props}
      className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-gray-200"
    />
  </div>
);

export default Input;
