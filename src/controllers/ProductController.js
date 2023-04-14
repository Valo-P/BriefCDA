import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getProducts = async (req,res,next) => {

    const products = await Product.find();

    console.log("Products find");
    console.log(products);

    // res.status(200).json({ products });
    res.status(200).render('product/getProducts', {
        title: "ProductList",
        products: products,
    });
};

export const getProductsByCategory = async (req, res, next) => {
    const categoryID = req.params.id;

    const category = await Category.findById({
        _id: categoryID,
    });

    const products = await Product.find({
        productCategory: categoryID,
    });

    console.log(products);

    // res.status(200).json({ products });
    res.status(200).render('product/getProductsByCategory', {
        title: "CategoryProductList",
        category: category,
        products: products,
    });
}

export const getProduct = async (req,res,next) => {
    const productID = req.body.productID;

    const product = await Product.findById({
        _id: productID,
    });

    console.log("Product find");
    console.log(product);
    res.status(200).json({ product });
}

export const addProduct = async (req, res, next) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;
    const productCategory = req.body.productCategory;

    const product = await Product.create({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productCategory: productCategory,
    });

    console.log("Product created");
    console.log(product);
    res.status(201).json({ product });
    // res.status(201).redirect("/categories");
};

export const updateProduct = async (req, res, next) => {
    const productID = req.body.productID;
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;
    const productCategory = req.body.productCategory;

    const product = await Product.findByIdAndUpdate({
        _id: productID,
    },{
        productName,
        productPrice,
        productDescription,
        productCategory,
    },{
        new: true,
    })

    console.log("Product updated");
    console.log(product);
    res.status(200).json({ product });
}

export const deleteProduct = async (req, res, next) => {
    const productID = req.body.productID;

    const product = await Product.findByIdAndDelete({
        _id: productID,
    })

    console.log("Product deleted")
    res.status(200).json({ Message: "Product deleted"});
}