const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../models/user");

router.post("/Post", upload.single("image"), async (req, res) => {
  try {
    const user = {
      name: title_name,
      description: description,
      price: price,
    };

    //Save User
    await User.create(user);
    res.status(201);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  await User.find()
    .then((post) => res.json(post))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
