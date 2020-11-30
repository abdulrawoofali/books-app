/**
{
"first_name": "Eckhart",
  "family_name": "Tolle",
  "about":"Eckhart Tolle is widely recognized as one of the most inspiring and visionary spiritual teachers in the world today. At the age of 29, an intense inner transformation radically changed the course of his life. He devoted the next several years to understanding, integrating, and deepening that transformation. With his international bestsellers, The Power of Now and A New Earth—translated into 52 languages—he has introduced millions to the joy and freedom of living life in the present moment.

His profound yet simple teachings focus on the significance and power of Presence, the awakened state of consciousness that transcends ego and discursive thinking. Eckhart sees this awakening as the essential next step in human evolution. The New York Times has described him as “the most popular spiritual author in the United States,” and Watkins Review has named him “the most spiritually influential person in the world.",
  "date_of_birth":"16-02-1948" ,
  "avatar_url": "https://eckharttolle.com/wp-content/uploads/2018/02/EckhartTolle.jpg",
}

 */


 const axios = require('axios');

 const url = "http://localhost:8081/api/v2/author"


const authorData = [{
    "first_name": "Robin",
      "family_name": "Sharma",
      "about":"Robin Sharma is one of the world's premier speakers on Leadership and Personal Mastery. As a presenter, Sharma has the rare ability to electrify an audience yet deliver uncommonly original and useful insights that lead to individuals doing their best work, teams providing superb results and organizations becoming unbeatable. For nearly 20 years, many of the most well-known organizations on the planet, ranging from Nike, GE, Microsoft, FedEx, PwC, HP and Oracle to NASA, Yale University and YPO have chosen Robin Sharma for their most important events, when nothing less than a world-class speaker will do.",
      "date_of_birth":"1964-06-12" ,
      "avatar_url": "https://www.robinsharma.com/assets/images/template/robin_portrait.png"
    }, 
    {"first_name": "chetan",
      "family_name": "bhagat",
      "about":"Chetan is a popular motivational speaker and has spoken at more than 300 organizations in 50 cities around the world. He speaks at corporates, educational institutes, government bodies and volunteer agencies.His stellar education and diverse professional background makes him the ideal person to share his thoughts and experiences on topics such as leadership, passion, values, team building, motivation, achieving goals etc.His speaking sessions have already helped organizations such as Airtel, Aricent, Armed Forces Medical College, Birla Sun Life, BOC, Bosch, Career Launcher, Citibank, Dainik Bhaskar, Dell, Deloitte, Deutsche Bank, Eveready, Fortinet, HCL, Hindustan Times, HSBC, Hyundai, IBM, ICICI, Johnson & Johnson, Kotak, Maruti, Nasscom, National Defence Academy, Nokia, Reliance, Telegraph, US Embassy, Zoom and many more.All of his sessions are customized for the particular audience he is addressing. To know more about The Chetan Bhagat Lecture Series please download the promo below.",
      "date_of_birth":"1974-04-22" ,
      "avatar_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chetan_Bhagat.jpg/800px-Chetan_Bhagat.jpg"
    },
    {"first_name": "Ayn",
    "family_name": "Rand",
    "about":"Ayn Rand was a Russian-American writer and philosopher. She is known for her two best-selling novels, The Fountainhead and Atlas Shrugged, and for developing a philosophical system she named Objectivism. Born and educated in Russia, she moved to the United States in 1926",
    "date_of_birth":"1905-02-02" ,
    "date_of_death" :"1982-02-03",
    "avatar_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ayn_Rand_%281943_Talbot_portrait%29.jpg/800px-Ayn_Rand_%281943_Talbot_portrait%29.jpg"
  },
  {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },
    {"first_name": "",
      "family_name": "",
      "about":"",
      "date_of_birth":"" ,
      "avatar_url": ""
    },


]

