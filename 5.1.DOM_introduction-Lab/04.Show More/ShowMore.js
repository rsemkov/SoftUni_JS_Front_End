function showText() {
    const readMore = document.getElementById('more')
    const showText = document.getElementById('text')

    readMore.textContent = showText.textContent
    readMore.style.display = 'none'
    showText.style.display = 'inline'

}


