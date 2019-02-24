var menuBtn = document.getElementById('menu');

menuBtn.onclick = function () {
    var ul = document.getElementsByClassName("nav-content-left")[0];
    var li = document.getElementsByClassName("nav-content-left")[0].children;
    for (var i = 0; i < li.length; i++) {
        li[i].classList.toggle("manu-open-li");
    }
    ul.classList.toggle("menuUl");
};


var userName = document.getElementById('name');
userName.onblur = function(){
    if(!userName.value){
        userName.style.backgroundColor = "red";
    }else{
        userName.style.backgroundColor = "#242834";
    }
};

userName.onfocus = function () {
  userName.style.backgroundColor = "#cacaca";
};



var phone = document.getElementById('phone');
phone.onblur = function(){
    if(!phone.value){
        phone.style.backgroundColor = "red";
    }else{
        phone.style.backgroundColor = "#242834";
    }
};

phone.onfocus = function () {
    phone.style.backgroundColor = "#cacaca";
};


var message = document.getElementById('message');
message.oninput = function(){
    message.style.backgroundColor = "#4caf50";
    if (!message.value) {
    	 message.style.backgroundColor = "red";

    }
};

message.onfocus = function(){
	    message.style.backgroundColor = "#cacaca";
}

message.onblur = function () {
    message.style.backgroundColor = "#242834";
    if(!message.value){
        message.style.backgroundColor = "red";

    }
};

function done() {
    var btnSubmit = document.getElementById("btn-submit");

    if (userName.value && email.value && phone.value && message.value) {
        btnSubmit.style.color = "#4caf50";
        btnSubmit.style.borderColor = "#4caf50";
    }else {
        btnSubmit.style.color = "#cacaca";
        btnSubmit.style.borderColor = "#cacaca";
    }

    if (!message.value || !email.value || !phone.value || !userName.value) {
        btnSubmit.style.color = "red";
        btnSubmit.style.borderColor = "red";
    }else{
    	btnSubmit.style.color = "#4caf50";
        btnSubmit.style.borderColor = "#4caf50";
    }
}

var btnSubmit = document.getElementById("btn-submit");
btnSubmit.onclick = function(){
    if(!userName.value){
        userName.style.backgroundColor = "red";
        return false;

    }else{
        userName.style.backgroundColor = "#242834";
    }
    if(!email.value){
    	email.style.backgroundColor = "red";
	}
	else{
		email.style.backgroundColor = "#242834";
	}
    if(!phone.value){
        phone.style.backgroundColor = "red";
        return false;

    }else{
        phone.style.backgroundColor = "#242834";
    }
    if(!message.value){
        message.style.backgroundColor = "red";
    }
     var regExp = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	if(regExp.test(email.value) == false){
		email.style.backgroundColor = "red";
		}
	else{
		email.style.backgroundColor = "rgb(76 ,185, 80)";

	}

};


var footeremail = document.getElementById('footeremail');
footeremail.onblur = function(){


    var regExp = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if(regExp.test(footeremail.value) == false){
    	footeremail.style.backgroundColor = "red";
    }
    else{
    	footeremail.style.backgroundColor = "rgb(76 ,185, 80)";

    }
    	if(!footeremail.value){
  		footeremail.style.backgroundColor = "#242834"
  	}
};

footeremail.onfocus = function () {
    footeremail.style.backgroundColor = "#cacaca";
};


var sub = document.getElementById("subscribe");
sub.onclick = function(){
	var regExp = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if(regExp.test(footeremail.value) == false){
    	footeremail.style.backgroundColor = "red";
    	return false;
    }
    else{
    	footeremail.style.backgroundColor = "rgb(76 ,185, 80)";

    }
    	if(!footeremail.value){
  		footeremail.style.backgroundColor = "#242834"
  		return false;
  	}
  	return true;
}

var email = document.getElementById('email');
email.onblur = function(){

	var regExp = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

	if(regExp.test(email.value) == false){
		email.style.backgroundColor = "red";
		}
	else{
		email.style.backgroundColor = "rgb(76 ,185, 80)";

	}

}


email.onfocus = function(){
			email.style.backgroundColor = "#cacaca";

}



                                                                            // images

var images = document.getElementsByClassName("overlay");





images[0].onclick = function(event){
    var owerlay = document.getElementsByClassName("owerlay")[0];
    owerlay.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('openimage').setAttribute('src','images/im1.jpg');
    document.getElementsByTagName("nav")[0].style.display = "none";

    owerlay.onclick = function(){
        owerlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementsByTagName("nav")[0].style.display = "block";

    };


    
};

images[1].onclick = function(event){
    var owerlay = document.getElementsByClassName("owerlay")[0];
    owerlay.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('openimage').setAttribute('src','images/im2.jpg');
    document.getElementsByTagName("nav")[0].style.display = "none";

    owerlay.onclick = function(){
        owerlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementsByTagName("nav")[0].style.display = "block";

    };


    
};

images[2].onclick = function(event){
    var owerlay = document.getElementsByClassName("owerlay")[0];
    owerlay.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('openimage').setAttribute('src','images/im3.jpg');
    document.getElementsByTagName("nav")[0].style.display = "none";

    owerlay.onclick = function(){
        owerlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementsByTagName("nav")[0].style.display = "block";

    };


    
};


images[3].onclick = function(event){
    var owerlay = document.getElementsByClassName("owerlay")[0];
    owerlay.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('openimage').setAttribute('src','images/im4.jpg');
    document.getElementsByTagName("nav")[0].style.display = "none";

    owerlay.onclick = function(){
        owerlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementsByTagName("nav")[0].style.display = "block";

    };


    
};


images[4].onclick = function(event){
    var owerlay = document.getElementsByClassName("owerlay")[0];
    owerlay.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('openimage').setAttribute('src','images/im5.jpg');
    document.getElementsByTagName("nav")[0].style.display = "none";

    owerlay.onclick = function(){
        owerlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementsByTagName("nav")[0].style.display = "block";

    };


    
};

images[5].onclick = function(event){
    var owerlay = document.getElementsByClassName("owerlay")[0];
    owerlay.style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById('openimage').setAttribute('src','images/im6.jpg');
    document.getElementsByTagName("nav")[0].style.display = "none";
    owerlay.onclick = function(){
        owerlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.getElementsByTagName("nav")[0].style.display = "block";


    };


    
};


 function menuup(){
 	var ul = document.getElementsByClassName("nav-content-left")[0];
    var li = document.getElementsByClassName("nav-content-left")[0].children;
    for (var i = 0; i < li.length; i++) {
        li[i].classList.remove("manu-open-li");
    }
    ul.classList.toggle("menuUl");
	 };




//////////////////



