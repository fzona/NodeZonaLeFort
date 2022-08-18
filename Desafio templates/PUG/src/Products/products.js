const products = [
    {
        "name": "Taza",
        "price": 1200,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/574_Cup_Coffee_Tea_Love_valentine_valentines_day_love-256.png",
    },
    {
        "name": "Vela",
        "price": 2100,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/700_candle_love_heart_wedding_valentine_valentines_day_love-256.png",
    },
    {
        "name": "Florero",
        "price": 3300,
        "thumbnail": "https://cdn2.iconfinder.com/data/icons/valentines-day-flat-line-1/59/heart-flower-vase-256.png",
    }
]

let id = 1

const listOfProducts = () => {
    return products
}

const getProduct = (id) => {
    return (products.find(product => product.id === parseInt(id)) || { error: 'Producto no encontrado' })
}

const addProduct = (product) => {
    const prod = {
        id: id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail
    }
    products.push(prod)
    id++
}

const updateProduct = (id, newContent) => {
    const product = getProduct(parseInt(id))
    if ((product.id == id) && (product.id != null)) {
        product.name = newContent.name
        product.price = newContent.price
        product.thumbnail = newContent.thumbnail
        return product
    } else {
        return 'Producto no encontrado'
    }
}

const deleteProduct = (id) => {
    const product = getProduct(parseInt(id))
    if ((product.id == id) && (product.id != null)) {
        products.splice(products.indexOf(product), 1)
        return 'Producto eliminado'
    } else {
        return 'Producto no encontrado'
    }
}

module.exports = { listOfProducts, getProduct, addProduct, updateProduct, deleteProduct }