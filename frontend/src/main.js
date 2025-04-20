// frontend/main.js

function loadPage(page) {
  fetch("./src/pages/" + page)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById("content").innerHTML =
        "<p>حدث خطأ في تحميل الصفحة.</p>";
      console.error(err);
    });
}

window.onload = () => {
  loadPage("home.html"); // الصفحة الافتراضية عند الفتح
};
