const { Router } = require("express");
const router = Router();
const Category = require("../model/Category");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
});

router.post("/create", async (req, res) => {
  const category = new Category({ category: req.body.category });
  await category.save();
  res.status(201).send("success");
});

router.post("/update/:id", async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
  });

  res.status(200).send("Success updated");
});

router.post("/update/:id", async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id);

  res.status(200).send("Success delete");
});


module.exports = router;
