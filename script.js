//Array of Objects values for skills
const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Wordpress",
        image:
          "https://cdn.icon-icons.com/icons2/3007/PNG/512/wordpress_logo_icon_188467.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

// Array of objects for projects
const projects = [
  {
    id: 3,
    title: "Developers 141",
    date: "Dec 2023 - Dec 2023",
    description:
      "Developers141 is a Group of Friends .We are more than just colleagues; we are friends bound by our love for creativity, innovation, and collaboration. Take a glimpse into our portfolio to see the magic we've created for our clients.",
    image:
      "https://portfolioprojects.developers141.com/developers141.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    github: "https://github.com/Krishnarajkrish/Developers141",
    webapp: "https://developers141.com",
  },

  {
    id: 10,
    title: "AutoFix",
    date: "Oct 2023 - Oct 2023",
    description:
      "🚗 Rev Up Your Ride, Keep it Gliding: Welcome to Autofix, Auto Maintenance! Embark on a journey of automotive excellence with a pit stop at our digital garage. Your vehicle's well-being is our top priority, and we're here to make auto maintenance a breeze!",
    image:
      "https://portfolioprojects.developers141.com/AutoFix.png",
    tags: ["HTML", "CSS", ],
    category: "HTMLCSS",
    github: "https://github.com/Krishnarajkrish/Autofix",
    webapp: "https://krishnarajkrish.github.io/Autofix/",
  },
  {
    id: 3,
    title: "To Do APP",
    date: "Jan 2024 - Jan 2024",
    description:
      "Stay Organized: Your Ultimate To-Do App - Manage tasks effortlessly with built-in local storage and date tracking. Keep your schedule in check and never miss a deadline again!",
    image:
      "https://portfolioprojects.developers141.com/todoapp.png",
    tags: ["HTML", "CSS", "JavaScript",],
    category: "JavaScript",
    github: "https://github.com/Krishnarajkrish/todoapp",
    webapp: "https://todoapp.developers141.com/",
  },
  {
    id: 12,
    title: "Million Dots",
    date: "Nov 2023 - Nov 2023",
    description:
    "Embark on Your Next Adventure: Explore our Million Dots travel website crafted with HTML, CSS, and JS. From dreamy destinations to thrilling itineraries, let our site be your passport to unforgettable journeys!",
    image:
      "https://portfolioprojects.developers141.com/travelwebsite.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    github: "https://github.com/Krishnarajkrish/milliondots",
    webapp: "https://milliondots.developers141.com/",
  },
  {
    id: 13,
    title: "Vridhi School Of Arts",
    date: "March 2024 - March 2024",
    description:
    "Vridhi School of Arts-Learn The Tradition Experience the Tradition of Tanjore and Preserving the Legacy of Tanjore Painting. Embark on a transformative journey into the captivating world of Tanjore painting with Vridhi School of Arts!",
    image:
      "https://portfolioprojects.developers141.com/Vridhi.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    github: "https://github.com/Krishnarajkrish/Vridhi",
    webapp: "https://vridhi.developers141.com/",
  },
  {
    id: 14,
    title: "Rogue Dynamics",
    date: "April 2024 - April 2024",
    description:
    "Rogue Dynamics is the Spare products selling and customize your cars. The epitome of automotive exhilaration, designed for speed, precision, and dynamic performance !",
    image:
      "https://portfolioprojects.developers141.com/RogueDynamics.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    github: "https://github.com/Krishnarajkrish/roguedynamics",
    webapp: "https://roguedynamics.developers141.com/",
  },
  {
    id: 7,
    title: "Shopping Website",
    date: "Feb 2024 - Feb 2024",
    description:
      "Shop Smart, Pay Securely: Dive into our online marketplace, powered by MongoDB for seamless signup and Stripe for hassle-free payments. Discover a world of endless shopping possibilities, all at your fingertips!",
    image:
      "https://portfolioprojects.developers141.com/shoppingwebsite.png",
    tags: ["HTML", "CSS", "JavaScript","Express","NodeJS","MongoDB","React"],
    category: "MERNStack",
    github: "https://github.com/Krishnarajkrish/",
    webapp: "https://shoppingwebsite.developers141.com/",
  }, 
  {
    id: 0,
    title: "SocialBook",
    date: "Aug 2023 - Aug 2023",
    description:
      "SocialBook is a social media network that connects people through an online platform. By sharing content like text status posts, images, videos, and external links like blog posts",
    image:
      "https://portfolioprojects.developers141.com/SocialBook.png",
    tags: ["HTML", "CSS",],
    category: "HTMLCSS",
    github: "https://github.com/Krishnarajkrish/SocialBook",
    webapp: "https://krishnarajkrish.github.io/SocialBook/",
  },
  {
    id: 1,
    title: "Linked In",
    date: "Sep 2023 - Sep 2023",
    description:
      "LinkedIn is a social networking site designed specifically for the business community. The goal of the site is to enable registered members to establish and document networks of people they know and trust professionally.",
    image:
      "https://portfolioprojects.developers141.com/LinkedIn.png",
    tags: [
      "HTML",
      "CSS",
    ],
    category: "HTMLCSS",
    github: "https://github.com/Krishnarajkrish/LinkedIn",
    webapp: "https://krishnarajkrish.github.io/LinkedIn/",
  },
  {
    id: 11,
    title: "Dream Home",
    date: "June 2023 - July 2023",
    description:
      "Crafting Dreams, Building Homes: Welcome to Dream Home! Unlock the door to your dream home with a journey that begins at our online sanctuary. Your vision, our expertise – together, we turn aspirations into reality.",
    image:
      "https://portfolioprojects.developers141.com/DreamHome.png",
    tags: [
      "HTML",
      "CSS",
    ],
    category: "HTMLCSS",
    github: "https://github.com/Krishnarajkrish/DreamHome",
    webapp: "https://krishnarajkrish.github.io/DreamHome/",
  },
  // {
  //   id: 9,
  //   title: "Wedding Photography",
  //   date: "July 2023 - Jul 2023",
  //   description:
  //     "Welcome to Wedding photography, where we transform your special day into a visual masterpiece. 📸 Capturing Love, Framing Forever: At Wedding Photography, we understand that your wedding day is a celebration of love, joy, and commitment.",
  //   image:
  //     "https://portfolioprojects.developers141.com/WeddingPhotography.png",
  //   tags: [
  //     "HTML",
  //     "CSS",
      
  //   ],
  //   category: "HTMLCSS",
  //   github: "https://github.com/Krishnarajkrish/WeddingPhotography",
  //   webapp: "https://krishnarajkrish.github.io/WeddingPhotography/",
  // },
]

//skill section code

const Skills =document.getElementById('Skills');

Skills.innerHTML=skills.map((item)=>{
  return`
<div class="SkillsContainer" data-aos="fade-up"
data-aos-duration="3000">
      <h3>${item.title}</h3>
         <div class= EachOneSkillsContainer>
         ${item.skills.map(skill =>`
           <div class="EachSkillsContainer">
              <img src="${skill.image}">
              <h4>${skill.name}</h4>
           </div>
         `).join('')}
         </div>  
  </div>
  `
}).join('');  


// Project section code
let toggle = 'all';
function setToggle(value) {
  toggle = value;
  render();
}
function render() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = '';

  projects.forEach(project => {
    if (toggle === 'all' || project.category === toggle) {
      const projectCard = document.createElement("div");
      projectCard.classList.add("projectCard");
       projectCard.innerHTML = `
               <img src="${project.image} "/>
               <div class="ProjectsTags">
               ${project.tags.map(tag=>`<h4>${tag}</h4>`).join('')} 
               </div> 
               <h2>${project.title}</h2>
               <h5>${project.date}</h5>
               <p>${project.description}</p>
               <div class="ProjectSectionButtons">
               <button onclick="window.open('${project.github}','_blank')" class="ProjectSectionButtonsOne">Github</button>
               <button onclick="window.open('${project.webapp}','_blank')" class="ProjectSectionButtonsTwo">LiveAPP</button>
               </div>
       `   ;
      cardContainer.appendChild(projectCard);
    }
  });
}
render(); // Initial render




// Email JS
(function(){
  emailjs.init("foY-w1xJAi7GtI3gD");
})();

let buttoncalling =document.getElementById("button");
buttoncalling.addEventListener("click",()=>{
   const emaildatas={
from_name:document.getElementById("from_name").value,
from_email:document.getElementById("from_email").value,
subject:document.getElementById("subject").value,
message:document.getElementById("message").value,
}
emailjs.send("service_64v9r2w","template_avzn8eq",emaildatas).then(()=>{
  document.getElementById("from_name").value = "";
  document.getElementById("from_email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});
}
)



// POP UP
// Get the button element by its ID
const button = document.getElementById("button");
// Get the popup container element by its ID
const popupContainer = document.getElementById("popupContainer");
// Function to show the popup
function showPopup() {
  popupContainer.style.display = "block";
}
// Function to close the popup
function closePopup() {
  popupContainer.style.display = "none";
}
// Add event listener to the button for the click event
button.addEventListener("click", function() {
  // Display the popup when the button is clicked
  showPopup();
});



// Dark Theme
// Toggle theme
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme); // Save theme to local storage
}

document.getElementById("toggleTheme").addEventListener("click", function(){
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme;
  switch (currentTheme) {
    case "Blueish":
      newTheme = "Redish";
      break;
    case "Redish":
      newTheme = "greenish";
      break;
    case "greenish":
      newTheme = "Blueish";
      break;
    default:
      newTheme = "Blueish";
  }
 setTheme(newTheme);
});

// Check if theme is saved in local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme); // Apply saved theme
} else {
  setTheme("Blueish"); // Default theme if no theme is saved
}

//AOS animation
AOS.init();

//Typed js
    var typed = new Typed('#element', {
      strings: ['Web Developer.', 'FrontEnd Developer.' ,'Freelancer'],
      typeSpeed: 100,
      loop:true,
    });