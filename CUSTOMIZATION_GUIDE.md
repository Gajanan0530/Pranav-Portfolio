# 🎨 Portfolio Customization Guide

This guide will help you customize your new portfolio website to match your personal brand and showcase your unique skills and experiences.

## 🚀 Quick Start

1. **Install dependencies** (you'll need to run this in your terminal):
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## 📝 Essential Customizations

### 1. Update Personal Information

**File**: `src/data/constants.ts`

Replace the placeholder values with your actual information:

```typescript
export const PROFILE = {
  name: 'Your Full Name',           // e.g., "John Doe"
  shortName: 'Your Short Name',     // e.g., "John"
  alias: 'YourAlias',               // e.g., "JD"
  title: 'Your Professional Title', // e.g., "Full Stack Developer"
  email: 'your.email@example.com',
  phone: '+1234567890',
  website: 'www.yourwebsite.com',
  blogHost: 'yourblog.hashnode.dev',
} as const;
```

### 2. Update Social Media Links

**File**: `src/data/constants.ts`

Update the `SOCIAL_LINKS` array with your actual profiles:

```typescript
export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yourprofile/',
  },
  // ... other social links
];
```

### 3. Customize Hero Section Roles

**File**: `src/components/HeroSection.tsx`

Update the `roles` array with your actual professional titles:

```typescript
const roles = [
  'Frontend Developer',
  'Backend Engineer', 
  'Full-Stack Developer',
  'Software Architect',
];
```

## 📂 Section-by-Section Customization

### About Section

**File**: `src/components/AboutSection.tsx`

Update the paragraphs to tell your unique story. Focus on:
- Your passion and motivation
- Your technical approach and philosophy
- What makes you unique as a developer

### Experience Section

**File**: `src/components/ExperienceSection.tsx`

Replace the placeholder experiences with your actual work history:

```typescript
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: '[START DATE – END DATE]',
    description: 'Describe your responsibilities and achievements...',
  },
  // Add more experiences...
];
```

### Projects Section

**File**: `src/components/ProjectsSection.tsx`

Replace the placeholder projects with your actual work:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    isNew: true, // Set to true for your latest project
    description: 'Brief description of what the project does...',
    tags: ['React', 'TypeScript', 'Node.js'], // Technologies used
    githubUrl: 'https://github.com/yourusername/project-repo',
    liveUrl: 'https://your-project-demo.vercel.app',
  },
  // Add more projects...
];
```

### Skills Section

**File**: `src/components/SkillsSection.tsx`

Update the skill categories and technologies to match your actual skillset.

## 🎨 Design Customizations

### Colors and Theme

The portfolio uses a neo-brutalist design with:
- **Primary Colors**: Black and white with high contrast
- **Accent Colors**: Blue, green, orange for skill categories
- **Typography**: Mono fonts for headers, clean sans-serif for body

To modify colors, edit the Tailwind classes in the components.

### Animations

The portfolio includes several interactive elements:
- **Matrix Rain Effect**: In the hero section (HeroSection.tsx)
- **Typewriter Effect**: For role titles (HeroSection.tsx)
- **Magnetic Effects**: On interactive elements (Magnetic.tsx)
- **Custom Cursor**: Throughout the site (CustomCursor.tsx)

## 🔧 Advanced Customizations

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update the navigation in `src/components/Navbar.tsx` if needed

### Terminal Commands

**File**: `src/components/Terminal.tsx`

Customize the available terminal commands to showcase additional information about yourself.

### GitHub Integration

**File**: `src/components/GithubGraph.tsx`

Update the GitHub username to display your actual contribution graph.

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

Test your customizations on different screen sizes to ensure everything looks good.

## 🚀 Deployment

When you're ready to deploy:

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Preview the build**:
   ```bash
   npm run preview
   ```

3. **Deploy to your preferred platform**:
   - **Vercel**: Connect your GitHub repository
   - **Netlify**: Drag and drop the dist folder
   - **GitHub Pages**: Use the `gh-pages` branch

## 🐛 Troubleshooting

### Common Issues

1. **Dependencies not found**: Run `npm install`
2. **TypeScript errors**: Check that all imports are correct
3. **Build fails**: Check for syntax errors in your customizations
4. **Styles not applying**: Ensure Tailwind classes are correct

### Getting Help

- Check the original repository for reference
- Review the React and TypeScript documentation
- Test changes incrementally

## 📝 Final Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information
- [ ] Replaced placeholder projects with real ones
- [ ] Updated social media links
- [ ] Customized the About section
- [ ] Added your actual work experience
- [ ] Tested on different screen sizes
- [ ] Checked all links work correctly
- [ ] Built successfully without errors

---

🎉 **Congratulations!** You now have a customized portfolio that showcases your unique skills and experiences as a developer.
