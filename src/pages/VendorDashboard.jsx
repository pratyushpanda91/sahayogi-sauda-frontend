// // // // // import React, { useState, useEffect, useCallback } from "react";
// // // // // import Button from "../components/ui/Button";
// // // // // import Card from "../components/ui/Card";
// // // // // import Input from "../components/ui/Input";
// // // // // import Modal from "../components/ui/Modal";
// // // // // import Notification from "../components/ui/Notification";

// // // // // const API_URL = "http://localhost:5002/api";

// // // // // const VendorDashboard = ({ token, user }) => {
// // // // //   const [deals, setDeals] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState("");
// // // // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // // // //   const [isJoinModalOpen, setJoinModalOpen] = useState(false);
// // // // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // // // //   const [selectedDeal, setSelectedDeal] = useState(null);
// // // // //   const [joinQuantity, setJoinQuantity] = useState(1);
// // // // //   const [createDealData, setCreateDealData] = useState({
// // // // //     itemName: "",
// // // // //     targetQuantity: "",
// // // // //     pricePerUnit: "",
// // // // //     unit: "kg",
// // // // //   });

// // // // //   const fetchDeals = useCallback(async () => {
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/deals`, {
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
// // // // //     fetchDeals();
// // // // //   }, [fetchDeals]);

// // // // //   const handleJoinDeal = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // // // //         body: JSON.stringify({ quantity: Number(joinQuantity) }),
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (!res.ok) throw new Error(data.msg || "Failed to join deal");
// // // // //       setNotification({
// // // // //         message: "Successfully joined deal!",
// // // // //         type: "success",
// // // // //       });
// // // // //       fetchDeals();
// // // // //       setJoinModalOpen(false);
// // // // //     } catch (err) {
// // // // //       setNotification({ message: err.message, type: "error" });
// // // // //     }
// // // // //   };

// // // // //   const handleCreateDeal = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/deals`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // // // //         body: JSON.stringify({
// // // // //           ...createDealData,
// // // // //           targetQuantity: Number(createDealData.targetQuantity),
// // // // //           pricePerUnit: Number(createDealData.pricePerUnit),
// // // // //         }),
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (!res.ok) throw new Error(data.msg || "Failed to create deal");
// // // // //       setNotification({ message: "New deal created!", type: "success" });
// // // // //       fetchDeals();
// // // // //       setCreateModalOpen(false);
// // // // //       setCreateDealData({
// // // // //         itemName: "",
// // // // //         targetQuantity: "",
// // // // //         pricePerUnit: "",
// // // // //         unit: "kg",
// // // // //       });
// // // // //     } catch (err) {
// // // // //       setNotification({ message: err.message, type: "error" });
// // // // //     }
// // // // //   };

// // // // //   const openJoinModal = (deal) => {
// // // // //     setSelectedDeal(deal);
// // // // //     setJoinQuantity(1);
// // // // //     setJoinModalOpen(true);
// // // // //   };

// // // // //   if (loading) return <div className="text-center p-10">Loading deals...</div>;
// // // // //   if (error)
// // // // //     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

// // // // //   return (
// // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // // //       <Notification
// // // // //         message={notification.message}
// // // // //         type={notification.type}
// // // // //         onClose={() => setNotification({ message: "", type: "" })}
// // // // //       />

// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h2 className="text-3xl font-bold text-gray-800">Active Group Deals</h2>
// // // // //         <Button onClick={() => setCreateModalOpen(true)} className="w-auto">
// // // // //           Create New Deal
// // // // //         </Button>
// // // // //       </div>

// // // // //       {deals.length === 0 ? (
// // // // //         <Card className="text-center">
// // // // //           <p className="text-gray-500">
// // // // //             No active deals in your market area right now.
// // // // //           </p>
// // // // //           <p className="text-gray-500 mt-2">Why not start one?</p>
// // // // //         </Card>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {deals.map((deal) => (
// // // // //             <Card key={deal._id} className="flex flex-col justify-between">
// // // // //               <div>
// // // // //                 <h3 className="text-xl font-bold text-gray-900">
// // // // //                   {deal.itemName}
// // // // //                 </h3>
// // // // //                 <p className="text-2xl font-bold text-blue-600 mt-1">
// // // // //                   ₹{deal.pricePerUnit} / {deal.unit}
// // // // //                 </p>
// // // // //                 <div className="w-full bg-gray-200 rounded-full h-4 my-4">
// // // // //                   <div
// // // // //                     className="bg-green-500 h-4 rounded-full"
// // // // //                     style={{
// // // // //                       width: `${
// // // // //                         (deal.currentQuantity / deal.targetQuantity) * 100
// // // // //                       }%`,
// // // // //                     }}
// // // // //                   ></div>
// // // // //                 </div>
// // // // //                 <p className="text-sm text-gray-600 text-center font-semibold">
// // // // //                   {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}{" "}
// // // // //                   filled
// // // // //                 </p>
// // // // //               </div>
// // // // //               <Button onClick={() => openJoinModal(deal)} className="mt-4">
// // // // //                 Join Deal
// // // // //               </Button>
// // // // //             </Card>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
// // // // //         <h3 className="text-2xl font-bold mb-4">
// // // // //           Join Deal: {selectedDeal?.itemName}
// // // // //         </h3>
// // // // //         <form onSubmit={handleJoinDeal}>
// // // // //           <label
// // // // //             htmlFor="quantity"
// // // // //             className="block text-sm font-medium text-gray-700 mb-1"
// // // // //           >
// // // // //             How much do you need? ({selectedDeal?.unit})
// // // // //           </label>
// // // // //           <Input
// // // // //             id="quantity"
// // // // //             type="number"
// // // // //             placeholder="e.g., 5"
// // // // //             value={joinQuantity}
// // // // //             onChange={(e) => setJoinQuantity(e.target.value)}
// // // // //           />
// // // // //           <Button type="submit" className="mt-4">
// // // // //             Confirm
// // // // //           </Button>
// // // // //         </form>
// // // // //       </Modal>

// // // // //       <Modal
// // // // //         isOpen={isCreateModalOpen}
// // // // //         onClose={() => setCreateModalOpen(false)}
// // // // //       >
// // // // //         <h3 className="text-2xl font-bold mb-4">Create a New Deal</h3>
// // // // //         <form onSubmit={handleCreateDeal} className="space-y-4">
// // // // //           <Input
// // // // //             id="itemName"
// // // // //             type="text"
// // // // //             placeholder="Item Name (e.g., Onions)"
// // // // //             value={createDealData.itemName}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({ ...createDealData, itemName: e.target.value })
// // // // //             }
// // // // //           />
// // // // //           <Input
// // // // //             id="targetQuantity"
// // // // //             type="number"
// // // // //             placeholder="Target Quantity (e.g., 50)"
// // // // //             value={createDealData.targetQuantity}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({
// // // // //                 ...createDealData,
// // // // //                 targetQuantity: e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />
// // // // //           <Input
// // // // //             id="pricePerUnit"
// // // // //             type="number"
// // // // //             placeholder="Price per Unit (e.g., 20)"
// // // // //             value={createDealData.pricePerUnit}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({
// // // // //                 ...createDealData,
// // // // //                 pricePerUnit: e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />
// // // // //           <Input
// // // // //             id="unit"
// // // // //             type="text"
// // // // //             placeholder="Unit (e.g., kg)"
// // // // //             value={createDealData.unit}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({ ...createDealData, unit: e.target.value })
// // // // //             }
// // // // //           />
// // // // //           <Button type="submit">Create Deal</Button>
// // // // //         </form>
// // // // //       </Modal>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default VendorDashboard;

// // // // import React, { useState, useEffect, useCallback } from "react";
// // // // import Button from "../components/ui/Button";
// // // // import Card from "../components/ui/Card";
// // // // import Input from "../components/ui/Input";
// // // // import Modal from "../components/ui/Modal";
// // // // import Notification from "../components/ui/Notification";

// // // // const API_URL = "http://localhost:5002/api";

// // // // const VendorDashboard = ({ token }) => {
// // // //   // ... (state and functions remain the same)
// // // //   const [deals, setDeals] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");
// // // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // // //   const [isJoinModalOpen, setJoinModalOpen] = useState(false);
// // // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // // //   const [selectedDeal, setSelectedDeal] = useState(null);
// // // //   const [joinQuantity, setJoinQuantity] = useState(1);
// // // //   const [createDealData, setCreateDealData] = useState({
// // // //     itemName: "",
// // // //     targetQuantity: "",
// // // //     pricePerUnit: "",
// // // //     unit: "kg",
// // // //   });

// // // //   const fetchDeals = useCallback(async () => {
// // // //     try {
// // // //       const res = await fetch(`${API_URL}/deals`, {
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
// // // //     fetchDeals();
// // // //   }, [fetchDeals]);

// // // //   const handleJoinDeal = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // // //         body: JSON.stringify({ quantity: Number(joinQuantity) }),
// // // //       });
// // // //       const data = await res.json();
// // // //       if (!res.ok) throw new Error(data.msg || "Failed to join deal");
// // // //       setNotification({
// // // //         message: "Successfully joined deal!",
// // // //         type: "success",
// // // //       });
// // // //       fetchDeals();
// // // //       setJoinModalOpen(false);
// // // //     } catch (err) {
// // // //       setNotification({ message: err.message, type: "error" });
// // // //     }
// // // //   };

// // // //   const handleCreateDeal = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await fetch(`${API_URL}/deals`, {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // // //         body: JSON.stringify({
// // // //           ...createDealData,
// // // //           targetQuantity: Number(createDealData.targetQuantity),
// // // //           pricePerUnit: Number(createDealData.pricePerUnit),
// // // //         }),
// // // //       });
// // // //       const data = await res.json();
// // // //       if (!res.ok) throw new Error(data.msg || "Failed to create deal");
// // // //       setNotification({ message: "New deal created!", type: "success" });
// // // //       fetchDeals();
// // // //       setCreateModalOpen(false);
// // // //       setCreateDealData({
// // // //         itemName: "",
// // // //         targetQuantity: "",
// // // //         pricePerUnit: "",
// // // //         unit: "kg",
// // // //       });
// // // //     } catch (err) {
// // // //       setNotification({ message: err.message, type: "error" });
// // // //     }
// // // //   };

// // // //   const openJoinModal = (deal) => {
// // // //     setSelectedDeal(deal);
// // // //     setJoinQuantity(1);
// // // //     setJoinModalOpen(true);
// // // //   };

// // // //   if (loading)
// // // //     return (
// // // //       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
// // // //         Loading deals...
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

// // // //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
// // // //         <div>
// // // //           <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
// // // //             Active Group Deals
// // // //           </h2>
// // // //           <p className="text-gray-500 dark:text-gray-400 mt-1">
// // // //             Join a deal or create a new one to start saving.
// // // //           </p>
// // // //         </div>
// // // //         <Button
// // // //           onClick={() => setCreateModalOpen(true)}
// // // //           className="w-full sm:w-auto mt-4 sm:mt-0 bg-gray-800 hover:bg-gray-900 dark:bg-purple-600 dark:hover:bg-purple-700"
// // // //         >
// // // //           + Create New Deal
// // // //         </Button>
// // // //       </div>

// // // //       {deals.length === 0 ? (
// // // //         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
// // // //           <svg
// // // //             className="mx-auto h-12 w-12 text-gray-400"
// // // //             fill="none"
// // // //             viewBox="0 0 24 24"
// // // //             stroke="currentColor"
// // // //           >
// // // //             <path
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               strokeWidth={2}
// // // //               d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
// // // //             />
// // // //           </svg>
// // // //           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
// // // //             No active deals
// // // //           </h3>
// // // //           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
// // // //             Get started by creating a new deal.
// // // //           </p>
// // // //         </div>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {deals.map((deal) => (
// // // //             <Card
// // // //               key={deal._id}
// // // //               className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800"
// // // //             >
// // // //               <div>
// // // //                 <div className="flex justify-between items-start">
// // // //                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// // // //                     {deal.itemName}
// // // //                   </h3>
// // // //                   <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
// // // //                     Active
// // // //                   </span>
// // // //                 </div>
// // // //                 <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
// // // //                   ₹{deal.pricePerUnit}
// // // //                   <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
// // // //                     {" "}
// // // //                     / {deal.unit}
// // // //                   </span>
// // // //                 </p>
// // // //                 <div className="my-4">
// // // //                   <div className="flex justify-between mb-1">
// // // //                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // // //                       Progress
// // // //                     </span>
// // // //                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // // //                       {Math.round(
// // // //                         (deal.currentQuantity / deal.targetQuantity) * 100
// // // //                       )}
// // // //                       %
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
// // // //                     <div
// // // //                       className="bg-purple-600 h-2.5 rounded-full"
// // // //                       style={{
// // // //                         width: `${
// // // //                           (deal.currentQuantity / deal.targetQuantity) * 100
// // // //                         }%`,
// // // //                       }}
// // // //                     ></div>
// // // //                   </div>
// // // //                   <p className="text-sm text-gray-600 dark:text-gray-400 text-right mt-1 font-semibold">
// // // //                     {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //               <Button
// // // //                 onClick={() => openJoinModal(deal)}
// // // //                 className="mt-4 bg-gray-800 hover:bg-gray-900 dark:bg-purple-600 dark:hover:bg-purple-700"
// // // //               >
// // // //                 Join Deal
// // // //               </Button>
// // // //             </Card>
// // // //           ))}
// // // //         </div>
// // // //       )}

// // // //       <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
// // // //         <div className="dark:bg-gray-800 p-2 rounded-lg">
// // // //           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
// // // //             Join Deal: {selectedDeal?.itemName}
// // // //           </h3>
// // // //           <form onSubmit={handleJoinDeal}>
// // // //             <Input
// // // //               id="quantity"
// // // //               label={`How much do you need? (${selectedDeal?.unit})`}
// // // //               type="number"
// // // //               placeholder="e.g., 5"
// // // //               value={joinQuantity}
// // // //               onChange={(e) => setJoinQuantity(e.target.value)}
// // // //             />
// // // //             <Button
// // // //               type="submit"
// // // //               className="mt-4 bg-gray-800 hover:bg-gray-900 dark:bg-purple-600 dark:hover:bg-purple-700"
// // // //             >
// // // //               Confirm
// // // //             </Button>
// // // //           </form>
// // // //         </div>
// // // //       </Modal>
// // // //       <Modal
// // // //         isOpen={isCreateModalOpen}
// // // //         onClose={() => setCreateModalOpen(false)}
// // // //       >
// // // //         <div className="dark:bg-gray-800 p-2 rounded-lg">
// // // //           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
// // // //             Create a New Deal
// // // //           </h3>
// // // //           <form onSubmit={handleCreateDeal} className="space-y-4">
// // // //             <Input
// // // //               id="itemName"
// // // //               label="Item Name"
// // // //               type="text"
// // // //               placeholder="e.g., Onions"
// // // //               value={createDealData.itemName}
// // // //               onChange={(e) =>
// // // //                 setCreateDealData({
// // // //                   ...createDealData,
// // // //                   itemName: e.target.value,
// // // //                 })
// // // //               }
// // // //             />
// // // //             <Input
// // // //               id="targetQuantity"
// // // //               label="Target Quantity"
// // // //               type="number"
// // // //               placeholder="e.g., 50"
// // // //               value={createDealData.targetQuantity}
// // // //               onChange={(e) =>
// // // //                 setCreateDealData({
// // // //                   ...createDealData,
// // // //                   targetQuantity: e.target.value,
// // // //                 })
// // // //               }
// // // //             />
// // // //             <Input
// // // //               id="pricePerUnit"
// // // //               label="Price per Unit"
// // // //               type="number"
// // // //               placeholder="e.g., 20"
// // // //               value={createDealData.pricePerUnit}
// // // //               onChange={(e) =>
// // // //                 setCreateDealData({
// // // //                   ...createDealData,
// // // //                   pricePerUnit: e.target.value,
// // // //                 })
// // // //               }
// // // //             />
// // // //             <Input
// // // //               id="unit"
// // // //               label="Unit"
// // // //               type="text"
// // // //               placeholder="e.g., kg"
// // // //               value={createDealData.unit}
// // // //               onChange={(e) =>
// // // //                 setCreateDealData({ ...createDealData, unit: e.target.value })
// // // //               }
// // // //             />
// // // //             <Button
// // // //               type="submit"
// // // //               className="bg-gray-800 hover:bg-gray-900 dark:bg-purple-600 dark:hover:bg-purple-700"
// // // //             >
// // // //               Create Deal
// // // //             </Button>
// // // //           </form>
// // // //         </div>
// // // //       </Modal>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VendorDashboard;

// // // // // const API_URL = "http://localhost:5002/api";

// // // // // const VendorDashboard = ({ token, user }) => {
// // // // //   // ... (state declarations remain the same)
// // // // //   const [deals, setDeals] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState("");
// // // // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // // // //   const [isJoinModalOpen, setJoinModalOpen] = useState(false);
// // // // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // // // //   const [selectedDeal, setSelectedDeal] = useState(null);
// // // // //   const [joinQuantity, setJoinQuantity] = useState(1);
// // // // //   const [createDealData, setCreateDealData] = useState({
// // // // //     itemName: "",
// // // // //     targetQuantity: "",
// // // // //     pricePerUnit: "",
// // // // //     unit: "kg",
// // // // //   });

// // // // //   // ... (fetchDeals, handleJoinDeal, handleCreateDeal, openJoinModal functions remain the same)
// // // // //   const fetchDeals = useCallback(async () => {
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/deals`, {
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
// // // // //     fetchDeals();
// // // // //   }, [fetchDeals]);

// // // // //   const handleJoinDeal = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // // // //         body: JSON.stringify({ quantity: Number(joinQuantity) }),
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (!res.ok) throw new Error(data.msg || "Failed to join deal");
// // // // //       setNotification({
// // // // //         message: "Successfully joined deal!",
// // // // //         type: "success",
// // // // //       });
// // // // //       fetchDeals();
// // // // //       setJoinModalOpen(false);
// // // // //     } catch (err) {
// // // // //       setNotification({ message: err.message, type: "error" });
// // // // //     }
// // // // //   };

// // // // //   const handleCreateDeal = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const res = await fetch(`${API_URL}/deals`, {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // // // //         body: JSON.stringify({
// // // // //           ...createDealData,
// // // // //           targetQuantity: Number(createDealData.targetQuantity),
// // // // //           pricePerUnit: Number(createDealData.pricePerUnit),
// // // // //         }),
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       if (!res.ok) throw new Error(data.msg || "Failed to create deal");
// // // // //       setNotification({ message: "New deal created!", type: "success" });
// // // // //       fetchDeals();
// // // // //       setCreateModalOpen(false);
// // // // //       setCreateDealData({
// // // // //         itemName: "",
// // // // //         targetQuantity: "",
// // // // //         pricePerUnit: "",
// // // // //         unit: "kg",
// // // // //       });
// // // // //     } catch (err) {
// // // // //       setNotification({ message: err.message, type: "error" });
// // // // //     }
// // // // //   };

// // // // //   const openJoinModal = (deal) => {
// // // // //     setSelectedDeal(deal);
// // // // //     setJoinQuantity(1);
// // // // //     setJoinModalOpen(true);
// // // // //   };

// // // // //   if (loading)
// // // // //     return (
// // // // //       <div className="text-center p-10 font-semibold text-gray-600">
// // // // //         Loading deals...
// // // // //       </div>
// // // // //     );
// // // // //   if (error)
// // // // //     return <div className="text-center p-10 text-red-500">Error: {error}</div>;

// // // // //   return (
// // // // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animation-fade-in">
// // // // //       <Notification
// // // // //         message={notification.message}
// // // // //         type={notification.type}
// // // // //         onClose={() => setNotification({ message: "", type: "" })}
// // // // //       />

// // // // //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
// // // // //         <div>
// // // // //           <h2 className="text-3xl font-bold text-gray-800">
// // // // //             Active Group Deals
// // // // //           </h2>
// // // // //           <p className="text-gray-500 mt-1">
// // // // //             Join a deal or create a new one to start saving.
// // // // //           </p>
// // // // //         </div>
// // // // //         <Button
// // // // //           onClick={() => setCreateModalOpen(true)}
// // // // //           className="w-full sm:w-auto mt-4 sm:mt-0"
// // // // //         >
// // // // //           + Create New Deal
// // // // //         </Button>
// // // // //       </div>

// // // // //       {deals.length === 0 ? (
// // // // //         <div className="text-center bg-white rounded-lg shadow-sm p-12">
// // // // //           <svg
// // // // //             className="mx-auto h-12 w-12 text-gray-400"
// // // // //             fill="none"
// // // // //             viewBox="0 0 24 24"
// // // // //             stroke="currentColor"
// // // // //           >
// // // // //             <path
// // // // //               strokeLinecap="round"
// // // // //               strokeLinejoin="round"
// // // // //               strokeWidth={2}
// // // // //               d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
// // // // //             />
// // // // //           </svg>
// // // // //           <h3 className="mt-2 text-sm font-medium text-gray-900">
// // // // //             No active deals
// // // // //           </h3>
// // // // //           <p className="mt-1 text-sm text-gray-500">
// // // // //             Get started by creating a new deal.
// // // // //           </p>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {deals.map((deal) => (
// // // // //             <Card
// // // // //               key={deal._id}
// // // // //               className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1"
// // // // //             >
// // // // //               <div>
// // // // //                 <div className="flex justify-between items-start">
// // // // //                   <h3 className="text-2xl font-bold text-gray-900">
// // // // //                     {deal.itemName}
// // // // //                   </h3>
// // // // //                   <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
// // // // //                     Active
// // // // //                   </span>
// // // // //                 </div>
// // // // //                 <p className="text-3xl font-bold text-blue-600 mt-2">
// // // // //                   ₹{deal.pricePerUnit}
// // // // //                   <span className="text-lg font-medium text-gray-500">
// // // // //                     {" "}
// // // // //                     / {deal.unit}
// // // // //                   </span>
// // // // //                 </p>
// // // // //                 <div className="my-4">
// // // // //                   <div className="flex justify-between mb-1">
// // // // //                     <span className="text-sm font-medium text-gray-700">
// // // // //                       Progress
// // // // //                     </span>
// // // // //                     <span className="text-sm font-medium text-gray-700">
// // // // //                       {Math.round(
// // // // //                         (deal.currentQuantity / deal.targetQuantity) * 100
// // // // //                       )}
// // // // //                       %
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   <div className="w-full bg-gray-200 rounded-full h-2.5">
// // // // //                     <div
// // // // //                       className="bg-blue-600 h-2.5 rounded-full"
// // // // //                       style={{
// // // // //                         width: `${
// // // // //                           (deal.currentQuantity / deal.targetQuantity) * 100
// // // // //                         }%`,
// // // // //                       }}
// // // // //                     ></div>
// // // // //                   </div>
// // // // //                   <p className="text-sm text-gray-600 text-right mt-1 font-semibold">
// // // // //                     {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <Button onClick={() => openJoinModal(deal)} className="mt-4">
// // // // //                 Join Deal
// // // // //               </Button>
// // // // //             </Card>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Modals remain the same */}
// // // // //       <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
// // // // //         <h3 className="text-2xl font-bold mb-4">
// // // // //           Join Deal: {selectedDeal?.itemName}
// // // // //         </h3>
// // // // //         <form onSubmit={handleJoinDeal}>
// // // // //           <label
// // // // //             htmlFor="quantity"
// // // // //             className="block text-sm font-medium text-gray-700 mb-1"
// // // // //           >
// // // // //             How much do you need? ({selectedDeal?.unit})
// // // // //           </label>
// // // // //           <Input
// // // // //             id="quantity"
// // // // //             type="number"
// // // // //             placeholder="e.g., 5"
// // // // //             value={joinQuantity}
// // // // //             onChange={(e) => setJoinQuantity(e.target.value)}
// // // // //           />
// // // // //           <Button type="submit" className="mt-4">
// // // // //             Confirm
// // // // //           </Button>
// // // // //         </form>
// // // // //       </Modal>
// // // // //       <Modal
// // // // //         isOpen={isCreateModalOpen}
// // // // //         onClose={() => setCreateModalOpen(false)}
// // // // //       >
// // // // //         <h3 className="text-2xl font-bold mb-4">Create a New Deal</h3>
// // // // //         <form onSubmit={handleCreateDeal} className="space-y-4">
// // // // //           <Input
// // // // //             id="itemName"
// // // // //             label="Item Name"
// // // // //             type="text"
// // // // //             placeholder="e.g., Onions"
// // // // //             value={createDealData.itemName}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({ ...createDealData, itemName: e.target.value })
// // // // //             }
// // // // //           />
// // // // //           <Input
// // // // //             id="targetQuantity"
// // // // //             label="Target Quantity"
// // // // //             type="number"
// // // // //             placeholder="e.g., 50"
// // // // //             value={createDealData.targetQuantity}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({
// // // // //                 ...createDealData,
// // // // //                 targetQuantity: e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />
// // // // //           <Input
// // // // //             id="pricePerUnit"
// // // // //             label="Price per Unit"
// // // // //             type="number"
// // // // //             placeholder="e.g., 20"
// // // // //             value={createDealData.pricePerUnit}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({
// // // // //                 ...createDealData,
// // // // //                 pricePerUnit: e.target.value,
// // // // //               })
// // // // //             }
// // // // //           />
// // // // //           <Input
// // // // //             id="unit"
// // // // //             label="Unit"
// // // // //             type="text"
// // // // //             placeholder="e.g., kg"
// // // // //             value={createDealData.unit}
// // // // //             onChange={(e) =>
// // // // //               setCreateDealData({ ...createDealData, unit: e.target.value })
// // // // //             }
// // // // //           />
// // // // //           <Button type="submit">Create Deal</Button>
// // // // //         </form>
// // // // //       </Modal>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default VendorDashboard;

// // // import React, { useState, useEffect, useCallback } from "react";
// // // import Button from "../components/ui/Button";
// // // import Card from "../components/ui/Card";
// // // import Input from "../components/ui/Input";
// // // import Modal from "../components/ui/Modal";
// // // import Notification from "../components/ui/Notification";

// // // const API_URL = "http://localhost:5002/api";

// // // const VendorDashboard = ({ token }) => {
// // //   const [deals, setDeals] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");
// // //   const [notification, setNotification] = useState({ message: "", type: "" });

// // //   const [isJoinModalOpen, setJoinModalOpen] = useState(false);
// // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // //   const [selectedDeal, setSelectedDeal] = useState(null);
// // //   const [joinQuantity, setJoinQuantity] = useState(1);
// // //   const [createDealData, setCreateDealData] = useState({
// // //     itemName: "",
// // //     targetQuantity: "",
// // //     pricePerUnit: "",
// // //     unit: "kg",
// // //   });

// // //   const fetchDeals = useCallback(async () => {
// // //     try {
// // //       const res = await fetch(`${API_URL}/deals`, {
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
// // //     fetchDeals();
// // //   }, [fetchDeals]);

// // //   const handleJoinDeal = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // //         body: JSON.stringify({ quantity: Number(joinQuantity) }),
// // //       });
// // //       const data = await res.json();
// // //       if (!res.ok) throw new Error(data.msg || "Failed to join deal");
// // //       setNotification({
// // //         message: "Successfully joined deal!",
// // //         type: "success",
// // //       });
// // //       fetchDeals();
// // //       setJoinModalOpen(false);
// // //     } catch (err) {
// // //       setNotification({ message: err.message, type: "error" });
// // //     }
// // //   };

// // //   const handleCreateDeal = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await fetch(`${API_URL}/deals`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// // //         body: JSON.stringify({
// // //           ...createDealData,
// // //           targetQuantity: Number(createDealData.targetQuantity),
// // //           pricePerUnit: Number(createDealData.pricePerUnit),
// // //         }),
// // //       });
// // //       const data = await res.json();
// // //       if (!res.ok) throw new Error(data.msg || "Failed to create deal");
// // //       setNotification({ message: "New deal created!", type: "success" });
// // //       fetchDeals();
// // //       setCreateModalOpen(false);
// // //       setCreateDealData({
// // //         itemName: "",
// // //         targetQuantity: "",
// // //         pricePerUnit: "",
// // //         unit: "kg",
// // //       });
// // //     } catch (err) {
// // //       setNotification({ message: err.message, type: "error" });
// // //     }
// // //   };

// // //   const openJoinModal = (deal) => {
// // //     setSelectedDeal(deal);
// // //     setJoinQuantity(1);
// // //     setJoinModalOpen(true);
// // //   };

// // //   if (loading)
// // //     return (
// // //       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
// // //         Loading deals...
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

// // //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
// // //         <div>
// // //           <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
// // //             Active Group Deals
// // //           </h2>
// // //           <p className="text-gray-500 dark:text-gray-400 mt-1">
// // //             Join a deal or create a new one to start saving.
// // //           </p>
// // //         </div>
// // //         <Button
// // //           onClick={() => setCreateModalOpen(true)}
// // //           className="w-full sm:w-auto mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white"
// // //         >
// // //           + Create New Deal
// // //         </Button>
// // //       </div>

// // //       {deals.length === 0 ? (
// // //         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
// // //           <svg
// // //             className="mx-auto h-12 w-12 text-gray-400"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               strokeWidth={2}
// // //               d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
// // //             />
// // //           </svg>
// // //           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
// // //             No active deals
// // //           </h3>
// // //           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
// // //             Get started by creating a new deal.
// // //           </p>
// // //         </div>
// // //       ) : (
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {deals.map((deal) => (
// // //             <Card
// // //               key={deal._id}
// // //               className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800"
// // //             >
// // //               <div>
// // //                 <div className="flex justify-between items-start">
// // //                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// // //                     {deal.itemName}
// // //                   </h3>
// // //                   <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
// // //                     Active
// // //                   </span>
// // //                 </div>
// // //                 <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
// // //                   ₹{deal.pricePerUnit}
// // //                   <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
// // //                     {" "}
// // //                     / {deal.unit}
// // //                   </span>
// // //                 </p>
// // //                 <div className="my-4">
// // //                   <div className="flex justify-between mb-1">
// // //                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // //                       Progress
// // //                     </span>
// // //                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// // //                       {Math.round(
// // //                         (deal.currentQuantity / deal.targetQuantity) * 100
// // //                       )}
// // //                       %
// // //                     </span>
// // //                   </div>
// // //                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
// // //                     <div
// // //                       className="bg-purple-600 h-2.5 rounded-full"
// // //                       style={{
// // //                         width: `${
// // //                           (deal.currentQuantity / deal.targetQuantity) * 100
// // //                         }%`,
// // //                       }}
// // //                     ></div>
// // //                   </div>
// // //                   <p className="text-sm text-gray-600 dark:text-gray-400 text-right mt-1 font-semibold">
// // //                     {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <Button
// // //                 onClick={() => openJoinModal(deal)}
// // //                 className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
// // //               >
// // //                 Join Deal
// // //               </Button>
// // //             </Card>
// // //           ))}
// // //         </div>
// // //       )}

// // //       <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
// // //         <div className="dark:bg-gray-900 p-2 rounded-lg">
// // //           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
// // //             Join Deal: {selectedDeal?.itemName}
// // //           </h3>
// // //           <form onSubmit={handleJoinDeal}>
// // //             <Input
// // //               id="quantity"
// // //               label={`How much do you need? (${selectedDeal?.unit})`}
// // //               type="number"
// // //               placeholder="e.g., 5"
// // //               value={joinQuantity}
// // //               onChange={(e) => setJoinQuantity(e.target.value)}
// // //             />
// // //             <Button
// // //               type="submit"
// // //               className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
// // //             >
// // //               Confirm
// // //             </Button>
// // //           </form>
// // //         </div>
// // //       </Modal>
// // //       <Modal
// // //         isOpen={isCreateModalOpen}
// // //         onClose={() => setCreateModalOpen(false)}
// // //       >
// // //         <div className="dark:bg-gray-900 p-2 rounded-lg">
// // //           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
// // //             Create a New Deal
// // //           </h3>
// // //           <form onSubmit={handleCreateDeal} className="space-y-4">
// // //             <Input
// // //               id="itemName"
// // //               label="Item Name"
// // //               type="text"
// // //               placeholder="e.g., Onions"
// // //               value={createDealData.itemName}
// // //               onChange={(e) =>
// // //                 setCreateDealData({
// // //                   ...createDealData,
// // //                   itemName: e.target.value,
// // //                 })
// // //               }
// // //             />
// // //             <Input
// // //               id="targetQuantity"
// // //               label="Target Quantity"
// // //               type="number"
// // //               placeholder="e.g., 50"
// // //               value={createDealData.targetQuantity}
// // //               onChange={(e) =>
// // //                 setCreateDealData({
// // //                   ...createDealData,
// // //                   targetQuantity: e.target.value,
// // //                 })
// // //               }
// // //             />
// // //             <Input
// // //               id="pricePerUnit"
// // //               label="Price per Unit"
// // //               type="number"
// // //               placeholder="e.g., 20"
// // //               value={createDealData.pricePerUnit}
// // //               onChange={(e) =>
// // //                 setCreateDealData({
// // //                   ...createDealData,
// // //                   pricePerUnit: e.target.value,
// // //                 })
// // //               }
// // //             />
// // //             <Input
// // //               id="unit"
// // //               label="Unit"
// // //               type="text"
// // //               placeholder="e.g., kg"
// // //               value={createDealData.unit}
// // //               onChange={(e) =>
// // //                 setCreateDealData({ ...createDealData, unit: e.target.value })
// // //               }
// // //             />
// // //             <Button
// // //               type="submit"
// // //               className="bg-purple-600 hover:bg-purple-700 text-white"
// // //             >
// // //               Create Deal
// // //             </Button>
// // //           </form>
// // //         </div>
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default VendorDashboard;

// // import React, { useState, useEffect, useCallback } from "react";
// // import Button from "../components/ui/Button";
// // import Card from "../components/ui/Card";
// // import Input from "../components/ui/Input";
// // import Modal from "../components/ui/Modal";
// // import Notification from "../components/ui/Notification";

// // const API_URL = "http://localhost:5002/api";

// // const VendorDashboard = ({ token }) => {
// //   const [deals, setDeals] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [notification, setNotification] = useState({ message: "", type: "" });

// //   const [isJoinModalOpen, setJoinModalOpen] = useState(false);
// //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// //   const [selectedDeal, setSelectedDeal] = useState(null);
// //   const [joinQuantity, setJoinQuantity] = useState(1);
// //   const [createDealData, setCreateDealData] = useState({
// //     itemName: "",
// //     targetQuantity: "",
// //     pricePerUnit: "",
// //     unit: "kg",
// //   });

// //   const fetchDeals = useCallback(async () => {
// //     try {
// //       const res = await fetch(`${API_URL}/deals`, {
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
// //     fetchDeals();
// //   }, [fetchDeals]);

// //   const handleJoinDeal = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// //         body: JSON.stringify({ quantity: Number(joinQuantity) }),
// //       });
// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.msg || "Failed to join deal");
// //       setNotification({
// //         message: "Successfully joined deal!",
// //         type: "success",
// //       });
// //       fetchDeals();
// //       setJoinModalOpen(false);
// //     } catch (err) {
// //       setNotification({ message: err.message, type: "error" });
// //     }
// //   };

// //   const handleCreateDeal = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch(`${API_URL}/deals`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", "x-auth-token": token },
// //         body: JSON.stringify({
// //           ...createDealData,
// //           targetQuantity: Number(createDealData.targetQuantity),
// //           pricePerUnit: Number(createDealData.pricePerUnit),
// //         }),
// //       });
// //       const data = await res.json();
// //       if (!res.ok) throw new Error(data.msg || "Failed to create deal");
// //       setNotification({ message: "New deal created!", type: "success" });
// //       fetchDeals();
// //       setCreateModalOpen(false);
// //       setCreateDealData({
// //         itemName: "",
// //         targetQuantity: "",
// //         pricePerUnit: "",
// //         unit: "kg",
// //       });
// //     } catch (err) {
// //       setNotification({ message: err.message, type: "error" });
// //     }
// //   };

// //   const openJoinModal = (deal) => {
// //     setSelectedDeal(deal);
// //     setJoinQuantity(1);
// //     setJoinModalOpen(true);
// //   };

// //   if (loading)
// //     return (
// //       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
// //         Loading deals...
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

// //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
// //         <div>
// //           <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
// //             Active Group Deals
// //           </h2>
// //           <p className="text-gray-500 dark:text-gray-400 mt-1">
// //             Join a deal or create a new one to start saving.
// //           </p>
// //         </div>
// //         <Button
// //           onClick={() => setCreateModalOpen(true)}
// //           className="w-full sm:w-auto mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white"
// //         >
// //           + Create New Deal
// //         </Button>
// //       </div>

// //       {deals.length === 0 ? (
// //         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
// //           <svg
// //             className="mx-auto h-12 w-12 text-gray-400"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
// //             />
// //           </svg>
// //           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
// //             No active deals
// //           </h3>
// //           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
// //             Get started by creating a new deal.
// //           </p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {deals.map((deal) => (
// //             <Card
// //               key={deal._id}
// //               className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800"
// //             >
// //               <div>
// //                 <div className="flex justify-between items-start">
// //                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// //                     {deal.itemName}
// //                   </h3>
// //                   <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
// //                     Active
// //                   </span>
// //                 </div>
// //                 <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
// //                   ₹{deal.pricePerUnit}
// //                   <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
// //                     {" "}
// //                     / {deal.unit}
// //                   </span>
// //                 </p>
// //                 <div className="my-4">
// //                   <div className="flex justify-between mb-1">
// //                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                       Progress
// //                     </span>
// //                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
// //                       {Math.round(
// //                         (deal.currentQuantity / deal.targetQuantity) * 100
// //                       )}
// //                       %
// //                     </span>
// //                   </div>
// //                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
// //                     <div
// //                       className="bg-purple-600 h-2.5 rounded-full"
// //                       style={{
// //                         width: `${
// //                           (deal.currentQuantity / deal.targetQuantity) * 100
// //                         }%`,
// //                       }}
// //                     ></div>
// //                   </div>
// //                   <p className="text-sm text-gray-600 dark:text-gray-400 text-right mt-1 font-semibold">
// //                     {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}
// //                   </p>
// //                 </div>
// //               </div>
// //               <Button
// //                 onClick={() => openJoinModal(deal)}
// //                 className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
// //               >
// //                 Join Deal
// //               </Button>
// //             </Card>
// //           ))}
// //         </div>
// //       )}

// //       <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
// //         <div className="dark:bg-gray-900 p-2 rounded-lg">
// //           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
// //             Join Deal: {selectedDeal?.itemName}
// //           </h3>
// //           <form onSubmit={handleJoinDeal}>
// //             <Input
// //               id="quantity"
// //               label={`How much do you need? (${selectedDeal?.unit})`}
// //               type="number"
// //               placeholder="e.g., 5"
// //               value={joinQuantity}
// //               onChange={(e) => setJoinQuantity(e.target.value)}
// //             />
// //             <Button
// //               type="submit"
// //               className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
// //             >
// //               Confirm
// //             </Button>
// //           </form>
// //         </div>
// //       </Modal>
// //       <Modal
// //         isOpen={isCreateModalOpen}
// //         onClose={() => setCreateModalOpen(false)}
// //       >
// //         <div className="dark:bg-gray-900 p-2 rounded-lg">
// //           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
// //             Create a New Deal
// //           </h3>
// //           <form onSubmit={handleCreateDeal} className="space-y-4">
// //             <Input
// //               id="itemName"
// //               label="Item Name"
// //               type="text"
// //               placeholder="e.g., Onions"
// //               value={createDealData.itemName}
// //               onChange={(e) =>
// //                 setCreateDealData({
// //                   ...createDealData,
// //                   itemName: e.target.value,
// //                 })
// //               }
// //             />
// //             <Input
// //               id="targetQuantity"
// //               label="Target Quantity"
// //               type="number"
// //               placeholder="e.g., 50"
// //               value={createDealData.targetQuantity}
// //               onChange={(e) =>
// //                 setCreateDealData({
// //                   ...createDealData,
// //                   targetQuantity: e.target.value,
// //                 })
// //               }
// //             />
// //             <Input
// //               id="pricePerUnit"
// //               label="Price per Unit"
// //               type="number"
// //               placeholder="e.g., 20"
// //               value={createDealData.pricePerUnit}
// //               onChange={(e) =>
// //                 setCreateDealData({
// //                   ...createDealData,
// //                   pricePerUnit: e.target.value,
// //                 })
// //               }
// //             />
// //             <Input
// //               id="unit"
// //               label="Unit"
// //               type="text"
// //               placeholder="e.g., kg"
// //               value={createDealData.unit}
// //               onChange={(e) =>
// //                 setCreateDealData({ ...createDealData, unit: e.target.value })
// //               }
// //             />
// //             <Button
// //               type="submit"
// //               className="bg-purple-600 hover:bg-purple-700 text-white"
// //             >
// //               Create Deal
// //             </Button>
// //           </form>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default VendorDashboard;

// import React, { useState, useEffect, useCallback } from "react";
// import Button from "../components/ui/Button";
// import Card from "../components/ui/Card";
// import Input from "../components/ui/Input";
// import Modal from "../components/ui/Modal";
// import Notification from "../components/ui/Notification";

// const API_URL = "http://localhost:5002/api";

// const MyDealCard = ({ deal }) => {
//   const getStatusInfo = (status) => {
//     switch (status) {
//       case "confirmed":
//         return {
//           text: "Confirmed",
//           color:
//             "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
//           message: "Ready for pickup!",
//         };
//       case "filled":
//         return {
//           text: "Awaiting Confirmation",
//           color:
//             "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
//           message: "Supplier has been notified.",
//         };
//       default:
//         return {
//           text: "Active",
//           color:
//             "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
//           message: "Waiting for more vendors...",
//         };
//     }
//   };

//   const statusInfo = getStatusInfo(deal.status);

//   return (
//     <Card className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800">
//       <div>
//         <div className="flex justify-between items-start">
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//             {deal.itemName}
//           </h3>
//           <span
//             className={`text-sm font-semibold px-3 py-1 rounded-full ${statusInfo.color}`}
//           >
//             {statusInfo.text}
//           </span>
//         </div>
//         <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mt-2">
//           ₹{deal.pricePerUnit} / {deal.unit}
//         </p>
//         <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             {statusInfo.message}
//           </p>
//         </div>
//       </div>
//     </Card>
//   );
// };

// const VendorDashboard = ({ token }) => {
//   const [activeDeals, setActiveDeals] = useState([]);
//   const [myDeals, setMyDeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [notification, setNotification] = useState({ message: "", type: "" });

//   const [isJoinModalOpen, setJoinModalOpen] = useState(false);
//   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
//   const [selectedDeal, setSelectedDeal] = useState(null);
//   const [joinQuantity, setJoinQuantity] = useState(1);
//   const [createDealData, setCreateDealData] = useState({
//     itemName: "",
//     targetQuantity: "",
//     pricePerUnit: "",
//     unit: "kg",
//   });

//   const fetchAllData = useCallback(
//     async (isInitialLoad = false) => {
//       if (isInitialLoad) setLoading(true);
//       try {
//         const [activeDealsRes, myDealsRes] = await Promise.all([
//           fetch(`${API_URL}/deals`, { headers: { "x-auth-token": token } }),
//           fetch(`${API_URL}/deals/my-deals`, {
//             headers: { "x-auth-token": token },
//           }),
//         ]);

//         if (!activeDealsRes.ok || !myDealsRes.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const activeDealsData = await activeDealsRes.json();
//         const myDealsData = await myDealsRes.json();

//         setActiveDeals(activeDealsData);
//         setMyDeals(myDealsData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         if (isInitialLoad) setLoading(false);
//       }
//     },
//     [token]
//   );

//   useEffect(() => {
//     // Fetch data immediately on component mount
//     fetchAllData(true);

//     // Then, set up an interval to poll for new data every 10 seconds
//     const intervalId = setInterval(() => {
//       fetchAllData(false); // Subsequent fetches don't show the main loading spinner
//     }, 10000); // 10000ms = 10 seconds

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, [fetchAllData]);

//   const handleJoinDeal = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", "x-auth-token": token },
//         body: JSON.stringify({ quantity: Number(joinQuantity) }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.msg || "Failed to join deal");
//       setNotification({
//         message: "Successfully joined deal!",
//         type: "success",
//       });
//       fetchAllData(true); // Refresh all data immediately
//       setJoinModalOpen(false);
//     } catch (err) {
//       setNotification({ message: err.message, type: "error" });
//     }
//   };

//   const handleCreateDeal = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${API_URL}/deals`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json", "x-auth-token": token },
//         body: JSON.stringify({
//           ...createDealData,
//           targetQuantity: Number(createDealData.targetQuantity),
//           pricePerUnit: Number(createDealData.pricePerUnit),
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.msg || "Failed to create deal");
//       setNotification({ message: "New deal created!", type: "success" });
//       fetchAllData(true); // Refresh all data immediately
//       setCreateModalOpen(false);
//       setCreateDealData({
//         itemName: "",
//         targetQuantity: "",
//         pricePerUnit: "",
//         unit: "kg",
//       });
//     } catch (err) {
//       setNotification({ message: err.message, type: "error" });
//     }
//   };

//   const openJoinModal = (deal) => {
//     setSelectedDeal(deal);
//     setJoinQuantity(1);
//     setJoinModalOpen(true);
//   };

//   if (loading)
//     return (
//       <div className="text-center p-10 font-semibold text-gray-600 dark:text-gray-400">
//         Loading deals...
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

//       {/* My Joined Deals Section */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
//           My Joined Deals
//         </h2>
//         <p className="text-gray-500 dark:text-gray-400 mt-1">
//           Track the status of deals you've joined.
//         </p>
//         {myDeals.length === 0 ? (
//           <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mt-4">
//             <p className="text-gray-500 dark:text-gray-400">
//               You haven't joined any deals yet.
//             </p>
//           </div>
//         ) : (
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {myDeals.map((deal) => (
//               <MyDealCard key={deal._id} deal={deal} />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Active Group Deals Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
//             Join More Deals
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400 mt-1">
//             Find other active deals in your market.
//           </p>
//         </div>
//         <Button
//           onClick={() => setCreateModalOpen(true)}
//           className="w-full sm:w-auto mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white"
//         >
//           + Create New Deal
//         </Button>
//       </div>

//       {activeDeals.length === 0 ? (
//         <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
//           <svg
//             className="mx-auto h-12 w-12 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//             />
//           </svg>
//           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
//             No other active deals
//           </h3>
//           <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//             Get started by creating a new deal.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {activeDeals.map((deal) => (
//             <Card
//               key={deal._id}
//               className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800"
//             >
//               <div>
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                     {deal.itemName}
//                   </h3>
//                   <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                     Active
//                   </span>
//                 </div>
//                 <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
//                   ₹{deal.pricePerUnit}
//                   <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
//                     {" "}
//                     / {deal.unit}
//                   </span>
//                 </p>
//                 <div className="my-4">
//                   <div className="flex justify-between mb-1">
//                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                       Progress
//                     </span>
//                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                       {Math.round(
//                         (deal.currentQuantity / deal.targetQuantity) * 100
//                       )}
//                       %
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//                     <div
//                       className="bg-purple-600 h-2.5 rounded-full"
//                       style={{
//                         width: `${
//                           (deal.currentQuantity / deal.targetQuantity) * 100
//                         }%`,
//                       }}
//                     ></div>
//                   </div>
//                   <p className="text-sm text-gray-600 dark:text-gray-400 text-right mt-1 font-semibold">
//                     {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}
//                   </p>
//                 </div>
//               </div>
//               <Button
//                 onClick={() => openJoinModal(deal)}
//                 className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
//               >
//                 Join Deal
//               </Button>
//             </Card>
//           ))}
//         </div>
//       )}

//       {/* Modals */}
//       <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
//         <div className="dark:bg-gray-900 p-2 rounded-lg">
//           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
//             Join Deal: {selectedDeal?.itemName}
//           </h3>
//           <form onSubmit={handleJoinDeal}>
//             <Input
//               id="quantity"
//               label={`How much do you need? (${selectedDeal?.unit})`}
//               type="number"
//               placeholder="e.g., 5"
//               value={joinQuantity}
//               onChange={(e) => setJoinQuantity(e.target.value)}
//             />
//             <Button
//               type="submit"
//               className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
//             >
//               Confirm
//             </Button>
//           </form>
//         </div>
//       </Modal>
//       <Modal
//         isOpen={isCreateModalOpen}
//         onClose={() => setCreateModalOpen(false)}
//       >
//         <div className="dark:bg-gray-900 p-2 rounded-lg">
//           <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
//             Create a New Deal
//           </h3>
//           <form onSubmit={handleCreateDeal} className="space-y-4">
//             <Input
//               id="itemName"
//               label="Item Name"
//               type="text"
//               placeholder="e.g., Onions"
//               value={createDealData.itemName}
//               onChange={(e) =>
//                 setCreateDealData({
//                   ...createDealData,
//                   itemName: e.target.value,
//                 })
//               }
//             />
//             <Input
//               id="targetQuantity"
//               label="Target Quantity"
//               type="number"
//               placeholder="e.g., 50"
//               value={createDealData.targetQuantity}
//               onChange={(e) =>
//                 setCreateDealData({
//                   ...createDealData,
//                   targetQuantity: e.target.value,
//                 })
//               }
//             />
//             <Input
//               id="pricePerUnit"
//               label="Price per Unit"
//               type="number"
//               placeholder="e.g., 20"
//               value={createDealData.pricePerUnit}
//               onChange={(e) =>
//                 setCreateDealData({
//                   ...createDealData,
//                   pricePerUnit: e.target.value,
//                 })
//               }
//             />
//             <Input
//               id="unit"
//               label="Unit"
//               type="text"
//               placeholder="e.g., kg"
//               value={createDealData.unit}
//               onChange={(e) =>
//                 setCreateDealData({ ...createDealData, unit: e.target.value })
//               }
//             />
//             <Button
//               type="submit"
//               className="bg-purple-600 hover:bg-purple-700 text-white"
//             >
//               Create Deal
//             </Button>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default VendorDashboard;

import React, { useState, useEffect, useCallback } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import Notification from "../components/ui/Notification";

const API_URL = "http://localhost:5002/api";

const MyDealCard = ({ deal, onArchive }) => {
  const getStatusInfo = (status) => {
    switch (status) {
      case "confirmed":
        return {
          text: "Confirmed",
          color: "bg-green-900 text-green-300",
          message: "Ready for pickup!",
        };
      case "filled":
        return {
          text: "Awaiting Confirmation",
          color: "bg-yellow-900 text-yellow-300",
          message: "Supplier has been notified.",
        };
      default:
        return {
          text: "Active",
          color: "bg-blue-900 text-blue-300",
          message: "Waiting for more vendors...",
        };
    }
  };

  const statusInfo = getStatusInfo(deal.status);

  return (
    <Card className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-gray-800">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-white">{deal.itemName}</h3>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${statusInfo.color}`}
          >
            {statusInfo.text}
          </span>
        </div>
        <p className="text-lg font-semibold text-gray-400 mt-2">
          ₹{deal.pricePerUnit} / {deal.unit}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">{statusInfo.message}</p>
        </div>
      </div>
      {deal.status === "confirmed" && (
        <Button
          onClick={() => onArchive(deal._id)}
          className="mt-4 bg-gray-600 hover:bg-gray-700 text-gray-300"
        >
          Archive
        </Button>
      )}
    </Card>
  );
};

const VendorDashboard = ({ token }) => {
  const [activeDeals, setActiveDeals] = useState([]);
  const [myDeals, setMyDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [joinQuantity, setJoinQuantity] = useState(1);
  const [createDealData, setCreateDealData] = useState({
    itemName: "",
    targetQuantity: "",
    pricePerUnit: "",
    unit: "kg",
  });

  const fetchAllData = useCallback(
    async (isInitialLoad = false) => {
      if (isInitialLoad) setLoading(true);
      try {
        const [activeDealsRes, myDealsRes] = await Promise.all([
          fetch(`${API_URL}/deals`, { headers: { "x-auth-token": token } }),
          fetch(`${API_URL}/deals/my-deals`, {
            headers: { "x-auth-token": token },
          }),
        ]);

        if (!activeDealsRes.ok || !myDealsRes.ok)
          throw new Error("Failed to fetch data");
        const activeDealsData = await activeDealsRes.json();
        const myDealsData = await myDealsRes.json();
        setActiveDeals(activeDealsData);
        setMyDeals(myDealsData);
      } catch (err) {
        setError(err.message);
      } finally {
        if (isInitialLoad) setLoading(false);
      }
    },
    [token]
  );

  useEffect(() => {
    fetchAllData(true);
    const intervalId = setInterval(() => fetchAllData(false), 10000);
    return () => clearInterval(intervalId);
  }, [fetchAllData]);

  const handleJoinDeal = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/deals/join/${selectedDeal._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: JSON.stringify({ quantity: Number(joinQuantity) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Failed to join deal");
      setNotification({
        message: "Successfully joined deal!",
        type: "success",
      });
      fetchAllData(true);
      setJoinModalOpen(false);
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  const handleCreateDeal = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/deals`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: JSON.stringify({
          ...createDealData,
          targetQuantity: Number(createDealData.targetQuantity),
          pricePerUnit: Number(createDealData.pricePerUnit),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Failed to create deal");
      setNotification({ message: "New deal created!", type: "success" });
      fetchAllData(true);
      setCreateModalOpen(false);
      setCreateDealData({
        itemName: "",
        targetQuantity: "",
        pricePerUnit: "",
        unit: "kg",
      });
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  const handleArchiveDeal = async (dealId) => {
    try {
      const res = await fetch(`${API_URL}/deals/archive/${dealId}`, {
        method: "PUT",
        headers: { "x-auth-token": token },
      });
      if (!res.ok) throw new Error("Failed to archive deal");
      setNotification({ message: "Deal archived.", type: "success" });
      fetchAllData(true); // Refresh data to remove archived deal
    } catch (err) {
      setNotification({ message: err.message, type: "error" });
    }
  };

  const openJoinModal = (deal) => {
    setSelectedDeal(deal);
    setJoinQuantity(1);
    setJoinModalOpen(true);
  };

  if (loading)
    return (
      <div className="text-center p-10 font-semibold text-gray-400">
        Loading deals...
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

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white">My Joined Deals</h2>
        <p className="text-gray-400 mt-1">
          Track the status of deals you've joined.
        </p>
        {myDeals.length === 0 ? (
          <div className="text-center bg-gray-800 rounded-lg shadow-sm p-8 mt-4">
            <p className="text-gray-400">You haven't joined any deals yet.</p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myDeals.map((deal) => (
              <MyDealCard
                key={deal._id}
                deal={deal}
                onArchive={handleArchiveDeal}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Join More Deals</h2>
          <p className="text-gray-400 mt-1">
            Find other active deals in your market.
          </p>
        </div>
        <Button
          onClick={() => setCreateModalOpen(true)}
          className="w-full sm:w-auto mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white"
        >
          + Create New Deal
        </Button>
      </div>

      {activeDeals.length === 0 ? (
        <div className="text-center bg-gray-800 rounded-lg shadow-sm p-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-white">
            No other active deals
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Get started by creating a new deal.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeDeals.map((deal) => (
            <Card
              key={deal._id}
              className="flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 bg-gray-800"
            >
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white">
                    {deal.itemName}
                  </h3>
                  <span className="bg-blue-900 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-3xl font-bold text-purple-400 mt-2">
                  ₹{deal.pricePerUnit}
                  <span className="text-lg font-medium text-gray-400">
                    {" "}
                    / {deal.unit}
                  </span>
                </p>
                <div className="my-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {Math.round(
                        (deal.currentQuantity / deal.targetQuantity) * 100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{
                        width: `${
                          (deal.currentQuantity / deal.targetQuantity) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 text-right mt-1 font-semibold">
                    {deal.currentQuantity} / {deal.targetQuantity} {deal.unit}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => openJoinModal(deal)}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Join Deal
              </Button>
            </Card>
          ))}
        </div>
      )}

      <Modal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}>
        <div className="bg-gray-900 p-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Join Deal: {selectedDeal?.itemName}
          </h3>
          <form onSubmit={handleJoinDeal}>
            <Input
              id="quantity"
              label={`How much do you need? (${selectedDeal?.unit})`}
              type="number"
              placeholder="e.g., 5"
              value={joinQuantity}
              onChange={(e) => setJoinQuantity(e.target.value)}
            />
            <Button
              type="submit"
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
            >
              Confirm
            </Button>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
      >
        <div className="bg-gray-900 p-2 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Create a New Deal
          </h3>
          <form onSubmit={handleCreateDeal} className="space-y-4">
            <Input
              id="itemName"
              label="Item Name"
              type="text"
              placeholder="e.g., Onions"
              value={createDealData.itemName}
              onChange={(e) =>
                setCreateDealData({
                  ...createDealData,
                  itemName: e.target.value,
                })
              }
            />
            <Input
              id="targetQuantity"
              label="Target Quantity"
              type="number"
              placeholder="e.g., 50"
              value={createDealData.targetQuantity}
              onChange={(e) =>
                setCreateDealData({
                  ...createDealData,
                  targetQuantity: e.target.value,
                })
              }
            />
            <Input
              id="pricePerUnit"
              label="Price per Unit"
              type="number"
              placeholder="e.g., 20"
              value={createDealData.pricePerUnit}
              onChange={(e) =>
                setCreateDealData({
                  ...createDealData,
                  pricePerUnit: e.target.value,
                })
              }
            />
            <Input
              id="unit"
              label="Unit"
              type="text"
              placeholder="e.g., kg"
              value={createDealData.unit}
              onChange={(e) =>
                setCreateDealData({ ...createDealData, unit: e.target.value })
              }
            />
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Create Deal
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default VendorDashboard;
