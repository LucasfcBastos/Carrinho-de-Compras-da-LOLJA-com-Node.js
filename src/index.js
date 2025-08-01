import createProduct from './services/Products.js'
import * as pageServices from './services/Home.js'
import * as cartServices from './services/Cart.js'

const homePage = [];
const myCart = [];
const Present = true;

console.log("\nWelcome to the LOLJA");

const item1 = await createProduct("P001", "CAMISETA PRETA - SAMUEL - ENIGMA DO MEDO", 99.90, 20);
const item2 = await createProduct("P002", "MOLETOM PRETO COM PESPONTO BRANCO - MORTE", 249.90, 7);
const item3 = await createProduct("P003", "MOLETOM OVERSIZED BRANCO - DEGOLIFICADA", 269.90, 7);
const item4 = await createProduct("P004", "MOLETOM BÁSICO VINHO COM CANELA - MUTILADOR NOTURNO", 269.90, 7);
const item5 = await createProduct("P005", "MANGA LONGA PRETA COM VINHO - X", 129.90, 23);
const item6 = await createProduct("P006", "CAMISETA PRETA - 5 ANOS ORDEM", 99.90, 20);
const item7 = await createProduct("P007", "CAMISETA VINHO COM CANELA - MUTILADOR NOTURNO", 99.90, 20);
const item8 = await createProduct("P008", "CAMISETA OVERSIZED PREMIUM - PANACEA", 189.90, 37);
const item9 = await createProduct("P009", "CAMISETA OVERSIZED PRETA - ELIZABETH", 129.90, 32);
const item10 = await createProduct("P010", "CAMISETA OVERSIZED PRETA - CESAR", 129.90, 32);

await pageServices.addProducts(homePage, item1);
await pageServices.addProducts(homePage, item2);
await pageServices.addProducts(homePage, item3);
await pageServices.addProducts(homePage, item4);
await pageServices.addProducts(homePage, item5);
await pageServices.addProducts(homePage, item6);
await pageServices.addProducts(homePage, item7);
await pageServices.addProducts(homePage, item8);
await pageServices.addProducts(homePage, item9);
await pageServices.addProducts(homePage, item10);

await pageServices.displayPage(homePage)

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.addItem(myCart, homePage, "P002", "G");
await cartServices.addItem(myCart, homePage, "P006", "2G");
await cartServices.addItem(myCart, homePage, "P001", "G");

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.displayCart(myCart, Present)

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.delItem(myCart, "P002")

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.displayCart(myCart, Present)

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.add1Item(myCart, "P001")

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.displayCart(myCart, Present)

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

if (Present == true) {
    await cartServices.addPresent(myCart);
}

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.displayCart(myCart, Present)

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.remove1Item(myCart, "P001")

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.displayCart(myCart, Present)

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.remove1Item(myCart, "P001")

await cartServices.delItem(myCart, "P001")

await cartServices.addItem(myCart, homePage, "P010", "2G");

console.log("\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=")

await cartServices.displayCart(myCart, Present)