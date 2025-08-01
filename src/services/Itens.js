// atributos itens
/*
 ✅ -> nome
 ✅ -> tamanho
 ✅ -> preço
 ✅ -> quantidade
 ✅ -> subtotal
*/

async function creatItem(id, name, size, price, quantity) {
    return {
        id,
        name,
        size,
        price,
        quantity,
        subtotal() {
            return price * this.quantity;
        }
    };
}

export default creatItem