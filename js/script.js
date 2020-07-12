// 'use strict';
// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });
// const links = document.querySelectorAll('.titles a');

// for(let link of links){
//   console.log(link);
// }

    /* remove class 'active' from all article links  */
    const titleClickHandler = function(event){
      event.preventDefault();
      
      const clickedElement = this;
      console.log('Link was clicked!');
    
      /* [DONE]remove class 'active' from all article links  */
      const activeArticles  = document.querySelectorAll('.active');
    
      for(let activeArticle of activeArticles){
        activeArticle.classList.remove('.active');
      }
      /* [IN PROGRESS] add class 'active' to the clicked link */
      clickedElement.classList.add('active');
      /* [DONE]remove class 'active' from all articles */
    
      /* get 'href' attribute from the clicked link */
      const articleSelector = clickedElement.getAttribute('href');
      console.log(articleSelector);
      /* find the correct article using the selector (value of 'href' attribute) */
      const targetArticle = document.querySelector('#article-1');
      console.log(targetArticle);  
      /* add class 'active' to the correct article */
      targetArticle.classList.toggle('active');
    }
    const links = document.querySelectorAll('.titles a');
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }