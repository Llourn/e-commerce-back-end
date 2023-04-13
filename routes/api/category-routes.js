const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(400).json({ message: "Unable to locate Category Data." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "There was an error retrieving data.", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(400).json({ message: "Unable to locate Category Data." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res
      .status(500)
      .json({ message: "There was an error retrieving data.", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);

    res.status(200).json({
      message: "Category created successfully.",
      category: categoryData,
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a problem creating the category.",
      error: err,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (categoryData[0] === 0) {
      res.status(400).json({ message: "That category id does not exist." });
      return;
    }

    res.status(200).json({
      message: "You have successfully updated the category.",
      data: categoryData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "There was a problem updating the category",
      error: err,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (categoryData === 0) {
      res.status(400).json({ message: "That category id does not exist." });
      return;
    }

    res.status(200).json({
      message: "You have successfully deleted the category.",
      data: categoryData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "There was a problem deleting the category",
      error: err,
    });
  }
});

module.exports = router;
