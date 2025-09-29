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

---

## File: `src/lib/Menu.svelte`

### Menu Container (`.menu-container`)
- `top: 100%;` - Positions the top of the menu box at the bottom of its parent (the icon wrapper).
- `right: 63px;` - Positions the right edge of the menu 63px from the right edge of its parent.
- `transform: translateY(-25px);` - Shifts the menu box upwards by 25px.
- `padding: 2rem;` - The inner spacing of the menu box.
- `width: 220px;` - The explicit width of the menu box.
- `border: 2px solid black;` - The thickness of the border around the menu box.

### Triangle Pointer (White Fill - `::before`)
- `top: 0px;` - Aligns the pointer with the top of the menu box.
- `right: -20px;` - Pushes the pointer outside the right edge of the menu box.
- `border-width: 10px;` - Controls the size of the white part of the pointer.

### Triangle Pointer (Black Border - `::after`)
- `top: -2px;` - Aligns the pointer's border with the menu box's border.
- `right: -24px;` - Pushes the pointer's border outside the menu box.
- `border-width: 11px;` - Controls the size and thickness of the pointer's border.

### Menu Links (`nav li` and `nav a`)
- `margin-bottom: 2rem;` - The vertical spacing between each menu link.
- `font-size: 2rem;` - The size of the menu link text.
- `letter-spacing: 2px;` - The spacing between letters in the menu links.

### Social Icons (`.social-icons` and `.social-icons a`)
- `margin-top: 3rem;` - The space between the last menu link and the social icons.
- `font-size: 2.5rem;` - The size of the social media icons.
- `margin: 0 1.5rem;` - The horizontal spacing between the social media icons.
