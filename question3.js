function appendChildren() {

  var allDivs = document.getElementsByTagName("div");
  var length = allDivs.length;

  for (var i = 0; i < length; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

function decorateDiv(div) {

}
