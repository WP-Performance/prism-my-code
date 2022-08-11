/** add style tag */
const createStyleTag = function (name) {
  var t = document.getElementById('prism-my-code-'.name)
  if (!t && name && name !== '') {
    var styleElement = document.createElement('link')
    styleElement.rel = 'stylesheet'
    styleElement.id = 'prism-my-code-' + name
    // fix path with api
    styleElement.href =
      '/wp-content/plugins/prism-my-code/assets/themes/' + name + '.css'
    document.getElementsByTagName('head')[0].appendChild(styleElement)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (Prism) {
    Prism.highlightAll()
  }
  var blocks = document.querySelectorAll('.prism-my-code-block')
  blocks.forEach(function (e) {
    var theme = e.dataset.theme
    if (theme && theme !== '') {
      createStyleTag(theme)
    }
  })
})
