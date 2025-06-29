import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaWhatsapp, FaRegUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

// Hardcoded original reviews
const initialReviews = [
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
];

export const MyReview = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', review: '', stars: 5 });

  // Function to load user reviews from localStorage
  const loadUserReviews = () => {
    const storedReviews = localStorage.getItem('userReviews');
    if (storedReviews) {
      try {
        const parsedReviews = JSON.parse(storedReviews);
        if (Array.isArray(parsedReviews)) {
          setReviews([...initialReviews, ...parsedReviews]);
        }
      } catch (error) {
        console.error('Failed to parse reviews from localStorage:', error);
      }
    } else {
      setReviews(initialReviews); // If no user reviews, just initial
    }
  };

  // Load user reviews on first render
  useEffect(() => {
    loadUserReviews();
  }, []);

  // Listen for storage changes (cross-tab sync)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'userReviews') {
        loadUserReviews();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.review.trim()) {
      const newReviews = [...reviews, newReview];
      const userOnlyReviews = newReviews.slice(initialReviews.length);

      localStorage.setItem('userReviews', JSON.stringify(userOnlyReviews));
      setReviews(newReviews);

      setNewReview({ name: '', review: '', stars: 5 });
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-3">
      {/* Hero Section */}
      <section className="relative bg-gray-900 rounded-3xl py-20 px-8 overflow-hidden mb-20">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-pink-500 to-indigo-500 blur-3xl" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-6">UserBox</h1>
          <p className="text-lg text-gray-300 mb-6">
            Tiktok, Twitter, and Snapchat accounts for sale: <br />
            <span className="font-semibold">Secure, Verified, and Affordable Social Media Accounts for Every Need</span>.
          </p>
          <h2 className="text-2xl font-semibold text-white">Join thousands of happy customers who trust us!</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need help? Contact us now through Discord, Telegram, or WhatsApp to select your best account at the best price.
          </p>
          <p className="mt-4 text-green-600 font-semibold">Delivery within 5 minutes after payment!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ContactCard 
            icon={<FaTelegramPlane className="w-8 h-8 text-blue-500" />} 
            title="Telegram" 
            contact="Userbox99" 
          />
          <ContactCard 
            icon={<FaWhatsapp className="w-8 h-8 text-green-500" />} 
            title="WhatsApp" 
            contact="+1 863 664 8692" 
          />
          <ContactCard 
            icon={<FaDiscord className="w-8 h-8 text-indigo-500" />} 
            title="Discord" 
            contact="userbox99" 
          />
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <p className="text-gray-600">Don’t take our word for it — read what our customers have to say!</p>
          <div className="flex justify-center items-center mt-4">
            <StarRating rating={4.5} />
            <span className="ml-2 text-gray-600">Based on {reviews.length} reviews</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaRegUserCircle className="w-10 h-10 text-gray-500 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                  <StarRating rating={review.stars} />
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>

        {/* New Review Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-md">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" 
              value={newReview.name} 
              onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              required
            />
            <textarea 
              placeholder="Your Review" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" 
              value={newReview.review}
              onChange={(e) => setNewReview({...newReview, review: e.target.value})}
              required
            ></textarea>
            <select 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400" 
              value={newReview.stars}
              onChange={(e) => setNewReview({...newReview, stars: parseInt(e.target.value)})}
            >
              {[5,4,3,2,1].map(num => (
                <option key={num} value={num}>{num} Star{num > 1 && 's'}</option>
              ))}
            </select>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Submit Review
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, contact }) => (
  <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-1">{title}</h4>
    <p className="text-gray-500">{contact}</p>
  </div>
);

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  
  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
        </svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <path fill="url(#half-grad)" d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
        </svg>
      )}
    </div>
  );
};
