const { readFileSync, writeFileSync }  = require('fs')

const handleGetName = (req, res) => {
    res.send('Jesus Bloise')

}

const handleGetProducts = (req, res) => {
    const productos = JSON.parse(readFileSync('productos.json'))
    res.json(productos)
}

const handleCreateProduct = (req, res)=>{
    const producto = req.body
    const productos = JSON.parse(readFileSync('productos.json'))
    productos.push(producto)
    writeFileSync('productos.json', JSON.stringify(productos, null, 3));

    res.send('Producto agregado con exito')
}

module.exports = {
    handleGetName,
    handleGetProducts,
    handleCreateProduct
}