function testTransform() {
  var n = document.getElementsByTagName('body')[0]
  if ((n.style.transform != null || n.style.webkitTransform != null)
  && (n.style.transition != null || n.style.webkitTransition != null)) {
  } else {
    var p = document.getElementsByClassName('flip-container')[0]
    var c = p.children[1]
    p.removeChild(c)
  }
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

var postInfo = [{
  avatar: './assets/background/bg-0.jpg',
  title: '介绍',
  excerpt: '哇！这个合唱团是什么啊？',
  link: 'https://mp.weixin.qq.com/s/l6bpw1h6qDXTLMInRqvMqA'
}, {
  avatar: './assets/background/bg-1.jpg',
  title: '导师制',
  excerpt: '学员们！快来选择你们亲爱的导师吧！',
  link: './pages/tutor.html'
}, {
  avatar: './assets/background/bg-2.jpg',
  title: '联系我们',
  excerpt: '想给我们打CALL吗~',
  link: './pages/contact-us.html'
}]

function createPostCard(imageUrl, title, excerpt, pageLink) {
  var cardArticle = document.createElement('article')
  var imageLinkA = document.createElement('a')
  var imageDiv = document.createElement('div')
  var contentLinkA = document.createElement('a')
  var contentDiv = document.createElement('div')
  var titleH2 = document.createElement('h2')
  var excerptSection = document.createElement('section')
  var excerptP = document.createElement('p')
  cardArticle.classList.add('post-card')
  imageLinkA.classList.add('post-card-image-link')
  imageLinkA.href = pageLink
  imageDiv.classList.add('post-card-image')
  imageDiv.style.backgroundImage = `url(${imageUrl})`
  contentLinkA.classList.add('post-card-content-link')
  contentLinkA.href = pageLink
  contentDiv.classList.add('post-card-content')
  titleH2.classList.add('post-card-title')
  titleH2.innerHTML = title
  excerptSection.classList.add('post-card-excerpt')
  excerptP.innerHTML = excerpt
  cardArticle.appendChild(imageLinkA)
  cardArticle.appendChild(contentLinkA)
  imageLinkA.appendChild(imageDiv)
  contentLinkA.appendChild(contentDiv)
  contentDiv.appendChild(titleH2)
  contentDiv.appendChild(excerptSection)
  excerptSection.appendChild(excerptP)
  return cardArticle
}

function drawPosts() {
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

  var postList = []
  var nav = document.getElementById('navigator-page')
  for (var i = 0; i < postInfo.length; i++) {
    var post = postInfo[i]
    var postImageUrl = post.avatar
    var postTitle = post.title
    var postExcerpt = post.excerpt
    var postPageLink = post.link
    var postCard = createPostCard(postImageUrl, postTitle, postExcerpt, postPageLink)
    nav.appendChild(postCard)
    postList.push(postCard)
    if ((i + 1) % numberInLine === 0) {
      var postLineDiv = document.createElement('div')
      postLineDiv.classList.add('post-card-line')
      for (var j = 0; j < numberInLine; j++) {
        postLineDiv.appendChild(postList[j])
      }
      nav.appendChild(postLineDiv)
      postList = []
    }
  }
  postLineDiv = document.createElement('div')
  postLineDiv.classList.add('post-card-line')
  for (var j = 0; j < postList.length; j++) {
    postLineDiv.appendChild(postList[j])
  }
  nav.appendChild(postLineDiv)
}

testTransform()
drawDown()
drawPosts()
