// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FacebookStatus = () => {
//   const [facebookStatuses, setFacebookStatuses] = useState([]);

//   useEffect(() => {
//     const fetchFacebookStatuses = async () => {
//       try {
//         const accessToken = "EAAZADcC02WjIBO02vVVvinwD5UvXLeIxI2tcGBoseuGrbCwjzNL5NGWh4XxYrWZBKArFwkdTTtYphGC6GGT3cqpiZC8BQ4ZBQ4qZAWXhLvVN1US96IqFVmDyl6PKhyIjlnmrMSDGNqilezopZAvJ7XiTa2wUfRmQFaHmFFM2gMPyj7pTCT4tFtAdfZAxsZAyZCZAYeZAH7oMD0ZBF9xnxEIIoAZDZD";

//         const response = await axios.get(
//             `https://graph.facebook.com/mim.banyutengah/posts`
//             ,
//           {
//             params: {
//               fields: "message,created_time",
//               limit: 6,
//               access_token: accessToken,
//             },
//           }
//         );

//         setFacebookStatuses(response.data.data);
//       } catch (error) {
//         console.error("Error fetching Facebook statuses:", error);
//       }
//     };

//     fetchFacebookStatuses();
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-md shadow-md mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
//       <h2 className="text-2xl font-bold mb-4 text-blue-500">Facebook Status</h2>
//       <ul className="text-gray-800">
//         {facebookStatuses.map((status) => (
//           <li key={status.id}>
//             <p>{status.message}</p>
//             <p>{new Date(status.created_time).toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FacebookStatus;
