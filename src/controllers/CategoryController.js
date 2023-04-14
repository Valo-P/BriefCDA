import Category from "../models/Category.js";
import Product from "../models/Product.js";
export const getCategories = async (req,res,next) => {

    const categories = await Category.find();

    console.log("Categories find");
    console.log(categories);
    console.log(categories.length);

    const success = req.flash('success');
    const error = req.flash('error');
    console.log(success);
    console.log(error);

    // res.status(200).json({ categories });
    res.status(200).render('category/getCategories', {
        title: "CategoryList",
        categories: categories,
        success: success,
        error: error,
    });
};

export const getCategory = async (req, res, next) => {
    const categoryID = req.params.id;

    const category = await Category.findById({
        _id: categoryID,
    });

    console.log("Category find");
    console.log(category);
    // res.status(200).json({ category });
    res.status(200).render('category/getCategory', {
        title: "Category",
        category: category,
    });
}

export const addCategory = async (req, res, next) => {
    const categoryName = req.body.categoryName;

    const category = await Category.create({
        categoryName,
    });

    console.log("Category created");
    console.log(category);
    res.status(201).json({ category });
    // res.status(201).redirect("/categories");
};

export const updateCategory = async (req,res,next) => {
    const categoryID = req.body.categoryID;
    const categoryName = req.body.categoryName;

    const category = await Category.findByIdAndUpdate({
        _id: categoryID,
    },{
        categoryName,
    },{
        new: true,
    })

    console.log("Category updated");
    console.log(category);
    res.status(200).json({ category });
}

export const deleteCategory = async (req, res, next) => {
    const categoryID = req.params.id;

    const products = await Product.find({
        productCategory: categoryID,
    });

    if(products.length < 1) {
        const category = await Category.findByIdAndDelete({
            _id: categoryID,
        });
        console.log("Category deleted");
        req.flash('success','Category successfully deleted');
        res.status(200).redirect('/categories');
    } else {
        console.log("Category cannot be deleted because there is product(s) link to it");
        req.flash('error','Category cannot be deleted because there is product(s) link to it');
        res.status(500).redirect('/categories');
    }

    // res.status(200).json({ products });
    // res.status(200).json({ category });
}