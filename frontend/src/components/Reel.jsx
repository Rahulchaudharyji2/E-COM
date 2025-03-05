// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaInstagram } from "react-icons/fa"; // For the Instagram icon

// const Reel = () => {
//   const [reels, setReels] = useState([]);

//   useEffect(() => {
//     const fetchReels = async () => {
//       try {
//         const response = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=YOUR_ACCESS_TOKEN`
//         );
//         const data = await response.json();
//         const reelVideos = data.data.filter((item) => item.media_type === "VIDEO");
//         setReels(reelVideos);
//       } catch (error) {
//         console.error("Error fetching reels:", error);
//       }
//     };

//     fetchReels();
//   }, []);

//   return (
//     <div className="w-full max-w-5xl mx-auto text-center">
//       <h2 className="text-2xl font-semibold mb-4">Our Instagram Reels</h2>
//       <div className="relative">
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           slidesPerView={3}
//           spaceBetween={15}
//           loop={true}
//         >
//           {reels.map((reel) => (
//             <SwiperSlide key={reel.id}>
//               <div className="relative rounded-xl overflow-hidden shadow-lg">
//                 <a href={reel.permalink} target="_blank" rel="noopener noreferrer">
//                   <video className="w-full rounded-xl" controls poster={reel.thumbnail_url}>
//                     <source src={reel.media_url} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                   <div className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full">
//                     <FaInstagram className="text-lg" />
//                   </div>
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Reel;
  

 