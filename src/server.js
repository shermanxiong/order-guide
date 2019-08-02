const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const orderGuideRoutes = express.Router();

let Product = require('./server/product.model');

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('App listening on port 8080'));

mongoose.connect('mongodb://test:test123@ds239128.mlab.com:39128/interview-db', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/products', orderGuideRoutes);
orderGuideRoutes.route('/').get(function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});

// require('./server/routes')(app);

