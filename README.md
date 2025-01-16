# web-page-using-frontend

# Responsive Admin Dashboard

A modern responsive admin dashboard built with HTML, CSS, and JavaScript. Features a clean design with a collapsible sidebar, gradient colors, and full mobile responsiveness.

## Features

- Responsive design for all screen sizes
- Fixed navigation header
- Collapsible sidebar navigation
- Gradient color scheme
- Statistics cards with hover effects
- Interactive dashboard elements
- Mobile-friendly navigation

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/responsive-dashboard.git
```

2. Navigate to project directory and open `index.html` in your browser

## Project Structure

```
responsive-dashboard/
│
├── index.html
├── README.md
└── screenshots/
    └── dashboard-preview.png
```

## Usage

- Click the menu icon to toggle the sidebar navigation
- Sidebar automatically collapses on mobile devices
- Statistics cards display key metrics with hover animations
- Fully functional on desktop, tablet, and mobile devices

## Customization

### Modifying Colors
The dashboard uses CSS variables for easy color customization:

```css
:root {
    --gradient-primary: linear-gradient(135deg, #6366f1 0%, #2563eb 100%);
    --gradient-secondary: linear-gradient(135deg, #f472b6 0%, #db2777 100%);
}
```

### Layout Adjustments
Adjust header and sidebar dimensions:

```css
:root {
    --header-height: 60px;
    --sidebar-width: 280px;
}
```

## Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Grid, CSS Variables)
- JavaScript
- Font Awesome Icons

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Fully responsive across all modern devices

