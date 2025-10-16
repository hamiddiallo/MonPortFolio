#!/bin/bash
echo "🔄 Réparation Tailwind CSS..."

# Nettoyer
rm -rf .next out node_modules

# Option A : Utiliser Tailwind v3 (recommandé)
npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0

# OU Option B : Rester avec v4 mais installer le plugin
# npm install -D @tailwindcss/postcss

# Réinstaller les autres dépendances
npm install

# Tester le build
echo "📦 Building..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
else
    echo "❌ Build échoué, essayons l'alternative..."
    # Essayer l'autre option
    npm uninstall tailwindcss @tailwindcss/postcss
    npm install -D tailwindcss@^3.4.0
    npm run build
fi