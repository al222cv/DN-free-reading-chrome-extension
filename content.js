window.onload = function () {
  this.setTimeout(function () {
    console.log('Enabling free reading :)')
    var articleContent = this.document.querySelector('.article__content')
    if (articleContent) {
      articleContent.classList.remove('article__content--locked')

      var paywall = articleContent.querySelector('.paywall')
      if (paywall) {
        articleContent.removeChild(paywall)
      }
    }

    var premiumContent = this.document.querySelector(
      '.article__premium-content'
    )
    if (premiumContent) {
      premiumContent.classList.remove('hidden')
    }
  }, 2000)
}
