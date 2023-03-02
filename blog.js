const categoriesBtn = document.querySelector('.categories-heading-secondary');

if (window.matchMedia("(max-width: 980px)").matches) {
    document.querySelector('.flex-for-categories').classList.add('hidden')
    categoriesBtn.addEventListener("click", ()=>{
        document.querySelector('.flex-for-categories').classList.toggle('hidden')
    })
}
 else{
    document.querySelector('.flex-for-categories').classList.remove('hidden')
    categoriesBtn.addEventListener("click", ()=>{
        document.querySelector('.flex-for-categories').classList.remove('hidden');
    }
)
}
window.addEventListener('resize', () => {
    if(window.matchMedia("(max-width: 980px)").matches){
        document.querySelector('.flex-for-categories').classList.add('hidden')
        categoriesBtn.addEventListener("click", ()=>{
            document.querySelector('.flex-for-categories').classList.toggle('hidden')
        })
    }
    else{
        document.querySelector('.flex-for-categories').classList.remove('hidden');
        categoriesBtn.addEventListener("click", ()=>{
            document.querySelector('.flex-for-categories').classList.remove('hidden');
        }
    )
}
})


 //remove .hidden from  .got-any-questions for 10 seconds when the user scroll down
 const gotAnyQuestions = document.querySelector('.got-any-questions');
const gotAnyQuestionsLink = document.getElementById('got-any-questions-link')
 // Add a scroll event listener to the window
 window.addEventListener('scroll', function() {

    // if(window.matchMedia("(max-width: 567px)").matches){
    //     gotAnyQuestions.classList.add('hidden');
    //     window.removeEventListener('scroll', arguments.callee);
    //    }
   // Check if the user has scrolled down
   if (window.scrollY > 300) {
     // Remove the .hidden class from .got-any-questions
     gotAnyQuestions.classList.remove('hidden');
      //after the buttom pops up and if the user click it before 8 seconds then remove it
    gotAnyQuestionsLink.addEventListener('click', ()=>{gotAnyQuestions.classList.add('hidden')});
    
     // Set a timeout to add the .hidden class back after 8 seconds
     setTimeout(function() {
       gotAnyQuestions.classList.add('hidden');
     }, 12000);
     // Remove the scroll event listener
     window.removeEventListener('scroll', arguments.callee);
   }
  
 });





