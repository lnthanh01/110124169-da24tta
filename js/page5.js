// Tạo card
const productItem = document.createElement("div");
productItem.className = "product-item";

// Ảnh
const productDiv1 = document.createElement("div");
productDiv1.className = "product-image";

const productImage = document.createElement("img");
productImage.src = "../assets/images/rose.jpg"; // sửa lại đúng đường dẫn
productImage.alt = "Hạt giống hoa hồng Pháp";

productDiv1.appendChild(productImage);

// Info
const productInfo = document.createElement("div");
productInfo.className = "product-info";

// Tên
const productName = document.createElement("h3");
productName.innerText = "Hạt giống hoa hồng Pháp";

// Giá
const productPrice = document.createElement("p");
productPrice.className = "price";
productPrice.innerText = "250.000 / túi";

// Nút
const productLink = document.createElement("button");
productLink.innerText = "Xem chi tiết";
productLink.className = "btn";

productLink.onclick = function () {
    alert("Chi tiết sản phẩm 🌹");
};

// Gắn vào
productInfo.appendChild(productName);
productInfo.appendChild(productPrice);
productInfo.appendChild(productLink);

productItem.appendChild(productDiv1);
productItem.appendChild(productInfo);

document.body.appendChild(productItem);