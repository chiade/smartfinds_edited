class Products {

    constructor () {
        this.allProducts = [];
    }

    addProduct(ownerID, productID, title, description, imageURL1, imageURL2, imageURL3, defaultPic, price, dateUpdated, soldStatus, watchListCount) {
        const productItem = {
            ownerID : ownerID,
            productID : productID,
            title : title,
            description : description,
            imageURL1 : imageURL1,
            imageURL2 : imageURL2,
            imageURL3 : imageURL3,
            defaultPic : defaultPic,
            price : price,
            dateUpdated : dateUpdated,
            soldStatus : soldStatus,
            watchListCount : watchListCount
            // deleteStatus : deleteStatus
        }

        this.allProducts.push(productItem);
        // console.log("add product-" + this.allProducts);
        // this.displayMyProduct();
    }

    sortByOwnerID() {
      // this function will sort the array this.allProducts by ownerID
      this.allProducts.sort( function(a, b) {
          let keyA = a.ownerID, keyB = b.ownerID;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
      });

      //console.log("sorted ", this.allProducts);
    }

    filterByOwnerID(id) {
      // this function will filter allProducts and return an array of objects
      // which belongs to id
      // console.log("Current login *****", id);
      const productsByID = this.allProducts.filter(currlist => (
          currlist.ownerID == id
      ));

      // console.log(productsByID);
      return productsByID;
    }

    filterExcludeOwnerID(id) {
      // this function will filter allProducts and return an array of objects
      // which DOES NOT BELONG to id
      // console.log("Current login *****", id);
      const productsExcludeID = this.allProducts.filter(currlist => (
          currlist.ownerID != id
      ));

      // console.log(productsByID);
      return productsExcludeID;
    }

    displayMyProduct(products, pageType) {
      // shows all the products that i am trying to transact
      // console.log("productlist" + this.allProducts);
      let showProductItem = "";
      let count = 1;

      if (products.length == 0)
      {
        showProductItem += `
        <div class="container fluid" align="center">
          <h2>Nothing to display at the moment.</h2><br>
          <h4>Start selling your items to view them here.</h4>
        </div>
        `
      }
      else {
        for (let i=0; i<products.length; i++) {
          showProductItem += `
            <div class="${ "item" + count.toString() }">
            <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
              <img src="${products[i].imageURL1}" class="card-img-top" alt="item1" height="300px">
              <div class="card-body">
                <h5 class="card-title">${products[i].title}</h5>
                <small class="text-muted price">${products[i].price}</small>
                <p class="card-text">${products[i].description}</p>
                <div class="d-flex flex-row justify-content-between">
                <button type="button" id="btn-edit${i}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editItem('${i}')">
                <img src="./images/edit_black_24dp.svg" />
                </button>
                <button type="button" id="btn-sold${i}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="markItemSold('${products[i]}')">Mark As Sold!</button><img src="./images/sold.svg" id="soldIcon${i}" />
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="deleteItem('${i}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </button>
                </div>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          `;
          count++;
          if (count > 6)
            break; // manage page counting limit items to 6
        } // end of for loop
      } // if else
      document.querySelector("#productList").innerHTML = showProductItem;
      //console.log(showProductItem);
    }

    displayMyProductCYT(products) {
      let showProductItem = "";
      let moreBtnId = "";
      products.forEach ((item, index) => {   
          
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
              <img src="${item.imageURL1}" class="card-img-top" alt="item1">
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

              <h5 class="card-title">${item.title}</h5>

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

      document.querySelector("#productList").innerHTML =  showProductItem;
      
      
      products.forEach ((item, index) => {
          moreBtnId = "item" + index;
          document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item) });
      });

  }    
}