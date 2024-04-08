const swaggerJsdoc = require('swagger-jsdoc');

// Define Swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MY Weather Cast API',
            version: '1.0.0',
            description: 'Swagger API Documentation for the WeatherCast Updating App',
        },
    },
    // Path to the API files
    apis: ['./routes/*.js'],
};

// Initialize Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
