  $(document).ready(function(){

  $(window).on("load",function(){
          $(".loading").fadeOut("slow");
  });



    console.log(screen.width+"\n"+screen.availWidth)
    let cd = false;
  $(window).scroll(function(){

      if (this.scrollY > 20){
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }

      if (this.scrollY > 500){
        if ($(".menu-btn i").hasClass("active")) return;
        $(".scroll-up-btn").addClass("show");
        $(".scroll-up-btn").addClass("active");
      } else {
        $(".scroll-up-btn").removeClass("show");
        $(".scroll-up-btn").removeClass("active");
      }

      if(screen.availWidth > 947){

      if (this.scrollY > 1800 &&  this.scrollY < 2300){

        $(".skills .skills-content .right .html").addClass("htmlOn");
        $(".skills .skills-content .right .css").addClass("cssOn");
        $(".skills .skills-content .right .js").addClass("jsOn");

        if ($(".skills .skills-content .right .html").hasClass("htmlOn")){
          if (cd) return;
          cd = true;
          
          persen(70, "number-html")
          persen(60, "number-css")
          persen(40, "number-js")
        }

      } else if (this.scrollY < 1600 || this.scrollY > 2300) {

        $(".skills .skills-content .right .html").removeClass("htmlOn");
        $(".skills .skills-content .right .css").removeClass("cssOn");
        $(".skills .skills-content .right .js").removeClass("jsOn");

        def(0, "number-html")
        def(0, "number-css")
        def(0, "number-js")

        cd = false;

      } 

      } else {
      
        if (this.scrollY > 2000 &&  this.scrollY < 2500){

        $(".skills .skills-content .right .html").addClass("htmlOn");
        $(".skills .skills-content .right .css").addClass("cssOn");
        $(".skills .skills-content .right .js").addClass("jsOn");

        if ($(".skills .skills-content .right .html").hasClass("htmlOn")){
          if (cd) return;
          cd = true;
          
          persen(70, "number-html")
          persen(60, "number-css")
          persen(40, "number-js")
        }

      } else if (this.scrollY < 1900 || this.scrollY > 2500) {

        $(".skills .skills-content .right .html").removeClass("htmlOn");
        $(".skills .skills-content .right .css").removeClass("cssOn");
        $(".skills .skills-content .right .js").removeClass("jsOn");

        def(0, "number-html")
        def(0, "number-css")
        def(0, "number-js")

        cd = false;

      } 

      }
  })

  $(".scroll-up-btn").click(function(){
    $('html').animate({ scrollTop: 0 })
  })

  var typed = new Typed(".typing", {
    strings: ['Student', 'Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000,
    loop: true
  })

  var typed = new Typed(".typing-2", {
    strings: ['Student', 'Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000,
    loop: true
  })

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
    
    if ($(".scroll-up-btn").hasClass("active")){

      if ($(".scroll-up-btn").hasClass("show")){
        if (!$('.navbar .menu').hasClass("active")) return
        $(".scroll-up-btn").removeClass("show");
        console.log('remove')
      } else {
        if ($('.navbar .menu').hasClass("active")) return
        $(".scroll-up-btn").addClass("show");
        console.log('add')
      }
    }
  })
  
  $(".navbar .menu li").click(()=>{
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i'). toggleClass('active')
  })

  $(".project-1").click(()=>{
    window.open('projects/chino-chan.djs', '_blank'); 
  })



});

let cd = false;

function persen(num, id) {
  let i = 0;

  // if (cd) return;
  // cd = true;
  setInterval( ()=>{
    if (i < num) {
      i++
      document.getElementById(`${id}`).innerHTML = `${i}%`
    }
  }, 20)
  // setTimeout( ()=>{
  //   cd = false
  // }, num*20)
}

function def(num, id){
  document.getElementById(`${id}`).innerHTML = `${num}%`
}