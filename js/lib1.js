const productList = [
    {id: "01", name: "Hạt giống hoa hồng Pháp", price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "02", name: "Hạt giống hoa hồng Việt Nam", price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "03", name: "Hoa Tulip Hà Lan",         price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "04", name: "Hạt giống hoa hướng dương", price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "05", name: "Hạt giống hoa hồng Pháp", price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "06", name: "Hạt giống hoa hồng Pháp", price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "07", name: "Hạt giống hoa hồng Pháp", price:250000, oldPrice: 350000,description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "08", name: "Hạt giống hoa hồng Pháp", price:250000, oldPrice: 350000, description: "Hoa hồng Pháp có màu sắc đẹp, dễ trồng và nở quanh năm.",image:"../assets/images/rose.jpg", productLink:"product-detail.html"}
];
function addProduct(id, name, price, image, link)
{
     //Khai báo và tạo một node div có class là product-item
		const productItem = document.createElement("div");
		productItem.setAttribute("class", "product-item col");
		
		//Tạo khung chứa 1
		const productDiv1 = document.createElement("div");
		productDiv1.setAttribute("class", "product-image");
		
		//Tạo hình và gán vào div1
		//Tạo
		const productImage = document.createElement("img");
		productImage.setAttribute("src", image);
		productImage.setAttribute("alt", name);
        productImage.setAttribute("class", "img-thumbnail img-fluid");

		//Gán
		productDiv1.appendChild(productImage);


        //Tạo khung chứa 2
        const productDiv2 = document.createElement("div");
		productDiv2.setAttribute("class", "product-info");

        //Tạo paragraph thư nhất
        const productName = document.createElement("p");
        const productNameText = document.createTextNode(name);
        productName.appendChild(productNameText);

         //Tạo paragraph thư hai
        const productPrice = document.createElement("p");
        const productPriceText = document.createTextNode(price);
        productPrice.appendChild(productPriceText);

         //Tạo link
        const productLink = document.createElement("a");
        const productLinkText = document.createTextNode("Xem chi tiết");
        productLink.appendChild(productLinkText);
      //  productLink.setAttribute("href", link+"?id="+id);
        productLink.setAttribute(
    "href",
    link + "?id=" + id
);
        productLink.setAttribute("target", "_blank");

        //Gán vào khung chứa 2
        productDiv2.appendChild(productName);
        productDiv2.appendChild(productPrice);
        productDiv2.appendChild(productLink);

		//Gán vào item
		productItem.appendChild(productDiv1);
        productItem.appendChild(productDiv2);

		//Gán vào khung chứa sản phẩm - product-list
        const productList = document.getElementById("product-list");
        productList.appendChild(productItem);


        //Tạo khung chứa của trang
        const myContainer = document.getElementById("container");
        	
        myContainer.appendChild(productList);

}