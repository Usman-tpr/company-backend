const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Define the base folder for your routes
const routesPath = path.join(__dirname, 'v1');

// Dynamically read all files in the `v1` directory
fs.readdirSync(routesPath).forEach(file => {
  if (file.endsWith('Routes.js')) { // Load only files ending with 'Routes.js'
    const route = require(path.join(routesPath, file));
    const routeName = file.replace('Routes.js', '').toLowerCase(); // e.g., userRoutes -> users
    router.use(`/${routeName}`, route);
  }
});

module.exports = router;
