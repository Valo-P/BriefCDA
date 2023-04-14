import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getProducts = async (req,res,next) => {

    const products = await Product.find();

    console.log("Products find");
    console.log(products);

    const success = req.flash('success');
    const error = req.flash('error');
    console.log(success);
    console.log(error);

    // res.status(200).json({ products });
    res.status(200).render('product/getProducts', {
        title: "ProductList",
        products: products,
        success: success,
        error: error,
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
    const productID = req.params.id;

    const product = await Product.findById({
        _id: productID,
    });

    const categoryID = product.productCategory;

    const category = await Category.findById({
        _id: categoryID,
    });

    console.log("Product find");
    console.log(product);
    res.status(200).render('product/getProduct', {
        title: "Product",
        category: category,
        product: product,
    });
}

export const newProduct = async (req, res, next) => {

    const categories = await Category.find();

    res.status(200).render('product/createProduct', {
        title: "NewProduct",
        categories: categories,
    });
};

export const postCreateProduct = async (req, res, next) => {

    console.log(req.body);
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
    // res.status(201).json({ product });
    req.flash('success','Product successfully created');
    res.status(200).redirect('/products');
};

export const updateProduct = async (req, res, next) => {
    const productID = req.params.id;

    const product = await Product.findById({
        _id: productID,
    });
    console.log(product);

    const categories = await Category.find();

    const categoryID = product.productCategory;
    const category = await Category.findById({
        _id: categoryID,
    });
    console.log(category);

    res.status(200).render('product/updateProduct', {
        title: "UpdateProduct",
        categories: categories,
        categoryProduct: category,
        product: product,
    });
}

export const postUpdateProduct = async (req, res, next) => {
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

    console.log("Product successfully Updated");
    console.log(product);

    req.flash('success','Product successfully Updated');
    res.status(200).redirect('/products');
}

export const deleteProduct = async (req, res, next) => {
    const productID = req.params.id;

    const product = await Product.findByIdAndDelete({
        _id: productID,
    })

    req.flash('success','Product successfully deleted');
    res.status(200).redirect('/products');
}