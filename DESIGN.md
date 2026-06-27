# Next Wave Agentic - Visual Design Language & System Guide

This document defines the brand's visual design guidelines, design tokens, and CSS layout utilities for **Next Wave Agentic**. AI coding agents and human developers must read and strictly adhere to these rules when styling new features, components, or pages.

---

## 1. Core Color System (Design Tokens)

The site utilizes a premium cinematic dark theme configured in Tailwind v4 (`app/globals.css`). Never use standard browser primary colors. Always rely on these defined tokens:

### Custom Palette Tokens
| Token Variable | Hex Value | Semantic / Visual Role |
| :--- | :--- | :--- |
| `background` | `#000000` | Core page body background |
| `foreground` | `#cfc8cf` | Primary body text (Cool White) |
| `--color-neon-pink` | `#fc05b9` | Active highlights, highlights, active hover states, and primary dots |
| `--color-neon-blue` | `#4e79a7` | Muted secondary buttons, borders, and structural items |
| `--color-night-navy` | `#201e30` | Core card backgrounds, panels, and deep section containers |
| `--color-muted-indigo` | `#3f395b` | Heavy borders, divider lines, and composer backgrounds |
| `--color-cool-white` | `#cfc8cf` | Primary text and white label borders |
| `--color-deep-pink-purple` | `#84596c` | Sub-branding highlight and tertiary color |

---

## 2. Typography Guidelines

- **Primary Font Family**: `Exo 2` (Google Fonts, sans-serif).
- **Subheadings, Body, and Accents**: Must also use `Exo 2` to keep typography consistent.
- **Letter Spacing & Headings**:
  - Headings (`h1`, `h2`, `h3`, etc.) are styled with `font-weight: 600` and `letter-spacing: -0.02em` for a condensed, modern agency visual weight.
  - Body paragraphs use `text-wrap: pretty` to avoid lone words on single lines.
  - Kicker text (`.agency-kicker`) uses uppercase letters with `letter-spacing: 0.28em` and `font-size: 0.72rem` for technical visual hierarchies.

---

## 3. Layout Panels & Backgrounds

Ensure pages utilize standard background and panel containers for cohesive page flow:

### A. Body Background Radial Glows
Every page inherits a dark radial gradient gradient representing ambient purple and blue lighting:
- **Top-left ambient blue glow**: `radial-gradient(circle at top left, rgba(78, 121, 167, 0.16), transparent 28%)`
- **Top-right ambient pink glow**: `radial-gradient(circle at 80% 15%, rgba(252, 5, 185, 0.14), transparent 24%)`

### B. Shell Containers (`.agency-shell`)
Use `.agency-shell` for full-width structural blocks (such as capabilities grids, process summaries, and CTAs):
- **Borders**: Top `1px solid rgba(63, 57, 91, 0.55)` (Muted Indigo); Bottom `1px solid rgba(63, 57, 91, 0.3)`.
- **Background**: Linear gradient transitioning to black overlaying a deep container:
  `linear-gradient(180deg, rgba(32, 30, 48, 0.4), rgba(0, 0, 0, 0)), rgba(0, 0, 0, 0.88)`

### C. Glassmorphic Panels (`.agency-panel`)
Use `.agency-panel` for cards, modals, grids, and callouts:
- **Borders**: `1px solid rgba(207, 200, 207, 0.1)`
- **Background**: Liquid-glass gradient:
  `linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01)), rgba(14, 13, 22, 0.82)`
- **Shadows & Filters**: `box-shadow: 0 18px 60px rgba(0, 0, 0, 0.28)` paired with `backdrop-filter: blur(14px)`.

---

## 4. UI Elements & Layout Patterns

### A. Section Kickers (`.agency-kicker`)
For headings, prefix them with a tracked, uppercase category kicker. In HTML:
```html
<p class="agency-kicker">Capabilities</p>
```
CSS provides a sleek gradient prefix line:
```css
.agency-kicker::before {
  content: "";
  width: 2.5rem;
  height: 1px;
  background: linear-gradient(90deg, rgba(252, 5, 185, 0.8), rgba(78, 121, 167, 0.45));
}
```

### B. Dynamic Action Buttons
Use cohesive button styles matching the brand:
- **Primary Buttons**: Round elements styled with background color `bg-[#4E79A7]` (Neon Blue), white text, and transition hover states.
- **Secondary Buttons**: Transparent with borders `border-white/10` and background opacity `bg-white/5` transitioning to `hover:bg-white/10`.

### C. Native Disclosures / Accordions
When building accordions (such as FAQs), rely on native HTML `<details>` and `<summary>` components to maintain bundle performance:
- Style the wrapper border as `border-[#3F395B]/30` (Muted Indigo) and cards background as `bg-[#201e30]/30` (Night Navy).
- Add rotate transitions to the chevron indicators: `transition-transform duration-300 group-open:rotate-180`.
- An exclusive set can be declared with `name="some-name"` to naturally close other toggles.

---

## 5. Coding Guidelines for AI Agents

1. **Do Not Introduce Custom CSS Colors**: Only use variables declared under `@theme` (e.g. `bg-neon-pink`, `text-night-navy`, `border-muted-indigo`).
2. **Support Fluid Layouts**: Always pair tailwind utility classes (e.g. `p-6 sm:p-8`, `max-w-7xl mx-auto px-4`) to support desktop, tablet, and mobile dimensions.
3. **Respect Glassmorphic Depth**: Ensure floating elements (like `chat-modal` or dropdown panels) have `backdrop-filter: blur(10px)` and background mixed with transparent values.
4. **Interactive Hovers**: Every clickable icon or text should have micro-animations (such as `transition-all duration-200 hover:brightness-90` or `hover:scale-105` transitions).
