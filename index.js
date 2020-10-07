    window.addEventListener('load',()=> {

    var btn = document.querySelector("body > div.icon > svg");
    var message = document.querySelector("body > div.msg");
    var quit = document.querySelector("body > div.msg > div > div");
    
     function disappear(){
         message.style.display ="none";
      }
      quit.addEventListener('click',disappear);
    

     btn.addEventListener('click',()=>{
         message.style.display = "flex"
         message.style.width = window.width;
         message.style.height = window.height;
     });

     AOS.init({
        duration: 2000,
        delay: 100,
        offset: 200,
    });
});
    
