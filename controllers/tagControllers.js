const { Tag, Product, ProductTag } = require("../models");

//-------------(GET REQUEST)---GET ALL TAGS---------------------
exports.getAllTags = async (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    try {
      const tagData = await Tag.findAll({
        attributes: ["id", "tag_name"],
        include: [
          {
            model: Product,
            attributes: ["product_name", "price", "stock", "category_id"],
          },
        ],
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  }

//-------------(GET REQUEST)---GET ONE TAG BY ID---------------------
exports.getTag = async (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    try {
      const tagData = await Tag.findOne({
        where: {
          id: req.params.id,
        },
        attributes: ["id", "tag_name"],
        include: [
          {
            model: Product,
            attributes: ["product_name", "price", "stock", "category_id"],
          },
        ],
      });
      if (!tagData) {
        res
          .status(404)
          .json({ message: `No Tag with ID ${req.params.id} found!` });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
//---------------(POST REQUEST)----CREATE NEW TAG------------------------
exports.createTag =  async (req, res) => {
    // create a new tag
    try {
      const tagData = await Tag.create({
        tag_name: req.body.tag_name,
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //-------------(PUT REQUEST)----UPDATE TAG BY ID----------------

exports.updateTag = async (req, res) => {
    // update a tag's name by its `id` value
    try {
      const tagData = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!tagData[0]) {
        res
          .status(404)
          .json({ message: `No Tag with ID ${req.params.id} found!` });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
//--------------(DELETE REQUEST)--------DELETE TAG BY ID--------------

exports.deleteTag =  async (req, res) => {
    // delete on tag by its `id` value
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!tagData) {
        res
          .status(404)
          .json({ message: `No Tag with ID ${req.params.id} found` });
        return;
      }
      res.status(204).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  }