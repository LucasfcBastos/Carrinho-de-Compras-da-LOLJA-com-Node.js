// page functions
/*
 ✅ -> Add to page
 ✅ -> Display products
*/

async function addProducts(page, product) {
    page.push(product);
}

async function displayPage(page) {
    page.forEach((item, index) => {
        console.log(`\n${index + 1}. ${item.name} | -${item.discounts}% |\nFROM: R$ ${item.priceFrom} - PER: ${item.pricePer}\n6x ${item.installmentAmount} interest-free`)
    })
}

export {
    addProducts,
    displayPage
}