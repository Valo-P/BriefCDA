import Category from "../models/Category.js";
import {getProductsByCategory} from "./ProductController.js";
export const getCategories = async (req,res,next) => {

    const categories = await Category.find();

    console.log("Categories find");
    console.log(categories);
    console.log(categories.length);

    // res.status(200).json({ categories });
    res.status(200).render('category/getCategories', {
        title: "CategoryList",
        categories: categories,
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
    const categoryID = req.body.categoryID;

    const category = await Category.findByIdAndDelete({
        _id: categoryID,
    })

    console.log("Category deleted")
    res.status(200).json({ Message: "Category deleted"});
}