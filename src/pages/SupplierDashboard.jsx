// // // // // import React, { useState, useEffect, useCallback } from "react";
// // // // // import Button from "../components/ui/Button";
// // // // // import Card from "../components/ui/Card";
// // // // // import Notification from "../components/ui/Notification";

// // // // // const API_URL = "http://localhost:5002/api";

// // // // // const SupplierDashboard = ({ token, user }) => {
// // // // //   const [deals, setDeals] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState("");
// // // // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // // // //   const fetchFilledDeals = useCallback(async () => {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/supplier/filled-deals`, {
// // // // //         headers: { "x-auth-token": token },
// // // // //       });
// // // // //       if (!res.ok) throw new Error("Failed to fetch deals");
// // // // //       const data = await res.json();
// // // // //       setDeals(data);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }, [token]);

// // // // //   useEffect(() => {
// // // // //     fetchFilledDeals();
// // // // //   }, [fetchFilledDeals]);

// // // // //   const handleConfirmDeal = async (dealId) => {
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/supplier/confirm/${dealId}`, {
// // // // //         method: "PUT",
// // // // //         headers: { "x-auth-token": token },
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (!res.ok) throw new Error(data.msg || "Failed to confirm deal");
// // // // //       setNotification({
// // // // //         message: "Deal confirmed! Ready for fulfillment.",
// // // // //         type: "success",
// // // // //       });
// // // // //       fetchFilledDeals();
// // // // //     } catch (err) {
// // // // //       setNotification({ message: err.message, type: "error" });
// // // // //     }
// // // // //   };

// // // // //   if (loading)
// // // // //     return <div className="text-center p-10">Loading available deals...</div>;
// // // // //   if (error)
// // // // //     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

// // // // //   return (
// // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // // //       <Notification
// // // // //         message={notification.message}
// // // // //         type={notification.type}
// // // // //         onClose={() => setNotification({ message: "", type: "" })}
// // // // //       />
// // // // //       <h2 className="text-3xl font-bold text-gray-800 mb-6">
// // // // //         Ready for Fulfillment
// // // // //       </h2>

// // // // //       {deals.length === 0 ? (
// // // // //         <Card className="text-center">
// // // // //           <p className="text-gray-500">
// // // // //             No deals are ready for fulfillment in your market area yet.
// // // // //           </p>
// // // // //         </Card>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {deals.map((deal) => (
// // // // //             <Card
// // // // //               key={deal._id}
// // // // //               className="flex flex-col justify-between bg-green-50"
// // // // //             >
// // // // //               <div>
// // // // //                 <h3 className="text-xl font-bold text-gray-900">
// // // // //                   {deal.itemName}
// // // // //                 </h3>
// // // // //                 <p className="text-lg font-semibold text-gray-700 mt-1">
// // // // //                   Total: {deal.currentQuantity} {deal.unit} @ ₹
// // // // //                   {deal.pricePerUnit}/{deal.unit}
// // // // //                 </p>
// // // // //                 <p className="text-2xl font-bold text-green-600 mt-1">
// // // // //                   Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
// // // // //                 </p>
// // // // //                 <div className="mt-4 text-sm text-gray-600">
// // // // //                   <p>Created by: {deal.createdBy.name}</p>
// // // // //                   <p>Phone: {deal.createdBy.phone}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <Button
// // // // //                 onClick={() => handleConfirmDeal(deal._id)}
// // // // //                 className="mt-4 bg-green-600 hover:bg-green-700"
// // // // //               >
// // // // //                 Accept & Confirm
// // // // //               </Button>
// // // // //             </Card>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SupplierDashboard;

// // // // import React, { useState, useEffect, useCallback } from "react";
// // // // import Button from "../components/ui/Button";
// // // // import Card from "../components/ui/Card";
// // // // import Notification from "../components/ui/Notification";

// // // // const API_URL = "http://localhost:5002/api";

// // // // const SupplierDashboard = ({ token, user }) => {
// // // //   // ... (state and functions remain the same)
// // // //   const [deals, setDeals] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");
// // // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // // //   const fetchFilledDeals = useCallback(async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await fetch(`${API_URL}/supplier/filled-deals`, {
// // // //         headers: { "x-auth-token": token },
// // // //       });
// // // //       if (!res.ok) throw new Error("Failed to fetch deals");
// // // //       const data = await res.json();
// // // //       setDeals(data);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }, [token]);

// // // //   useEffect(() => {
// // // //     fetchFilledDeals();
// // // //   }, [fetchFilledDeals]);

// // // //   const handleConfirmDeal = async (dealId) => {
// // // //     try {
// // // //       const res = await fetch(`${API_URL}/supplier/confirm/${dealId}`, {
// // // //         method: "PUT",
// // // //         headers: { "x-auth-token": token },
// // // //       });
// // // //       const data = await res.json();
// // // //       if (!res.ok) throw new Error(data.msg || "Failed to confirm deal");
// // // //       setNotification({
// // // //         message: "Deal confirmed! Ready for fulfillment.",
// // // //         type: "success",
// // // //       });
// // // //       fetchFilledDeals();
// // // //     } catch (err) {
// // // //       setNotification({ message: err.message, type: "error" });
// // // //     }
// // // //   };

// // // //   if (loading)
// // // //     return (
// // // //       <div className="text-center p-10 font-semibold text-gray-600">
// // // //         Loading available deals...
// // // //       </div>
// // // //     );
// // // //   if (error)
// // // //     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

// // // //   return (
// // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animation-fade-in">
// // // //       <Notification
// // // //         message={notification.message}
// // // //         type={notification.type}
// // // //         onClose={() => setNotification({ message: "", type: "" })}
// // // //       />
// // // //       <div className="mb-8">
// // // //         <h2 className="text-3xl font-bold text-gray-800">
// // // //           Ready for Fulfillment
// // // //         </h2>
// // // //         <p className="text-gray-500 mt-1">
// // // //           These deals have met their targets and are ready for your
// // // //           confirmation.
// // // //         </p>
// // // //       </div>

// // // //       {deals.length === 0 ? (
// // // //         <div className="text-center bg-white rounded-lg shadow-sm p-12">
// // // //           <svg
// // // //             className="mx-auto h-12 w-12 text-gray-400"
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             fill="none"
// // // //             viewBox="0 0 24 24"
// // // //             stroke="currentColor"
// // // //           >
// // // //             <path
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               strokeWidth={2}
// // // //               d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
// // // //             />
// // // //           </svg>
// // // //           <h3 className="mt-2 text-sm font-medium text-gray-900">
// // // //             No deals to fulfill
// // // //           </h3>
// // // //           <p className="mt-1 text-sm text-gray-500">
// // // //             Check back later when vendors have filled a group order.
// // // //           </p>
// // // //         </div>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {deals.map((deal) => (
// // // //             <Card
// // // //               key={deal._id}
// // // //               className={`flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 ${
// // // //                 deal.status === "confirmed" ? "bg-green-50" : "bg-white"
// // // //               }`}
// // // //             >
// // // //               <div>
// // // //                 <div className="flex justify-between items-start">
// // // //                   <h3 className="text-2xl font-bold text-gray-900">
// // // //                     {deal.itemName}
// // // //                   </h3>
// // // //                   <span
// // // //                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
// // // //                       deal.status === "confirmed"
// // // //                         ? "bg-green-200 text-green-800"
// // // //                         : "bg-yellow-100 text-yellow-800"
// // // //                     }`}
// // // //                   >
// // // //                     {deal.status === "confirmed" ? "Confirmed" : "Ready"}
// // // //                   </span>
// // // //                 </div>
// // // //                 <p className="text-lg font-semibold text-gray-700 mt-2">
// // // //                   Total: {deal.currentQuantity} {deal.unit} @ ₹
// // // //                   {deal.pricePerUnit}/{deal.unit}
// // // //                 </p>
// // // //                 <p className="text-3xl font-bold text-green-600 mt-1">
// // // //                   Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
// // // //                 </p>
// // // //                 <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
// // // //                   <p className="font-semibold">Deal Initiator:</p>
// // // //                   <p>
// // // //                     {deal.createdBy.name} ({deal.createdBy.phone})
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //               {deal.status !== "confirmed" && (
// // // //                 <Button
// // // //                   onClick={() => handleConfirmDeal(deal._id)}
// // // //                   className="mt-4 bg-green-600 hover:bg-green-700"
// // // //                 >
// // // //                   Accept & Confirm
// // // //                 </Button>
// // // //               )}
// // // //             </Card>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SupplierDashboard;

// // // import React, { useState, useEffect, useCallback } from "react";
// // // import Button from "../components/ui/Button";
// // // import Card from "../components/ui/Card";
// // // import Notification from "../components/ui/Notification";

// // // const API_URL = "http://localhost:5002/api";

// // // const SupplierDashboard = ({ token }) => {
// // //   // ... (state and functions remain the same)
// // //   const [deals, setDeals] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");
// // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // //   const fetchFilledDeals = useCallback(async () => {
// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch(`${API_URL}/supplier/filled-deals`, {
// // //         headers: { "x-auth-token": token },
// // //       });
// // //       if (!res.ok) throw new Error("Failed to fetch deals");
// // //       const data = await res.json();
// // //       setDeals(data);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }, [token]);

// // //   useEffect(() => {
// // //     fetchFilledDeals();
// // //   }, [fetchFilledDeals]);

// // //   const handleConfirmDeal = async (dealId) => {
// // //     try {
// // //       const res = await fetch(`${API_URL}/supplier/confirm/${dealId}`, {
// // //         method: "PUT",
// // //         headers: { "x-auth-token": token },
// // //       });
// // //       const data = await res.json();
// // //       if (!res.ok) throw new Error(data.msg || "Failed to confirm deal");
// // //       setNotification({
// // //         message: "Deal confirmed! Ready for fulfillment.",
// // //         type: "success",
// // //       });
// // //       fetchFilledDeals();
// // //     } catch (err) {
// // //       setNotification({ message: err.message, type: "error" });
// // //     }
// // //   };

// // //   if (loading)
// // //     return (
// // //       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
// // //         Loading available deals...
// // //       </div>
// // //     );
// // //   if (error)
// // //     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

// // //   return (
// // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animation-fade-in">
// // //       <Notification
// // //         message={notification.message}
// // //         type={notification.type}
// // //         onClose={() => setNotification({ message: "", type: "" })}
// // //       />
// // //       <div className="mb-8">
// // //         <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
// // //           Ready for Fulfillment
// // //         </h2>
// // //         <p className="text-gray-500 dark:text-gray-400 mt-1">
// // //           These deals have met their targets and are ready for your
// // //           confirmation.
// // //         </p>
// // //       </div>

// // //       {deals.length === 0 ? (
// // //         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
// // //           <svg
// // //             className="mx-auto h-12 w-12 text-gray-400"
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               strokeWidth={2}
// // //               d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
// // //             />
// // //           </svg>
// // //           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
// // //             No deals to fulfill
// // //           </h3>
// // //           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
// // //             Check back later when vendors have filled a group order.
// // //           </p>
// // //         </div>
// // //       ) : (
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {deals.map((deal) => (
// // //             <Card
// // //               key={deal._id}
// // //               className={`flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 ${
// // //                 deal.status === "confirmed"
// // //                   ? "bg-green-50 dark:bg-green-900/50"
// // //                   : "bg-white dark:bg-gray-800"
// // //               }`}
// // //             >
// // //               <div>
// // //                 <div className="flex justify-between items-start">
// // //                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// // //                     {deal.itemName}
// // //                   </h3>
// // //                   <span
// // //                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
// // //                       deal.status === "confirmed"
// // //                         ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300"
// // //                         : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
// // //                     }`}
// // //                   >
// // //                     {deal.status === "confirmed" ? "Confirmed" : "Ready"}
// // //                   </span>
// // //                 </div>
// // //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
// // //                   Total: {deal.currentQuantity} {deal.unit} @ ₹
// // //                   {deal.pricePerUnit}/{deal.unit}
// // //                 </p>
// // //                 <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">
// // //                   Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
// // //                 </p>
// // //                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
// // //                   <p className="font-semibold text-gray-700 dark:text-gray-300">
// // //                     Deal Initiator:
// // //                   </p>
// // //                   <p>
// // //                     {deal.createdBy.name} ({deal.createdBy.phone})
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               {deal.status !== "confirmed" && (
// // //                 <Button
// // //                   onClick={() => handleConfirmDeal(deal._id)}
// // //                   className="mt-4 bg-green-600 hover:bg-green-700"
// // //                 >
// // //                   Accept & Confirm
// // //                 </Button>
// // //               )}
// // //             </Card>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SupplierDashboard;

// // import React, { useState, useEffect, useCallback } from "react";
// // import Button from "../components/ui/Button";
// // import Card from "../components/ui/Card";
// // import Notification from "../components/ui/Notification";

// // const API_URL = "http://localhost:5002/api";

// // const SupplierDashboard = ({ token }) => {
// //   const [deals, setDeals] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [notification, setNotification] = useState({ message: "", type: "" });

// //   const fetchFilledDeals = useCallback(async () => {
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API_URL}/supplier/filled-deals`, {
// //         headers: { "x-auth-token": token },
// //       });
// //       if (!res.ok) throw new Error("Failed to fetch deals");
// //       const data = await res.json();
// //       setDeals(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [token]);

// //   useEffect(() => {
// //     fetchFilledDeals();
// //   }, [fetchFilledDeals]);

// //   const handleConfirmDeal = async (dealId) => {
// //     try {
// //       const res = await fetch(`${API_URL}/supplier/confirm/${dealId}`, {
// //         method: "PUT",
// //         headers: { "x-auth-token": token },
// //       });
// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.msg || "Failed to confirm deal");
// //       setNotification({
// //         message: "Deal confirmed! Ready for fulfillment.",
// //         type: "success",
// //       });
// //       fetchFilledDeals();
// //     } catch (err) {
// //       setNotification({ message: err.message, type: "error" });
// //     }
// //   };

// //   if (loading)
// //     return (
// //       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
// //         Loading available deals...
// //       </div>
// //     );
// //   if (error)
// //     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animation-fade-in">
// //       <Notification
// //         message={notification.message}
// //         type={notification.type}
// //         onClose={() => setNotification({ message: "", type: "" })}
// //       />
// //       <div className="mb-8">
// //         <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
// //           Ready for Fulfillment
// //         </h2>
// //         <p className="text-gray-500 dark:text-gray-400 mt-1">
// //           These deals have met their targets and are ready for your
// //           confirmation.
// //         </p>
// //       </div>

// //       {deals.length === 0 ? (
// //         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
// //           <svg
// //             className="mx-auto h-12 w-12 text-gray-400"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
// //             />
// //           </svg>
// //           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
// //             No deals to fulfill
// //           </h3>
// //           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
// //             Check back later when vendors have filled a group order.
// //           </p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {deals.map((deal) => (
// //             <Card
// //               key={deal._id}
// //               className={`flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 ${
// //                 deal.status === "confirmed"
// //                   ? "bg-green-50 dark:bg-green-900/50"
// //                   : "bg-white dark:bg-gray-800"
// //               }`}
// //             >
// //               <div>
// //                 <div className="flex justify-between items-start">
// //                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// //                     {deal.itemName}
// //                   </h3>
// //                   <span
// //                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
// //                       deal.status === "confirmed"
// //                         ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300"
// //                         : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
// //                     }`}
// //                   >
// //                     {deal.status === "confirmed" ? "Confirmed" : "Ready"}
// //                   </span>
// //                 </div>
// //                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
// //                   Total: {deal.currentQuantity} {deal.unit} @ ₹
// //                   {deal.pricePerUnit}/{deal.unit}
// //                 </p>
// //                 <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">
// //                   Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
// //                 </p>
// //                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
// //                   <p className="font-semibold text-gray-700 dark:text-gray-300">
// //                     Deal Initiator:
// //                   </p>
// //                   <p>
// //                     {deal.createdBy.name} ({deal.createdBy.phone})
// //                   </p>
// //                 </div>
// //               </div>
// //               {deal.status !== "confirmed" && (
// //                 <Button
// //                   onClick={() => handleConfirmDeal(deal._id)}
// //                   className="mt-4 bg-green-600 hover:bg-green-700"
// //                 >
// //                   Accept & Confirm
// //                 </Button>
// //               )}
// //             </Card>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SupplierDashboard;

// import React, { useState, useEffect, useCallback } from "react";
// import Button from "../components/ui/Button";
// import Card from "../components/ui/Card";
// import Notification from "../components/ui/Notification";

// const API_URL = "http://localhost:5002/api";

// const SupplierDashboard = ({ token }) => {
//   const [deals, setDeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [notification, setNotification] = useState({ message: "", type: "" });

//   const fetchFilledDeals = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/supplier/filled-deals`, {
//         headers: { "x-auth-token": token },
//       });
//       if (!res.ok) throw new Error("Failed to fetch deals");
//       const data = await res.json();
//       setDeals(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [token]);

//   useEffect(() => {
//     fetchFilledDeals();
//   }, [fetchFilledDeals]);

//   const handleConfirmDeal = async (dealId) => {
//     try {
//       const res = await fetch(`${API_URL}/supplier/confirm/${dealId}`, {
//         method: "PUT",
//         headers: { "x-auth-token": token },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.msg || "Failed to confirm deal");
//       setNotification({
//         message: "Deal confirmed! Ready for fulfillment.",
//         type: "success",
//       });
//       fetchFilledDeals();
//     } catch (err) {
//       setNotification({ message: err.message, type: "error" });
//     }
//   };

//   if (loading)
//     return (
//       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
//         Loading available deals...
//       </div>
//     );
//   if (error)
//     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animation-fade-in">
//       <Notification
//         message={notification.message}
//         type={notification.type}
//         onClose={() => setNotification({ message: "", type: "" })}
//       />
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
//           Ready for Fulfillment
//         </h2>
//         <p className="text-gray-500 dark:text-gray-400 mt-1">
//           These deals have met their targets and are ready for your
//           confirmation.
//         </p>
//       </div>

//       {deals.length === 0 ? (
//         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
//           <svg
//             className="mx-auto h-12 w-12 text-gray-400"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//             />
//           </svg>
//           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
//             No deals to fulfill
//           </h3>
//           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//             Check back later when vendors have filled a group order.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {deals.map((deal) => (
//             <Card
//               key={deal._id}
//               className={`flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 ${
//                 deal.status === "confirmed"
//                   ? "bg-green-50 dark:bg-green-900/50"
//                   : "bg-white dark:bg-gray-800"
//               }`}
//             >
//               <div>
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                     {deal.itemName}
//                   </h3>
//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       deal.status === "confirmed"
//                         ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300"
//                         : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
//                     }`}
//                   >
//                     {deal.status === "confirmed" ? "Confirmed" : "Ready"}
//                   </span>
//                 </div>
//                 <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
//                   Total: {deal.currentQuantity} {deal.unit} @ ₹
//                   {deal.pricePerUnit}/{deal.unit}
//                 </p>
//                 <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">
//                   Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
//                 </p>
//                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
//                   <p className="font-semibold text-gray-700 dark:text-gray-300">
//                     Deal Initiator:
//                   </p>
//                   <p>
//                     {deal.createdBy.name} ({deal.createdBy.phone})
//                   </p>
//                 </div>
//               </div>
//               {deal.status !== "confirmed" && (
//                 <Button
//                   onClick={() => handleConfirmDeal(deal._id)}
//                   className="mt-4 bg-green-600 hover:bg-green-700"
//                 >
//                   Accept & Confirm
//                 </Button>
//               )}
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SupplierDashboard;

import React, { useState, useEffect, useCallback } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Notification from "../components/ui/Notification";

const API_URL = import.meta.env.VITE_API_URL;

const SupplierDashboard = ({ token }) => {
  const [filledDeals, setFilledDeals] = useState([]);
  const [confirmedDeals, setConfirmedDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
      const [filledRes, confirmedRes] = await Promise.all([
        fetch(`${API_URL}/supplier/filled-deals`, {
          headers: { "x-auth-token": token },
        }),
        fetch(`${API_URL}/supplier/confirmed-deals`, {
          headers: { "x-auth-token": token },
        }),
      ]);
      if (!filledRes.ok || !confirmedRes.ok)
        throw new Error("Failed to fetch supplier data");

      const filledData = await filledRes.json();
      const confirmedData = await confirmedRes.json();

      setFilledDeals(filledData);
      setConfirmedDeals(confirmedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const handleConfirmDeal = async (dealId) => {
    try {
      const res = await fetch(`${API_URL}/supplier/confirm/${dealId}`, {
        method: "PUT",
        headers: { "x-auth-token": token },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Failed to confirm deal");
      setNotification({
        message: "Deal confirmed! Ready for fulfillment.",
        type: "success",
      });
      fetchAllData(); // Refresh both lists
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  if (loading)
    return (
      <div className="text-center p-10 font-semibold text-gray-400">
        Loading available deals...
      </div>
    );
  if (error)
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animation-fade-in">
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />

      {/* Ready for Fulfillment Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white">Ready for Fulfillment</h2>
        <p className="text-gray-400 mt-1">
          These deals have met their targets and are ready for your
          confirmation.
        </p>
        {filledDeals.length === 0 ? (
          <div className="text-center bg-gray-800 rounded-lg shadow-sm p-8 mt-4">
            <p className="text-gray-400">
              No new deals are ready for fulfillment.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filledDeals.map((deal) => (
              <Card
                key={deal._id}
                className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-gray-800"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white">
                      {deal.itemName}
                    </h3>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-yellow-900 text-yellow-300">
                      Ready
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-300 mt-2">
                    Total: {deal.currentQuantity} {deal.unit} @ ₹
                    {deal.pricePerUnit}/{deal.unit}
                  </p>
                  <p className="text-3xl font-bold text-green-400 mt-1">
                    Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400">
                    <p className="font-semibold text-gray-300">
                      Deal Initiator:
                    </p>
                    <p>
                      {deal.createdBy.name} ({deal.createdBy.phone})
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => handleConfirmDeal(deal._id)}
                  className="mt-4 bg-green-600 hover:bg-green-700"
                >
                  Accept & Confirm
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Accepted Orders Section */}
      <div>
        <h2 className="text-3xl font-bold text-white">Accepted Orders</h2>
        <p className="text-gray-400 mt-1">
          A list of deals you have already confirmed.
        </p>
        {confirmedDeals.length === 0 ? (
          <div className="text-center bg-gray-800 rounded-lg shadow-sm p-8 mt-4">
            <p className="text-gray-400">
              You have not accepted any orders yet.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {confirmedDeals.map((deal) => (
              <Card key={deal._id} className="bg-green-900/50">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white">
                      {deal.itemName}
                    </h3>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-green-900 text-green-300">
                      Confirmed
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-300 mt-2">
                    Total: {deal.currentQuantity} {deal.unit}
                  </p>
                  <p className="text-3xl font-bold text-green-400 mt-1">
                    Order Value: ₹{deal.currentQuantity * deal.pricePerUnit}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierDashboard;
