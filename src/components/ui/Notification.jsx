// // import React, { useEffect } from "react";

// // const Notification = ({ message, type, onClose }) => {
// //   if (!message) return null;
// //   const baseStyle =
// //     "fixed top-20 right-5 p-4 rounded-lg shadow-lg text-white z-50 animate-fade-in-down";
// //   const typeStyle = type === "success" ? "bg-green-500" : "bg-red-500";

// //   useEffect(() => {
// //     const timer = setTimeout(onClose, 3000);
// //     return () => clearTimeout(timer);
// //   }, [onClose]);

// //   return (
// //     <div className={`${baseStyle} ${typeStyle}`}>
// //       {message}
// //       <button onClick={onClose} className="ml-4 font-bold">
// //         X
// //       </button>
// //     </div>
// //   );
// // };

// // export default Notification;

// import React, { useEffect } from "react";

// const Notification = ({ message, type, onClose }) => {
//   if (!message) return null;
//   const baseStyle =
//     "fixed top-24 right-5 p-4 rounded-lg shadow-lg text-white z-50 animation-fade-in";
//   const typeStyle = type === "success" ? "bg-green-500" : "bg-red-500";

//   useEffect(() => {
//     const timer = setTimeout(onClose, 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className={`${baseStyle} ${typeStyle}`}>
//       {message}
//       <button onClick={onClose} className="ml-4 font-bold">
//         X
//       </button>
//     </div>
//   );
// };

// export default Notification;

import React, { useEffect } from "react";

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;
  const baseStyle =
    "fixed top-24 right-5 p-4 rounded-lg shadow-lg text-white z-50 animation-fade-in";
  const typeStyle = type === "success" ? "bg-green-500" : "bg-red-500";

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${baseStyle} ${typeStyle}`}>
      {message}
      <button onClick={onClose} className="ml-4 font-bold">
        X
      </button>
    </div>
  );
};

export default Notification;
