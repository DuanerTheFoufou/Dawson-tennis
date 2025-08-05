# Dawson Tennis Club Website

A beautiful, minimalist tennis club website inspired by Apple's design philosophy. Built with Bootstrap, custom CSS, and Formspree for form handling. Features an interactive 3D tennis racket that rotates and reveals text on scroll.

## Features

- 🎾 **Apple-inspired minimalist design** with clean typography and white space
- 📱 **Fully responsive** across all devices (mobile, tablet, desktop)
- 🎨 **Modern UI/UX** with smooth animations and hover effects
- 🏆 **Interactive 3D tennis racket** that rotates and reveals text on scroll
- 📝 **Contact form** with Formspree integration for easy data collection
- ⚡ **Fast loading** with optimized images and code
- 🔍 **SEO friendly** with proper meta tags and structure
- 🏅 **Tennis Quebec affiliation** for competitive league play

## Pages & Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Club features and benefits with animated cards
3. **Interactive 3D Racket Section** - Rotating tennis racket with scroll-triggered text reveal
4. **Sign Up Form** - Clean form collecting all required information
5. **Footer** - Contact information and branding

## Interactive Features

### 3D Tennis Racket
- **Scroll-based rotation** - The racket rotates 360° as you scroll through the section
- **Text reveal** - "A Great Way to Stay Active" text appears when the racket is in view
- **Mouse interactions** - Hover and click effects on the racket
- **Responsive design** - Adapts to different screen sizes
- **Smooth animations** - Apple-style cubic-bezier transitions

### Tennis Quebec Affiliation
- **Competitive League** - Affiliated with Tennis Quebec for Collegial League
- **Two participation options**:
  - Recreational: Club practices only
  - Competitive: League tournaments against other schools
  - Both: Practices + tournaments

## Form Fields

The sign-up form collects:
- Full Name
- Email Address
- Age (16-100)
- Skill Level (Beginner, Intermediate, Advanced)
- Dawson Student Number
- Participation Type (Recreational, Competitive, or Both)

## Setup Instructions

### 1. Formspree Configuration

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form endpoint (e.g., `https://formspree.io/f/xaybzwkw`)
3. Open `index.html` and replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint:

```html
<form action="https://formspree.io/f/YOUR_ACTUAL_ENDPOINT" method="POST" class="signup-form">
```

### 2. GitHub Pages Deployment

1. Create a new GitHub repository named `dawson-tennis-club.github.io`
2. Upload all files to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to repository Settings → Pages
4. Set Source to "Deploy from a branch" and select "main"
5. Your site will be live at `https://dawson-tennis-club.github.io`

### 3. Custom Domain (Optional)

1. In your GitHub repository Settings → Pages
2. Add your custom domain in the "Custom domain" field
3. Update your DNS settings with your domain provider

## File Structure

```
dawson-tennis-club/
├── index.html          # Main HTML file with 3D racket section
├── styles.css          # Custom CSS with Apple-inspired design
├── script.js           # JavaScript for 3D interactions and form handling
└── README.md           # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #007AFF;      /* Main blue color */
    --secondary-color: #8E8E93;    /* Gray text */
    --background-color: #FFFFFF;    /* White background */
    --text-color: #1D1D1F;         /* Dark text */
}
```

### 3D Racket Customization
- Modify racket colors in `.racket-head`, `.racket-handle`, `.racket-grip`
- Adjust rotation speed in the JavaScript scroll event
- Change text reveal timing in the scroll progress calculation

### Content
- Update club information in `index.html`
- Modify the reveal text in the interactive section
- Adjust Tennis Quebec affiliation details
- Replace images with your own tennis club photos

### Fonts
The website uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Modify the font-family in `styles.css`

## Browser Support

- Chrome (latest) - Full 3D support
- Firefox (latest) - Full 3D support
- Safari (latest) - Full 3D support
- Edge (latest) - Full 3D support
- Mobile browsers (iOS Safari, Chrome Mobile) - Responsive design

## Performance

- Optimized 3D CSS transforms
- Efficient scroll event handling
- Fast loading times
- Mobile-first responsive design
- Smooth 60fps animations

## Form Data Access

With Formspree, you can:
- Receive email notifications for each submission
- View all submissions in the Formspree dashboard
- Export data to CSV/Excel
- Set up webhooks for custom integrations
- Track participation type preferences

## Support

For issues or questions:
1. Check the Formspree documentation for form setup
2. Review GitHub Pages documentation for deployment
3. Test the 3D racket interactions on different devices
4. Verify form submission thoroughly before going live

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the Dawson Tennis Club**

*Featuring an interactive 3D tennis racket inspired by Apple's product showcases* 