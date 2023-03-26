const router = require("express").Router();
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/h-thai-ml-tables.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coffee-cat.jpg",
    },
  ];
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/places", (req, res) => {
  res.send("Create a new place");
});

router.get("/:id", (req, res) => {
  res.send(
    "Show one place in detail (Associated rants, new rant form, delete rant button)"
  );
});

router.get("/:id/edit", (req, res) => {
  res.send("Edit form for a place");
});

router.put("/:id", (req, res) => {
  res.send("Make changes to existing place");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a place");
});

router.post("/:id/rant", (req, res) => {
  res.send("Add rant to a place");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("Delete a rant");
});

module.exports = router;
