// product attributes
/*
 ✅ -> id
 ✅ -> name
 ✅ -> priceFrom
 ✅ -> discounts
 ✅ -> pricePer
 ✅ -> installment amount
*/

function createProduct(id, name, priceFrom, discounts) {
  
    const pricePer = Math.round((priceFrom - (priceFrom * (discounts / 100))) * 100) / 100;
    const installmentAmount = Math.round((pricePer / 6) * 100) / 100;
    
    return {
        id,
        name,
        priceFrom,
        discounts,
        pricePer,
        installmentAmount,
    };

}

export default createProduct;