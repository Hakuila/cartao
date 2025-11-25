#!/bin/bash

OPENAPI_FILE="backend/openapi/openapi.json"
OUTPUT_DIR="backend/docs"

echo "📘 Construindo documentação..."

# Redoc
echo "➡️  Gerando Redoc..."
npx redoc-cli build $OPENAPI_FILE -o $OUTPUT_DIR/redoc.html

echo "✔ Redoc pronto!"

# Swagger UI
echo "➡️  Gerando Swagger UI..."
npx swagger-cli bundle $OPENAPI_FILE --outfile $OUTPUT_DIR/swagger.json --type json

echo "✔ Swagger pronto!"
echo "🎉 Documentação finalizada!"
