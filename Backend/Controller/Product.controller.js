const productSchema = require('../Model/Product.model')

async function addProductApi(req, res) {
    try {
        const payload = req.body;
        const file = req.file;

        let imageURL = '';
        fileimage = file.productImage
        console.log(`${req.file.productImage}`)

        if (file) {
            imageURL = `/uploads/product/${file.destination}/${file.filename}`;
            console.log(`${file.productImage = imageURL}`);

        }
        const addProduct = await productSchema.create({
            ...payload,
            image: imageURL
        });

        res.status(201).json({
            message: 'Product created successfully',
            data: addProduct
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { addProductApi }

