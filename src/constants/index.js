import { 
  people01, 
  people02, 
  people03, 
  people04,
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star,
  mobile_dev,
  bot_dev,
  web_dev,
  ai_dev,
  analysis_dev,
  desktop_dev
  

} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id:'services',
    title:"Services"
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "our_team",
    title: "Our Team",
  },

];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "AI-Powered Development",
    content:
      "Our cutting-edge AI models boost productivity and drive smarter software development solutions.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Precision",
    content:
      "Every project is delivered with the utmost accuracy and efficiency, ensuring AI-powered success at every step.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Seamless Integration",
    content:
      "Easily integrate AI into your workflows and enjoy the seamless transformation it brings to mobile, web, and desktop applications.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "AI Engineer developing intelligent solutions that leverage machine learning and deep learning to solve complex, real-world challenges.",
    name: "Osama Mohamed",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Flutter wizard, 2+ years in. Cranks out killer apps. Tackles any mobile challenge.",
    name: "Ibrahim Mansour",
    title: "Flutter Developer",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Flutter Developer with 2+ years experience at GameChanger Research Solutions and AUC (American University in Cairo).",
    name: "Osama Tawfiq",
    title: "Flutter Developer",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "+2 Years of Work Experience at GameChanger Research Solutions and AUC (American University in Cairo).",
    name: "Mohammed Mamdouh",
    title: "Flutter Developer",
    img: people04,
  },

  // {
  //   id: "feedback-5",
  //   content:
  //     "It is usually people in the money business, finance, and international trade that are really rich.",
  //   name: "Mohamed Tawfiq",
  //   title: "Flutter Developer",
  //   img: people03,
  // },

  // {
  //   id: "feedback-6",
  //   content:
  //     "It is usually people in the money business, finance, and international trade that are really rich.",
  //   name: "Mahmoud Nasser",
  //   title: "Back-End Developer",
  //   img: people03,
  // },

];


// export const service = [
//   {
//     id: "service-1",
//     content:
//       "We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.",
//     name: "Web Development",
//     img: web_dev,
//   },
//   {
//     id: "service-2",
//     content:
//       "We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.",
//     name: "Mobile Development",
//     img: mobile_dev,
//   },
//   {
//     id: "service-3",
//     content:
//       "We Develop Bots for(Telegram, Whats App, Specific Business, ..etc).",
//     name: "Bot Development",
//     img: bot_dev,
//   },

// ];

export const service = [
  {
    id: '1',
    name: 'AI Solutions',
    title: 'Click to view desktop apps',
    img: ai_dev,
    content: 'Here are some desktop apps we offer.',
    apps: [
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      }
    ]
  },  
  {
    id: '2',
    name: 'Web Applications',
    title: 'Click to view desktop apps',
    img: web_dev,
    content: 'Here are some desktop apps we offer.',
    apps: [
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      }
    ]
  },
  {
    id: '3',
    name: 'Mobile Applications',
    title: 'Click to view mobile apps',
    img: mobile_dev,
    content: 'We provide mobile app development services.',
    apps: [
      {
        name: 'Akhbary AI ',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      }

    ]
  },
  {
    id: '4',
    name: 'Bots',
    title: 'Click to view Bots',
    img: bot_dev,
    content: 'We provide Bots development services.',
    apps: [
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      },
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      },
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      },
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      },
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      },

    ]
  },
  {
    id: '5',
    name: 'Desktop Applications',
    title: 'Click to view desktop apps',
    img: desktop_dev,
    content: 'Here are some desktop apps we offer.',
    apps: [
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      }
    ]
  },
  {
    id: '5',
    name: 'Analysis',
    title: 'Click to view desktop apps',
    img: analysis_dev,
    content: 'Here are some desktop apps we offer.',
    apps: [
      {
        name: 'React Native',
        link: 'https://reactnative.dev/',
        image: 'path_to_react_native_image',
      }
    ]
  },
];


export const stats = [
  {
    id: "stats-1",
    title: "Clients",
    value: "25+",
  },
  {
    id: "stats-2",
    title: "Project Done",
    value: "30+",
  },
  {
    id: "stats-3",
    title: "Countries",
    value: "5+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.DevAI.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.DevAI.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.DevAI.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.DevAI.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.DevAI.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.DevAI.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.DevAI.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.DevAI.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.DevAI.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.DevAI.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.DevAI.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.DevAI.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];