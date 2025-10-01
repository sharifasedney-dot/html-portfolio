
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebarbtn');
  const nav = document.getElementById('header-list');

  if (sidebar && nav) {
    sidebar.addEventListener('click', () => {
      nav.classList.toggle("active");
      sidebar.classList.toggle("active");
    });
  }
});


const btn = document.getElementById('btn');
const container = document.getElementById('container-notification');

if (btn && container) {
  btn.addEventListener('click', () => {
    createNotification();
  });

  function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = 'This is a notification!';
    container.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
  }
}