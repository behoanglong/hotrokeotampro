
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("user")) {
    document.getElementById("product-list").innerHTML = "<p>Bạn cần đăng nhập để xem sản phẩm.</p>";
    return;
  }
  const products = [
    { name: "AIMLOCK V1 (Android)", price: "20k", link: "https://www.mediafire.com/file/g4qoc9nm648yldh/AIMLOCK_V1.so/file" },
    { name: "AimLock Plus V1 (iOS)", price: "50k", link: "https://www.mediafire.com/file/wjs6223z799m4o8/AimLock_Plus_V1.mobileconfig/file" }
  ];
  document.getElementById("product-list").innerHTML = products.map(p =>
    `<div><h3>${p.name}</h3><p>Giá: ${p.price}</p><button onclick="buy('${p.name}', '${p.price}', '${p.link}')">Mua ngay</button></div>`
  ).join("");
});
