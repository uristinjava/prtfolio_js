document.addEventListener("DOMContentLoaded", () => {
     
    window.onscroll =() => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticly', window.scrollY>100)
    }

    
     
  });