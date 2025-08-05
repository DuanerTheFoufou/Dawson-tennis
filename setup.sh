#!/bin/bash

echo "🎾 Dawson Tennis Club Website Setup"
echo "=================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Dawson Tennis Club website"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "🚀 Next Steps:"
echo "=============="
echo ""
echo "1. 📝 Set up Formspree:"
echo "   - Go to https://formspree.io"
echo "   - Sign up and create a new form"
echo "   - Copy your form endpoint"
echo "   - Update the endpoint in index.html"
echo ""
echo "2. 🌐 Create GitHub Repository:"
echo "   - Go to https://github.com"
echo "   - Create a new repository"
echo "   - Copy the repository URL"
echo ""
echo "3. 📤 Upload to GitHub:"
echo "   - Run: git remote add origin YOUR_REPO_URL"
echo "   - Run: git push -u origin main"
echo ""
echo "4. 🌍 Enable GitHub Pages:"
echo "   - Go to repository Settings → Pages"
echo "   - Select 'Deploy from a branch'"
echo "   - Choose 'main' branch"
echo "   - Your site will be live in 5-10 minutes"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
echo "🎾 Good luck with your tennis club website!" 