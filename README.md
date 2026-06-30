# nuykeeh Portfolio Template

A minimalist, editorial-style portfolio for UX/UI & New Media designers, inspired by ag.co.kr.

## Structure
- `index.html`: Main landing page with animated text hero, carousel, and project grid.
- `css/style.css`: All styling using CSS variables and modern layout (Grid/Flexbox).
- `js/script.js`: Interactive elements (Marquee text cycling, Carousel logic, Scroll reveals).

## How to Customize
1. **Images**: Search for `.placeholder-img` in `index.html` and replace them with `<img>` tags or update the background-image in CSS.
2. **Projects**: The `archive-grid` contains project cards. To add more, copy an `<article class="project-card">` block.
3. **Animated Text**: Open `js/script.js` and edit the `textArr` array inside the `initMarquee` function to change the hero slogans.

## Deployment
This project is ready for **GitHub Pages**. Simply upload the entire `nuykeeh_portfolio` folder (or its contents) to your repository.
