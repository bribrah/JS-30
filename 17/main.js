const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const articles = ['the' , "a" , "an"];

const sortedBands = bands.sort((bandOne, bandTwo) => {
    bandOneSplit = bandOne.split(" ");
    bandTwoSplit = bandTwo.split(" ");
    if (articles.indexOf(bandOneSplit[0].toLowerCase()) >= 0 ){
        bandOneSplit.splice(0,1);
    }
    if (articles.indexOf(bandTwoSplit[0].toLowerCase()) >= 0){
        bandTwoSplit.splice(0,1);
    }
    removedOne = bandOneSplit.join(" ");
    removedTwo = bandTwoSplit.join(" ");
    return removedOne > removedTwo ? 1 : -1;
});

const bandList = document.querySelector('#bands');

sortedBands.forEach(band =>{
    bandList.innerHTML += `<li>${band}</li>`;
})