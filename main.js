function checkPrime(input) {
  if (input <= 1) return false;

  var i = 2;
  for (; i < input; i++) {
    if (input % i === 0) return false;
  }

  return true;
}

// function printPrime(input) {
//   var i = 2;
//   for (; i <= input; i++) {
//     if (checkPrime(i)) console.log(i + " ");
//   }
// }

document.getElementById("btnTinhSNT").onclick = function () {
  var input = document.getElementById("txtSNT").value * 1;
  var kq = "";
  var i = 2;
  for (; i <= input; i++) {
    if (checkPrime(i)) kq += i + " ";
  }
//   var kq = printPrime(input);
  document.getElementById("footerTinhSNT").innerHTML = kq;
};
