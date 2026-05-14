import concertImg from '../assets/concert.png';
import startupImg from '../assets/startup.png';

export const MOCK_EVENTS = [
  {
    id: 1,
    title: "MISMATCHED - A TAMIL COMEDY SHOW ft. Raja and ...",
    category: "Comedy Shows",
    date: "Sun, 17 May onwards",
    time: "6:00 PM",
    location: "Trinity Studio: Chennai",
    price: "₹ 299",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60",
    promoted: true,
    description: "Experience a night of laughter with the best Tamil comedy show in town. Raja and his team are ready to tickle your funny bone with their unique style of observational humor and witty punches. Don't miss out on this hilarious journey through everyday life in Chennai."
  },
  {
    id: 2,
    title: "VIKKALS COMEDY CAFE - A standup comedy mic",
    category: "Comedy Shows",
    date: "Wed, 13 May onwards",
    time: "7:30 PM",
    location: "The Lab: Royapettah",
    price: "₹ 150",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    promoted: true,
    description: "A platform for upcoming and seasoned comedians to test their latest material. Join us for an evening of fresh jokes, raw talent, and unpredictable humor. It's the perfect place to discover the next big star in the comedy circuit."
  },
  {
    id: 3,
    title: "P.C.SORCAR & Dhayas International MAGIC SHOW",
    category: "Performances",
    date: "Sat, 16 May onwards",
    time: "4:00 PM",
    location: "Museum Theatre: Chennai",
    price: "₹ 500",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60",
    promoted: false,
    description: "Witness the legendary P.C. Sorcar and Dhayas as they perform gravity-defying illusions and mind-bending magic. A spectacular show for all ages that will leave you questioning reality. Prepare to be amazed by the masters of magic."
  },
  {
    id: 4,
    title: "Vijay Antony Live in Concert - Chennai",
    category: "Music Shows",
    date: "Sat, 13 Jun",
    time: "6:30 PM",
    location: "YMCA Nandanam: Chennai",
    price: "₹ 999",
    image: concertImg,
    promoted: false,
    description: "Music director and singer Vijay Antony is set to rock Chennai with his chart-topping hits and high-energy performance. Join thousands of fans for an unforgettable musical night filled with rhythm and soul."
  },
  {
    id: 5,
    title: "Art & Craft Workshop for Kids",
    category: "Workshops",
    date: "Sun, 24 May",
    time: "10:00 AM",
    location: "Creative Space: Adyar",
    price: "₹ 450",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60",
    promoted: false,
    description: "Unlock your child's creativity with our fun-filled art and craft workshop. From painting to clay modeling, we provide all materials and guidance to help your little ones express themselves through art."
  },
  {
    id: 6,
    title: "Startup Founders Meetup",
    category: "Meetups",
    date: "Fri, 22 May",
    time: "5:00 PM",
    location: "IITM Research Park",
    price: "Free",
    image: startupImg,
    promoted: true,
    description: "Connect with fellow entrepreneurs, share insights, and build valuable networks. This meetup is designed for startup founders to discuss challenges, celebrate wins, and explore potential collaborations."
  }
];
