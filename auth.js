
function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (localStorage.getItem(u) === p) {
    localStorage.setItem("user", u);
    alert("Đăng nhập thành công!");
    window.location.href = "index.html";
  } else {
    alert("Sai thông tin đăng nhập.");
  }
}
function register() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  localStorage.setItem(u, p);
  alert("Đăng ký thành công!");
}
