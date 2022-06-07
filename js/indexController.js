class ProductController {

    constructor() {
        this.allProductItems = [];
    }

    addProduct(name, description, imageURL, imageURL2, imageURL3, price) {

        const productItem = {
            name: name,
            description: description, 
            imageURL: imageURL,
            imageURL2: imageURL2,
            imageURL3: imageURL3,
            price: price
        }
        this.allProductItems.push(productItem);
    }

    displayProduct() {
        let showProductItem = "";
        let moreBtnId = "";
        this.allProductItems.forEach ((item, index) => {   
            
            moreBtnId = "item" + index;
            
            showProductItem +=
            `
          <div class="item">
            <div class="card d-flex shadow p-3 mb-5 bg-body rounded" style="height: 700px;">

           
            <div id="carouselCard" class="carousel slide" data-bs-interval="false" style="margin-top: -50px;">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselCard"  data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
    
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${item.imageURL}" class="card-img-top" alt="item1">
              </div>
    
              <div class="carousel-item">
                <img src="${item.imageURL2}" class="card-img-top" alt="item1">
              </div>
    
              <div class="carousel-item">
                <img src="${item.imageURL3}" class="card-img-top" alt="item1">
              </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselCard" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselCard" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
    
          </div>    
              

              <div class="card-body">

                <h5 class="card-title">${item.name}</h5>

                  <div class="container-star d-flex flex-row-reverse">
                    <i class="bi1 bi-star-fill"></i>
                    <i class="bi2 bi-star-fill"></i>
                    <i class="bi3 bi-star-fill"></i>
                    <i class="bi4 bi-star-fill"></i>
                    <i class="bi5 bi-star-fill"></i>
                  
                  </div>

                  <div class="container-star" style="justify-content: center;">
                  <i type="button" class="bi bi-binoculars-fill"></i>
                  </div>

                <small class="text-muted price">${item.price}</small>

                <p class="card-text overflow-scroll" style="max-height: 5rem;">${item.description}</p>

                <button type="button" id="${moreBtnId}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  See full item details
                </button>

                <i class="btn">Chat now<img src="images/message.svg"></i>

                </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div> 
            </div> 
          </div>
            `

        });

        document.querySelector(".row").innerHTML =  showProductItem;
        
        
        this.allProductItems.forEach ((item, index) => {
            moreBtnId = "item" + index;
            document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item) });
        });

    } 
} 


function displayItemDetail(item) {
    
   document.querySelector(".itemTitle").innerHTML = item.name;
   document.querySelector(".itemImage").src = item.imageURL;
   document.querySelector(".itemImage2").src = item.imageURL2;
   document.querySelector(".itemImage3").src = item.imageURL3;
   document.querySelector(".itemDescription").innerHTML = item.description;
   document.querySelector(".itemPrice").innerHTML = item.price;
}