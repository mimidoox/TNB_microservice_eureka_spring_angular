const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));
app.options('*', cors());
// Your routes and other middleware here...

app.listen(8000, () => {
  console.log('Server listening on port 8888');
});
