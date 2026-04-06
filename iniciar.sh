#!/bin/bash
cd "$(dirname "$0")"
echo "========================================"
echo "  Matemáticas en Técnicas Agropecuarias"
echo "  Abriendo en http://localhost:8080"
echo "  Ctrl+C para detener"
echo "========================================"
python3 -m http.server 8080
