//원래는 벡터를 만들어야함. 그러나 그냥 부드러움을 만드는 것이라면 이징을 사용해도 됨. 
//객체 개념

let x = 0;
let y = 0;
let easing = 0.05; //1~0사이에 실수를 0에 가까운 값을 넣으면 천천히 따라옴

function setup() {
    //스크롤 생김 없애려면 인덱스, css 수정해야함.
    createCanvas(windowWidth, windowHeight);
    //background(3, 244, 252);
    
}

function draw() {
  let targetX = mouseX;
  //대신 초기화된다
  background(3,244,252,20);
  //마우스를 움직일때, 움직인 위치의 x에서 현재x를 빼고, 거기에 이징을 곱한다 
  //=>즉, 그러면 원래대로라면 20을 움직여야하는데, 곱해서 천천히 움직이는 값으로 만든다는 의미
  x += (targetX - x) * easing;

  let targetY = mouseY;
  y += (targetY - y) * easing;

  ellipse(x, y, 50, 50);
}

//캔버스 크기를 다시 맞게 바꿔라 
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}