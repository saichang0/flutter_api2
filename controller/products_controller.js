
exports.read = async (req,res) => {
    try {
        const id = req.params.id
        res.status(200).json({
            status:"success",
            message:"Product retrieved successfully",
            data:{
                id:id
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"error",
            message:"Failed to get product"
        })
    }
}

exports.listData = async (req,res) => {
    try {
        res.status(200).json({
            status:"success",
            message:"Product retrieved successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"error",
            message:"Failed to get product"
        })
    }
}

exports.create = async (req,res) => {
    try {
        const productData = req.body;
        res.send(`hellow product ${productData} !!!`)
        res.status(201).json({
            message: 'Product created successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to create product',
            error: error.message
        });
    }
}

exports.update = async (req,res) => {
    try {
        const id = req.params.id
        const productData = req.body;
        res.send(`hellow product ${productData} !!!`)
        res.status(201).json({
            message: 'Product updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to update product',
            error: error.message
        });
    }
}

exports.delete = async (req,res) => {
    try {
        const id = req.params.id
        const productData = req.body;
        res.send(`hellow product ${productData} !!!`)
        res.status(201).json({
            message: 'Product deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete product',
            error: error.message
        });
    }
}


