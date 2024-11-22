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
        if(product === 'Product 1 - $30'){
            productDiv.className = "item1";
        }
        else if(product === 'Product 2 - $80'){
            productDiv.className = "item2";
        }
        else if(product === 'Product 3 - $10'){
            productDiv.className = "item3";
            }
        productDiv.style.cssText = "background-color: grey; padding: 10px; margin: 5px; display: flex; justify-content: space-between; align-items: center;";

        const productName = document.createElement("span");
        productName.textContent = product;
        productDiv.appendChild(productName);

        const crossIcon = document.createElement('i');
        crossIcon.className = 'fa-solid fa-x';
        crossIcon.style.cursor = 'pointer';
        crossIcon.addEventListener('click',function(){
            const c_name = productDiv.className;
            if(c_name === 'item1'){
                total = total - 30;
            }
            else if(c_name === 'item2'){
                total = total - 80;
            }
            else if(c_name === 'item3'){
                total = total - 10;
            }
            End.textContent = `$${total}`;
            productDiv.remove();
        })
        productDiv.appendChild(crossIcon);

        addedItems.appendChild(productDiv);
    }



    complete.addEventListener('click',function(){
        if(total>0){
            
            addedItems.innerHTML = '';
            total = 0
            End.textContent = total;
            alert(`order purchased successfully! your total is ${total}`);
        }else{
            alert("select atleast one for checkout");
        }


    })
    
})