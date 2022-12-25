// all variables object
projectObject = {
    
    name: ['Denari Blog', 'Metaseed Landing Page', 'Building Project Portfolio', 'RouteHelper', 'Metaseed'],
    
    firstDescription: [
        'Project that compiles knowledge and technology projects developed by João Denari. It is the gateway for clients to get knowledge about the developer work and it will follow his entire career.',
        "The developer's first project in his career. It is a landing page designed to attract more customers to the metaseed company and describe the services provided.",
        'Portfolio created to the civil engineer Pedro Denari to show his projects developed during his career.',
        'Full stack routing application that calculates the shortest path between two or more addresses through an API Open Source.',
        "The second project developed for the Metaseed Company which  provides to his customers processes automation through programming scripts.",
    ],

    secondDescription: [
        'This project was developed focusing on HTML and Bootstrap (front-end development framework) for training purposes.',
        "The site has a form that, through a CDN (Content Delivery Network), sent the answers to the owner's email.",
        "The site provides an exhibition of project images, a form to become his client and the engineer's contact details.",
        'Users can create a personal account to enjoy more application features and they have access to your search history.',
        "The Full Stack Application provides to the user an access account where they can have access to the scripts developed.",
    ],

    linkProject: [
        'https://jdenari.github.io/personal-blog/',
        'https://metaseed.com.br/',
        'https://jdenari.github.io/pedro-denari-engenharia-civil/',,
        'https://routehelper.com.br/',
        'https://metaseed.com.br/'
    ],

    linkProjectGithub: [
        'https://github.com/jdenari/personal-blog',
        'https://github.com/jdenari/metaseed-landing-page',
        'https://github.com/jdenari/pedro-denari-engenharia-civil',
        'https://github.com/jdenari/routing-software',
        'https://github.com/jdenari/metaseed'
    ],

    firstIcon: ['HTML', 'HTML', 'HTML', 'VUEJS', 'NUXT'],

    secondIcon: ['BOOTSTRAP', 'CSS', 'CSS', 'NODEJS', 'NODEJS'],

    thirdIcon: ['JAVASCRIPT', 'JAVASCRIPT', 'JAVASCRIPT', 'MYSQL', 'MONGODB'],

    firstBar: ['width: 50%', 'width: 50%', 'width: 75%', 'width: 75%', 'width: 50%'],
    
    secondBar: ['width: 75%', 'width: 75%', 'width: 100%', 'width: 75%', 'width: 50%'],

    thirdBar: ['width: 25%', 'width: 100%', 'width: 50%', 'width: 75%', 'width: 50%'],
}

// index to guide the changes
currentImgIndex = 0;
currentCheckedIndex = 0;

const addIndex = () => currentImgIndex++;
const subIndex = () => currentImgIndex--;

function checkIndex(){
    if (currentImgIndex === 5){
        currentImgIndex=0;
    } 
    if (currentImgIndex === -1){
        currentImgIndex=4;
    }
}

// function if the user clicks on the bottom button
const changeIndexto0 = () => currentImgIndex=0;
const changeIndexto1 = () => currentImgIndex=1;
const changeIndexto2 = () => currentImgIndex=2;
const changeIndexto3 = () => currentImgIndex=3;
const changeIndexto4 = () => currentImgIndex=4;

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
