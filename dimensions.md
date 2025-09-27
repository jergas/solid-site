# Project Dimensions & Measurements

This file documents all the CSS properties that control the dimensions, spacing, and positioning of elements in the project.

## File: `src/routes/+page.svelte`

### Header (`<header>`)
- `padding: 2rem;` - Inner spacing of the header.
- `margin: 0 1%;` - Outer spacing, creating a gap from the window edges.
- `top: 0;` - Part of `position: sticky`, ensures the header sticks to the very top.

### Logo (`.logo img`)
- `width: 200px;` - The explicit width of the logo image.

### Menu Icon (`.menu-icon`)
- `font-size: 2rem;` - Controls the size of the Font Awesome icon.

### Main Content Area (`<main>`)
- `padding: 2rem;` - Inner spacing for the main content area that holds the banners.

### Grid of Banners (`.grid`)
- `gap: 3rem;` - The vertical spacing between each banner.

### Individual Banners (`.grid-item`)
- `width: 90%;` - Makes each banner take up 90% of the main container's width.
- `max-width: 1300px;` - The maximum width a banner can be on very large screens.
- `box-shadow: 17px 17px 2px rgba(0, 0, 0, 0.3);` - Creates the shadow effect (x-offset, y-offset, blur).
- `border-radius: 40px;` - Controls the roundness of the banner corners.
- `/* border: 3px solid lightgray; */` - A commented-out property for a border around the banner.

### Banner Hover Effect (`.grid-item:hover img`)
- `transform: scale(1.05);` - Scales the banner's image up by 5% on hover.

### Banner Title Overlay (`.title`)
- `top: 0;` - Positions the title overlay at the top of its container.
- `left: 0;` - Positions the title overlay at the left of its container.
- `width: 100%;` - Makes the title overlay span the full width of the banner.
- `height: 100%;` - Makes the title overlay span the full height of the banner.
- `padding: 1.5rem;` - Inner spacing for the title text, pushing it away from the corner.
- `font-size: 2rem;` - The size of the title's text.
