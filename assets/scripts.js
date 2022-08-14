document.addEventListener('DOMContentLoaded', function () {
  if (Prism) {
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': false,
      'remove-indent': false,
      'left-trim': true,
      'right-trim': true,
      'break-lines': 80,
      // indent: 2,
      // 'remove-initial-line-feed': false,
      // 'tabs-to-spaces': 2,
      // 'spaces-to-tabs': 4,
    })
    Prism.highlightAll()
  }
})
