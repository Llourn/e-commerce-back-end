const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });

    if (!tagData) {
      res
        .status(400)
        .json({ message: "There was a problem retrieving the data." });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "There was a problem retriving data.", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(400).json({ message: "There was a problem retriving data." });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "There was a problem retrieving data.", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);

    res
      .status(200)
      .json({ message: "Tag created successfully", data: tagData });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "There was a problem creating the Tag.", error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (tagData[0] === 0) {
      res.status(400).json({ message: "Tag with that id does not exist." });
      return;
    }

    res
      .status(200)
      .json({ message: "Tag updated successfully.", data: tagData });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "There was a problem updating the Tag.", error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (tagData === 0) {
      res.status(400).json({ message: "Tag with that id does not exist." });
      return;
    }

    res.status(200).json({ message: "Tag was deleted successfully." });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "There was a problem deleting the Tag.", error: err });
  }
});

module.exports = router;
