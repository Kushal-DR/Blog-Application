const express = require('express');
const {userBlogController, AddCamment, getCamment} = require('../controls/blogControler')
const {getAllBlogsController , createBlogcontroller,updateBlogcontroller,getBlogByIdBlogcontroller,deleteBlogController} = require('../controls/blogControler')

//router object
const router = express.Router()

//routers
//Get || all blog
router.get('/all-blog',getAllBlogsController);

//post || create-blog
router.post('/create-blog' , createBlogcontroller);

//post || update-blog
router.put('/update-blog/:id' , updateBlogcontroller);

router.post('/add-camment/:id/:b_id' , AddCamment);

router.get('/get-camment/:id' , getCamment);



//get || single-blog-datails
router.get('/get-blog/:id' , getBlogByIdBlogcontroller);

router.delete('/delete-blog/:id' , deleteBlogController);

//get || user blog
router.get('/user-blog/:id' , userBlogController)

module.exports = router;