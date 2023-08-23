let posts = [
  {
    headline: 'Eselbert',
    headlineimage:
      '<img class="postUser" src="/img/icons/user.png" alt="">',
    image: '<img src="img/photos/pic1.jpg" alt="">',
    captionBox: 'Heute mal so ein Foto gemacht...',
    comments: [
      'Was',
      'Was geeeeeeeeeeht',
      'Was geeeeeeeeeeht aaaaaaaaaaaaab',
    ],
    likes: 543,
  },
  {
    headline: 'Nasenesel',
    headlineimage:
      '<img class="postUser" src="/img/icons/user.png" alt="">',
    image: '<img src="img/photos/pic2.jpg" alt="">',
    captionBox: 'Heute mal sooooo ein Foto gemacht...',
    comments: ['Hallo', 'Kommentar2 Kommentar2', 'Kommentar3'],
    likes: 123,
  },
  {
    headline: 'Esellife',
    headlineimage:
      '<img class="postUser" src="/img/icons/user.png" alt="">',
    image: '<img src="img/photos/pic3.jpg" alt="">',
    captionBox: 'Heute mal sooooooooooooo ein Foto gemacht...',
    comments: ['Moin', 'Kommentar2 Kommentar2', 'Kommentar3'],
    likes: 321,
  },
  {
    headline: 'Lonelyesel',
    headlineimage:
      '<img class="postUser" src="/img/icons/user.png" alt="">',
    image: '<img src="img/photos/pic4.jpg" alt="">',
    captionBox:
      'Heute mal sooooooooooooooooooooooooo ein Foto gemacht...',
    comments: ['Was', 'Kommentar2 Kommentar2', 'Kommentar3'],
    likes: 1233,
  },
  {
    headline: 'Motivatedesel',
    headlineimage:
      '<img class="postUser" src="/img/icons/user.png" alt="">',
    image: '<img src="img/photos/pic5.jpg" alt="">',
    captionBox:
      'Heute mal sooooooooooooooooooooooooooooooooooooooo ein Foto gemacht...',
    comments: ['Geht', 'Kommentar2 Kommentar2', 'Kommentar3'],
    likes: 443,
  },
  {
    headline: 'Cheekyesel',
    headlineimage:
      '<img class="postUser" src="/img/icons/user.png" alt="">',
    image: '<img src="img/photos/pic6.jpg" alt="">',
    captionBox: 'Heute mal sooooooooooooooo ein Foto gemacht...',
    comments: ['Abhier', 'Kommentar2 Kommentar2', 'Kommentar'],
    likes: 22,
  },
];

let stories = [
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
  {
    image: '',
    name: '',
  },
];

function generatePosts() {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const commentsjson = posts[i].comments[i];
    //const likes = Math.floor(Math.random() * 100);
    document.getElementById('content').innerHTML += /*html*/ `
    <div class="contentbox">
      <div class="headlinemenubox">
      <div class="headlineBox">
        <div class="content-h1">${post['headlineimage']}</div> 
        <div class="content-h1">${post['headline']}</div>
    </div>
    <div class="menubox">...</div>
   </div> 
      <div class="imagebox">${post['image']}</div>
      <div class="box">
    <div class="icon-box">
     <img onclick="checkLike('likeButton${i}', 'likeImage${i}', '${i}')" id="likeImage${i}" class="postIcon" src="/img/icons/notification.png" alt="">
     <img onclick="addComment(${i})" id="comment${i}" class="postIcon" src="/img/icons/speech-bubble.png" alt="">
     <img class="postIcon" src="/img/icons/message.png" alt="">
    </div>
    <div>
    <img class="bookmark-icon" src="/img/icons/bookmark.png" alt="">
    </div>
    </div>
    <div class="like-box">Gefällt <span id="likeButton${i}">${post['likes']}</span> Mal</div>
    <div class="caption-box"><span class="comment-h3"> ${post['headline']}</span> ${post['captionBox']}</div>
    <div class="comment-box" id="${i}"></div>
    <div></div>
    `;
    generateCommentBox(i);
    generateComments(i);
  }
}

function generateComments(x) {
  for (let i = 0; i < posts[x].comments.length; i++) {
    let comment = posts[x].comments[i];
    document.getElementById(x).innerHTML += /*html*/ `
    <span>Guest: ${comment}</span>
    `;
  }
}

function generateCommentBox(x) {
  document.getElementById(x).innerHTML += /*html*/ `
  <div class="box">
    <input id="input${x}" class="inputField" type="text" placeholder="Kommentieren ...">
    <button>Kommentieren</button>  
    </div>`;
}

function checkLike(x, y, i) {
  //let like = document.getElementById(x).innerHTML;//
  let like = posts[i]['likes'];
  let newLike = like + 1;
  let noNewLike = like;
  if (document.getElementById(y).classList.contains('likedPost')) {
    document.getElementById(y).classList.remove('likedPost');
    document.getElementById(x).innerHTML = noNewLike;
  } else {
    document.getElementById(x).innerHTML = newLike;
    document.getElementById(y).classList.add('likedPost');
  }
}

function addComment(x) {
  //posts[x].comments.push('Emmerich');//
  document.getElementById(x).innerHTML += /*html*/ `
    <span>Guest: Das wird eine Variable</span>
    `;
}

function generateStories() {}
