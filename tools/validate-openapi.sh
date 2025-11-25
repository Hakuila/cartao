#!/bin/bash

OPENAPI_FILE="backend/openapi/openapi.json"

echo "🔍 Validando OpenAPI..."
npx @redocly/cli lint $OPENAPI_FILE

echo "✔ Validação concluída!"
