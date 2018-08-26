function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {

  var current = [document.querySelector('div#grand-node'), 0]
  var deepest = current
  var next = []

  while (current) {
    [node, level] = current
    if (level > deepest[1]) {
      deepest = current
    }
    console.log(current.children)
    if (current.children) {
      for (var i = 0; i < current.children.length; i++) {
        next.push([current.children[i], level + 1])
      }
    }

    current = next.pop()
  }

  return deepest[0]
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
