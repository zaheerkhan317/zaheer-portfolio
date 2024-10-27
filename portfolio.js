$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    //slide-up script


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });




    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    

    // typing animation script

    var typed =new Typed(".typing", {
        strings: ["Full Stack Developer", "Web Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var typed =new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Web Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 2000, // Set autoplay interval to 5 seconds (5000 milliseconds)
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
});

//Email JS
function Validate() {
    let sendBtn = document.querySelector('.send-btn');
   
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let name = document.querySelector('input[name="name"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let msg = document.querySelector('.message').value;
        if (name === "" || email === "" || msg === "") {
            emptyerror();
        } else {
            sendmail(name, email, msg);
            success();
        }
    });
}

Validate();

function sendmail(name, email, msg) {
    emailjs.send("service_5aw59qk", "template_01jbcel", {
        from_name: name,
        from: email,
        to_name: "khan", // Set the 'to' address to your desired recipient
        message: msg,
        reply_to: email // Set the 'from' address
    }).then(function(response) {
        console.log('SUCCESS!', response);
        clearForm();
    }, function(error) {
        console.log('FAILED...', error);
    });
}

function emptyerror() {
    swal({
        title: "Oh No....",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email sent successfully",
        text: "I'll reply as soon as possible",
        icon: "success",
    });
}

function clearForm() {
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('.message').value = "";
}

