var postInfo = [{
  avatar: '../assets/photos/wzq.png',
  title: '武子骞',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/yzy.png',
  title: '杨智贻',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/wzx.png',
  title: '韦宗兴',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/zzp.png',
  title: '周泽平',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/zty.png',
  title: '赵天扬',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/dyl.png',
  title: '邓雅琳',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/djh.png',
  title: '董锦红',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/axy.png',
  title: '阿雪莹',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/xjr.png',
  title: '徐佳荣',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/qfd.png',
  title: '卿锋镝',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/zxj.png',
  title: '张歆婕',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/hyr.png',
  title: '黄怡然',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/lxq.png',
  title: '李星奇',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/crq.png',
  title: '常芮荃',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/lhn.png',
  title: '刘浩男',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/bys.png',
  title: '保伊莎',
  excerpt: '',
  link: ''
}, {
  avatar: '../assets/photos/wty.png',
  title: '王天一',
  excerpt: '',
  link: ''
}]

function createPostCard(imageUrl, title, excerpt, pageLink) {
  var cardArticle = document.createElement('article')
  var imageLinkA = document.createElement('a')
  var imageDiv = document.createElement('div')
  // var contentLinkA = document.createElement('a')
  // var contentDiv = document.createElement('div')
  // var titleH2 = document.createElement('h2')
  // var excerptSection = document.createElement('section')
  // var excerptP = document.createElement('p')
  cardArticle.classList.add('post-card')
  imageLinkA.classList.add('post-card-image-link')
  imageLinkA.href = pageLink
  imageDiv.classList.add('post-card-image')
  imageDiv.style.backgroundImage = `url(${imageUrl})`
  // contentLinkA.classList.add('post-card-content-link')
  // contentLinkA.href = pageLink
  // contentDiv.classList.add('post-card-content')
  // titleH2.classList.add('post-card-title')
  // titleH2.innerHTML = title
  // excerptSection.classList.add('post-card-excerpt')
  // excerptP.innerHTML = excerpt
  cardArticle.appendChild(imageLinkA)
  // cardArticle.appendChild(contentLinkA)
  imageLinkA.appendChild(imageDiv)
  // contentLinkA.appendChild(contentDiv)
  // contentDiv.appendChild(titleH2)
  // contentDiv.appendChild(excerptSection)
  // excerptSection.appendChild(excerptP)
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

  postInfo.sort(() => Math.random() - 0.5)
  var postList = []
  var nav = document.getElementById('navigator')
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

drawPosts()
