let searchInfo = document.querySelector('#giphySearch')

document.querySelector('submitButton').addEventListener('click', searchBaby)

function searchBaby(e) {
    e.preventDefault()

    if(searchInfo.value == '') {
        return
    }

    // psuedo-code next steps
}