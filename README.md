# CodeEvolution – Interactive 3D Portfolio

**Author:** Adrián Nuhacet  
**Project:** CodeEvolution  
**Description:** An immersive, interactive 3D web portfolio narrating the evolution of a full-stack developer into an AI orchestrator. Built with Next.js 14, TypeScript, Three.js (React Three Fiber), and a modern, atomic design system.

---

## 🚀 Project Structure & Conventions

This project follows a modular, atomic design system optimized for maintainability, scalability, and high-performance 3D experiences.

```
src/
├── app/                    # Next.js App Router (entrypoints, layouts, pages)
├── components/
│   ├── 3d/                # Three.js/R3F atomic 3D components (meshes, controls)
│   ├── ui/                # General UI atoms/molecules (buttons, cards)
│   └── layout/            # Layout components (header, footer, navigation)
├── scenes/                # Modular 3D narrative scenes (scene1-desktop, scene2-evolution, etc.)
├── hooks/                 # Custom React hooks (useScene3D, useAnimation, etc.)
├── utils/                 # Utility functions (animation-utils, model-loader)
├── types/                 # TypeScript type definitions (SceneProps, ProjectData)
├── data/                  # Static data (projects, bio, hotspots)
└── public/
    ├── models/            # 3D assets (.glb, .gltf)
    └── textures/          # Optimized textures (webp, avif)
```

### 📦 Atomic Design Principles

- **Atoms:** Smallest UI/3D units (Button, Mesh, Light)
- **Molecules:** Combinations of atoms (ProjectCard, InfoHotspot)
- **Organisms:** Complex UI/3D assemblies (NavigationMenu, Scene3D)
- **Templates/Pages:** Scene layouts and Next.js routes

### 🗂️ File Naming Conventions

| Entity              | Convention                | Example                       |
|---------------------|--------------------------|-------------------------------|
| Components          | PascalCase               | `Scene3D.tsx`, `ProjectCard.tsx` |
| Files               | kebab-case               | `hero-scene.tsx`, `project-data.ts` |
| Hooks               | camelCase, `use` prefix  | `useScene3D.ts`, `useHotspots.ts` |
| Types/Interfaces    | PascalCase + Suffix      | `SceneProps.ts`, `ProjectData.ts` |
| Constants           | SCREAMING_SNAKE_CASE     | `SCENE_DURATION`, `API_ENDPOINTS` |
| Three.js objects    | descriptive camelCase    | `mainCamera`, `heroMesh`      |

- **Absolute imports** via `@/` alias (e.g. `import { Scene3D } from '@/components/3d'`)
- **Barrel exports** (`index.ts`) in each folder for clean imports
- **Dynamic imports** for heavy 3D components

### 🛠️ Tooling & Quality

- **TypeScript:** Strict mode enabled, all code is strongly typed
- **ESLint:** Strict config (`@typescript-eslint/strict`), React hooks rules, import/order
- **Prettier:** Enforced formatting
- **Husky:** Pre-commit hooks for lint, type-check, and tests
- **Storybook:** For isolated UI/3D component development and documentation
- **Playwright:** End-to-end and visual regression testing, including 3D scenes
- **Vercel:** CI/CD, preview environments, edge functions

### 🧩 3D Experience Architecture

- **Engine:** Three.js r154 + React Three Fiber + Drei
- **Scenes:**  
  1. **Traditional Developer Desktop**  
  2. **Temporal Transition (Tech Evolution)**  
  3. **NIGHTSHIFT (Self-Generating Code)**  
  4. **AI Orchestrator**  
  Each scene is modular, interactive, and contains informational hotspots.
- **3D Asset Pipeline:**  
  - Optimized `.glb` models (Blender → gltf-pipeline)  
  - Compressed textures (webp/avif)  
  - Level of Detail (LOD), frustum culling, progressive loading
- **Animations:**  
  - Framer Motion for UI  
  - Three.js AnimationMixer for 3D  
  - Custom hooks for transitions and timeline control

### 🌐 State Management

- **Zustand:** Global navigation and scene state
- **React Context:** 3D configuration (lighting, camera, etc.)
- **Custom Hooks:** Animation, model loading, scene transitions

### ⚡ Performance & Responsiveness

- **Lazy loading:** 3D models and textures
- **LOD & Frustum Culling:** For 3D optimization
- **Progressive Loading:** Skeletons, loading indicators
- **Mobile Adaptation:** Touch controls, simplified 3D, 2D fallback if WebGL unsupported

### 🔍 SEO & Analytics

- **Static Generation:** Next.js SSG for SEO and performance
- **Dynamic Meta Tags:** Next-SEO, Open Graph, schema.org/Person
- **Analytics:** Google Analytics 4, Web Vitals, Sentry for error tracking

---

## 📝 Development Guidelines

1. **Follow structure and naming conventions** as above
2. **Write clean, maintainable, and strictly typed code**
3. **Use meaningful commit messages** (Conventional Commits)
4. **Ensure all code is linted, formatted, and tested**
5. **Document complex logic with JSDoc and inline comments**
6. **Optimize 3D assets and code for performance**
7. **Respect accessibility and responsive design**

---

## 📚 Useful Scripts

| Script                | Description                                 |
|-----------------------|---------------------------------------------|
| `pnpm dev`            | Start Next.js dev server                    |
| `pnpm build`          | Build for production                        |
| `pnpm lint`           | Run ESLint                                  |
| `pnpm format`         | Run Prettier                                |
| `pnpm test`           | Run Playwright tests                        |
| `pnpm storybook`      | Start Storybook for component development   |

---

## 🏗️ Extending the Project

- Add new 3D scenes in `src/scenes/`, export via `index.ts`
- Create atomic 3D/UI components in `src/components/3d/` or `src/components/ui/`
- Add new hooks in `src/hooks/`, utilities in `src/utils/`
- Place new models/textures in `public/models/` and `public/textures/`
- Update barrel exports for clean imports

---

## 📖 References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Framer Motion](https://www.framer.com/motion/)
- [Storybook](https://storybook.js.org/)
- [Playwright](https://playwright.dev/)

---

## 🧑‍💻 Contact

For questions, suggestions, or professional inquiries, please use the contact form in the portfolio or reach out via [GitHub Issues](https://github.com/adnumaro/adnumaro/issues).

---

**© 2025 Adrián Nuhacet – CodeEvolution**

// COMMIT_MESSAGE: docs: add project structure and conventions to README.md