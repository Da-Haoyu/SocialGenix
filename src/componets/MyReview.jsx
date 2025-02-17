// import React, { useState } from 'react';

// export const MyReview = () => {
//   const [reviews, setReviews] = useState([
//     {
//       name: 'Emily Selman',
//       review: 'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.',
//       stars: 5,
//     },
//     {
//       name: 'Hector Gibbons',
//       review: 'Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!',
//       stars: 5,
//     },
//     {
//       name: 'Mark Edwards',
//       review: 'I love how versatile this bag is. It can hold anything ranging from cookies that come in tins to packages that come in tubes.',
//       stars: 4,
//     },
//   ]);

//   const [newReview, setNewReview] = useState({ name: '', review: '', stars: 0 });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newReview.name && newReview.review && newReview.stars) {
//       setReviews([...reviews, newReview]);
//       setNewReview({ name: '', review: '', stars: 0 });
//     } else {
//       alert('Please fill out all fields and provide a rating.');
//     }
//   };

//   const handleDelete = (index) => {
//     setReviews(reviews.filter((_, i) => i !== index));
//   };

//   const handleEdit = (index) => {
//     const updatedReview = prompt('Edit your review:', reviews[index].review);
//     if (updatedReview !== null) {
//       const updatedReviews = [...reviews];
//       updatedReviews[index].review = updatedReview;
//       setReviews(updatedReviews);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       {/* Welcome Section */}
//       <div className="mb-8 bg-gray-100 p-6 rounded shadow">
//         <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Welcome to Dayton Jay Accounts</h1>
//         <p className="text-center text-gray-700 mb-4">
//           Tiktok accounts, Twitter accounts, and Snapchat accounts are available for sale. Send a message to select your best Account(s) at competitive prices!
//         </p>
//         <div className="text-center mb-4">
//           <p><strong>Discord:</strong> stiph55 <i className="fab fa-discord ml-2 text-blue-500"></i></p>
//           <p><strong>Telegram:</strong> Stiph55 <i className="fab fa-telegram-plane ml-2 text-blue-400"></i></p>
//           <p><strong>WhatsApp:</strong> <a href="https://wa.me/17152301606" className="text-blue-500">https://wa.me/17152301606</a> <i className="fab fa-whatsapp ml-2 text-green-500"></i></p>
//         </div>
//         <p className="text-center text-gray-700">
//           For Account delivery, you get: The Email address and the email password which you can change if you have a preferred one, or you can just change the password—whatever pleases you.
//         </p>
//         <p className="text-center text-gray-700">
//           The delivery is <strong>5 - 7 minutes max after payment</strong>.
//         </p>
//       </div>

//       {/* Review Summary */}
//       <div className="border-b pb-6">
//         <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
//         <div className="flex items-center mb-4">
//           <div className="flex items-center text-yellow-500">
//             {Array.from({ length: 4 }).map((_, index) => (
//               <svg
//                 key={index}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-5 h-5"
//               >
//                 <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.906 1.43 8.302L12 18.896l-7.366 3.879 1.43-8.302-6.064-5.906 8.332-1.151L12 .587z" />
//               </svg>
//             ))}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.906 1.43 8.302L12 18.896l-7.366 3.879 1.43-8.302-6.064-5.906 8.332-1.151L12 .587z"
//               />
//             </svg>
//           </div>
//           <span className="ml-2 text-gray-600">Based on {reviews.length} reviews</span>
//         </div>
//       </div>

//       {/* Individual Reviews */}
//       <div className="py-6 space-y-6">
//         {reviews.map((review, index) => (
//           <div key={index} className="flex space-x-4 items-start">
//             <img
//               src="https://via.placeholder.com/48"
//               alt="User Avatar"
//               className="w-12 h-12 rounded-full"
//             />
//             <div className="flex-1">
//               <h4 className="font-semibold text-gray-800 flex items-center justify-between">
//                 {review.name}
//                 <span className="text-sm text-gray-500 cursor-pointer" onClick={() => handleDelete(index)}>Delete</span>
//                 <span className="text-sm text-gray-500 cursor-pointer" onClick={() => handleEdit(index)}>Edit</span>
//               </h4>
//               <div className="flex items-center mb-2">
//                 {Array.from({ length: review.stars }).map((_, i) => (
//                   <svg
//                     key={i}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     className="w-4 h-4 text-yellow-500"
//                   >
//                     <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.906 1.43 8.302L12 18.896l-7.366 3.879 1.43-8.302-6.064-5.906 8.332-1.151L12 .587z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-gray-600">{review.review}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Write a Review Section */}
//       <div className="border-t pt-6">
//         <h3 className="text-lg font-semibold mb-4">Share your thoughts</h3>
//         <p className="text-gray-600 mb-4">
//           If you’ve used this product, share your thoughts with other customers
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//             className="w-full px-4 py-2 border rounded focus:outline-none"
//           />
//           <textarea
//             placeholder="Your Review"
//             value={newReview.review}
//             onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
//             className="w-full px-4 py-2 border rounded focus:outline-none"
//           ></textarea>
//           <select
//             value={newReview.stars}
//             onChange={(e) => setNewReview({ ...newReview, stars: Number(e.target.value) })}
//             className="w-full px-4 py-2 border rounded focus:outline-none"
//           >
//             <option value="0">Select Rating</option>
//             <option value="1">1 Star</option>
//             <option value="2">2 Stars</option>
//             <option value="3">3 Stars</option>
//             <option value="4">4 Stars</option>
//             <option value="5">5 Stars</option>
//           </select>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded shadow"
//           >
//             Submit Review
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


import React, { useState } from 'react';

export const MyReview = () => {
  const [reviews, setReviews] = useState([
    
        {
          name: 'Samantha Johnson',
          review: 'I got my TikTok account within minutes, and everything was exactly as promised. Highly recommend!',
          stars: 5,
        },
        {
          name: '罗伯茨',
          review: '整个过程很顺利，我的所有问题都得到了及时解答。服务很棒',
          stars: 5,
        },
        {
          name: 'Maria Gonzalez',
          review: 'Affordable prices and fast delivery. I’ll definitely buy again',
          stars: 4,
        },
        {
          name: 'Emma',
          review: "Hyper fiable ! J'ai acheté des comptes ici plusieurs fois et c'est toujours une expérience formidable.",
          stars: 5,
        },
        {
          name: 'James Wilson',
          review: 'This is the best account-selling service I’ve used. Got my Snapchat account in no time',
          stars: 5,
        },
        {
          name: 'Sophia',
          review: 'I loved how simple and hassle-free the process was. Everything worked perfectly.',
          stars: 4,
        },
        {
          name: 'Michael Brown',
          review: 'The delivery was fast, but I had a minor issue with logging in and it was resolved quickly',
          stars: 4,
        },
        {
          name: 'Daniel Garcia',
          review: 'I was skeptical at first, but this service is legit. Fast delivery and good prices.',
          stars: 5,
        },
        {
          name: 'Olivia',
          review: 'I got my account without issues.',
          stars: 4,
        },
        {
          name: 'Taylor',
          review: 'The account worked perfectly, and I even got instructions on how to secure it. Very thoughtful',
          stars: 5,
        },
        {
          name: 'Isabella Hernandez',
          review: 'Fast delivery, but I wish there were more payment options available.',
          stars: 4,
        },
        {
          name: 'Ethan White',
          review: 'I’ve recommended this service to my friends. It’s fast, affordable, and trustworthy.',
          stars: 5,
        },
        {
          name: 'Charlotte Moore',
          review: 'Got my Twitter account within minutes and was able to log in immediately. Great service',
          stars: 5,
        },
        {
          name: 'Liam Thomas',
          review: 'A bit hesitant to try, but everything worked perfectly. I’m very satisfied.',
          stars: 4,
        },
        {
          name: 'Mia Anderson',
          review: 'The delivery was quick, and the instructions were clear. I had no issues setting everything up.',
          stars: 4,
        },
        {
          name: 'Alexander',
          review: 'I wish I had known about this service earlier! It saved me so much time and effort.',
          stars: 5,
        },
        {
          name: 'Amelia Jackson',
          review: 'The best account-selling experience I’ve ever had. Quick and easy',
          stars: 5,
        },
        {
          name: 'Harris',
          review: 'Good service overall. Delivery was fast, but there was a slight delay in response from start.',
          stars: 4,
        },
      
  ]);

  const [newReview, setNewReview] = useState({ name: '', review: '', stars: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review && newReview.stars) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', review: '', stars: 0 });
    } else {
      alert('Please fill out all fields and provide a rating.');
    }
  };

  return (
    <div className="p-2 max-w-6xl mx-auto">

      {/* Welcome Section */}

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      /> */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl ">SocialGenix</h2><br />
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
          Tiktok accounts, Twitter accounts, and Snapchat accounts are available for sale: "Secure, Verified, and Affordable Social Media Accounts for Every Need"
          </p><br />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Join thousands of happy customers who trust us for their social media needs . . .</h2>
        </div>
        {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a>
                gjhghj <span aria-hidden="true">&rarr;</span>
              </a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">jjkj</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">98</dd>
              </div>
          </dl>
        </div> */}
      </div>
    </div>

      


      {/* <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to DAPSY Accounts</h1>
        <p className="text-center text-gray-700 mb-4">
          Tiktok accounts, Twitter accounts, and Snapchat accounts are available for sale. 
        </p>
        
        <p className="text-center text-gray-700">
          For Account delivery, you get: The Email address and the email password which you can change if you have a preferred one, or you can just change the password—whatever pleases you.
        </p>
      </div> */}

      {/* Contact Section */}
      <div className="py-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
          <p className="text-gray-600 mt-4">
          Need help? Contact us now through Discord, Telegram, or WhatsApp to select your best Account(s) at competitive prices!
          </p><br />
        <p className="text-center text-gray-700">
          <strong>Delivery is under 5 minutes after payment</strong>.
        </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="text-center bg-white shadow-md p-6 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-dotted border-blue-500 rounded-full">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500"
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                > */}
                <FaTelegramPlane className="w-8 h-8 text-blue-500"/>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Telegram</h4>
            <p className="text-gray-600">Socialgenix77</p>
          </div>

          {/* Call Us */}
          <div className="text-center bg-white shadow-md p-6 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-dotted border-blue-500 rounded-full">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l6-6m0 0l6 6m-6-6v12m12-6h-3m4 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg> */}
                <FaWhatsapp className="w-8 h-8 text-blue-500"/>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Whatsapp</h4>
            <p className="text-gray-600">+17152301606</p>
            {/* <a href="https://wa.me/17152301606" className="text-blue-500">https://wa.me/17152301606</a> */}
          </div>

          {/* Email Us */}
          <div className="text-center bg-white shadow-md p-6 rounded-lg">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-dotted border-blue-500 rounded-full">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-2a4 4 0 00-8 0v2m8 0H8m8 0h2a2 2 0 002-2v-4a8 8 0 10-16 0v4a2 2 0 002 2h2"
                  />
                </svg> */}
                <FaDiscord className="w-8 h-8 text-blue-500"/>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Discord</h4>
            <p className="text-gray-600">socialgenix77</p>
          </div>
        </div>
      </div>

      {/* Review Summary */}
      <div className="border-b pb-6">
        <br />
        <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
        <p className="text-gray-600 mt-4 text-lg">Don’t take our word for it, read what our satisfied customers have to say!</p><br />
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: 4 }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.906 1.43 8.302L12 18.896l-7.366 3.879 1.43-8.302-6.064-5.906 8.332-1.151L12 .587z" />
              </svg>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.906 1.43 8.302L12 18.896l-7.366 3.879 1.43-8.302-6.064-5.906 8.332-1.151L12 .587z"
              />
            </svg>
          </div>
          <span className="ml-2 text-gray-600">Based on {reviews.length} reviews</span>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="py-6 space-y-6">
        {reviews.map((review, index) => (
          <div key={index}>
            {/* <img
              src="https://via.placeholder.com/48"
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            /> */}
            <FaRegUserCircle className="w-10 h-10 rounded-full"/>
            <div>
              <h4 className="font-semibold text-gray-800">
                {review.name}
              </h4>
              <div className="flex items-center mb-2">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-yellow-500"
                  >
                    <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.906 1.43 8.302L12 18.896l-7.366 3.879 1.43-8.302-6.064-5.906 8.332-1.151L12 .587z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Share your thoughts</h3>
        <p className="text-gray-600 mb-4 text-lg">
        Your feedback matters! Help others make informed decisions by sharing your experience.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <textarea
            placeholder="Your Review"
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            className="w-full px-4 py-2 border rounded focus:outline-none"
          ></textarea>
          <select
            value={newReview.stars}
            onChange={(e) => setNewReview({ ...newReview, stars: Number(e.target.value) })}
            className="w-full px-4 py-2 border rounded focus:outline-none"
          >
            <option value="0">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded shadow"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};


