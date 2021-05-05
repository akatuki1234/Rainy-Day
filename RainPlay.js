//////カラフルな雨を降らせることができます。//////////
//下記のコードの//部分を消して。
//下記のコードの「カラフル↑↓」で囲まれたコードをコメントアウトする。

//////こっちの方が個人的に好きな雨/////////
//下記のコードの「こっち雨↓↑」という部分の
//「window.innerHeight - 1000」の「1000」の部分を「100」に変更する。

//////雨の降るスピード調節//////////
//雨のスピードはRainStyle.cssのanimation-durationの値を変更してください。

const Conteiner = document.querySelector('.Conteiner');
const colors = ['red','blue','green',];
const drops = ['0px 40px 15px 40px','0px 90px 30px 90px','0px 120px 50px 120px'];
for(let i=1; i<=400; i++){
  const drop = document.createElement('div');
  drop.classList.add('Raindrop');
  // let ColorValue = parseInt(Math.random() * 3);
  let DropValue = parseInt(Math.random() * 3);
  let WHValue = parseInt(Math.random() * 20) + 1;
  // drop.style.background = colors[ColorValue];
  // drop.style.color = colors[ColorValue];

  //カラフル↓ここをコメントアウトする
  drop.style.background = 'rgba(0,0,255,1.0)';
  // drop.style.background = 'skyblue';
  drop.style.color = 'rgba(255,255,255,0.1)';
  //カラフル↑ここをコメントアウトする

  drop.style.width = WHValue + 'px';
  drop.style.height = WHValue + 'px';
  drop.style.border = '2px solid';
  drop.style.borderRadius = drops[DropValue];
  drop.style.transform = 'rotate(45deg)';
  drop.style.position = 'absolute';
  drop.style.left = parseInt(Math.random() * screen.width) + 'px';

  //↓こっちの雨
  drop.style.top = parseInt(Math.random() * window.innerHeight - 1000) + 'px'; 
  //↑こっちの雨
  drop.style.animationName = 'RainDown';
  drop.style.animationDelay = Math.random() * 10 + 1 + 's';
  drop.style.animationDuration = '3s';
  drop.style.animationIterationCount = 'infinite';
  Conteiner.appendChild(drop);
}
