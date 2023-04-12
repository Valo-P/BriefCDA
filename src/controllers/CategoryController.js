import Category from "../models/Category.js";
export const getCategories = (req,res,next) => {
    res.render('category/getCategories', {
        title: "CategoryList",
    });
};

export const addCategory = async (req, res, next) => {
    const categoryName = req.body.categoryName;

    const category = await Category.create({
        categoryName,
    });

    console.log(category);
    res.status(201).json({ category });
    // res.status(201).redirect("/categories");
};