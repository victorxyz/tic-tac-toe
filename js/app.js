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


document.getElementById('one').addEventListener('click', function() {
  if ((document.getElementById('one').innerHTML === "") && (player === 1)) {
  document.getElementById('one').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('one').innerHTML === "") && (player === 0)) {
  document.getElementById('one').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})

document.getElementById('two').addEventListener('click', function() {
  if ((document.getElementById('two').innerHTML === "") && (player === 1)) {
  document.getElementById('two').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('two').innerHTML === "") && (player === 0)) {
  document.getElementById('two').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})


document.getElementById('three').addEventListener('click', function() {
  if ((document.getElementById('three').innerHTML === "") && (player === 1)) {
  document.getElementById('three').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('three').innerHTML === "") && (player === 0)) {
  document.getElementById('three').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})


document.getElementById('four').addEventListener('click', function() {
  if ((document.getElementById('four').innerHTML === "") && (player === 1)) {
  document.getElementById('four').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('four').innerHTML === "") && (player === 0)) {
  document.getElementById('four').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})


document.getElementById('five').addEventListener('click', function() {
  if ((document.getElementById('five').innerHTML === "") && (player === 1)) {
  document.getElementById('five').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('five').innerHTML === "") && (player === 0)) {
  document.getElementById('five').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})

document.getElementById('six').addEventListener('click', function() {
  if ((document.getElementById('six').innerHTML === "") && (player === 1)) {
  document.getElementById('six').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('six').innerHTML === "") && (player === 0)) {
  document.getElementById('six').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})

document.getElementById('seven').addEventListener('click', function() {
  if ((document.getElementById('seven').innerHTML === "") && (player === 1)) {
  document.getElementById('seven').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('seven').innerHTML === "") && (player === 0)) {
  document.getElementById('seven').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})

document.getElementById('eight').addEventListener('click', function() {
  if ((document.getElementById('eight').innerHTML === "") && (player === 1)) {
  document.getElementById('eight').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
} else if ((document.getElementById('eight').innerHTML === "") && (player === 0)) {
  document.getElementById('eight').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})

document.getElementById('nine').addEventListener('click', function() {
  if ((document.getElementById('nine').innerHTML === "") && (player === 1)) {
  document.getElementById('nine').innerHTML = "X";
  player = 0;
  checkwin();
  // stopgame();
  } else if ((document.getElementById('nine').innerHTML === "") && (player === 0)) {
  document.getElementById('nine').innerHTML = "O";
  player = 1;
  checkwin();
  // stopgame();
  }
})


//
// function checkwin1() {
//   if (
//     ((document.getElementById('one').innerHTML === "X") && (document.getElementById('two').innerHTML === "X") &&
//     (document.getElementById('three').innerHTML === "X")) ||
//     ((document.getElementById('one').innerHTML === "0") && (document.getElementById('two').innerHTML === "0") &&
//     (document.getElementById('three').innerHTML === "0"))
//   ) {
//     document.getElementById('header').innerHTML = "We have a winner!";
//   }
// }


function checkwin() {
    checkwin1x();
    checkwin1o();
    checkwin2x();
    checkwin2o();
    checkwin3x();
    checkwin3o();
    checkwin4x();
    checkwin4o();
    checkwin5x();
    checkwin5o();
    checkwin6x();
    checkwin6o();
    checkwin7x();
    checkwin7o();
    checkwin8x();
    checkwin8o();
}


function checkwin1x() {
  if (
    (document.getElementById('one').innerHTML === "X") &&
    (document.getElementById('two').innerHTML === "X") &&
    (document.getElementById('three').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}

function checkwin1o() {
  if (
    (document.getElementById('one').innerHTML === "O") &&
    (document.getElementById('two').innerHTML === "O") &&
    (document.getElementById('three').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}


function checkwin2x() {
  if (
    (document.getElementById('four').innerHTML === "X") &&
    (document.getElementById('five').innerHTML === "X") &&
    (document.getElementById('six').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}

function checkwin2o() {
  if (
    (document.getElementById('four').innerHTML === "O") &&
    (document.getElementById('five').innerHTML === "O") &&
    (document.getElementById('six').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}


function checkwin3x() {
  if (
    (document.getElementById('seven').innerHTML === "X") &&
    (document.getElementById('eight').innerHTML === "X") &&
    (document.getElementById('nine').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}

function checkwin3o() {
  if (
    (document.getElementById('seven').innerHTML === "O") &&
    (document.getElementById('eight').innerHTML === "O") &&
    (document.getElementById('nine').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}

function checkwin4x() {
  if (
    (document.getElementById('one').innerHTML === "X") &&
    (document.getElementById('four').innerHTML === "X") &&
    (document.getElementById('seven').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}


function checkwin4o() {
  if (
    (document.getElementById('one').innerHTML === "O") &&
    (document.getElementById('four').innerHTML === "O") &&
    (document.getElementById('seven').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}


function checkwin5x() {
  if (
    (document.getElementById('two').innerHTML === "X") &&
    (document.getElementById('five').innerHTML === "X") &&
    (document.getElementById('eight').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}


function checkwin5o() {
  if (
    (document.getElementById('two').innerHTML === "O") &&
    (document.getElementById('five').innerHTML === "O") &&
    (document.getElementById('eight').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}

function checkwin6x() {
  if (
    (document.getElementById('three').innerHTML === "X") &&
    (document.getElementById('six').innerHTML === "X") &&
    (document.getElementById('nine').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}


function checkwin6o() {
  if (
    (document.getElementById('three').innerHTML === "O") &&
    (document.getElementById('six').innerHTML === "O") &&
    (document.getElementById('nine').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}


function checkwin7x() {
  if (
    (document.getElementById('one').innerHTML === "X") &&
    (document.getElementById('five').innerHTML === "X") &&
    (document.getElementById('nine').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}


function checkwin7o() {
  if (
    (document.getElementById('one').innerHTML === "O") &&
    (document.getElementById('five').innerHTML === "O") &&
    (document.getElementById('nine').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}


function checkwin8x() {
  if (
    (document.getElementById('three').innerHTML === "X") &&
    (document.getElementById('five').innerHTML === "X") &&
    (document.getElementById('seven').innerHTML === "X")
  ) {
    window.alert("X wins! Game Over!")
  }
}


function checkwin8o() {
  if (
    (document.getElementById('three').innerHTML === "O") &&
    (document.getElementById('five').innerHTML === "O") &&
    (document.getElementById('seven').innerHTML === "O")
  ) {
    window.alert("O wins! Game Over!")
  }
}


//
// function checkwin1o() {
//   if (
//     (document.getElementById('one').innerHTML === "O") &&
//     (document.getElementById('two').innerHTML === "O") &&
//     (document.getElementById('three').innerHTML === "O")
//   ) {
//     document.getElementById('header').innerHTML = "O wins!";
//   }
// }



function reset(){
    window.location.reload();
}
