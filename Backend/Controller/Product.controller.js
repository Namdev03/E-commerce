const productSchema = require('../Model/Product.model')

async function addProductApi(req, res) {
    try {
        const payload = {...req.body};
        const file = req.file;
        // console.log(`${req.file.productImage}`)
        
        if (file) {
            
            let imageURL = `http://localhost:9000/${file.destination}/${file.filename}`;
            console.log(`${file.productImage = imageURL}`);
            payload.image =  imageURL
        }
        const addProduct = await productSchema.create(payload);

        res.status(201).json({
            message: 'Product created successfully',
            data: addProduct
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { addProductApi }

