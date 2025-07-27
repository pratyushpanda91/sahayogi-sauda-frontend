// // // // import React from "react";

// // // // const Modal = ({ children, isOpen, onClose }) => {
// // // //   if (!isOpen) return null;
// // // //   return (
// // // //     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
// // // //       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md m-4 relative">
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
// // // //         >
// // // //           &times;
// // // //         </button>
// // // //         {children}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Modal;

// // // import React from "react";

// // // const Modal = ({ children, isOpen, onClose }) => {
// // //   if (!isOpen) return null;
// // //   return (
// // //     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
// // //       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md m-4 relative animation-fade-in border border-gray-200 dark:border-gray-700">
// // //         <button
// // //           onClick={onClose}
// // //           className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl font-light"
// // //         >
// // //           &times;
// // //         </button>
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Modal;

// // import React from "react";

// // const Modal = ({ children, isOpen, onClose }) => {
// //   if (!isOpen) return null;
// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
// //       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md m-4 relative animation-fade-in border border-gray-200 dark:border-gray-700">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl font-light"
// //         >
// //           &times;
// //         </button>
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Modal;
// import React from "react";

// const Modal = ({ children, isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
//       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md m-4 relative animation-fade-in border border-gray-200 dark:border-gray-700">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl font-light"
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import React from "react";

// const Modal = ({ children, isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
//       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md m-4 relative animation-fade-in border border-gray-200 dark:border-gray-700">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white text-3xl font-light"
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md m-4 relative animation-fade-in border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-3xl font-light"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
