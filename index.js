let showed = false;
window.onload = function() {
  function strPad() {
	let noteMessageBox = document.getElementsByClassName("noteMessageBox")[0];
	if (showed)
	{
		noteMessageBox.style.display = "none";
		showed = false;
	}
	noteMessageBox.innerHTML = this.parentNode.nextSibling.nextSibling.innerHTML;
	noteMessageBox.style.display = "block";
	showed = true;
  }

  let bt = document.getElementsByClassName("btn");
  for (let i = 0; i < bt.length; i++) {
	bt[i].onclick = strPad;
  } 
  
  document.addEventListener('click', function(e) {
	  if (e.target.className != 'noteMessageBox' && e.target.className != 'btn') {
		let noteMessageBox = document.getElementsByClassName("noteMessageBox")[0];
		noteMessageBox.style.display = "none";
	  }
	})
}