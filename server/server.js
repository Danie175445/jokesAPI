const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));
const AllJokesRoutes = require('./routes/jokes.routes');
AllJokesRoutes(app);

app.listen(8000,() => console.log('the server is fired up on port 8000'));