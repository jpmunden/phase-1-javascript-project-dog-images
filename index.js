const callAPI = () => {
    return new Promise ((resolve, reject) => {  
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((img) => {
            resolve(img)})
    })
}

async function getRandomPicture() {
    const randomPicture = await callAPI();
    const randomPicElement = document.createElement('img')
    const randomPicWrapper = document.createElement('div')
    const randomSpan = document.createElement('span')
    randomPicElement.src = randomPicture.message
    randomPicElement.classList.add('dogImages')
    randomPicWrapper.append(randomPicElement)
    randomPicWrapper.append(randomSpan)
    return randomPicWrapper
}

async function getDogBreed() {
    const urlSource = await callAPI();
    let breedPathname = urlSource.message.substr(30)
    let breedNameSplit = breedPathname.split('/')
    let breedLabelString = breedNameSplit[0]
    console.log(breedLabelString)
}

document.addEventListener('DOMContentLoaded', async (event) => {
    const likeButton = document.getElementsByClassName('button-like')[0];
    const dislikeButton = document.getElementsByClassName('button-dislike')[0];
    const savedImages = document.getElementById('savedImages');
    const pictureArea = document.getElementById('fetchedPicture');
    const randomPicElement = await getRandomPicture()
    const dogBreedLabel = await getDogBreed()
    pictureArea.append(randomPicElement);
    
    likeButton.addEventListener('click', (event) => {
        likeClick();
    });
    
    dislikeButton.addEventListener('click', (event) => {
        dislikeClick();
    });
    
    async function likeClick() {
        const picture = document.querySelector('#fetchedPicture img');
        savedImages.append(picture);
        const randomPicElement = await getRandomPicture()
        pictureArea.innerHTML = randomPicElement.outerHTML
        console.log('like button pressed')
    };
    
    async function dislikeClick() {
        const randomPicElement = await getRandomPicture()
        pictureArea.innerHTML = randomPicElement.outerHTML
        console.log('dislike button pressed')
    };
})


// document.addEventListener('DOMContentLoaded', async (event) => {
//     const ArtSection = document.querySelector('#art-container');
//     const artArray = await callAPI();
//     console.log(artArray)
//     window.artArray = artArray;
//     let newArray = [1, 2, 3, 4, 5];
//     for(item in newArray) {
//         console.log(await callAPI());
//     }
// })

// search API for hasImages, get all IDS into array, forloop over all IDs make fetch request to object ID. Add data to array if isPublicDomain = true


// function renderArt(primaryImage){
//     array.forEach(element => {
//     });
// }


