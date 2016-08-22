console.log('Hello, front end');

var player = 1;
var cells = [document.getElementById('one'),
  document.getElementById('two'),
  document.getElementById('three'),
  document.getElementById('four'),
  document.getElementById('five'),
  document.getElementById('six'),
  document.getElementById('seven'),
  document.getElementById('eight'),
  document.getElementById('nine'),
];
// console.log(cells);

document.getElementById('one').addEventListener('click', function() {
  if ((document.getElementById('one').innerHTML === "") && (player === 1)) {
  document.getElementById('one').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('one').innerHTML === "") && (player === 0)) {
  document.getElementById('one').innerHTML = "O";
  player = 1;
  }
})

document.getElementById('two').addEventListener('click', function() {
  if ((document.getElementById('two').innerHTML === "") && (player === 1)) {
  document.getElementById('two').innerHTML = "X";
  player = 0;
  console.log("this is after X" + player);
} else if ((document.getElementById('two').innerHTML === "") && (player === 0)) {
  document.getElementById('two').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('three').addEventListener('click', function() {
  if ((document.getElementById('three').innerHTML === "") && (player === 1)) {
  document.getElementById('three').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('three').innerHTML === "") && (player === 0)) {
  document.getElementById('three').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('four').addEventListener('click', function() {
  if ((document.getElementById('four').innerHTML === "") && (player === 1)) {
  document.getElementById('four').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('four').innerHTML === "") && (player === 0)) {
  document.getElementById('four').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('five').addEventListener('click', function() {
  if ((document.getElementById('five').innerHTML === "") && (player === 1)) {
  document.getElementById('five').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('five').innerHTML === "") && (player === 0)) {
  document.getElementById('five').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('six').addEventListener('click', function() {
  if ((document.getElementById('six').innerHTML === "") && (player === 1)) {
  document.getElementById('six').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('six').innerHTML === "") && (player === 0)) {
  document.getElementById('six').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('seven').addEventListener('click', function() {
  if ((document.getElementById('seven').innerHTML === "") && (player === 1)) {
  document.getElementById('seven').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('seven').innerHTML === "") && (player === 0)) {
  document.getElementById('seven').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('eight').addEventListener('click', function() {
  if ((document.getElementById('eight').innerHTML === "") && (player === 1)) {
  document.getElementById('eight').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('eight').innerHTML === "") && (player === 0)) {
  document.getElementById('eight').innerHTML = "O";
  player = 1;
  }
})


document.getElementById('nine').addEventListener('click', function() {
  if ((document.getElementById('nine').innerHTML === "") && (player === 1)) {
  document.getElementById('nine').innerHTML = "X";
  player = 0;
  console.log("this is after X " + player);
} else if ((document.getElementById('nine').innerHTML === "") && (player === 0)) {
  document.getElementById('nine').innerHTML = "O";
  player = 1;
  }
})



document.getElementById('reset').addEventListener('click', function() {
  location.reload(true)}


//
//
// var p1 = 1;
// function display_input(cells){
//     if ( p1 == 1 ){
//         document.getElementById(cells).innerHTML = "X";
//         p1 = 0;
//     } else {
//         document.getElementById(cells).innerHTML = "O";
//         p1 = 1;
//     }
// }
//
//
// function xOrO () {
//
//   document.getElementById('one').innerHTML = 'X'
// }
//

//
//   for (var i = 0; i < cells.length; i++) {
//     if (document.getElementById(cell.i).innerHTML = "X") {
//         return 0
//     } else {
//       (document.getElementById(cell.i).innerHTML = "O")
//     }
//   }
// }
//
//
//
// function favchoc(bitter) {
//    if (bitter > 7) {
//    return 0
//  } else if (bitter > 5) {
//    return 1
//  } else if (bitter > 3) {
//    return 2
//    } else {
//    return 3
//    }
// }
//
// switch (favchoc(bitter)) {
//   case 0:
//    console.log("your favourite chocolate is likely to be dark");
//    break;
//   case 1:
//    console.log("your favourite chocolate is likely to be dark milk");
//    break;
//   case 2:
//    console.log("your favourite chocolate is likely to be milk");
//    break;
//   case 3:
//    console.log("your favourite chocolate is likely to be white");
//    break;
// }


//
//   if (true) {
//
//   }return true
// }


//
// document.getElementById('one').addEventListener('click', function() {
//   document.getElementById('one').style.background = 'goldenrod'
// })
//
//
// function inputOne() {
//   if (document.getElementById('one').value = "") {
//   document.getElementById('one').innerHTML = <p>"X"</p>;
//   // } else if (document.getElementById('one').value = "") {
//   // document.getElementById('one').innerHTML = "X";
//   // }
// }
//

//
// if((Type == 2 && PageCount == 0) || (Type == 2 && PageCount == '')) {
//
//         PageCount= document.getElementById('<%=hfPageCount.ClientID %>').value;
// }
