//needs input of calling image tag and 1/2 representing which image is being used
function changeImage(e, u){
	if(u == 1){
		e.src = "mailicoHover.png";
	}
	else{
		e.src = "mailico.png";
	}
}