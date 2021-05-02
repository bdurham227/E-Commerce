const router = require("express").Router();
const { Category, Product } = require("../../models");
const { sequelize } = require("../../models/Product");

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
// });

router.get("/", async (req, res) => {
  try {
    const categtoryData = await Category.findAll({
      attributes: ['id','category_name'],
      include: [
        { 
          model: Product, 
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.status(200).json(categtoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'category_name'],
      include: [
        { 
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
        ],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No Category with that ID found!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
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

// router.post('/', async (req, res) => {
//   // create a new category
//   try {
//     const categoryData = await Category.create(req.body);
//     res.status(200).json(categoryData);

//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res
        .status(404)
        .json({ message: `No Category with the ID: ${req.params.id} found!` });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res
        .status(404)
        .json({ message: `No Category with the ID ${req.params.id} found!` });
      return;
    }
    res.status(204).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
