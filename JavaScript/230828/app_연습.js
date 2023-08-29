console.log("js가 연결되었습니다.");


const data = {
    "id":1,
    "productName":"버그를 Java라 버그잡은 개리씨 키링 개발자키링 금속키링",
    "price":12500,
    "stockCount":100,
    "thumbnailImg":"asset/img/1/thumbnailImg.jpg",
    "option":[],
    "discountRate":0,
    "shippingFee":1500,
    "detailInfoImage":[
        "asset/detail/2/detail1.png",
        "asset/detail/2/detail2 .png"
    ],
    "viewCount":0,
    "pubDate":"2022-02-28",
    "modDate":"2022-02-28"
}

const BASE_URL = "https://test.api.weniv.co.kr/"
const mainContainer = document.getElementById("main");

//상품 카드 만드는 부분을 함수로 만듬
function createProductCard(imgUrl, price, productName, onClick) {
const $productCard = document.createElement("div")
const $productName = document.createElement("strong");
const $price = document.createElement("span");
// const $thumbnailImg = document.createElement("img");

// $thumbnailImg.src = imgUrl;
$productName.innerText = productName;
$price.innerText = price + "원";
// $productCard.append($thumbnailImg, $productName, $price);
$productCard.append($productName, $price);
$productCard.addEventListener("click",onClick)

return $productCard;
}

function createProductDetail(){

}

function main() {
    fetch(BASE_URL+"./mall").then((res)=>{
        return res.json();
    }).then((json)=>{
        json.forEach(data =>{
            const productId = data.id;
            const productImgUrl = BASE_URL+data.thumbnailImg;
            const productName = data.productName;
            const price = data.price;
            const onClick = async (e)=>{
                const res = await fetch(BASE_URL+"mall/"+productId);
                const json = await res.json();
                

            }

            const $productCard = createProductCard(productImgUrl,price,productName,onClick)
            mainContainer.appendChild($productCard);
        });
    });

    // mainContainer.appendChild(thumbnailImg);
    // mainContainer.appendChild(productName);
    // mainContainer.appendChild(price);
}

main();