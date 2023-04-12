
export const getCategories = (req,res,next) => {
    res.render('category/getCategories', {
        title: "CategoryList",
    })
}