function linkPortable() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    if (window.location.href === './index-portable.html') {
      window.location.href = ''
    }
  }
  window.location.href = ''
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

function Main() {
  drawDown()
}

new Main()
