
window.onscroll = function () {
    const span = document.querySelector('.up')
    // console.log(this.scrollY)
    this.scrollY >= 500 ? span.classList.add('show') : span.classList.remove('show')
}

