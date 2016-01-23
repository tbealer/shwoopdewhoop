var allDivs = document.getElementsByTagName('div');

for (var i = allDivs.length - 1; i >= 0; i--) {
  allDivs[i].addEventListener('click', function(){
    this.style.backgroundColor = currentColor;
  });
}

console.log(allDivs);