require('./db/config');
const express = require('express');
const cors = require('cors');
const list = require('./db/List');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/add-list", async (req, resp) => {
  let product = new list(req.body);
  let result = await product.save();
  resp.send(result);
})
app.get("/lists", async (req, resp) => {
  let product = await list.find();
  if (product.length > 0) {
    resp.send(product);
  } else {
    resp.send("No result found")
  }
});

app.delete('/list/:id', async (req, resp) => {
  const result = await list.deleteOne({
    _id: req.params.id
  });
  resp.send(result);
});

app.get("/list/:id", async (req, resp) => {
  let result = await list.findOne({
    _id: req.params.id
  });
  if (result) {
    resp.send(result)
  } else {
    resp.send({
      result: "No result Found"
    })
  }
});

app.put("/lists/:id", async (req, resp) => {
  let result = await list.updateOne({
    _id: req.params.id
  }, {
    $set: req.body
  })
  resp.send(result);
});

app.listen(5000);