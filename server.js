const { getPoems } = require('./getPoems')

const express = require('express');
const app = express();


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, content-type");
  next();
})

const PORT = process.env.PORT || 3001

app.get('/poems', async (req, res, next) => {
  getPoems(function(error, poems) {
    if (error) {
      next(error);
    }
    res.send(poems);
  })
  
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}`);
});