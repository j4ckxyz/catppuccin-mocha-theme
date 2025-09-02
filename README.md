# Catppuccin Mocha Theme for Micro.blog

A beautiful, warm, and cozy Micro.blog theme inspired by the [Catppuccin Mocha](https://catppuccin.com/palette) color palette. This theme offers a sophisticated dark-first design with excellent accessibility and clean typography.

**Ported by [j4ck.xyz](https://j4ck.xyz) from the [Catppuccin color palettes](https://catppuccin.com/palette/)**

## Features

- **🎨 Catppuccin Mocha Colors**: Beautiful warm pastels on a cozy dark background
- **🌙 Dark-First Design**: Optimized for dark mode with automatic light mode fallback
- **♿ Fully Accessible**: WCAG 2.1 compliant with proper focus indicators and screen reader support
- **📱 Responsive Design**: Seamless experience across all devices and screen sizes
- **🎯 Clean Typography**: Readable fonts with optimal spacing and contrast
- **🔗 Micro.blog Integration**: Complete support for all Micro.blog features
- **⚡ Performance Optimized**: Fast loading with efficient CSS and minimal JavaScript
- **🎛️ Customizable**: Multiple configuration options available in Micro.blog settings

## Color Palette

This theme uses the complete Catppuccin Mocha color palette for a cohesive, warm experience:

### Background Colors
- **Base**: `#1e1e2e` - Primary background
- **Mantle**: `#181825` - Secondary background  
- **Crust**: `#11111b` - Code blocks and deep backgrounds

### Text Colors  
- **Text**: `#cdd6f4` - Primary text
- **Subtext 1**: `#bac2de` - Secondary text
- **Subtext 0**: `#a6adc8` - Muted text

### Accent Colors
- **Mauve**: `#cba6f7` - Primary accent (buttons, links)
- **Blue**: `#89b4fa` - Links and interactive elements
- **Pink**: `#f5c2e7` - Code highlighting
- **Green**: `#a6e3a1` - Success states
- **Red**: `#f38ba8` - Error states
- **Yellow**: `#f9e2af` - Warning states
- **Blue**: `#89b4fa` (Links and accents)
- **Sapphire**: `#74c7ec` (Link hover)
- **Green**: `#a6e3a1` (Code highlighting)
- **Red**: `#f38ba8` (Error states)
- **Peach**: `#fab387` (Warnings)
- **Yellow**: `#f9e2af` (Highlights)
- **Pink**: `#f5c2e7` (Special elements)
- **Mauve**: `#cba6f7` (Interactive elements)

## Installation

### For Micro.blog Users

1. In your Micro.blog admin panel, go to **Design → Themes**
2. Click **Install Theme** and upload this theme
3. Select "Catppuccin Mocha" from your available themes
4. Configure theme options in **Design → Theme Settings**

### Manual Installation

1. Copy the theme folder to your Hugo `themes` directory
2. Add `theme = "catppuccin-mocha"` to your `config.toml`
3. Restart your Hugo development server

## Configuration Options

The theme includes comprehensive configuration options available in the Micro.blog theme settings:

### Basic Settings
- **Site Language**: Set your preferred language code
- **Fediverse Creator**: Link to your Mastodon/Fediverse account
- **Date Format**: Choose between short and full date formats
- **Header Style**: Normal or narrow header layout
- **Avatar Settings**: Show/hide or use custom avatar

### Content Display
- **Home Categories**: Filter posts by category on homepage
- **Full Posts**: Show complete posts vs. summaries on homepage
- **Read Time**: Display estimated reading time for titled posts
- **Categories on Archives**: Show category filters on archive pages

### Photo Gallery
- **Photos Category**: Set a specific category for photo galleries
- **Layout Style**: Choose between grid and masonry layouts
- **Full Width**: Enable wider photo gallery layout
- **Image Formats**: Support all image formats or just standard ones

### Advanced Features
- **Search Results**: Customize number of search results (default: 5)
- **RSS Footer Link**: Add RSS subscription link to footer
- **Hide Credits**: Remove theme attribution from footer

## Accessibility Features

This theme is built with accessibility as a priority:

- **WCAG 2.1 AA Compliant**: Meets accessibility guidelines
- **Keyboard Navigation**: Full keyboard navigation support
- **Focus Indicators**: Clear focus indicators for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Excellent color contrast ratios
- **Reduced Motion**: Respects user's motion preferences
- **Skip Links**: Allow jumping to main content

## Customization

### Using custom.css

The theme loads a `custom.css` file where you can add your own styles:

```css
/* Example customizations in static/custom.css */

/* Change accent color */
:root {
  --ctp-mauve: #c6a0f6;  /* Use Macchiato Mauve */
  --link: var(--ctp-mauve);
}

/* Adjust font sizes */
body {
  font-size: 1.9rem;
}

/* Customize spacing */
article {
  margin-bottom: 10rem;
}
```

### CSS Custom Properties

The theme uses CSS custom properties for easy theming. Key variables include:

- `--ctp-*`: All Catppuccin color variables
- `--background`: Main background color
- `--text`: Primary text color
- `--link`: Link color
- `--focus-ring`: Focus indicator color

### Font Customization

The theme uses GT Walsheim font family by default. To use different fonts, modify the `--sans-serif-font` variable:

```css
:root {
  --sans-serif-font: "Your Font", -apple-system, system-ui, sans-serif;
}
```

## Browser Support

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **CSS Grid & Flexbox**: Required for layout
- **CSS Custom Properties**: Required for theming
- **Progressive Enhancement**: Graceful degradation for older browsers

## Performance

- **Lightweight**: Minimal CSS and JavaScript
- **Optimized Images**: Responsive image support
- **Font Loading**: Optimized web font loading
- **CSS Bundling**: Single CSS file for fast loading

## Micro.blog Features

Full support for all Micro.blog features:

- **Micropub**: Publishing support
- **Webmentions**: Social interaction support
- **IndieAuth**: Authentication support
- **Photo Uploads**: Seamless photo integration
- **Podcast Support**: RSS feeds for podcasts
- **Cross-posting**: Social media syndication

## Development

To contribute to the theme:

1. Fork the repository
2. Make your changes
3. Test with a Micro.blog account
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Credits

- **Theme Author**: [j4ck.xyz](https://j4ck.xyz)
- **Color Palette**: [Catppuccin](https://catppuccin.com) by the Catppuccin community
- **Platform**: [Micro.blog](https://micro.blog) by Manton Reece
- **Static Site Generator**: [Hugo](https://gohugo.io)

## Support

For theme support and questions:

- Open an issue on the GitHub repository
- Contact the author via Micro.blog
- Visit the Catppuccin community Discord

- **Ported by**: [j4ck.xyz](https://j4ck.xyz)
- **Based on**: Original `mnml` Micro.blog theme
- **Color palette**: [Catppuccin Mocha](https://catppuccin.com/palette/)
- **Fonts**: GT Walsheim

This theme was created by porting the beautiful Catppuccin Mocha color palette to work with Micro.blog's theming system, maintaining the clean and minimal aesthetic of the original mnml theme.
