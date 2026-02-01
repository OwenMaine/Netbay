# NET BAY - Professional IT B2B Website

A modern, responsive static website for NET BAY, LLC - an enterprise IT solutions company. Built with HTML5, CSS3, JavaScript, and enhanced with Tailwind CSS, Animate.css, and WOW.js.

## 📁 Project Structure

```
netbay/
├── index.html              # Home page
├── about.html              # About us page
├── services.html           # Services page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Custom styles with deep colors
├── js/
│   └── script.js           # Interactive functionality
├── images/                 # Image directory (use pattern: images/1.jpg, images/2.jpg, etc.)
└── README.md              # This file
```

## 🎨 Design Features

### Color Palette
The website uses a sophisticated deep color scheme:
- **Deep Amber**: `#b8860b` - Primary accent color
- **Deep Indigo**: `#1e3a5f` - Secondary accent
- **Deep Sea Blue**: `#003d5c` - Tertiary accent
- **Deep Gray/Silver**: `#6b7280` - Neutral tones
- **Charcoal**: `#111827` - Dark backgrounds

### Key Technologies
- **HTML5**: Semantic markup
- **CSS3**: Advanced animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Vanilla JS for interactivity
- **WOW.js**: Scroll animation library
- **Animate.css**: Pre-built animations
- **Font Awesome 6.4**: Icon library

## 📄 Page Descriptions

### 1. **Home (index.html)**
- Hero section with animated background blobs
- Key features showcase (3 cards)
- Services preview (4 service cards)
- Statistics section (99.9% uptime, 15+ years experience, etc.)
- Call-to-action section
- Footer with contact info

### 2. **About (about.html)**
- Hero with company message
- Company overview section
- Mission, Vision & Values (3 cards)
- Areas of expertise (4 detailed cards)
- Why choose NET BAY (4 benefit cards)
- Footer

### 3. **Services (services.html)**
- Hero with service introduction
- Core service offerings (4 detailed service cards)
- Additional specialized services (3 cards)
- Service process with 4 phases
- Call-to-action section
- Footer

### 4. **Contact (contact.html)**
- Hero section
- Contact information (3 info cards: office, email, phone)
- Contact form with validation (name, email, company, phone, service interest, budget, message)
- Business hours section
- Location map placeholder
- Why choose us section
- Footer

## 🎯 Key Features

### Animations
- **Scroll Animations**: WOW.js triggers animations as elements scroll into view
- **Blob Animations**: Animated background shapes
- **Hover Effects**: Card lifts, border color transitions
- **Fade-in Effects**: Page elements fade in on load

### Interactive Elements
- **Smooth Scrolling**: Navigation links scroll smoothly
- **Form Validation**: Real-time field validation
- **Mobile Menu**: Responsive navigation for mobile
- **Hover States**: Visual feedback on interactive elements

### Performance Optimizations
- Debounced scroll events
- Throttled resize events
- Lazy loading for images
- Optimized CSS with Tailwind

## 🖼️ Image Usage

Images are placed in the `images/` directory following a simple naming convention:
```
images/1.jpg
images/2.jpg
images/3.jpg
etc.
```

No images are currently included - you can populate these as needed. The design prioritizes **icons and illustrations** over photos.

## 🚀 Getting Started

### Local Development

1. **Open in Browser**: Simply open any `.html` file in a modern web browser
   - Chrome/Edge recommended for best compatibility

2. **Local Server (Optional)**: For development with hot reload:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
   Then visit `http://localhost:8000`

### Customization

#### Update Company Information
Find and replace throughout the site:
- Company name: "NET BAY"
- Address: "8815 E. Echo Ct., Inverness, FL 34450"
- Website: "netbayllc.com"
- Contact emails and phone numbers

#### Add Custom Images
1. Save images to `images/` directory with pattern: `1.jpg`, `2.jpg`, etc.
2. Update HTML image tags:
   ```html
   <img src="images/1.jpg" alt="Description" data-src="images/1.jpg">
   ```

#### Modify Colors
Edit color variables in `css/styles.css`:
```css
:root {
    --deep-amber: #b8860b;
    --deep-indigo: #1e3a5f;
    --deep-sea-blue: #003d5c;
}
```

#### Add New Services
Edit `services.html` and duplicate the service card component:
```html
<div class="wow fadeInLeft bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-deep-indigo-500">
    <!-- Card content -->
</div>
```

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: Full layout with navigation bar
- **Tablet**: Optimized grid layouts
- **Mobile**: Single column layout with hamburger menu

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on icons
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support
- Focus indicators on interactive elements

## 🔧 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Each Page Contains 5+ Sections

✅ **Home Page**
1. Navigation + Hero
2. Key Features
3. Services Preview
4. Statistics & Impact
5. Call-to-Action
6. Footer

✅ **About Page**
1. Navigation + Hero
2. Company Overview
3. Mission & Vision
4. Expertise Areas
5. Why Partner With Us
6. Footer

✅ **Services Page**
1. Navigation + Hero
2. Core Services
3. Additional Services
4. Service Process
5. Call-to-Action
6. Footer

✅ **Contact Page**
1. Navigation + Hero
2. Contact Information
3. Contact Form
4. Location & Hours
5. Why Choose Us
6. Footer

## 🎬 Animation Libraries Used

- **WOW.js**: Scroll-based animations
- **Animate.css**: Pre-built CSS animations
- **Custom CSS**: Blob animations, transitions, hover effects

## 📝 Form Functionality

The contact form includes:
- Required field validation
- Email format validation
- Real-time error messages
- Success notifications
- Service selection dropdown
- Budget range selector
- Message textarea with character limit

**Note**: Currently, form data is simulated. To make it functional, connect to a backend service (e.g., Formspree, Netlify Forms, or your own API).

## 🔒 Security Considerations

- Form inputs are sanitized
- No sensitive data stored client-side
- HTTPS recommended for live site
- Consider implementing CORS for form submissions

## 🚀 Deployment

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: (none - static site)
3. Publish directory: `/`

### Deploy to Vercel
1. Import project
2. Accept default settings
3. Deploy

### Deploy to GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Select main branch as source

## 📧 Contact Form Integration

To make the contact form functional, consider:

1. **Formspree** (Free):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Netlify Forms** (Free with hosting):
   ```html
   <form name="contact" method="POST" netlify>
   ```

3. **EmailJS** (Client-side):
   ```javascript
   emailjs.send('service_id', 'template_id', templateParams);
   ```

## 📈 SEO Recommendations

1. Update meta descriptions in each HTML file
2. Add Open Graph meta tags for social sharing
3. Submit sitemap to search engines
4. Implement structured data (schema.org)
5. Optimize images with alt text

## 🔄 Maintenance

- Update company information as needed
- Test forms regularly
- Monitor broken links
- Update content sections with latest services
- Refresh blog/news section if added

## 💡 Future Enhancements

Consider adding:
- Blog section
- Case studies page
- Testimonials carousel
- Pricing table
- Knowledge base/FAQ
- Live chat support
- Newsletter signup
- Team bios
- Project gallery

## 📞 Support

For questions or customization needs:
- Email: info@netbayllc.com
- Website: netbayllc.com
- Phone: +1 (352) 555-0123

---

**Version**: 1.0  
**Last Updated**: 2024  
**Built with**: HTML5, CSS3, JavaScript, Tailwind CSS, WOW.js, Animate.css
