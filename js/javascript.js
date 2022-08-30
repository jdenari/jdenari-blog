projectNameList = ['Denari Blog', 'Metaseed', 'Counter Strike GO Website'];

projectFirstDescriptionList = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.', 'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.']

projectSecondDescriptionList = ['The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it\'s seen all around the web; on templates, websites, and stock designs.', 'In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections', 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.']

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

    currentImgIndex++;
}