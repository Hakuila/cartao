#!/bin/bash

OPENAPI_FILE="backend/openapi/openapi.json"
CONFIG_FILE="sdk/generator-config.yaml"

echo "📦 Gerando SDKs..."
echo

# TypeScript SDK
echo "➡️  Gerando SDK TypeScript..."
openapi-generator-cli generate \
  -i $OPENAPI_FILE \
  -g typescript-fetch \
  -o sdk/ts/generated \
  --additional-properties=useSingleRequestParameter=true,enumPropertyNaming=UPPERCASE

echo "✔ TypeScript OK"
echo

# Dart SDK
echo "➡️  Gerando SDK Dart..."
openapi-generator-cli generate \
  -i $OPENAPI_FILE \
  -g dart-dio \
  -o sdk/dart/generated \
  --additional-properties=pubName=cartao_interno_sdk,nullSafety=true

echo "✔ Dart OK"
echo

# Python SDK
echo "➡️  Gerando SDK Python..."
openapi-generator-cli generate \
  -i $OPENAPI_FILE \
  -g python \
  -o sdk/python/generated \
  --additional-properties=packageName=cartao_interno_sdk

echo "✔ Python OK"
echo
echo "🎉 Todos os SDKs foram gerados com sucesso!"
