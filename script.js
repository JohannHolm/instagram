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
    image: '<img src="img/stories/story1.jpg" alt="">',
    name: 'Esel',
  },
  {
    image: '<img src="img/stories/story2.jpg" alt="">',
    name: 'Eselmann',
  },
  {
    image: '<img src="img/stories/story3.jpg" alt="">',
    name: 'Donkey',
  },
  {
    image: '<img src="img/stories/story4.jpg" alt="">',
    name: 'Eselbert',
  },
  {
    image: '<img src="img/stories/story5.jpg" alt="">',
    name: 'Jungesel',
  },
  {
    image: '<img src="img/stories/story6.jpg" alt="">',
    name: 'Eselbaron',
  },
];

function generateContent() {
  generateStories();
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

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
     <img onclick="checkLike('likeButton${i}', 'likeImage${i}', '${i}')" id="likeImage${i}" class="postIcon" src="img/icons/notification.png" alt="">
     <img id="comment${i}" class="postIcon" src="img/icons/speech-bubble.png" alt="">
     <img class="postIcon" src="img/icons/message.png" alt="">
    </div>
    <div>
    <img class="bookmark-icon" src="img/icons/bookmark.png" alt="">
    </div>
    </div>
    <div class="like-box">Gefällt <span id="likeButton${i}">${post['likes']}</span> Mal</div>
    <div class="caption-box"><span class="comment-h3"> ${post['headline']}</span> ${post['captionBox']}</div>
    <div class="comment-box" id="${i}"></div>
    <div class="cmb-box" id="cmb${i}"></div>
    `;
    generateCommentBox('cmb', i);
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

function generateCommentBox(y, x) {
  document.getElementById('cmb' + x).innerHTML += /*html*/ `
  <div class="box">
    <input id="input${x}" class="inputField" type="text" placeholder="Kommentieren ...">
    <button onclick="addComment('input'+ ${x}, ${x})">Kommentieren</button>  
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

function addComment(x, y) {
  let input = document.getElementById(x).value;
  //posts[x].comments.push(${input});//
  document.getElementById(y).innerHTML += /*html*/ `
    <span>Guest: ${input}</span>
    `;
  clearInput(x);
}

function clearInput(x) {
  document.getElementById(x).value = '';
}

function generateStories() {
  for (let i = 0; i < stories.length; i++) {
    const story = stories[i];
    document.getElementById('main-storybox').innerHTML += /*html*/ `
    <div class="storybox">
     ${story.image}
    <span>${story.name}</span>
    </div>
    `;
  }
}
