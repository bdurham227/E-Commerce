const router = require("express").Router();
const tagController = require('../../controllers/tagControllers');


// The `/api/tags` endpoint
//mounting routers
router
.get('/', tagController.getAllTags)
.post('/', tagController.createTag)

router
.get('/:id', tagController.getTag)
.put('/:id', tagController.updateTag)
.delete('/:id', tagController.deleteTag)




//-----get ALL TAGS----

// router.get("/", async (req, res) => {
//   // find all tags
//   // be sure to include its associated Product data
//   try {
//     const tagData = await Tag.findAll({
//       attributes: ["id", "tag_name"],
//       include: [
//         {
//           model: Product,
//           attributes: ["product_name", "price", "stock", "category_id"],
//         },
//       ],
//     });
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//----GET ONE TAG BY ID----------

// router.get("/:id", async (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
//   try {
//     const tagData = await Tag.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ["id", "tag_name"],
//       include: [
//         {
//           model: Product,
//           attributes: ["product_name", "price", "stock", "category_id"],
//         },
//       ],
//     });
//     if (!tagData) {
//       res
//         .status(404)
//         .json({ message: `No Tag with ID ${req.params.id} found!` });
//       return;
//     }
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//-----------CREATE NEW TAG----------------

// router.post("/", async (req, res) => {
//   // create a new tag
//   try {
//     const tagData = await Tag.create({
//       tag_name: req.body.tag_name,
//     });
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//-----------------UPDATE TAG----------------------

// router.put("/:id", async (req, res) => {
//   // update a tag's name by its `id` value
//   try {
//     const tagData = await Tag.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!tagData[0]) {
//       res
//         .status(404)
//         .json({ message: `No Tag with ID ${req.params.id} found!` });
//       return;
//     }
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



//-------------DELETE TAG---------------------

// router.delete("/:id", async (req, res) => {
//   // delete on tag by its `id` value
//   try {
//     const tagData = await Tag.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!tagData) {
//       res
//         .status(404)
//         .json({ message: `No Tag with ID ${req.params.id} found` });
//       return;
//     }
//     res.status(204).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
