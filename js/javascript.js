// all variables object
projectObject = {
    
    name: ['Denari Blog', 'RouteHelper', 'Metaseed', 'Solemate Store', 'Building Project Portfolio', 'Metaseed Landing Page'],
    
    firstDescription: [
        "Project that compiles knowledge and technology projects developed by João Denari. It is the gateway for clients to get knowledge about the developer work and it will follow his entire career.",
        "Full stack routing application that calculates the shortest path between two or more addresses through an API Open Source.",
        "The second project developed for the Metaseed Company which  provides to his customers processes automation through programming scripts.",
        "A website project to sell to clients who want to have a e-commerce.",
        "This website is designed to be user-friendly and efficient, allowing you to focus on your work without any distractions. ",
        "Portfolio created to the civil engineer Pedro Denari to show his projects developed during his career.",
        "The developer's first project in his career. It is a landing page designed to attract more customers to the metaseed company and describe the services provided."
    ],

    secondDescription: [
        "This project was developed focusing on HTML and Bootstrap (front-end development framework) for training purposes.",
        "Users can create a personal account to enjoy more application features and they have access to your search history.",
        "The Full Stack Application provides to the user an access account where they can have access to the scripts developed.",
        "The client can control the stock quantity, prices and newe product. It is a full ecommerce store for clothes.",
        "This is our first project using the powerful combination of React, TypeScript, and Django and it offers a database for people who have subscribed, allowing you to keep track of your time and progress over time. ",
        "The site provides an exhibition of project images, a form to become his client and the engineer's contact details.",
        "The site has a form that, through a CDN (Content Delivery Network), sent the answers to the owner's email.",
    ],

    firstSkillDescription: [
        "All usual tags were used in the development of this project, as: 'div', 'section', 'header', 'footer', 'button', 'img' and 'a' for external links.",
        "Most tools that Vuejs offers: Vuex, Vue Router, Props, Events and Reusable Components. Also, a API Bing Maps is consumed using Actions and Mutations.",
        "The frontend application is hosted on Hostinger and it has middlewares, routes creation and layout earning development productivity. ",
        "First project using Next.js, Redux and Typescript!",
        "React tools such as router, hooks, context API, and TypeScript, enhance the development experience by enabling easy navigation, state management, and type checking in React applications.",
        "Semantic HTML, HTML form, Attributes, Class and ID's.",
        "All usual tags were used in the development of this project, as: 'div', 'section', 'header', 'footer', 'button', 'img' and 'a' for external links.",
    ],
        
    secondSkillDescription: [
        "Bootstrap was widely used in this project to gain productivity. Swiper Slides, Accordion Component and Grid, Flexbox and Responsive Medias were used to build the layout.",
        "VPS Hosted on Hostinger, the Node.js was used to create the project backend using the following technologies: Express, Mongoose and JSON Web Token.",
        "VPS Hosted on Hostinger, the backend was build using: Node.js, Express, JSON Web Token, Docker Containers and Scripts using Python Language.",
        "VPS Hosted on Hostinger, the backend was build using: Node.js, Express, JSON Web Token, Docker Containers and Scripts using Python Language.",
        "Django was used as a backend site! Models and Views were created to give suport to frontend.",
        "Bootstrap was widely used in this project to gain productivity.",
        "Flexbox, Grid and CSS External was the main methods used.",
    ],

    thirdSkillDescription: [
        "Aiming to change the website content, the combination of Objects, Functions and DOM JavaScript methods were used to listening user events.",
        "A CRUD was developed to record all actions done by the user registered in the application.",
        "A CRUD was developed to create a database NoSQL and to create a User Login and Registration.",
        "A CRUD was developed to record all actions done by the user registered in the application.",
        "For those who are subscribed, it was created a database to track your actions and the historical.",
        "A open source CDN for register form awser by the customers.;",
        "A open source CDN for register form awser by the customers.",
    ],

    linkProject: [
        'https://jdenari.github.io/personal-blog/',
        'https://routehelper.com.br/',
        'https://metaseed.com.br/',
        'https://frontend-solemate-store-bv5oljelj-jdenari.vercel.app/',
        'https://metaseed.com.br/',
        'https://jdenari.github.io/pedro-denari-engenharia-civil/',
        'https://jdenari.github.io/metaseed-landing-page/',
    ],

    linkProjectGithub: [
        'https://github.com/jdenari/personal-blog',
        'https://github.com/jdenari/routing-software',
        'https://github.com/jdenari/metaseed',
        'https://github.com/jdenari/frontend-solemate-store',
        'https://github.com/jdenari/cronos',
        'https://github.com/jdenari/pedro-denari-engenharia-civil',
        'https://github.com/jdenari/metaseed-landing-page',
    ],

    firstIcon: ['HTML', 'VUEJS', 'NUXT', 'NEXT', 'REACT', 'HTML', 'HTML'],

    secondIcon: ['BOOTSTRAP', 'NODEJS', 'NODEJS', 'NODEJS', 'DJANGO', 'BOOTSTRAP', 'CSS'],

    thirdIcon: ['JAVASCRIPT', 'MYSQL', 'MONGODB', 'MONGODB', 'MYSQL', 'JAVASCRIPT', 'JAVASCRIPT'],

    firstBar: ['width: 50%', 'width: 75%', 'width: 75%', 'width: 100%', 'width: 75%', 'width: 75%', 'width: 50%'],
    
    secondBar: ['width: 75%', 'width: 50%', 'width: 75%', 'width: 50%', 'width: 50%', 'width: 100%', 'width: 75%'],

    thirdBar: ['width: 25%', 'width: 25%', 'width: 50%', 'width: 100%', 'width: 50%', 'width: 25%', 'width: 25%'],
}

// index to guide the changes
currentImgIndex = 0;
currentCheckedIndex = 0;

const addIndex = () => currentImgIndex++;
const subIndex = () => currentImgIndex--;

function checkIndex(){
    if (currentImgIndex === 6){
        currentImgIndex=0;
    } 
    if (currentImgIndex === -1){
        currentImgIndex=6;
    }
}

// function if the user clicks on the bottom button
const changeIndexto0 = () => currentImgIndex=0;
const changeIndexto1 = () => currentImgIndex=1;
const changeIndexto2 = () => currentImgIndex=2;
const changeIndexto3 = () => currentImgIndex=3;
const changeIndexto4 = () => currentImgIndex=4;
const changeIndexto5 = () => currentImgIndex=5;
const changeIndexto6 = () => currentImgIndex=6;

// next or prev project function
function changeProject(){

    // project title
    document.querySelectorAll(".title-project")[0].innerHTML = projectObject.name[currentImgIndex];

    // text description title
    document.querySelectorAll(".description-project")[0].innerHTML = projectObject.firstDescription[currentImgIndex];
    document.querySelectorAll(".description-project")[1].innerHTML = projectObject.secondDescription[currentImgIndex];

    // link project
    document.querySelectorAll(".link-project")[0].href = projectObject.linkProject[currentImgIndex];
    document.querySelectorAll(".link-project-github")[0].href = projectObject.linkProjectGithub[currentImgIndex];

    // icon main skills
    document.querySelectorAll(".icon-image-project")[0].src = `images/skills-icon/${projectObject.firstIcon[currentImgIndex].toLowerCase()}-icon.png`
    document.querySelectorAll(".icon-image-project")[1].src = `images/skills-icon/${projectObject.secondIcon[currentImgIndex].toLowerCase()}-icon.png`
    document.querySelectorAll(".icon-image-project")[2].src = `images/skills-icon/${projectObject.thirdIcon[currentImgIndex].toLowerCase()}-icon.png`

    // text icon main skills
    document.querySelectorAll(".icon-text-project")[0].innerHTML = projectObject.firstIcon[currentImgIndex];
    document.querySelectorAll(".icon-text-project")[1].innerHTML = projectObject.secondIcon[currentImgIndex];
    document.querySelectorAll(".icon-text-project")[2].innerHTML = projectObject.thirdIcon[currentImgIndex];

    // skills bars
    document.querySelectorAll(".progress-bar")[0].style = projectObject.firstBar[currentImgIndex];
    document.querySelectorAll(".progress-bar")[1].style = projectObject.secondBar[currentImgIndex];
    document.querySelectorAll(".progress-bar")[2].style = projectObject.thirdBar[currentImgIndex];

    // text skill description
    document.querySelectorAll(".skill-text-description")[0].innerHTML = projectObject.firstSkillDescription[currentImgIndex];
    document.querySelectorAll(".skill-text-description")[1].innerHTML = projectObject.secondSkillDescription[currentImgIndex];
    document.querySelectorAll(".skill-text-description")[2].innerHTML = projectObject.thirdSkillDescription[currentImgIndex];
}


// plus and less icon
function showIcon(){
    if (currentCheckedIndex === 0){
        for (let e = 0; e < document.querySelectorAll(".icon-image").length; e++){
            document.querySelectorAll(".icon-image")[e].style.height = "100px";
        }
        currentCheckedIndex = 1
    
    } else {
        for (let e = 0; e < document.querySelectorAll(".icon-image").length; e++){
            document.querySelectorAll(".icon-image")[e].style.height = "250px";
        }
        currentCheckedIndex = 0
    }
}
