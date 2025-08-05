# 🚀 Dawson Tennis Club Website - Deployment Guide

## 📋 **Quick Setup (Choose One Option)**

### **Option 1: GitHub Pages (Recommended) - FREE**

#### **Step 1: Create GitHub Repository**
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `dawson-tennis-club` or `your-username.github.io`
4. Make it **Public**
5. Click "Create repository"

#### **Step 2: Upload Your Files**
```bash
# In your terminal, run these commands:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### **Step 3: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait 5-10 minutes for your site to be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

### **Option 2: Netlify (Alternative) - FREE**

#### **Step 1: Deploy to Netlify**
1. Go to [Netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository
5. Click "Deploy site"
6. Your site will be live at: `https://random-name.netlify.app`

---

## 📝 **Form Setup (Required for Signups)**

### **Step 1: Set Up Formspree**
1. Go to [Formspree.io](https://formspree.io) and sign up
2. Click "New Form"
3. Name it: "Dawson Tennis Club Signups"
4. Copy your form endpoint (looks like: `https://formspree.io/f/xaybcdz`)

### **Step 2: Update Your Website**
1. Open `index.html` in your code editor
2. Find this line: `action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"`
3. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint
4. Save the file and push changes to GitHub

### **Step 3: Test Your Form**
1. Go to your live website
2. Fill out the signup form
3. Submit it
4. Check your Formspree dashboard to see the submission

---

## 📊 **Managing Signups**

### **Formspree Dashboard**
- **View submissions**: Go to [Formspree.io](https://formspree.io) → Your Form → Submissions
- **Export data**: Click "Export" to download as CSV
- **Email notifications**: You'll get emails for each signup
- **Spam protection**: Built-in spam filtering

### **Alternative: Google Forms**
If you prefer Google Forms:
1. Create a Google Form with the same fields
2. Embed it in your website
3. Responses go to Google Sheets automatically

---

## 🔧 **Custom Domain (Optional)**

### **GitHub Pages Custom Domain**
1. Buy a domain (e.g., `dawsontennisclub.com`)
2. In GitHub repository → Settings → Pages
3. Add your custom domain
4. Update DNS settings with your domain provider

### **Netlify Custom Domain**
1. In Netlify dashboard → Site settings → Domain management
2. Add custom domain
3. Update DNS settings

---

## 📱 **Mobile Testing**

### **Test on Different Devices**
- **iPhone**: Safari browser
- **Android**: Chrome browser
- **Tablet**: iPad/Android tablet
- **Desktop**: Chrome, Firefox, Safari

### **Check Responsiveness**
- Open browser developer tools (F12)
- Click device toggle icon
- Test different screen sizes

---

## 🚀 **Final Checklist**

### **Before Going Live:**
- [ ] Form endpoint updated in `index.html`
- [ ] All images loading correctly
- [ ] Mobile responsiveness tested
- [ ] Form submissions working
- [ ] Contact information updated
- [ ] Social media links added (if any)

### **After Going Live:**
- [ ] Test form submission
- [ ] Check mobile view
- [ ] Verify all links work
- [ ] Test on different browsers
- [ ] Share with your team

---

## 📞 **Support & Troubleshooting**

### **Common Issues:**
- **Form not working**: Check Formspree endpoint is correct
- **Images not loading**: Ensure all image files are uploaded
- **Mobile issues**: Check CSS media queries
- **Slow loading**: Optimize image sizes

### **Need Help?**
- **GitHub Pages**: [GitHub Pages Documentation](https://pages.github.com/)
- **Formspree**: [Formspree Support](https://formspree.io/support/)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com/)

---

## 🎯 **Quick Start Commands**

```bash
# If you haven't set up Git yet:
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace with your repo URL):
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main

# To update your site later:
git add .
git commit -m "Update website"
git push
```

---

**🎾 Your Dawson Tennis Club website will be live and collecting signups in minutes!** 