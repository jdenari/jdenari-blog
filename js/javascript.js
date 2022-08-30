projectNameList = ['Denari Blog', 'Metaseed', 'Counter Strike GO Website'];

projectFirstDescriptionList = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.', 'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.']

projectSecondDescriptionList = ['The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs.', 'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections', 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.']

iconTextDenariBlog = ['HTML', 'BOOTSTRAP', 'JAVASCRIPT']

iconTextMetaseed = ['HTML', 'CSS', 'BOOTSTRAP']

iconTextCounterStrikeGOWebsite = ['HTML', 'CSS', 'JAVASCRIPT']

var currentImgIndex = 1;

// function changeName(){
//     document.getElementById("title-project").innerHTML = "Aparecida Nutricionista";
// }


function changeName(){

    if(currentImgIndex == projectNameList.length) 

    {
      currentImgIndex=0;
    }

    // altera a imagem de fundo da primeira página
    document.getElementById("title-project").innerHTML = projectNameList[currentImgIndex];
    document.getElementById("first-description-project").innerHTML = projectFirstDescriptionList
    [currentImgIndex];
    document.getElementById("second-description-project").innerHTML = projectSecondDescriptionList
    [currentImgIndex];

    if(document.getElementById("title-project").innerHTML === 'Metaseed'){

        document.getElementById("first-icon-text-project").innerHTML = iconTextMetaseed[0];
        document.getElementById("second-icon-text-project").innerHTML = iconTextMetaseed[1];
        document.getElementById("third-icon-text-project").innerHTML = iconTextMetaseed[2];

        document.getElementById("first-icon-image-project").src = `images/skills-icon/${iconTextMetaseed[0].toLowerCase()}-icon.png`
        document.getElementById("second-icon-image-project").src = `images/skills-icon/${iconTextMetaseed[1].toLowerCase()}-icon.png`
        document.getElementById("third-icon-image-project").src = `images/skills-icon/${iconTextMetaseed[2].toLowerCase()}-icon.png`

        document.getElementsByClassName("progress-bar")[0].style = "width: 50%";
        document.getElementsByClassName("progress-bar")[1].style = "width: 75%";
        document.getElementsByClassName("progress-bar")[2].style = "width: 25%";


    } else if(document.getElementById("title-project").innerHTML === 'Counter Strike GO Website'){

        document.getElementById("first-icon-text-project").innerHTML = iconTextCounterStrikeGOWebsite[0];
        document.getElementById("second-icon-text-project").innerHTML = iconTextCounterStrikeGOWebsite[1];
        document.getElementById("third-icon-text-project").innerHTML = iconTextCounterStrikeGOWebsite[2];

        document.getElementById("first-icon-image-project").src = `images/skills-icon/${iconTextCounterStrikeGOWebsite[0].toLowerCase()}-icon.png`
        document.getElementById("second-icon-image-project").src = `images/skills-icon/${iconTextCounterStrikeGOWebsite[1].toLowerCase()}-icon.png`
        document.getElementById("third-icon-image-project").src = `images/skills-icon/${iconTextCounterStrikeGOWebsite[2].toLowerCase()}-icon.png`

        document.getElementsByClassName("progress-bar")[0].style = "width: 50%";
        document.getElementsByClassName("progress-bar")[1].style = "width: 75%";
        document.getElementsByClassName("progress-bar")[2].style = "width: 100%";
        
    } else{

        document.getElementById("first-icon-text-project").innerHTML = iconTextDenariBlog[0];
        document.getElementById("second-icon-text-project").innerHTML = iconTextDenariBlog[1];
        document.getElementById("third-icon-text-project").innerHTML = iconTextDenariBlog[2];

        document.getElementById("first-icon-image-project").src = `images/skills-icon/${iconTextDenariBlog[0].toLowerCase()}-icon.png`
        document.getElementById("second-icon-image-project").src = `images/skills-icon/${iconTextDenariBlog[1].toLowerCase()}-icon.png`
        document.getElementById("third-icon-image-project").src = `images/skills-icon/${iconTextDenariBlog[2].toLowerCase()}-icon.png` 

        document.getElementsByClassName("progress-bar")[0].style = "width: 75%";
        document.getElementsByClassName("progress-bar")[1].style = "width: 100%";
        document.getElementsByClassName("progress-bar")[2].style = "width: 25%";
    }

    currentImgIndex++;
}

