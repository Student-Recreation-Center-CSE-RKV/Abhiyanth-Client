export const DummyApi = [
  {
    id:"1",
    name: "Tech Fest",
    description: "A grand tech festival",
    status: "upcoming",
    date: "2024-12-10",
    time: "09:00:00",
    venue: "Tech Auditorium",
    organizers: [
      { name: "Alice", mobile: "9876543210" },
      { name: "Bob", mobile: "9123456789" },
    ],
    links: [
      { text: "Event Details", link: "https://example.com/details" },
      { text: "Register Here", link: "https://example.com/register" },
    ],
    results: [],
    images: {
      mainImage: "https://example.com/techfest_main.jpg",
      lastImage: "https://example.com/techfest_last.jpg",
      descImageLeft: "https://example.com/techfest_left.jpg",
      descImageRight: "https://example.com/techfest_right.jpg",
    },
  },
  {
    id:"2",
    name: "Music Fiesta",
    description: "A celebration of music and arts",
    status: "completed",
    date: "2024-09-15",
    time: "18:00:00",
    venue: "Grand Arena",
    organizers: [
      { name: "Charles", mobile: "9876512345" },
      { name: "Diana", mobile: "9123445678" },
    ],
    links: [
      { text: "View Highlights", link: "https://example.com/highlights" },
    ],
    results: ["First Prize: Symphony Band", "Runner-up: Melody Makers"],
    images: {
      mainImage: "https://example.com/musicfiesta_main.jpg",
      lastImage: "https://example.com/musicfiesta_last.jpg",
    },
  },
  {
    id:"3",
    name: "Coding Hackathon",
    description: "Solve coding challenges and win prizes",
    status: "ongoing",
    date: "2024-11-20",
    time: "10:00:00",
    venue: "Innovation Hub",
    organizers: [
      { name: "Eve", mobile: "9876532109" },
    ],
    links: [
      { text: "Live Updates", link: "https://example.com/live" },
    ],
    results: [],
    images: {
      mainImage: "https://example.com/hackathon_main.jpg",
    },
  },
  {
    id:"4",
    name: "Science Expo",
    description: "Exhibition of innovative scientific projects",
    status: "upcoming",
    date: "2025-01-25",
    time: "12:00:00",
    venue: "Science Block",
    organizers: [
      { name: "Frank", mobile: "9123467890" },
      { name: "Grace", mobile: "9876532178" },
    ],
    links: [
      { text: "Event Details", link: "https://example.com/expo" },
    ],
    results: [],
    images: {
      mainImage: "https://example.com/scienceexpo_main.jpg",
      descImageLeft: "https://example.com/scienceexpo_left.jpg",
      descImageRight: "https://example.com/scienceexpo_right.jpg",
    },
  },
  {
    id:"5",
    name: "Art Exhibition",
    description: "Showcasing masterpieces by talented artists",
    status: "upcoming",
    date: "2024-12-15",
    time: "11:00:00",
    venue: "Art Gallery",
    organizers: [
      { name: "Hannah", mobile: "9876541212" },
    ],
    links: [
      { text: "Tickets", link: "https://example.com/tickets" },
    ],
    results: [],
    images: {
      mainImage: "https://example.com/artexhibition_main.jpg",
      descImageLeft: "https://example.com/artexhibition_left.jpg",
    },
  },
  {
    id:"6",
    name: "Startup Summit",
    description: "Meet investors and showcase your startup ideas",
    status: "completed",
    date: "2024-08-10",
    time: "14:00:00",
    venue: "Business Center",
    organizers: [
      { name: "Ivy", mobile: "9876567890" },
      { name: "Jack", mobile: "9123476543" },
    ],
    links: [
      { text: "Summit Recap", link: "https://example.com/summitrecap" },
    ],
    results: ["Best Startup: InnovateTech", "Audience Favorite: GoGreen"],
    images: {
      mainImage: "https://example.com/startupsummit_main.jpg",
      lastImage: "https://example.com/startupsummit_last.jpg",
    },
  },
  {
    id:"7",
    name: "Photography Workshop",
    description: "Learn from professional photographers",
    status: "upcoming",
    date: "2025-02-15",
    time: "09:30:00",
    venue: "Studio Hall",
    organizers: [
      { name: "Karen", mobile: "9876587654" },
    ],
    links: [
      { text: "Workshop Details", link: "https://example.com/photo" },
    ],
    results: [],
    images: {
      mainImage: "https://example.com/photo_main.jpg",
    },
  },
  {
    id:"8",
    name: "Literary Meet",
    description: "A gathering of poets and authors",
    status: "ongoing",
    date: "2024-11-05",
    time: "16:00:00",
    venue: "Library Hall",
    organizers: [
      { name: "Leo", mobile: "9876501234" },
    ],
    links: [
      { text: "Meet Details", link: "https://example.com/literary" },
    ],
    results: [],
    images: {
      mainImage: "https://example.com/literary_main.jpg",
    },
  },
  // Add more events here by copying and modifying data
];


export const emptyObject = {
    name: "",
    description: "",
    status: "",
    date: "",
    time: "",
    venue: "",
    organizers: [],
    links: [],
    results: [],
    images: {},
}