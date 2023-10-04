import '../../node_modules/@laylazi/bootstrap-rtl/dist/js/bootstrap.min';
import '../../node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../../node_modules/popper.js/dist/popper.js';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../src/sass/main.scss';


//  alert btn 

const show = document.querySelectorAll(".add-to-cart-btn").forEach( item =>{
    item.addEventListener("click", ()=>{
        alert(" تم اضافة منتج الي العربة");
    })
})


//  Select option size
document.querySelectorAll('.size-option input[type="radio"]').forEach( item =>{
    item.addEventListener('change', ()=>{
        document.querySelectorAll('.size-option').forEach( i =>{
            
            i.classList.remove('active');
        })
        item.parentNode.parentNode.classList.add("active");
    })
})

//  Select option color
document.querySelectorAll('.color-option input[type="radio"]').forEach( item =>{
    item.addEventListener('change', ()=>{
        document.querySelectorAll('.color-option').forEach( i =>{
            
            i.classList.remove('active');
        })
        item.parentNode.parentNode.classList.add("active");
    })
})
// Get date 

//  Practice



//  Select Price

//  Function get all price

function calculateTotalPrice(){
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach( product =>{
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value;
         const totalPriceForProduct = pricePerUnite * quantity ;
          totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + "$";
}
document.querySelectorAll('[data-product-quantity]').forEach( item =>{
    item.addEventListener("change", ()=>{
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]')
        const pricePerUnit = parent.getAttribute('data-product-price')
        const tottalPriceForProduct = newQuantity * pricePerUnit;
        parent.querySelector('.total-price-for-product').innerHTML = tottalPriceForProduct + "$";
         //  start Total Price for all products
         calculateTotalPrice();
        //   End Total  Product 
    })
})
//  Select Price

//  Remove Product
 document.querySelectorAll('[data-remove-from-card]').forEach( item =>{
    item.addEventListener("click", ()=>{
        item.closest('[data-product-info]').remove();
         //  start Total Price for all products
         calculateTotalPrice();
        //   End Total  Product
    })
 })
//  Remove Product

//  Select a Country and City

const citiesByCountry = {
        sa:['الرياض', 'جد'],
        mr:['انواكشوط','روصو'],
        eg:['القاهرة','طنط']
}

document.querySelectorAll('select[name="country"]').forEach( item =>{
    item.addEventListener("change", ()=>{
        const country = item.value;
        const cities = citiesByCountry[country];

        document.querySelectorAll('#paymentcities option').forEach(option =>{
            option.remove();

            const firstOption = document.createElement('option')
            const optionText = document.createTextNode('اختر المدينة')
            firstOption.appendChild(optionText);
            firstOption.setAttribute('value', '');
            firstOption.setAttribute('disabled', 'true');
            firstOption.setAttribute('selected', 'true');

            const city_options = document.getElementById('paymentcities');
            city_options.appendChild(firstOption);

            cities.forEach( city =>{
                const NewOption = document.createElement('option')
                const optionText = document.createTextNode(city)
                NewOption.appendChild(optionText)
                NewOption.setAttribute('value', city)
                city_options.appendChild(NewOption)
            })
        })
        console.log(cities)
    })
})
//  Select a Country and City
//  Payement Card
document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach( item =>{
    item.addEventListener("change", ()=>{
       const payementMethod = item.value;

       const creditCardInput = document.querySelectorAll("#credit_card_info input")

       if(payementMethod === 'on_delivery'){
        creditCardInput.forEach( input=>{
            input.style.display = 'none';
        })
       }else{
        creditCardInput.forEach(input =>{
            input.style.display = 'block';
        })
       }
       console.log(payementMethod, creditCardInput)
    })
})
//  Payement Card

//  Practice

document.getElementById("date").innerHTML = new Date().getFullYear();

//  Start Tootip
$(document).ready(function(){
    $('#btn-shopping-cart').tooltip('toggle')
})



