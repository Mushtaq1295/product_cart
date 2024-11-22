document.addEventListener('DOMContentLoaded',() =>{
    const item1 = document.getElementsByClassName("item1")
    const item2 = document.getElementsByClassName("item2")
    const item3 = document.getElementsByClassName("item3")
    const complete = document.getElementById("final");
    const Btn1 = document.getElementById("btn1");
    const Btn2 = document.getElementById("btn2");
    const Btn3 = document.getElementById("btn3");
    const End = document.getElementById("total");
    const addedItems = document.querySelector(".addeditems")
    

    // const addedItems = document.getElementById("addeditems");
    let total = 0;
    Btn1.addEventListener('click', function () {
        addProductToCart("Product 1 - $30");
        total += 30;
        updateSum();

    });

    Btn2.addEventListener('click', function () {
        addProductToCart("Product 2 - $80");
        total += 80;
        updateSum();
    });

    Btn3.addEventListener('click', function () {
        addProductToCart("Product 3 - $10");
        total += 10;
        updateSum();
    });

    function updateSum(){
        End.textContent = `$${total}`;
    } 


    function addProductToCart(product) {
        // Create a new div for the product
        const productDiv = document.createElement("div");
        productDiv.textContent = product;

        // Append the new product to the 'addedItems' container
        addedItems.appendChild(productDiv);
    }



    complete.addEventListener('click',function(){
        if(total>0){
            alert("order purchased successfully!");
            addedItems.innerHTML = '';
            total = 0
            End.textContent = total;
        }else{
            alert("select atleast one for checkout");
        }


    })
    
})