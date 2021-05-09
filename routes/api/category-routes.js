const router = require("express").Router();
const { sequelize } = require("../../models/Product");
// const { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../../controllers/categoryControllers');
const categoryController = require('../../controllers/categoryControllers');




// The `/api/categories` endpoint
//   // find all categories
//   // be sure to include its associated Products

//mounting routers
router
.get('/', categoryController.getAllCategories)
.post('/', categoryController.createCategory)

router
.get('/:id', categoryController.getCategory)
.put('/:id', categoryController.updateCategory)
.delete('/:id', categoryController.deleteCategory)




//-----------------GET ALL CATEGORIES




// router.get("/", async (req, res) => {
//   try {
//     const categtoryData = await Category.findAll({
//       attributes: ['id','category_name'],
//       include: [
//         { 
//           model: Product, 
//           attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
//         },
//       ],
//     });
//     res.status(200).json(categtoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//---------------GET ONE CATEGORY

// router.get("/:id", async (req, res) => {
//   try {
//     const categoryData = await Category.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ['id', 'category_name'],
//       include: [
//         { 
//           model: Product,
//           attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
//         },
//         ],
//     });
//     if (!categoryData) {
//       res.status(404).json({ message: "No Category with that ID found!" });
//       return;
//     }
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//old---------------------
// router.get('/:id', async (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   try {
//     const categoryData = await Category.findByPk(req.params.id, {
//       include: [{ model: }]
//     })

//   } catch (err) {
//     res.status(500).json(err)
//   }

// });
//-------------------------------


// router.post("/", async (req, res) => {
//   try {
//     const categoryData = await Category.create({
//       category_name: req.body.category_name,
//     });
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//-------------------UPDATE

// router.put("/:id", async (req, res) => {
//   // update a category by its `id` value
//   try {
//     const categoryData = await Category.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!categoryData[0]) {
//       res
//         .status(404)
//         .json({ message: `No Category with the ID: ${req.params.id} found!` });
//       return;
//     }
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//----------------DELETE CATEGORY

// router.delete("/:id", async (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const categoryData = await Category.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!categoryData) {
//       res
//         .status(404)
//         .json({ message: `No Category with the ID ${req.params.id} found!` });
//       return;
//     }
//     res.status(204).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
