import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://emarket-api-hjg6hghpgsbkd3e2.italynorth-01.azurewebsites.net"
    : "http://localhost:3000";

// Base configuration
const baseDefinition = {
  openapi: '3.0.0',
  servers: [
    {
      url: serverUrl,
      description: 'server URL',
    }
  ]
};

// V1 API Documentation
const v1Options = {
  definition: {
    ...baseDefinition,
    info: {
      title: 'E-Market API V1',
      version: '1.0.0',
      description: 'API documentation for E-Market platform - Version 1'
    }
  },
  apis: ['./routes/api/v1/*.js']
};

// V2 API Documentation
const v2Options = {
  definition: {
    ...baseDefinition,
    info: {
      title: 'E-Market API V2',
      version: '2.0.0',
      description: 'API documentation for E-Market platform - Version 2'
    }
  },
  apis: ['./routes/api/v2/*.js']
};

const specsV1 = swaggerJSDoc(v1Options);
const specsV2 = swaggerJSDoc(v2Options);

// Swagger UI options with multiple URLs
const swaggerOptions = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: `${serverUrl}/api-docs/v1/swagger.json`,
        name: 'V1 - Stable'
      },
      {
        url: `${serverUrl}/api-docs/v2/swagger.json`,
        name: 'V2 - Latest'
      }
    ],
    'urls.primaryName': 'V2 - Latest'
  }
};

export { swaggerUi, specsV1, specsV2, swaggerOptions };