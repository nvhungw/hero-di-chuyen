console.log('Hello!');
class Hero {
  constructor(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
  }

  getHeroElement() {
    return ('<img width="' + this.size + '"' +' height="' + this.size + '"' + ' src="' + this.image + '"' + ' style="top: ' + this.top + 'px; left:' + this.left +
      'px;position:absolute;" />');
  }

  moveRight() {
    this.left += this.speed;
    console.log('left: ' + this.left);
  }

  moveBottom() {
    this.top += this.speed;
    console.log('left: ' + this.left);
  }
}

var hero = new Hero(
  'https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg',
  10,
  10,
  50,
  20
);

function start() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let isRunToRight = hero.left < windowWidth - hero.size;
  let isRunToBottom = hero.top < windowHeight - hero.size;

  console.log(isRunToRight);
  if (isRunToRight) {
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100);
  } else {
    if (isRunToBottom) {
      console.log(hero.getHeroElement());
      hero.moveBottom();
      document.getElementById('game').innerHTML = hero.getHeroElement();
      setTimeout(start, 1000);
    }
  }
  // else{
  //   if(isRunToBottom)
  // {
  //   hero.moveBottom();
  //   document.getElementById('game').innerHTML = hero.getHeroElement();
  //     setTimeout(start, 1000)
  // }

  // }
}

start();
