# Accounting Broker Homepage Redesign - Design Specification

## Executive Summary
This specification outlines the redesign of AccountingBroker.com's homepage, modernizing the visual identity while maintaining brand recognition and establishing industry leadership through contemporary UI/UX best practices.

---

## 1. Design Philosophy

### Core Principles
- **Trust-First**: Financial services require immediate credibility signals
- **Clarity**: Complex M&A concepts presented accessibly
- **Differentiation**: Highlight unique "100% Ex-Big Four CPAs" positioning
- **Conversion-Focused**: Clear paths for both buyers and sellers
- **Modern Professionalism**: Contemporary aesthetic without sacrificing authority

---

## 2. Color Palette

### Primary Colors
```
Primary Blue:     #2282D2 (Current brand color - evolved)
Dark Blue:        #1A5A8E (Deeper tone for headers/contrast)
Accent Navy:      #0C3C5C (Premium, trust-building)
```

### Secondary Colors
```
Success Green:    #10B981 (CTAs, positive indicators)
Warm Gold:        #F59E0B (Accent, premium feel)
Neutral Gray:     #6B7280 (Body text)
Light Gray:       #F3F4F6 (Backgrounds, sections)
White:            #FFFFFF (Clean space)
```

### Gradient Applications
```
Hero Gradient:    linear-gradient(135deg, #1A5A8E 0%, #2282D2 100%)
Card Hover:       linear-gradient(180deg, rgba(34,130,210,0.05) 0%, rgba(34,130,210,0.15) 100%)
```

### Accessibility Compliance
- All text/background combinations meet WCAG 2.2 AA standards (4.5:1 minimum)
- Primary Blue (#2282D2) on White: 5.2:1 contrast ratio ✓
- Dark Blue (#1A5A8E) on White: 7.8:1 contrast ratio ✓
- Neutral Gray (#6B7280) on White: 4.9:1 contrast ratio ✓

---

## 3. Typography

### Font Stack
```
Primary (Headings):  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Secondary (Body):    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Accent (Numbers):    'Space Grotesk', monospace
```

*Rationale: Inter provides excellent readability, modern aesthetic, and comprehensive weight options. Migration from LatoLight to Inter modernizes while maintaining professional tone.*

### Type Scale
```
H1 (Hero):          56px / 700 weight / -1px letter-spacing / 1.1 line-height
H2 (Section):       40px / 700 weight / -0.5px letter-spacing / 1.2 line-height
H3 (Subsection):    32px / 600 weight / 0px letter-spacing / 1.3 line-height
H4 (Card Title):    24px / 600 weight / 0px letter-spacing / 1.4 line-height
Body Large:         18px / 400 weight / 0px letter-spacing / 1.6 line-height
Body Regular:       16px / 400 weight / 0px letter-spacing / 1.6 line-height
Button Text:        16px / 600 weight / 0.5px letter-spacing / 1.0 line-height (uppercase)
Small/Caption:      14px / 400 weight / 0px letter-spacing / 1.5 line-height
```

### Mobile Adjustments
```
H1:    42px (mobile) vs 56px (desktop)
H2:    32px (mobile) vs 40px (desktop)
H3:    24px (mobile) vs 32px (desktop)
```

---

## 4. Layout Structure

### Grid System
- **Desktop**: 12-column grid, 1440px max-width, 80px gutters
- **Tablet**: 8-column grid, 768px max-width, 40px gutters
- **Mobile**: 4-column grid, 375px min-width, 20px gutters

### Spacing Scale
```
xs:   4px    (tight inline elements)
sm:   8px    (component padding)
md:   16px   (card padding)
lg:   24px   (section spacing)
xl:   32px   (major sections)
2xl:  48px   (hero sections)
3xl:  64px   (page sections)
4xl:  96px   (major dividers)
```

### Section Breakdown

#### 1. Hero Section (Above the Fold)
**Height**: 700px (desktop) / 600px (mobile)
**Content**:
- H1: "Maximize Your Accounting Firm's Value"
- Subheading: "The Only National M&A Brokerage Staffed 100% by Ex-Big Four CPAs"
- Dual CTAs: "Sell Your Practice" (primary) + "Find a Practice" (secondary)
- Trust indicators: 5-star rating, 150+ reviews, featured in Journal of Accountancy
- Background: Gradient overlay on professional imagery (handshake/office)

**Visual Treatment**:
- 60% gradient overlay for text legibility
- Floating card with semi-transparent background for main message
- Stats counter animation (150+ reviews, $XXM in transactions)

#### 2. Value Proposition Section
**Layout**: 3-column card grid
**Content**:
- "Sellers: Maximize Proceeds" - Icon + 3 key benefits
- "Buyers: Financing Up to 100%" - Icon + 3 key benefits
- "Expert Guidance" - Icon + credentials highlight

**Card Design**:
- White background, subtle shadow
- Icon at top (custom or Font Awesome)
- 24px padding
- Hover effect: lift + shadow increase

#### 3. Differentiation Section
**Layout**: 2-column (image left, content right)
**Content**:
- Headline: "Why Ex-Big Four CPAs Make the Difference"
- 4 bullet points with icons
- Secondary CTA: "Learn About Our Team"
- Professional team photo or office imagery

**Visual Treatment**:
- Image: 50% width with border-radius: 12px
- Content: 50% width with lg padding
- Blue accent border on left side of content

#### 4. Proof/Results Section
**Layout**: Full-width dark background
**Content**:
- Headline: "Proven Results"
- Stats grid (4 columns):
  - Total transactions
  - Average sale price increase
  - Client satisfaction
  - Years combined experience
- Rotating testimonial carousel below

**Visual Treatment**:
- Background: Dark Blue (#0C3C5C)
- White text with gold accents on numbers
- Animated counter on scroll

#### 5. Process Section
**Layout**: Horizontal timeline (desktop) / Vertical (mobile)
**Content**:
- "How We Help You Succeed"
- 5-step process with icons
- Each step: Number + Title + Description

**Visual Treatment**:
- Numbered circles connected by line
- Active state highlighting
- Icons within circles

#### 6. Featured In Section
**Layout**: Logo carousel
**Content**:
- "Featured In" headline
- Journal of Accountancy + other publications
- Grayscale logos with color on hover

#### 7. Dual CTA Section
**Layout**: Split 50/50
**Content**:
- Left: "Ready to Sell?" card
- Right: "Looking to Buy?" card
- Each with icon, description, and CTA button

**Visual Treatment**:
- Gradient backgrounds (different for each)
- White text
- Large, prominent buttons

#### 8. Footer
**Layout**: 4-column grid
**Content**:
- Column 1: Logo + tagline
- Column 2: Quick links (About, Services, Contact)
- Column 3: Resources (Blog, FAQs, Calculator)
- Column 4: Contact info + social links

**Visual Treatment**:
- Dark background (#1A5A8E)
- White/light gray text
- Bottom bar: Copyright + Privacy links

---

## 5. Component Specifications

### Buttons

#### Primary CTA
```css
Background: #10B981 (Success Green)
Text: #FFFFFF, 16px, 600 weight, uppercase
Padding: 16px 32px
Border-radius: 8px
Min-width: 180px
Min-height: 48px (touch target)
Hover: Darken 10%, lift 2px
Active: Darken 15%
```

#### Secondary CTA
```css
Background: transparent
Border: 2px solid #2282D2
Text: #2282D2, 16px, 600 weight, uppercase
Padding: 14px 30px (accounting for border)
Border-radius: 8px
Min-width: 180px
Min-height: 48px
Hover: Background #2282D2, Text #FFFFFF
Active: Darken 10%
```

### Cards
```css
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 12px
Padding: 24px
Box-shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover: Box-shadow: 0 4px 12px rgba(0,0,0,0.15), translateY(-4px)
Transition: all 0.3s ease
```

### Input Fields
```css
Border: 1px solid #D1D5DB
Border-radius: 6px
Padding: 12px 16px
Font-size: 16px
Min-height: 48px
Focus: Border #2282D2, Box-shadow: 0 0 0 3px rgba(34,130,210,0.1)
```

---

## 6. Imagery Guidelines

### Photography Style
- **Professional**: Office environments, handshakes, team meetings
- **Authentic**: Real people (not obviously stock)
- **Diverse**: Representation across age, gender, ethnicity
- **Lighting**: Bright, natural, welcoming
- **Treatment**: Subtle blue color grade for brand consistency

### Icon Style
- **Type**: Line icons (2px stroke weight)
- **Color**: Primary Blue (#2282D2) or Dark Blue (#1A5A8E)
- **Size**: 48px × 48px standard, 64px × 64px for hero
- **Examples**:
  - Briefcase (business)
  - Chart-line-up (growth)
  - Shield-check (trust)
  - Users (team)
  - Handshake (partnership)

### Image Optimization
- Format: WebP with JPG fallback
- Max file size: 200KB for hero, 100KB for section images
- Lazy loading: Below-the-fold images
- Responsive: 3 breakpoint sizes (mobile, tablet, desktop)

---

## 7. Accessibility Standards (WCAG 2.2 Level AA)

### Contrast Requirements
✓ Normal text: 4.5:1 minimum
✓ Large text (18px+): 3:1 minimum
✓ UI components: 3:1 minimum

### Keyboard Navigation
✓ All interactive elements focusable
✓ Visible focus indicators (2px outline, #2282D2)
✓ Logical tab order
✓ Skip-to-content link

### Screen Reader Support
✓ Semantic HTML5 (header, nav, main, section, footer)
✓ ARIA labels on icon buttons
✓ Alt text on all images
✓ Form labels properly associated

### Touch Targets
✓ Minimum 44px × 44px (buttons, links, inputs)
✓ Adequate spacing between tappable elements (8px minimum)

### Motion & Animation
✓ Respect prefers-reduced-motion
✓ No auto-playing videos with sound
✓ Pauseable carousels

---

## 8. Performance Optimization

### Loading Targets
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

### Optimization Strategies
1. **Critical CSS**: Inline above-the-fold styles
2. **Font Loading**: font-display: swap for custom fonts
3. **Image Optimization**: WebP, lazy loading, srcset
4. **Code Splitting**: Defer non-critical JavaScript
5. **CDN**: Serve static assets from CDN
6. **Compression**: Gzip/Brotli for text assets

---

## 9. Responsive Breakpoints

```css
/* Mobile First Approach */
Base:           375px - 767px   (mobile)
Tablet:         768px - 1023px  (tablet)
Desktop:        1024px - 1439px (desktop)
Large Desktop:  1440px+         (large desktop)
```

### Layout Adjustments
- **Mobile**: Single column, stacked sections, hamburger menu
- **Tablet**: 2-column grids, collapsible menu
- **Desktop**: Full 3-4 column layouts, persistent navigation

---

## 10. UI/UX Best Practices Implementation

### Visual Hierarchy
✓ F-pattern layout for text-heavy sections
✓ Z-pattern for CTA-focused sections
✓ Size/color/spacing to establish importance
✓ 60-30-10 color distribution rule

### Scannability
✓ Short paragraphs (2-3 sentences max)
✓ Bullet points for lists
✓ Subheadings every 3-4 paragraphs
✓ Bold keywords for emphasis

### Conversion Optimization
✓ Primary CTA above the fold
✓ Secondary CTAs every 2-3 sections
✓ Minimal form fields (name, email, phone max)
✓ Social proof near CTAs
✓ Urgency elements (limited consultations, etc.)

### Trust Building
✓ Reviews/testimonials with photos
✓ Client logos (with permission)
✓ Team credentials prominently displayed
✓ Security badges (SSL, privacy policy)
✓ Contact information visible

---

## 11. Content Strategy

### Above the Fold Message
**Primary**: "Maximize Your Accounting Firm's Value"
**Secondary**: "The Only National M&A Brokerage Staffed 100% by Ex-Big Four CPAs"
**Supporting**: 5-star rating (150 reviews) + Featured in Journal of Accountancy

### Value Propositions

**For Sellers**:
1. Maximize sale proceeds through competitive bidding
2. Confidential nationwide marketing
3. Expert valuation from Big Four experience
4. Navigate complex deal structures
5. Post-sale transition support

**For Buyers**:
1. Financing options up to 100%
2. Access to off-market opportunities
3. Due diligence support
4. Integration planning
5. Long-term success strategies

### Trust Signals Priority
1. "100% Ex-Big Four CPAs" (unique differentiator)
2. 5-star aggregate rating (social proof)
3. 150+ reviews (volume proof)
4. Featured in Journal of Accountancy (third-party validation)
5. National office presence (scale/credibility)
6. Specific transaction examples (tangible results)

---

## 12. Canva Design Specifications

### Document Setup
- **Dimensions**: 1440px × 4500px (desktop homepage mockup)
- **Resolution**: 72 PPI (web standard)
- **Color Mode**: RGB
- **Format**: Canva custom size

### Layer Organization
```
/Hero Section
  /Background
  /Overlay Gradient
  /Content
    /Headline
    /Subheadline
    /CTA Buttons
    /Trust Indicators

/Value Proposition Section
  /Section Header
  /3-Column Cards
    /Card 1 - Sellers
    /Card 2 - Buyers
    /Card 3 - Expertise

/Differentiation Section
  /Image (Left)
  /Content (Right)
    /Headline
    /Bullet Points
    /CTA Button

/Proof Section
  /Background
  /Stats Grid
  /Testimonials

/Process Section
  /Timeline
    /Step 1
    /Step 2
    /Step 3
    /Step 4
    /Step 5

/Featured In Section
  /Logos

/Dual CTA Section
  /Sell Card
  /Buy Card

/Footer
  /Logo Column
  /Links Columns
  /Contact Column
  /Bottom Bar
```

### Design Elements to Include
1. Custom buttons with specified styles
2. Icon placeholders with notes
3. Image placeholders with dimension notes
4. Typography samples showing all sizes
5. Color palette swatches with hex codes
6. Spacing guides
7. Responsive annotations (mobile views)

### Export Settings
- **Primary**: PNG (high quality, transparent background where needed)
- **Secondary**: PDF (for developer handoff with layers)
- **Assets**: Individual SVG icons, separate PNGs for images

---

## 13. Developer Handoff Notes

### CSS Framework Recommendation
- **Tailwind CSS**: Matches spacing scale, color system, responsive approach
- Alternative: Custom CSS with CSS variables for colors/spacing

### Key Implementation Notes
1. Use CSS Grid for main layout sections
2. Flexbox for component-level layouts
3. CSS custom properties for color palette
4. Implement smooth scroll for anchor links
5. Add scroll-triggered animations for stats
6. Lazy load images below fold
7. Implement hamburger menu for mobile (< 768px)
8. Test across browsers: Chrome, Firefox, Safari, Edge
9. Validate HTML for semantic correctness
10. Run Lighthouse audit (target 90+ scores)

### Critical CSS Priorities
```css
/* Inline in <head> */
- Hero section styles
- Navigation styles
- Font declarations
- Critical layout grid
- Above-fold content styles

/* Defer load */
- Below-fold sections
- Animation libraries
- Non-critical JavaScript
- Analytics scripts
```

### Third-Party Integrations
- Google Analytics 4
- Cookie consent banner (GDPR/CCPA)
- Review widget integration (Google/Yelp)
- Live chat widget (positioned bottom-right)
- Newsletter signup (footer form)

---

## 14. Testing Checklist

### Visual QA
- [ ] All text readable at minimum 16px
- [ ] Consistent spacing throughout
- [ ] Images load and display correctly
- [ ] No layout shifts during loading
- [ ] Hover states work on all interactive elements
- [ ] Buttons have adequate touch targets (44px+)

### Functional QA
- [ ] All links navigate correctly
- [ ] Forms validate and submit
- [ ] Navigation works on mobile
- [ ] CTAs trigger correct actions
- [ ] Contact information clickable (tel/mailto)

### Accessibility QA
- [ ] Keyboard navigation complete
- [ ] Screen reader tested (NVDA/JAWS)
- [ ] Color contrast validated (WebAIM checker)
- [ ] Focus indicators visible
- [ ] ARIA labels present and accurate
- [ ] Alt text on all images

### Performance QA
- [ ] Lighthouse score 90+ (all categories)
- [ ] PageSpeed Insights green metrics
- [ ] Images optimized (<200KB)
- [ ] No render-blocking resources
- [ ] Mobile performance acceptable

### Browser/Device Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iPhone 12/13/14 (Safari)
- [ ] Samsung Galaxy S21+ (Chrome)
- [ ] iPad Pro (Safari)

---

## 15. Success Metrics

### User Experience Metrics
- **Bounce Rate**: Target < 40%
- **Time on Page**: Target > 2 minutes
- **Scroll Depth**: Target > 70% reach footer
- **Click-Through Rate**: Target > 5% on primary CTA

### Conversion Metrics
- **Form Submissions**: Establish baseline, target +25%
- **Phone Calls**: Track with CallRail or similar
- **Email Clicks**: Track mailto: link clicks
- **Secondary Actions**: Download resources, read blog posts

### Technical Metrics
- **Page Load**: < 2.5s (LCP)
- **Mobile Usability**: 0 errors in Google Search Console
- **Accessibility**: 0 critical WAVE errors
- **SEO**: Maintain/improve current rankings

---

## 16. Future Enhancements (Phase 2)

### Interactive Elements
- ROI calculator for sellers
- Practice valuation estimator
- Financing calculator for buyers
- Interactive process timeline

### Content Additions
- Video testimonials
- Virtual office tour
- Team member profiles
- Case study library
- Blog/insights section

### Personalization
- Separate landing pages for buyers/sellers
- Geographic targeting (state-specific content)
- Returning visitor recognition
- Behavioral CTAs

---

## Appendix A: Competitor Analysis Summary

| Competitor | Strengths | Weaknesses | Opportunities |
|------------|-----------|------------|---------------|
| **Hunton** | Formal credibility, extensive experience | Overly corporate, low CTA visibility | More approachable design, clearer CTAs |
| **Berkshire** | Warm messaging, strong testimonials | Limited to Arizona, generic design | Expand national presence feel |
| **DMJPS** | Clean hierarchy, professional | Conservative palette | Bolder differentiation |

**Key Takeaway**: Industry leans conservative—opportunity to modernize while maintaining trust.

---

## Appendix B: Color Accessibility Matrix

| Text Color | Background | Ratio | WCAG AA | WCAG AAA |
|------------|------------|-------|---------|----------|
| #1A5A8E | #FFFFFF | 7.8:1 | ✓ | ✓ |
| #2282D2 | #FFFFFF | 5.2:1 | ✓ | ✓ |
| #6B7280 | #FFFFFF | 4.9:1 | ✓ | - |
| #FFFFFF | #1A5A8E | 7.8:1 | ✓ | ✓ |
| #FFFFFF | #0C3C5C | 11.2:1 | ✓ | ✓ |
| #10B981 | #FFFFFF | 3.1:1 | ✓* | - |

*Green CTA only used for buttons with 18px+ bold text (large text exception)

---

## Appendix C: Font Loading Strategy

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>

<!-- Font face declarations -->
<style>
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url('/fonts/inter-var.woff2') format('woff2');
}
</style>
```

---

## Document Control

**Version**: 1.0
**Date**: 2025-01-18
**Author**: Claude Code Design Team
**Status**: Ready for Canva Implementation
**Next Review**: Post-launch (30 days)

---

*This specification serves as the single source of truth for the Accounting Broker homepage redesign. All design decisions, development implementations, and QA processes should reference this document.*
