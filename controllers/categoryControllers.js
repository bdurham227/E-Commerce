const { Category, Product } = require("../models");

//------(GET REQUEST)------GET ALL CATEGORY------------

exports.getAllCategories =  async (req, res) => {
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
  };
  
  //--------(GET REQUEST)--------GET CATEGORY BY ID--------------

  exports.getCategory = async (req, res) => {
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
  };

  //----(POST REQUEST)-----CREATE CATEGORY---------------------

  exports.createCategory = async (req, res) => {
    try {
      const categoryData = await Category.create({
        category_name: req.body.category_name,
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //----(PUT REQUEST)----UPDATE CATEGORY BY ID---------------
  
  exports.updateCategory = async (req, res) => {
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
  };
   //-----(DELETE REQUEST)----DELETE CATEGORY BY ID-------

  exports.deleteCategory = async (req, res) => {
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
  }