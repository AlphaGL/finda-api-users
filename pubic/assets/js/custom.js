// assets/js/custom.js
window.onload = function() {
  // Build a Swagger UI instance from the specified URL
  const ui = SwaggerUIBundle({
    url: "swagger.yaml",                  // point to our YAML
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "BaseLayout",
    docExpansion: "none",
    operationsSorter: "alpha",
    deepLinking: true
  });
  window.ui = ui;
};
