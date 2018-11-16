function linkPortable() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    if (window.location.href === './index-portable.html') {
      window.location.href = ''
    }
  }
  window.location.href = ''
}

function getAQuot() {
  var quotations = quots.quotations
  return quotations[Math.floor(Math.random() * quotations.length)]
}

function drawDown() {
  var c = document.getElementById('pagedown-canvas')
  var cxt = c.getContext('2d')
  cxt.beginPath()
  cxt.moveTo(5, 10)
  cxt.lineTo(25, 20)
  cxt.lineTo(45, 10)
  cxt.lineWidth = 2
  cxt.strokeStyle = 'white'
  cxt.lineCap = 'round'
  cxt.lineJoin = 'round'
  cxt.stroke()
}

var app = new Vue({
  el: '#app',
  data: {
  },
  computed: {
    theQuot: getAQuot
  },
  methods: {
    flipOurName: function () {
      this.ourName = this.ourName === 'SUMBANANA' ? '夏蕉合唱团' : 'SUMBANANA'
    },
    quotLink: function () {
      window.location.href = this.theQuot.link
    }
  }
})

var tiles = [{
  avatar: 'url(./assets/background/bg-0.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-1.jpg)'
}, {
  avatar: 'url(./assets/background/bg-2.jpg)'
}]

function drawTiles() {
  var width = window.screen.width
  var height = window.screen.height
  var size = 200
  if (width > height) {
    if (width >= 1600) { size = 350 }
    else if (width >= 1200) { size = 250 }
    else if (width >= 800) { size = 200 }
    else if (width >= 600) { size = 200 }
    else { size = 100 }
  } else {
    if (width >= 1200) { size = 500 }
    else if (width >= 800) { size = 600 }
    else if (width >= 600) { size = 450 }
    else if (width >= 400) { size = 300 }
    else if (width >= 300) { size = 220 }
    else { size = 160 }
  }
  var unitSize = size + 50
  var numberInLine = Math.floor(width / unitSize)

  var nav = document.getElementById('navigator-page')
  var tileList = []
  for (var i = 0; i < tiles.length; i++) {
    var tile = tiles[i]
    var tileDiv = document.createElement('div')
    tileDiv.classList.add('tile')
    tileDiv.style.width = `${size}px`
    tileDiv.style.height = `${size}px`
    tileDiv.style.backgroundImage = tile.avatar
    tileList.push(tileDiv)
    if ((i + 1) % numberInLine === 0) {
      var tileLineDiv = document.createElement('div')
      tileLineDiv.classList.add('tile-line')
      for (var j = 0; j < numberInLine; j++) {
        tileLineDiv.appendChild(tileList[j])
      }
      nav.appendChild(tileLineDiv)
      tileList = []
    }
  }
  tileLineDiv = document.createElement('div')
  tileLineDiv.classList.add('tile-line')
  for (var j = 0; j < tileList.length; j++) {
    tileLineDiv.appendChild(tileList[j])
  }
  nav.appendChild(tileLineDiv)
}

drawDown()
drawTiles()
