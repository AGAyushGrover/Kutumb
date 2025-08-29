

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
// import React, { useEffect, useState, useCallback } from "react";
// import { useLocation,Link, Navigate, useNavigate } from "react-router-dom";
// import defaultUserLogo from "../assets/defaultUserLogo.jpg";



// function UserProfile() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [editAccess, setEditAccess] = useState(false);
//   const [doEdit, setDoEdit] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const userid = location.pathname.split("/")[2];

//   const [user, setUser] = useState({
//     userid: "",
//     password: "",
//     name: "",
//     email: "",
//     address: "",
//     contact: "",
//     years_of_experience: "",
//     projects_supplied: "",
//     customer_satisfaction: "",
//     registration_no: "",
//     tags: [],
//     user_image_url: "",
//     work_images_urls: [], 
//     coordinates: { lat: "", lon: "" },
//     register_as: "",
//     specification: [],
//   });

//   const [originalUser, setOriginalUser] = useState({});

//   // Handle Mongo Decimal128
//   const formatDecimal = (val) =>
//     val && typeof val === "object" && "$numberDecimal" in val
//       ? parseFloat(val.$numberDecimal)
//       : val;

//   // Input handler
//   const changeHandler = useCallback((e) => {
//     const { name, value } = e.target;
//     if (name === "lat" || name === "lon") {
//       setUser((prev) => ({
//         ...prev,
//         coordinates: { ...prev.coordinates, [name]: value },
//       }));
//     } else {
//       setUser((prev) => ({ ...prev, [name]: value }));
//     }
//   }, []);

//   // Save handler
//   const saveUser = async (e) => {
//     e.preventDefault();
//     const updates = {};

//     for (const key in user) {
//       if (JSON.stringify(user[key]) !== JSON.stringify(originalUser[key])) {
//         updates[key] =
//             key === "tags"
//             ? user[key].split(",").map((t) => t.trim())
//             : key === "work_images_urls"
//             ? user[key].split(",").map((url) => url.trim())
//             : key === "specification"
//             ? user[key].split(",").map((url) => url.trim())
//             : user[key];
//       }
//     }

//     if (Object.keys(updates).length === 0) {
//       setDoEdit(false);
//       return;
//     }

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/profile/${userid}/save-user`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify(updates),
//         }
//       );
//       if (!response.ok) {
//         console.error("Error saving user:", await response.text());
//         return;
//       }
//       setOriginalUser(user);
//       setDoEdit(false);
//     } catch (err) {
//       console.error("Error saving user:", err);
//     }
//   };

//   // Fetch user on mount
//   useEffect(() => {
//     let isMounted = true;
//     setLoading(true);

//     const fetchUser = async () => {
//       if (userid === "me") setEditAccess(true);
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_BACKEND_URL}/profile/${userid}`,
//           {
//             method: "GET",
//             credentials: "include",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         if (!response.ok) {
//           setLoading(false);
//           return;
//         }
//         const data = await response.json();

//         const userData = {
//           userid: data.user.userid || "",
//           password: data.user.password || "",
//           name: data.user.name || "",
//           email: data.user.email || "",
//           address: data.user.address || "",
//           contact: data.user.contact || "",
//           years_of_experience: formatDecimal(data.user.years_of_experience) ?? "",
//           projects_supplied: formatDecimal(data.user.projects_supplied) ?? "",
//           customer_satisfaction: formatDecimal(data.user.customer_satisfaction) ?? "",
//           registration_no: data.user.registration_no || "",
//           tags: Array.isArray(data.user.tags)
//             ? data.user.tags.join(", ")
//             : data.user.tags || "",
//           user_image_url: data.user.user_image_url || "",
//           // Store as comma-separated string for the form; display will parse it back
//           work_images_urls: Array.isArray(data.user.work_images_urls)
//             ? data.user.work_images_urls.join(", ")
//             : data.user.work_images_urls || "",
//           coordinates: {
//             lat: formatDecimal(data.user.coordinates?.lat) ?? "",
//             lon: formatDecimal(data.user.coordinates?.lon) ?? "",
//           },
//           register_as: data.user.register_as || "",
//           specification: Array.isArray(data.user.specification)
//             ? data.user.specification.join(", ")
//             : data.user.specification || "",
//         };

//         if (isMounted) {
//           setUser(userData);
//           setOriginalUser(userData);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching user:", err);
//         setLoading(false);
//       }
//     };

//     fetchUser();
//     return () => {
//       isMounted = false;
//     };
//   }, [userid]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-lg text-[rgb(200,140,40)]">
//         Loading user data...
//       </div>
//     );
//   }

//   // Prepare work images for display (max 4)
//   console.log(user.work_images_urls);

//   const workImages = (user.work_images_urls || "")
//     .split(",")
//     .map((u) => u.trim())
//     .filter(Boolean)
//     .slice(0, 4);

//     // console.log(workImages);

//   return (
//     <div className="relative min-h-screen bg-neutral-900 flex justify-center py-8">
      
//       <div className=" relative bg-neutral-800 w-full max-w-6xl rounded-2xl shadow-lg border border-neutral-700 p-6 md:p-8 text-neutral-200 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <button 
//         onClick={() =>{
//           navigate(-1);
//         }} 
//         className=" absolute cursor-pointer right-2 top-2"><FontAwesomeIcon icon={faWindowClose} style={{ color: "#f59e0b", fontSize: '40px' }} /></button>
//         {/* LEFT: details (spans 2 cols on desktop) */}
//         <div className="lg:col-span-2">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-neutral-700 pb-3 md:pb-4">
//             <h1 className="text-2xl md:text-3xl font-bold text-[rgb(180,120,30)]">
//               User Profile
//             </h1>
//             {editAccess && (
//               <button
//                 onClick={() => setDoEdit((prev) => !prev)}
//                 className={`px-4 py-2 rounded-md font-semibold transition ${
//                   doEdit
//                     ? "bg-gray-600 hover:bg-gray-500 text-white"
//                     : "bg-[rgb(180,120,30)] hover:bg-[rgb(200,140,40)] text-neutral-900"
//                 }`}
//               >
//                 {doEdit ? "Cancel" : "Edit"}
//               </button>
//             )}
//           </div>

//           {/* Profile photo — centered at the top of details */}
//           <div className="flex justify-center mb-6">
//             {user.user_image_url && user.user_image_url !== "Not Specified" ? (
//               <img
//                 src={user.user_image_url}
//                 alt="User Picture"
//                 className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-neutral-700 shadow-lg"
//                 onError={(e) => {
//                   e.currentTarget.src = "https://via.placeholder.com/160";
//                 }}
//               />
//             ) : (
//               <div className="w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-neutral-700 grid place-items-center text-sm text-neutral-400">
//                 <img
//                 src={defaultUserLogo}
//                 alt="User Picture"
//                 className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-neutral-700 shadow-lg"
//               />
//               </div>
//             )}
//           </div>

//           {/* Edit or View */}
//           {editAccess && doEdit ? (
//             <form onSubmit={saveUser} className="space-y-4">
//               {Object.entries({
//                 name: "Name",
//                 userid: "User ID",
//                 password: "Password",
//                 email: "Email",
//                 address: "Address",
//                 contact: "Contact",
//                 years_of_experience: "Years of Experience",
//                 projects_supplied: "Projects Supplied",
//                 customer_satisfaction: "Customer Satisfaction",
//                 registration_no: "Registration No",
//                 tags: "Tags (comma separated)",
//                 user_image_url: "User Image URL",
//                 work_images_urls: "Work Image URLs (comma separated)",
               
//               }).map(([field, label]) => (
//                 <div key={field}>
//                   <label className="block font-semibold mb-1 text-[rgb(200,140,40)]">
//                     {label}:
//                   </label>
//                   <input
//                     type={
//                       field === "password"
//                         ? "password"
//                         : field.includes("experience") || field.includes("projects")
//                         ? "number"
//                         : "text"
//                     }
//                     name={field}
//                     value={user[field]}
//                     onChange={changeHandler}
//                     className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-[rgb(200,140,40)] text-neutral-200"
//                   />
//                 </div>
//               ))}

//               {/* register */}

//               <div>
//           <label className="block font-semibold mb-1 text-[rgb(200,140,40)]">
//             Register As:
//           </label>
//           <select
//             name="register_as"
//             value={user.register_as}
//             onChange={changeHandler}
//             className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-[rgb(200,140,40)] text-neutral-200"
//           >
//             <option value="">Select an option</option>
//             <option value="Product-Supplier">Product-Supplier</option>
//             <option value="Service-Provider">Service-Provider</option>
//             <option value="Consumer">Consumer</option>
//             <option value="Open-to-All">Open-to-All</option>
//           </select>
//         </div>

//         {/* Specificatoin */}
//             <div>
//               <label className="block font-semibold mb-1 text-[rgb(200,140,40)]">
//                Specifications:
//               </label>
//                 <input
//                     type="text"
//                     name="specification"
//                     value={user.specification}
//                     onChange={changeHandler}
//                     className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-[rgb(200,140,40)] text-neutral-200"
//                   />
                
//             </div>

//               {/* Coordinates */}
//               <div className="grid grid-cols-2 gap-4">
//                 {["lat", "lon"].map((coord) => (
//                   <div key={coord}>
//                     <label className="block font-semibold mb-1 text-[rgb(200,140,40)]">
//                       {coord === "lat" ? "Latitude" : "Longitude"}:
//                     </label>
//                     <input
//                       type="number"
//                       name={coord}
//                       value={user.coordinates[coord]}
//                       onChange={changeHandler}
//                       className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-[rgb(200,140,40)] text-neutral-200"
//                     />
//                   </div>
//                 ))}
//               </div>

                


//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-[rgb(180,120,30)] hover:bg-[rgb(200,140,40)] text-neutral-900 font-semibold rounded-lg shadow-md transition"
//               >
//                 Save Changes
//               </button>
//             </form>
//           ) : (
//             <div className="space-y-3">
//               {[
//                 ["Name", user.name],
//                 ["User ID", user.userid],
//                 ["Password", "*".repeat(user.password?.length || 0)],
//                 ["Email", user.email],
//                 ["Address", user.address],
//                 ["Contact", user.contact],
//                 ["Years of Experience", user.years_of_experience],
//                 ["Projects Supplied", user.projects_supplied],
//                 ["Customer Satisfaction", user.customer_satisfaction],
//                 ["Registration No", user.registration_no],
//                 ["Tags", user.tags],
//                 [
//                   "Coordinates",
//                   `${user.coordinates.lat || "—"}, ${user.coordinates.lon || "—"}`,
//                 ],
//                 ["Register As", user.register_as],
//                 ["Specification", user.specification],
//               ].map(([label, value]) => (
//                 <div key={label}>
//                   <span className="font-semibold text-[rgb(200,140,40)]">
//                     {label}:
//                   </span>{" "}
//                   {value || "—"}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* RIGHT: Works Images (no wasted space) */}
//         {workImages.length > 0 && (
//           <div className="lg:col-span-1">
//             <div className="flex items-center justify-between mb-3">
//               <h2 className="text-base font-semibold text-[rgb(200,140,40)]">
//                 Recent Work
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 gap-3">
//               {workImages.map((img, idx) => (
//                 <div
//                   key={idx}
//                   className="w-full overflow-hidden rounded-lg border border-neutral-700"
//                 >
//                   <img
//                     src={img}
//                     alt={`Work ${idx + 1}`}
//                     className="w-full h-32 md:h-36 object-cover block"
//                     loading="lazy"
//                     onError={(e) => {
//                       // hide broken images so the column doesn't look messy
//                       e.currentTarget.parentElement.style.display = "none";
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* On mobile, show work images beneath (if any) so nothing is wasted */}
//       {workImages.length > 0 && (
//         <div className="lg:hidden w-full max-w-6xl mt-4 px-6">
//           <div className="grid grid-cols-2 gap-3">
//             {workImages.map((img, idx) => (
//               <div
//                 key={`m-${idx}`}
//                 className="w-full overflow-hidden rounded-lg border border-neutral-700"
//               >
//                 <img
//                   src={img}
//                   alt={`Work ${idx + 1}`}
//                   className="w-full h-28 object-cover block"
//                   loading="lazy"
//                   onError={(e) => {
//                     e.currentTarget.parentElement.style.display = "none";
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfile;



import React, { useEffect, useState, useCallback } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [editAccess, setEditAccess] = useState(false);
  const [doEdit, setDoEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const userid = location.pathname.split("/")[2];

  const [user, setUser] = useState({
    userid: "",
    password: "",
    name: "",
    email: "",
    address: "",
    contact: "",
    years_of_experience: "",
    projects_supplied: "",
    customer_satisfaction: "",
    registration_no: "",
    tags: [],
    user_image_url: "",
    work_images_urls: [],
    coordinates: { lat: "", lon: "" },
    register_as: "",
    specification: [],
  });

  const [originalUser, setOriginalUser] = useState({});

  // Handle Mongo Decimal128
  const formatDecimal = (val) =>
    val && typeof val === "object" && "$numberDecimal" in val
      ? parseFloat(val.$numberDecimal)
      : val;

  // Input handler
  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lon") {
      setUser((prev) => ({
        ...prev,
        coordinates: { ...prev.coordinates, [name]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  // Save handler
  const saveUser = async (e) => {
    e.preventDefault();
    const updates = {};

    for (const key in user) {
      if (JSON.stringify(user[key]) !== JSON.stringify(originalUser[key])) {
        updates[key] =
          key === "tags"
            ? user[key].split(",").map((t) => t.trim())
            : key === "work_images_urls"
            ? user[key].split(",").map((url) => url.trim())
            : key === "specification"
            ? user[key].split(",").map((url) => url.trim())
            : user[key];
      }
    }

    if (Object.keys(updates).length === 0) {
      setDoEdit(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/profile/${userid}/save-user`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(updates),
        }
      );
      if (!response.ok) {
        console.error("Error saving user:", await response.text());
        return;
      }
      setOriginalUser(user);
      setDoEdit(false);
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  // Fetch user on mount
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchUser = async () => {
      if (userid === "me") setEditAccess(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/profile/${userid}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          setLoading(false);
          return;
        }
        const data = await response.json();

        const userData = {
          userid: data.user.userid || "",
          password: data.user.password || "",
          name: data.user.name || "",
          email: data.user.email || "",
          address: data.user.address || "",
          contact: data.user.contact || "",
          years_of_experience: formatDecimal(data.user.years_of_experience) ?? "",
          projects_supplied: formatDecimal(data.user.projects_supplied) ?? "",
          customer_satisfaction: formatDecimal(data.user.customer_satisfaction) ?? "",
          registration_no: data.user.registration_no || "",
          tags: Array.isArray(data.user.tags)
            ? data.user.tags.join(", ")
            : data.user.tags || "",
          user_image_url: data.user.user_image_url || "",
          work_images_urls: Array.isArray(data.user.work_images_urls)
            ? data.user.work_images_urls.join(", ")
            : data.user.work_images_urls || "",
          coordinates: {
            lat: formatDecimal(data.user.coordinates?.lat) ?? "",
            lon: formatDecimal(data.user.coordinates?.lon) ?? "",
          },
          register_as: data.user.register_as || "",
          specification: Array.isArray(data.user.specification)
            ? data.user.specification.join(", ")
            : data.user.specification || "",
        };

        if (isMounted) {
          setUser(userData);
          setOriginalUser(userData);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setLoading(false);
      }
    };

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, [userid]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-amber-500 bg-black">
        Loading user data...
      </div>
    );
  }

  const workImages = (user.work_images_urls || "")
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center py-8 px-4 overflow-hidden font-sans">
      
      {/* 🌊 Inline animation styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          .delay-500 { animation-delay: 0.5s; }
          .delay-1000 { animation-delay: 1s; }
          .delay-1500 { animation-delay: 1.5s; }
        `}
      </style>

      {/* 🌐 Background shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-gray-700 rounded-full blur-2xl opacity-40 animate-float" />
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-amber-800 rounded-full blur-2xl opacity-40 animate-float delay-500" />
        <div className="absolute bottom-[30%] left-[60%] w-24 h-24 bg-gray-600 rounded-full blur-2xl opacity-30 animate-float delay-1000" />
        <div className="absolute bottom-10 left-[25%] w-36 h-36 bg-amber-700 rounded-full blur-2xl opacity-30 animate-float delay-1500" />
        <div className="absolute top-[5%] right-[5%] w-28 h-28 bg-gray-500 rounded-full blur-2xl opacity-30 animate-float delay-1000" />
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-6xl rounded-2xl shadow-lg border border-neutral-700 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 bg-neutral-900 bg-opacity-80 backdrop-blur-md">
        
        {/* Close Button - positioned absolutely within the container */}
        <button
          onClick={() => { navigate(-1); }}
          className="absolute cursor-pointer right-4 top-4 text-amber-500 text-3xl font-bold transition-transform duration-200 hover:scale-125"
        >
          X
        </button>

        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 bg-neutral-800 rounded-lg p-6 flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="mb-4 relative">
                {user.user_image_url && user.user_image_url !== "Not Specified" ? (
                    <img
                        src={user.user_image_url}
                        alt="User Picture"
                        className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-amber-500 shadow-lg"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/160x160/000000/F59E0B?text=User"; }}
                    />
                ) : (
                    <img
                        src="https://placehold.co/160x160/000000/F59E0B?text=User"
                        alt="User Picture"
                        className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-amber-500 shadow-lg"
                    />
                )}
            </div>
            {/* Name and Role */}
            <h1 className="text-xl md:text-2xl font-bold text-amber-500">{user.name || "Unnamed User"}</h1>
            <p className="text-sm text-neutral-400 mt-1">{user.register_as || "Not Specified"}</p>
            <div className="w-full mt-6 border-t border-neutral-700 pt-6 space-y-3">
                <div className="flex justify-between items-center text-neutral-200">
                    <span className="text-sm">Years of Experience</span>
                    <span className="text-base font-semibold text-neutral-300">{user.years_of_experience || "—"}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-200">
                    <span className="text-sm">Projects Supplied</span>
                    <span className="text-base font-semibold text-neutral-300">{user.projects_supplied || "—"}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-200">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-base font-semibold text-neutral-300">{user.customer_satisfaction || "—"}%</span>
                </div>
            </div>
            {/* Action button */}
            <button className="mt-8 w-full py-3 bg-amber-500 text-black font-semibold rounded-md hover:bg-white transition-colors duration-300">
                View Public Profile
            </button>
            {editAccess && (
              <button
                onClick={() => setDoEdit((prev) => !prev)}
                className={`mt-4 w-full px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
                  doEdit
                    ? "bg-gray-600 hover:bg-gray-500 text-white"
                    : "bg-amber-500 hover:bg-amber-600 text-neutral-900"
                }`}
              >
                {doEdit ? "Cancel" : "Edit"}
              </button>
            )}
        </div>

        {/* Right Column: Account & Details */}
        <div className="lg:col-span-2 bg-neutral-800 rounded-lg p-6">
            {/* Tab Navigation */}
            <div className="flex items-center space-x-6 border-b-2 border-neutral-700 mb-6">
                <div className="text-lg font-semibold pb-2 border-b-2 border-amber-500 text-amber-500 transition-colors duration-200">ACCOUNT</div>
            </div>
            
            {/* Edit or View Section */}
            {doEdit ? (
                <form onSubmit={saveUser} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries({
                        name: "Name",
                        email: "Email",
                        address: "Address",
                        contact: "Contact",
                        years_of_experience: "Years of Experience",
                        projects_supplied: "Projects Supplied",
                        customer_satisfaction: "Customer Satisfaction",
                        registration_no: "Registration No",
                        tags: "Tags (comma separated)",
                        user_image_url: "User Image URL",
                        work_images_urls: "Work Image URLs (comma separated)",
                      }).map(([field, label]) => (
                        <div key={field}>
                          <label className="block font-semibold mb-1 text-amber-500">
                            {label}:
                          </label>
                          <input
                            type={field.includes("experience") || field.includes("projects") ? "number" : "text"}
                            name={field}
                            value={user[field]}
                            onChange={changeHandler}
                            className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-amber-500 text-neutral-200 transition-all duration-200"
                          />
                        </div>
                      ))}
                    </div>

                    {/* register */}
                    <div>
                        <label className="block font-semibold mb-1 text-amber-500">Register As:</label>
                        <select
                            name="register_as"
                            value={user.register_as}
                            onChange={changeHandler}
                            className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-amber-500 text-neutral-200 transition-all duration-200"
                        >
                            <option value="">Select an option</option>
                            <option value="Product-Supplier">Product-Supplier</option>
                            <option value="Service-Provider">Service-Provider</option>
                            <option value="Consumer">Consumer</option>
                            <option value="Open-to-All">Open-to-All</option>
                        </select>
                    </div>

                    {/* Specification */}
                    <div>
                        <label className="block font-semibold mb-1 text-amber-500">Specifications:</label>
                        <input
                            type="text"
                            name="specification"
                            value={user.specification}
                            onChange={changeHandler}
                            className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-amber-500 text-neutral-200 transition-all duration-200"
                        />
                    </div>
                    
                    {/* Coordinates */}
                    <div className="grid grid-cols-2 gap-4">
                        {["lat", "lon"].map((coord) => (
                            <div key={coord}>
                                <label className="block font-semibold mb-1 text-amber-500">
                                    {coord === "lat" ? "Latitude" : "Longitude"}:
                                </label>
                                <input
                                    type="number"
                                    name={coord}
                                    value={user.coordinates[coord]}
                                    onChange={changeHandler}
                                    className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-2 focus:ring focus:ring-amber-500 text-neutral-200 transition-all duration-200"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold rounded-lg shadow-md transition-all duration-200"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-amber-500 mb-4">Personal Details</h3>
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Name:</span>{" "}
                                <span className="text-neutral-300">{user.name || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">User ID:</span>{" "}
                                <span className="text-neutral-300">{user.userid || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Email:</span>{" "}
                                <span className="text-neutral-300">{user.email || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Contact:</span>{" "}
                                <span className="text-neutral-300">{user.contact || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Address:</span>{" "}
                                <span className="text-neutral-300">{user.address || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Registered As:</span>{" "}
                                <span className="text-neutral-300">{user.register_as || "—"}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold text-amber-500 mb-4">Professional Details</h3>
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Experience:</span>{" "}
                                <span className="text-neutral-300">{user.years_of_experience || "—"} years</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Projects:</span>{" "}
                                <span className="text-neutral-300">{user.projects_supplied || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Satisfaction:</span>{" "}
                                <span className="text-neutral-300">{user.customer_satisfaction || "—"}%</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Specification:</span>{" "}
                                <span className="text-neutral-300">{user.specification || "—"}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <span className="font-semibold text-neutral-400">Tags:</span>{" "}
                                <span className="text-neutral-300">{user.tags || "—"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Work Images Section - Displayed under details on desktop */}
            {workImages.length > 0 && !doEdit && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-amber-500 mb-4">Recent Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {workImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-full overflow-hidden rounded-lg border-2 border-neutral-700 transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`Work ${idx + 1}`}
                        className="w-full h-40 object-cover block"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.parentElement.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
