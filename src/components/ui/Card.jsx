// import React from "react";

// const Card = ({ children, className = "" }) => (
//   <div
//     className={`bg-white rounded-xl shadow-md overflow-hidden p-6 ${className}`}
//   >
//     {children}
//   </div>
// );

// export default Card;

// import React from "react";

// const Card = ({ children, className = "" }) => (
//   <div className={`rounded-xl shadow-md overflow-hidden p-6 ${className}`}>
//     {children}
//   </div>
// );

// export default Card;

import React from "react";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl shadow-md overflow-hidden p-6 ${className}`}>
    {children}
  </div>
);

export default Card;
