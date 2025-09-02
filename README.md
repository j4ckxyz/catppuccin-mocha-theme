# Catppuccin Mocha Theme for Micro.blog

A warm and cozy Micro.blog theme inspired by the Catppuccin Mocha color palette.

**Ported by [j4ck.xyz](https://j4ck.xyz) from the [Catppuccin color palettes](https://catppuccin.com/palette/)**

## Features

- **Catppuccin Mocha Colors**: Warm, cozy color scheme with excellent contrast
- **Dark Theme**: Optimized for dark mode with proper color contrast
- **Responsive Design**: Works beautifully on all devices
- **Minimal Layout**: Clean, distraction-free reading experience
- **Micro.blog Integration**: Full support for all Micro.blog features

## Color Palette

This theme uses the Catppuccin Mocha color palette:

- **Base**: `#1e1e2e` (Deep dark blue background)
- **Mantle**: `#181825` (Slightly lighter background)
- **Crust**: `#11111b` (Darkest background)
- **Text**: `#cdd6f4` (Soft white text)
- **Subtext 1**: `#bac2de` (Muted text)
- **Subtext 0**: `#a6adc8` (More muted text)
- **Overlay 2**: `#9399b2` (UI elements)
- **Overlay 1**: `#7f849c` (Secondary UI)
- **Overlay 0**: `#6c7086` (Tertiary UI)
- **Surface 2**: `#585b70` (Cards and containers)
- **Surface 1**: `#45475a` (Secondary surfaces)
- **Surface 0**: `#313244` (Tertiary surfaces)
- **Blue**: `#89b4fa` (Links and accents)
- **Sapphire**: `#74c7ec` (Link hover)
- **Green**: `#a6e3a1` (Code highlighting)
- **Red**: `#f38ba8` (Error states)
- **Peach**: `#fab387` (Warnings)
- **Yellow**: `#f9e2af` (Highlights)
- **Pink**: `#f5c2e7` (Special elements)
- **Mauve**: `#cba6f7` (Interactive elements)

## Installation

1. Copy the `catppuccin-mocha` folder to your Micro.blog themes directory
2. In your Micro.blog admin panel, go to Design → Themes
3. Select "Catppuccin Mocha" from the available themes
4. Customize the theme options as needed

## Configuration Options

The theme supports all standard Micro.blog theme configuration options:

- Site Language
- Fediverse creator
- Short date format
- Narrow header
- Avatar settings
- Category filtering
- Post display options
- Photo gallery settings
- Search configuration
- Footer options

## Customization

The theme uses CSS custom properties (variables) for easy customization. To modify colors, edit the `:root` section in `static/css/main.css`:

```css
:root {
  /* Modify these variables to customize colors */
  --background: var(--base);
  --text-color: var(--text);
  --link: var(--blue);
  --link-hover: var(--sapphire);
  --accent-1: var(--mantle);
  --accent-2: var(--surface0);
  --accent-3: var(--overlay0);
  --highlight: var(--surface1);
}
```

## Browser Support

- Modern browsers with CSS custom properties support
- Dark mode support
- Responsive design for mobile and desktop

## License

This theme is released under the MIT License.

## Credits

- **Ported by**: [j4ck.xyz](https://j4ck.xyz)
- **Based on**: Original `mnml` Micro.blog theme
- **Color palette**: [Catppuccin Mocha](https://catppuccin.com/palette/)
- **Fonts**: GT Walsheim

This theme was created by porting the beautiful Catppuccin Mocha color palette to work with Micro.blog's theming system, maintaining the clean and minimal aesthetic of the original mnml theme.
