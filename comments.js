// Create web server
// 1. Load express
const express = require('express');
// 2. Create server
const app = express();
// 3. Listen to port 3000
app.listen(3000, () => console.log('Server is running on port 3000'));
// 4. Add a route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 5. Add another route
app.get('/comments', (req, res) => {
  res.send('Comments');
});