window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', function () {
      document.getElementById('nav-menu').classList.toggle('show-menu');
    });
  });
  
  
document.getElementById('email-button').addEventListener('click', () => {
  window.location.href = 'mailto:abhishek.kabi.21@gmail.com?subject=Let%27s%20Work%20Together';
});