function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {

  return document.querySelector('div#grand-node :empty')
  // var current = document.querySelector('div#grand-node')
  // var next = []
  //
  // while (current) {
  //
  // }
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list')
  var items = []
  for (var i = 0; i < lists.length; i++) {
    items.concat(lists[i].querySelectorAll('li'))
  }
  for (var i = 0; i < items.length; i++) {
    items[i].innerHTML = parseInt(items[i].innerHTML) + n
  }
}
