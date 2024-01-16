// Example project details
const projects = [
    {
        projectno: 1,
        imgSrc: "media/proj-imgs/netflix.png",
        title: "Netflix Clone",
        short_description: "Responsive website mimicking Netflix's homepage design.",
        long_description: "A responsive website mimicking the Netflix homepage, featuring dynamic content grids and responsive design.",
        project_link: "https://netflixdoop.netlify.app",
    },
    {
        projectno: 2,
        imgSrc: "media/proj-imgs/schoolwebsite.png",
        title: "School Website",
        short_description: "Responsive site for course info and events.",
        long_description: "A responsive school website with sections for information about courses, events, and a clean user interface for navigation.",
        project_link: "https://daaspraveen.github.io/Vivekananda-High-School/",
    },
    {
        projectno: 3,
        imgSrc: "media/proj-imgs/todolist.png",
        title: "Todo-List(React)",
        short_description: "User-friendly task management with React.",
        long_description: "A React-based todo-list application ensuring a responsive and user-friendly experience for task management.",
        project_link: "https://daaspraveen.github.io/To-do-List/",
    },
    {
        projectno: 4,
        imgSrc: "media/proj-imgs/loginsignup.png",
        title: "Signup Page",
        short_description: " Responsive Signup&Login page from Figma design.",
        long_description: "A login and signup page design implemented from a Figma prototype, tailored for Air 3 and iPhone Mini 12 frames, ensuring responsiveness and a seamless user onboarding experience.",
        project_link: "https://www.figma.com/file/O9yzaEXeYfFYYpRlwSrNh5/Log-in-Page?type=design&node-id=0%3A1&mode=design&t=49ghaScw9gOHiHPs-1",
    },
    {
        projectno: 5,
        imgSrc: "media/proj-imgs/memegenerator.png",
        title: "Meme Generator",
        short_description: "Create memes from images or URLs with text.",
        long_description: "An interactive meme generator allowing users to create memes from image files or URLs, adding customizable top and bottom text.",
        project_link: "https://meme-generatordas.netlify.app",
    },
    {
        projectno: 6,
        imgSrc: "media/proj-imgs/randomusers.png",
        title: "Random Users",
        short_description: "Fetches and displays user data creatively.",
        long_description: "Utilizes an API to showcase dynamically generated user data with location information, presented in an aesthetically pleasing user interface.",
        project_link: "https://daaspraveen.github.io/RandomUsers/",
    },
    {
        projectno: 7,
        imgSrc: "media/proj-imgs/tribute.png",
        title: "Tribute Page",
        short_description: "Dedicated page with responsive design.",
        long_description: "A tribute page dedicated to a specific person or topic, designed responsively and focusing on content presentation.",
        project_link: "https://daaspraveen.github.io/Tribute_page/",
    },
    {
        projectno: 8,
        imgSrc: "media/proj-imgs/simplecalc.png",
        title: "Simple Calculator",
        short_description: "Responsive web app for basic arithmetic.",
        long_description: "A straightforward calculator web app, responsive across various devices, providing basic arithmetic functionalities.",
        project_link: "https://daaspraveen.github.io/Simple_Calculator/",
    },
    {
        projectno: 9,
        imgSrc: "media/proj-imgs/landingpage.png",
        title: "Landing Page",
        short_description: "LA mountains come to life in an inviting and responsive web introduction.",
        long_description: "Explore the beauty of LA mountains through an engaging and responsive web introduction, captivating visitors at first glance.",
        project_link: "https://daaspraveen.github.io/LA-Mounatins/",
    },
    {
        projectno: 10,
        imgSrc: "media/proj-imgs/solarsystem.png",
        title: "Solar System",
        short_description: "A rotating animated page showcasing the solar system.",
        long_description: "Experience a captivating solar system animation featuring rotating planets and celestial bodies.",
        project_link: "https://daaspraveen.github.io/Solar-System/",
    },
    /*
    {
        projectno: 11,
        imgSrc: "media/proj-imgs/ .png",
        title: " ",
        short_description: " ",
        long_description: "",
        project_link: "https://",
    },
    */
];


// Get the container element
const projectsContainer = document.getElementById("projects-container");

// Function to create and append article elements
function createProjectElement(project) {
    const article = document.createElement("article");
    article.setAttribute("class","project-box flex");

    const img = document.createElement("img");
    img.src = project.imgSrc;
    img.alt = project.title;
    img.setAttribute("class","proj-img");

    const h3 = document.createElement("h3");
    h3.textContent = project.title;
    h3.setAttribute("class","proj-title");

    const p = document.createElement("p");
    p.textContent = project.short_description;
    p.setAttribute("class","proj-short-info");

    const a = document.createElement("a");
    a.href = project.project_link;
    a.textContent = "Live";
    a.target = "_blank";
    a.setAttribute("class","project-link");

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(a);

    return article;
}

// Loop through the projects array and append article elements to the container
const limitedProjects = projects.slice(0, 6 /* projects.length */);

limitedProjects.forEach(project => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
});

// Skills content
document.addEventListener('DOMContentLoaded', function () {
    const skillsData = [
      { category: 'Frontend', skills: ['HTML', 'CSS', 'JS', 'React', 'JSON', 'jQuery','Responsive Web Design'] },
      { category: 'Backend', skills: ['Node.js', 'Python', 'RESTful API'] },
      { category: 'Database', skills: ['SQL', 'MySQL','MangoDB'] },
      { category: 'UX Design', skills: ['Figma', 'Wireframing', 'User-Centered Design','Prototyping'] },
      { category: 'Dev Tools', skills: ['Git','GitHub','Command Line'] },
      { category: 'Soft Skills', skills: ['Problem Solving', 'Communication', 'Continuous Learner','Team Collaboration'] }
    ];

    const skillsBoxes = document.querySelector('.skills-boxes');

    skillsData.forEach(categoryobj => {
        const categoryArticle = document.createElement('article');
        categoryArticle.setAttribute("class","all-skill-box flex");
        const h3 = document.createElement('h3');
        h3.setAttribute("class","skills-category-head");
            
        h3.textContent = categoryobj.category;
        categoryArticle.appendChild(h3);

        categoryobj.skills.forEach(skill => {
            const span = document.createElement('span');
            span.setAttribute("class","skill-span");
            span.textContent = skill;
            categoryArticle.appendChild(span);
        });

        skillsBoxes.appendChild(categoryArticle);
    });
});