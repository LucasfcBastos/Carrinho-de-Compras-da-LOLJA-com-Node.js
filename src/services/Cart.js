import creatItem from './Itens.js'

async function addItem(cart, page, product, size) {
    
    const indexFound = page.findIndex((p) => p.id === product);

    if (indexFound == -1) {
        console.log('ERROR: item dont in the cart')
        return;
    }

    const item = await creatItem(
        page[indexFound].id,
        page[indexFound].name,
        size,
        page[indexFound].pricePer,
        1)

    cart.push(item);
    console.log(`\nAdding ${item.name} to cart ...`);
    console.log(`The cart has ${cart.length} items`)

}

async function addPresent(cart) {
      

    const item = await creatItem(
        undefined,
        "GIFT WRAPPING",
        undefined,
        14.99,
        1)

    cart.push(item);
    console.log(`\nAdding ${item.name} to cart ...`);
    console.log(`The cart has ${cart.length} items`)

}

async function delItem(cart, itemCod) {

    const index = cart.findIndex((item) => item.id === itemCod)
    const removedItem = cart[index];

    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`\ndelet ${removedItem.name} to cart ...`);
    } else {
        console.log(`\nItem "${removedItem.name}" not found in cart.`);
    }

}

async function add1Item(userCart, codePro) {
    const indexFound = userCart.findIndex((p) => p.id === codePro);

    if (indexFound == -1) {
        console.log('ERROR: item dont in the cart')
        return;
    }

    userCart[indexFound].quantity += 1
    console.log(`\nremover +1 ${userCart[indexFound].name} to cart ...`)
}

async function remove1Item(userCart, codePro) {
    const indexFound = userCart.findIndex((p) => p.id === codePro);

    if (indexFound == -1) {
        console.log('\nERROR: item dont in the cart')
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        console.log(`\nremover -1 ${userCart[indexFound].name} to cart ...`)
    } else {
        console.log('\nERROR: the quantity of the item is already at a minimum')
    }
}

async function displayCart(userCart, present) {

    console.log("\nmy LOLJA cart list:")

    const Shipping = await freeShipping(userCart)

    userCart.forEach((item, index) => {
        if (present == true && item.name == "GIFT WRAPPING") {
            console.log(`\n${index + 1}. ${item.name}\nR$ ${item.price} * ${item.quantity} = ${item.subtotal()}`)
        } else {
            console.log(`\n${index + 1}. ${item.name} | ${item.size}\nR$ ${item.price} * ${item.quantity} = ${item.subtotal()}`)
        }
    })

    const subtotal = await calcItem(userCart)
    if (Shipping == true) {
        console.log('\n\tThe cart total is: R$ ' + subtotal)
    } else {
        console.log('\n\tThe cart total is: R$ ' + subtotal + ' + R$ 50 = ' + (subtotal+50))
    } 

}

async function freeShipping(cart) {

    const subtotal = await calcItem(cart)

    if (subtotal >= 160.00) {
        console.log(`\nyou have enough to qualify for free shipping`);
        return true;
    } else {
        const result = ((160 - subtotal)).toFixed(2);
        console.log(`\nyou don't have enough for free shipping, you are R$ ${result} short`);
        return false;
    }
    
}

async function calcItem(userCart) {

    const result = userCart.reduce((total, item)=>total + item.subtotal(), 0)
    return result;

}

export {
    addItem,
    delItem,
    add1Item,
    remove1Item,
    addPresent,
    displayCart
}