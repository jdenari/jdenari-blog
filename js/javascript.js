// all variables object
projectObject = {
    
    name: ['Denari Blog', 'Metaseed Landing Page', 'Building Project Portfolio', 'RouteHelper', 'Metaseed'],
    
    firstDescription: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.',
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.',
    ],

    secondDescription: [
        'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs.',
        'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections',
        'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
        'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections',
        'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.',
    ],

    firstIcon: ['HTML', 'HTML', 'HTML', 'VUEJS', 'HTML'],

    secondIcon: ['BOOTSTRAP', 'CSS', 'CSS', 'NODEJS', 'HTML'],

    thirdIcon: ['JAVASCRIPT', 'JAVASCRIPT', 'JAVASCRIPT', 'MONGODB', 'HTML'],

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
const changeIndexto4 = () => currentImgIndex=3;

// next or prev project function
function changeProject(){

    // project title
    document.querySelectorAll(".title-project")[0].innerHTML = projectObject.name[currentImgIndex];

    // text description title
    document.querySelectorAll(".description-project")[0].innerHTML = projectObject.firstDescription[currentImgIndex];
    document.querySelectorAll(".description-project")[1].innerHTML = projectObject.secondDescription[currentImgIndex];

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
