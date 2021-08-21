$(document).ready(function(){
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
  })

  $(".scroll-up-btn").click(function(){
    $('html').animate({ scrollTop: 0 })
  })

  var typed = new Typed(".typing", {
    strings: ['Student', 'Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed(".typing-2", {
    strings: ['Student', 'Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
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
});