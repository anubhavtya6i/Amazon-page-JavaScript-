import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
    
try{
 await loadProductsFetch();
 
 const value =  await new Promise((resolve , reject) => {
    loadCart(() => {

    // Throw and Reject both can be used to create errors in the future
        // throw 'error0';1
       // reject('error1');
       resolve();
    });
})
} 
catch(error){
    console.log('Unexpected Error...')
}
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();
/* 
Promise.all([
    loadProductsFetch() ,
    new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
})

]).then((values) => {
    console.log(values)
     renderOrderSummary();
    renderPaymentSummary();
}); */

/* 
new Promise((resolve) => {
    loadProducts(() => {
        resolve('Value1'); 
    });

}).then((value) => {
    console.log(value);
return new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
})

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
 */
/* loadProducts( () => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
})
 */