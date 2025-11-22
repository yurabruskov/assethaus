# ASSET_HAUS Design System — Foundation OS v3.0

## 🏛️ ФИЛОСОФИЯ: "BUILDING WEALTH"

> **Gravity UI** использует физику. **ASSET_HAUS** использует архитектуру.

Это не просто дизайн-система — это **инфраструктурное решение** для визуализации цифровой недвижимости.

### Метафора: Материальность Цифровых Активов

**Бетон** — Надёжность (Базовые активы, стабильные токены)
**Стекло** — Прозрачность (Compliance, on-chain данные)
**Сталь** — Структура (Smart contracts, архитектура)
**Свет** — Ликвидность (Активные рынки, торговля)

### Визуальный язык: "Инженерная Точность"

Как **Gravity UI** выглядит как приборная панель космического корабля,
**ASSET_HAUS** выглядит как **архитектурное бюро будущего** + **трейдинговый терминал**.

---

## 🎯 CORE PRINCIPLES

1. **3D Volumetric Forms** - Простые архитектурные формы с прямыми углами (как здания)
2. **City as Metaphor** - Portfolio = City, Asset = Building, Height = Value
3. **Deterministic Randomness** - Уникальность через seed, консистентность через стиль
4. **Dark Mode First** - Профессиональный трейдинг-терминал эстетика
5. **Material-Driven Colors** - Бетон (#95b8d1), Стекло (cyan), Сталь (purple)
6. **Data-Dense UI** - Таблицы, графики, метрики (как у Gravity Charts)

---

## 🏗️ SYSTEM ARCHITECTURE (Modular Approach)

Вдохновлено архитектурой **@gravity-ui**:

```
@assethaus/foundation     → Core UI (Buttons, Inputs, Cards)
@assethaus/charts         → Financial Charts (Price, APY, Distribution)
@assethaus/3d             → Three.js Components (Cities, Forms, Scenes)
@assethaus/icons          → Linear Icon Set (Properties, Crypto, Finance)
@assethaus/entities       → RWA-Specific (AssetCard, PropertyViewer, TokenBadge)
@assethaus/themes         → Dark/Light + Custom Themes
```

### Почему модульность?

- ✅ **Для девелоперов**: `npm install @assethaus/charts` — и готово
- ✅ **Для дизайнеров**: Независимые Figma-библиотеки
- ✅ **Для бизнеса**: White-label решения (клиент берёт только нужные модули)

---

## 🎨 FOUNDATIONS: Design Tokens

### Semantic Color System (не просто цвета, а смыслы)

```javascript
// ❌ Старый подход
--color-primary: #ff6b6b;
--color-purple: #b794f6;

// ✅ Новый подход (Gravity-style)
--action-primary: #ff6b6b;           // CTA, main actions
--action-secondary: #b794f6;         // Secondary actions

--status-success: #6bff8a;           // Asset growth, positive ROI
--status-warning: #ffb4a2;           // Low liquidity, risks
--status-danger: #ff6b6b;            // Losses, critical alerts
--status-info: #00fff0;              // Neutral info, tooltips

--data-positive: #6bff8a;            // +15% APY, gains
--data-negative: #ff6b6b;            // -5%, losses
--data-neutral: #95b8d1;             // Stable, 0% change

--material-concrete: #95b8d1;        // Base assets (real estate)
--material-glass: rgba(0,255,240,0.1); // Transparent overlays
--material-steel: #8b7ab8;           // Structural elements
--material-neon: #00fff0;            // Highlights, active states
```

### Typography System (Data-First)

**Принцип**: Читаемость финансовых данных превыше всего.

```javascript
// Display (Hero headlines)
--font-display: 'Work Sans', sans-serif;
--size-display-xl: 88px;   // Hero sections
--size-display-l: 64px;    // Page headers
--size-display-m: 48px;    // Section titles

// Body (Content)
--font-body: 'Inter', -apple-system, sans-serif;
--size-body-l: 18px;       // Long-form content
--size-body-m: 16px;       // Default UI text
--size-body-s: 14px;       // Secondary text
--size-body-xs: 12px;      // Captions, labels

// Data (Numbers, Tables, Code)
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
--size-data-l: 32px;       // Large metrics ($4.2M)
--size-data-m: 24px;       // Card stats (15% APY)
--size-data-s: 16px;       // Table cells
--size-data-xs: 12px;      // Tiny metrics

// Использование
.metric-value {
  font-family: var(--font-mono);
  font-size: var(--size-data-l);
  font-weight: 600;
  letter-spacing: -0.02em;
  // Моноширинный шрифт = идеальное выравнивание в таблицах
}
```

### Component Sizing (s/m/l/xl)

Как у **Gravity UI** — все компоненты имеют 4 размера:

```javascript
// Buttons
--btn-height-s: 32px;
--btn-height-m: 40px;   // Default
--btn-height-l: 48px;
--btn-height-xl: 56px;  // Touch-friendly для мобильных

// Inputs
--input-height-s: 32px;
--input-height-m: 40px;
--input-height-l: 48px;
--input-height-xl: 56px;

// Cards
--card-padding-s: 16px;
--card-padding-m: 24px;  // Default
--card-padding-l: 32px;
--card-padding-xl: 48px;

// Spacing Scale (8px base)
--space-xs: 4px;
--space-s: 8px;
--space-m: 16px;
--space-l: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

---

## 🎨 ЦВЕТОВАЯ ПАЛИТРА (Legacy Support)

### Brand Colors (для обратной совместимости):
```css
--color-primary: #ff6b6b;      /* → --action-primary */
--color-secondary: #ffb4a2;    /* → --action-secondary */
--color-accent-pink: #e78fb3;
--color-purple: #b794f6;       /* → --material-steel */
--color-sky-blue: #95b8d1;     /* → --material-concrete */
--color-deep-blue: #4a5899;
--color-lavender: #8b7ab8;
--color-cyan: #00fff0;         /* → --material-neon */
```

### Gradients:
```css
/* Light Mode */
linear-gradient(135deg, #ff6b6b 0%, #b794f6 50%, #95b8d1 100%)

/* Dark Mode */
linear-gradient(135deg, #0a0e27 0%, #4a5899 50%, #1e1b3c 100%)

/* Accent (Data Positive) */
linear-gradient(90deg, #b794f6 0%, #00fff0 100%)

/* Warning */
linear-gradient(90deg, #ffb4a2 0%, #ff6b6b 100%)
```

---

## 🏗️ НОВЫЙ ПОДХОД К ФОРМАМ

### Проблема старого подхода:
❌ Всё строилось из кубов (cube = atom)
❌ Формы собирались из кубиков
❌ Однообразие

### Новый подход:
✅ **Форма САМА = атом**
✅ Неправильная, искаженная геометрия
✅ Случайное количество вершин/углов
✅ Уникальность через рандомность
✅ Узнаваемость через цвета и стиль

### Типы новых атомов:

1. **Искаженные многоугольники**
   - ExtrudeGeometry с неправильными путями
   - 3-12 вершин (случайно)
   - Неравномерные углы

2. **Органические формы**
   - ConvexGeometry из случайных точек
   - Мягкие деформации
   - Bezier кривые

3. **Вращательные формы**
   - LatheGeometry с искаженными профилями
   - Случайные радиусы

4. **Комбинированные**
   - Группы из 2-5 случайных форм
   - Пересекающиеся плоскости
   - Неправильные соединения

---

## 📐 МОДУЛЬНАЯ АРХИТЕКТУРА БИБЛИОТЕК

### @assethaus/foundation — Core UI Components

**Назначение**: Базовые интерфейсные элементы для любого RWA приложения.

```
npm install @assethaus/foundation
```

**Компоненты**:
- Button (size: s/m/l/xl, variant: primary/secondary/ghost)
- Input (text, number, search)
- Select & Dropdown
- Checkbox, Radio, Switch
- Card (с поддержкой 3D visual header)
- Table (data-dense, monospace numbers)
- Modal & Drawer
- Toast & Notifications
- Tabs & Navigation
- Badge & Tag

**Стиль**: Минималистичный, "инженерная точность", тёмная тема по умолчанию.

---

### @assethaus/charts — Financial Visualizations

**Назначение**: Графики для визуализации финансовых данных (как @gravity-ui/charts).

```
npm install @assethaus/charts
```

**Компоненты**:
- **Line Chart** — Рост цены токена во времени
- **Bar Chart** — Выплаты дивидендов по месяцам
- **Donut Chart** — Структура портфеля (asset allocation)
- **Area Chart** — Накопленная доходность (APY over time)
- **Candlestick** — Торговая активность (для вторичного рынка)
- **Heatmap** — Корреляция активов

**Фичи**:
- Real-time updates
- Responsive (mobile → desktop)
- Accessibility (ARIA labels)
- Export to PNG/CSV

---

### @assethaus/3d — Three.js Components

**Назначение**: 3D визуализации для hero-секций, карточек, дашбордов.

```
npm install @assethaus/3d
```

**Компоненты**:
- **CityScene** — 3D город (portfolio visualization)
- **AbstractForm** — Генеративные 3D формы (5 типов)
- **PropertyViewer** — Интерактивный 3D превью объекта
- **AnimatedBackground** — Абстрактный 3D фон для hero-секций

**Оптимизации**:
- Lazy loading (Intersection Observer)
- Max 8 WebGL contexts
- Auto-dispose для offscreen сцен
- LOD (Level of Detail) для мобильных

---

### @assethaus/icons — Linear Icon Set

**Назначение**: Набор иконок в едином линейном стиле (thin stroke).

```
npm install @assethaus/icons
```

**Категории**:
- **Property** — house, apartment, commercial, land
- **Finance** — wallet, chart-up, percent, dollar
- **Crypto** — ethereum, polygon, bitcoin, token
- **Actions** — buy, sell, transfer, stake
- **Status** — success, warning, pending, error

**Форматы**: SVG, React components, Vue components.

---

### @assethaus/entities — RWA-Specific Components

**Назначение**: Компоненты для работы с недвижимостью и токенами.

```
npm install @assethaus/entities
```

**Компоненты**:
- **AssetCard** — Карточка объекта (фото + метрики + 3D превью)
- **PropertyDetails** — Детальная страница объекта
- **TokenBadge** — Бейдж статуса токена (Funded, Trading, Sold Out)
- **APYDisplay** — Красивое отображение доходности
- **OwnershipBar** — Прогресс-бар владения (You own 15%)
- **TransactionHistory** — История операций с токенами

---

### @assethaus/themes — Theme System

**Назначение**: Система тем с поддержкой dark/light mode + custom branding.

```
npm install @assethaus/themes
```

**Темы**:
- **Dark Professional** (default) — Трейдинг-терминал стиль
- **Light Clean** — Для презентаций и маркетинга
- **Cyberpunk** — Neon cyan/purple (для событий)
- **Custom** — White-label (клиент задаёт свою палитру)

**Переключение**:
```javascript
import { ThemeProvider } from '@assethaus/themes';

<ThemeProvider theme="dark-professional">
  <App />
</ThemeProvider>
```

---

## 📐 СТРУКТУРА ПРЕЗЕНТАЦИОННОЙ СТРАНИЦЫ

### Левое меню (280px Fixed Sidebar):

```
ASSET_HAUS
Foundation OS v3.0

─── OVERVIEW ───
- Introduction
- Philosophy: "Building Wealth"
- Architecture
- Installation

─── FOUNDATIONS ───
- Design Tokens
- Color System
- Typography
- Spacing & Sizing
- 3D Materials

─── LIBRARIES ───
- @assethaus/foundation
- @assethaus/charts
- @assethaus/3d
- @assethaus/icons
- @assethaus/entities
- @assethaus/themes

─── COMPONENTS ───
Interactive Demos:
- Buttons (all sizes/variants)
- Inputs & Forms
- Cards & Tables
- Charts (live preview)
- 3D Scenes (toggle camera)

─── REAL EXAMPLES ───
- Landing Hero
- Asset Cards Grid
- Portfolio Dashboard
- Property Details Page

─── FOR DEVELOPERS ───
- NPM Installation
- React Examples
- API Reference
- Performance Guide

─── RESOURCES ───
- Figma Library
- 3D Models (GLB)
- Video Loops
- Brand Guidelines PDF
```

---

## 🎨 ABSTRACT FORMS (5 уникальных форм)

### 1. The Foundation
**Концепт**: Первая инвестиция, фундамент портфеля
**Форма**: Искаженный многоугольник (5-8 вершин, случайно)
**Материал**: Solid matte, #ff6b6b, slight emissive glow
**Анимация**: Медленное вращение Y-axis
**Применение**: Empty states, onboarding

### 2. The Cluster
**Концепт**: Диверсификация портфеля
**Форма**: 3-5 органических форм разного размера
**Материал**: Градиентные (purple → cyan)
**Анимация**: Orbital движение вокруг центра
**Применение**: Portfolio overview

### 3. The Skyline
**Концепт**: Рост во времени
**Форма**: 7-12 вертикальных искаженных призм возрастающей высоты
**Материал**: Color-coded by height (green → yellow → red)
**Анимация**: Волновая пульсация
**Применение**: Growth charts, analytics

### 4. The Flow
**Концепт**: Ликвидность рынка
**Форма**: Волнообразная поверхность из искаженных полигонов
**Материал**: Glass-like, transparent, flowing
**Анимация**: Vertex displacement, flowing motion
**Применение**: Liquidity indicators, marketplace

### 5. The Network
**Концепт**: Взаимосвязанность экосистемы
**Форма**: Узлы (сферы) + связи (линии), случайное расположение
**Материал**: Nodes: glowing, Lines: thin transparent
**Анимация**: Nodes пульсируют, lines волнуются
**Применение**: Ecosystem visualization, partnerships

---

## 🎬 COMPOSED SCENES (7 сценариев)

### 1. Empty State
**Описание**: Пустая платформа с одной светящейся формой
**Элементы**:
- 1 Foundation form (маленькая, glowing)
- Minimal grid
- Fog для глубины
**Настроение**: Приглашающее, "начало пути"

### 2. First Asset
**Описание**: Первая инвестиция - одна форма доминирует
**Элементы**:
- 1 крупная Foundation form
- Spotlight сверху
- Легкие particles вокруг
**Настроение**: Гордость, начало

### 3. Growing Portfolio
**Описание**: 5-10 разных форм, начинается разнообразие
**Элементы**:
- Mix из Foundation + Cluster forms
- Разные высоты и размеры
- Пульсация
**Настроение**: Прогресс, диверсификация

### 4. Full City
**Описание**: Зрелый портфель - сложный городской пейзаж
**Элементы**:
- 50+ искаженных форм
- Варьирующиеся высоты (код города из version-land-plots.html)
- Orbital camera
**Настроение**: Достижение, сложность под контролем

### 5. Analytics View
**Описание**: Данные как архитектура
**Элементы**:
- Color-coded формы (green = рост, red = спад, blue = стабильно)
- Пульсация по перформансу
- Height = value
**Настроение**: Clarity, control

### 6. Dark Mode City
**Описание**: Та же city, но neon aesthetic
**Элементы**:
- Cyan glowing edges
- Dark purple/blue градиент фона
- TRON-style grid
**Настроение**: Cyberpunk, tech-forward

### 7. Celebration
**Описание**: Успех, milestone
**Элементы**:
- Динамичные яркие формы
- Быстрая пульсация
- Случайные цвета из палитры
- Upward movement
**Настроение**: Joy, achievement

---

## 🧩 COMPONENTS (Реальные примеры)

### 1. Landing Hero Section
```html
<section class="hero">
  <div class="hero-3d-background">
    <!-- Full City scene -->
  </div>
  <div class="hero-content">
    <h1>Tokenize Real Estate</h1>
    <p>Invest in fractional property ownership</p>
    <button class="btn-primary">Get Started</button>
  </div>
</section>
```

**3D Scene**: Full City (rotating)
**Layout**: Centered content над 3D фоном
**Typography**: 88px bold, gradient text
**CTA**: Primary button с hover lift

### 2. Property Card
```html
<div class="property-card">
  <div class="property-card-visual">
    <!-- Mini Abstract Form representing property -->
  </div>
  <div class="property-card-info">
    <h3>Luxury Apartment Dubai</h3>
    <div class="property-stats">
      <span class="stat">$2.4M</span>
      <span class="stat">+15% YoY</span>
    </div>
    <button class="btn-secondary">View Details</button>
  </div>
</div>
```

**3D Element**: Unique abstract form для каждой карточки
**Hover**: Form rotates, card lifts
**Colors**: Performance-based (green/red accent)

### 3. Benefits Grid
```html
<section class="benefits">
  <h2>Why ASSET_HAUS</h2>
  <div class="benefits-grid">
    <div class="benefit-card">
      <div class="benefit-icon">
        <!-- Small abstract form -->
      </div>
      <h3>Fractional Ownership</h3>
      <p>Start with $100</p>
    </div>
    <!-- Repeat 3-6 times -->
  </div>
</section>
```

**Icons**: Маленькие 3D формы для каждого benefit
**Animation**: Hover = форма вращается
**Style**: Clean, card-based

### 4. Portfolio Dashboard
```html
<div class="dashboard">
  <div class="dashboard-hero">
    <!-- Growing Portfolio scene -->
  </div>
  <div class="dashboard-stats">
    <div class="stat-card">
      <span class="stat-value">$4.2M</span>
      <span class="stat-label">Total Value</span>
    </div>
    <!-- More stats -->
  </div>
  <div class="dashboard-assets">
    <!-- Grid of Property Cards -->
  </div>
</div>
```

**Main Visual**: User's portfolio as 3D city
**Data**: Real-time stats
**Cards**: Individual assets

### 5. Pricing Table
```html
<section class="pricing">
  <h2>Investment Plans</h2>
  <div class="pricing-cards">
    <div class="pricing-card">
      <div class="pricing-visual">
        <!-- Abstract form size = plan tier -->
      </div>
      <h3>Starter</h3>
      <div class="price">$100/mo</div>
      <ul class="features">
        <li>Up to 5 properties</li>
        <li>Basic analytics</li>
      </ul>
      <button class="btn-secondary">Choose Plan</button>
    </div>
    <!-- More tiers -->
  </div>
</section>
```

**Visual hierarchy**: Bigger form = higher tier
**Animation**: Forms pulse on hover
**Comparison**: Side-by-side cards

---

## 💻 ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ

### Three.js Scene Setup
```javascript
// Create abstract form with randomness
function createAbstractForm(config) {
  const group = new THREE.Group();

  // Random vertices count (5-12)
  const verticesCount = 5 + Math.floor(Math.random() * 8);

  // Create distorted polygon shape
  const shape = new THREE.Shape();
  for (let i = 0; i < verticesCount; i++) {
    const angle = (Math.PI * 2 / verticesCount) * i;
    const radius = config.baseRadius * (0.8 + Math.random() * 0.4); // Randomness!
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      // Bezier curves for organic feel
      const prevAngle = (Math.PI * 2 / verticesCount) * (i - 1);
      const cpx = Math.cos((angle + prevAngle) / 2) * radius * 1.2;
      const cpy = Math.sin((angle + prevAngle) / 2) * radius * 1.2;
      shape.bezierCurveTo(cpx, cpy, cpx, cpy, x, y);
    }
  }
  shape.closePath();

  // Extrude with random depth
  const extrudeSettings = {
    depth: config.depth * (0.7 + Math.random() * 0.6),
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const material = new THREE.MeshStandardMaterial({
    color: config.color,
    metalness: config.metalness || 0.3,
    roughness: config.roughness || 0.7,
    emissive: config.emissive ? config.color : 0x000000,
    emissiveIntensity: config.emissive ? 0.3 : 0
  });

  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);

  return group;
}
```

### Animation System
```javascript
// Pulse animation
function animatePulse(object, time) {
  const scale = 1 + Math.sin(time * 0.002) * 0.1;
  object.scale.set(scale, scale, scale);
}

// Rotation animation
function animateRotation(object, speed = 0.005) {
  object.rotation.y += speed;
  object.rotation.x += speed * 0.3;
}

// Orbital camera
function animateOrbitalCamera(camera, time, radius = 15) {
  const angle = time * 0.001;
  camera.position.x = Math.cos(angle) * radius;
  camera.position.z = Math.sin(angle) * radius;
  camera.lookAt(0, 0, 0);
}
```

### Рандомность для уникальности
```javascript
// Each page load = unique forms
const randomSeed = Date.now();

function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Unique form each time, but consistent style
function generateUniqueForm(index) {
  const seed = randomSeed + index;
  const vertices = 5 + Math.floor(seededRandom(seed) * 8);
  const color = COLORS[Math.floor(seededRandom(seed + 1) * COLORS.length)];
  const size = 0.5 + seededRandom(seed + 2) * 2;

  return createAbstractForm({
    verticesCount: vertices,
    color: color,
    baseRadius: size,
    depth: 1 + seededRandom(seed + 3) * 2
  });
}
```

---

## 📦 РЕСУРСЫ ДЛЯ СКАЧИВАНИЯ

### Package Contents:
```
ASSET_HAUS_Design_System_v2.zip (487 MB)
│
├─ 01_3D_Models/
│  ├─ abstract_forms/
│  │  ├─ foundation.glb
│  │  ├─ cluster.glb
│  │  ├─ skyline.glb
│  │  ├─ flow.glb
│  │  └─ network.glb
│  │
│  ├─ scenes/
│  │  ├─ empty_state.glb
│  │  ├─ first_asset.glb
│  │  ├─ growing_portfolio.glb
│  │  ├─ full_city.glb
│  │  ├─ analytics.glb
│  │  ├─ dark_mode.glb
│  │  └─ celebration.glb
│  │
│  └─ components/
│     ├─ property_card_visual.glb
│     ├─ benefit_icon_set.glb
│     └─ pricing_tier_visuals.glb
│
├─ 02_Renders/
│  ├─ 4K_PNG/ (transparent backgrounds)
│  └─ JPG_Backgrounds/
│
├─ 03_Video_Loops/
│  ├─ full_city_60s.mp4
│  ├─ celebration_15s.mp4
│  └─ dark_mode_30s.mp4
│
├─ 04_Code/
│  ├─ threejs_setup.js
│  ├─ abstract_forms.js
│  ├─ animations.js
│  ├─ city_builder.js
│  └─ random_generator.js
│
├─ 05_Components/
│  ├─ landing_hero.html
│  ├─ property_card.html
│  ├─ benefits_grid.html
│  └─ pricing_table.html
│
├─ 06_Figma/
│  └─ ASSET_HAUS_Components.fig
│
└─ Brand_Guidelines.pdf
```

---

## 🎯 КЛЮЧЕВЫЕ ОТЛИЧИЯ ОТ v1.0

### v1.0 (Старое):
- ❌ Всё из кубов
- ❌ Предсказуемые формы
- ❌ Статичные компоненты
- ❌ Только абстрактные примеры

### v2.0 (Новое):
- ✅ Уникальные искаженные формы
- ✅ Рандомность = уникальность
- ✅ Динамические анимации
- ✅ Реальные компоненты с данными
- ✅ Landing sections, карточки, pricing
- ✅ Узнаваемость через стиль, не через форму

---

## 🚀 ПРИМЕНЕНИЕ

### Для дизайнеров:
1. Используйте Abstract Forms как визуальные метафоры
2. Комбинируйте Composed Scenes для разных состояний
3. Адаптируйте Components под свои нужды
4. Экспериментируйте с рандомностью

### Для разработчиков:
1. Импортируйте готовые GLB модели
2. Используйте code snippets для Three.js
3. Настраивайте рандомность через seed
4. Интегрируйте компоненты в React/Vue

### Для маркетинга:
1. Скачивайте video loops для соц сетей
2. Используйте renders для презентаций
3. Адаптируйте landing sections
4. Создавайте уникальный контент через рандомность

---

## 🎨 ГЕНЕРАТИВНАЯ ГРАФИКА ДЛЯ ОБЛОЖЕК

**Принцип**: Как **Gravity UI** использует процедурную генерацию для обложек, мы создаём уникальные визуалы для каждого объекта недвижимости.

### Алгоритм генерации Asset Cover:

```javascript
function generateAssetCover(asset) {
  // 1. Базовое изображение объекта
  const baseImage = asset.photo;

  // 2. Фирменный градиент-оверлей (на основе перформанса)
  const performance = asset.apy;
  const gradient = performance > 10
    ? 'linear-gradient(135deg, rgba(107,255,138,0.3), rgba(0,255,240,0.3))' // Green (успех)
    : 'linear-gradient(135deg, rgba(255,107,107,0.3), rgba(231,143,179,0.3))'; // Red (риск)

  // 3. 3D элемент (уникальная форма на основе seed = property ID)
  const form3D = generateAbstractForm({
    seed: asset.id,
    type: 'polygon',
    color: getColorByAPY(asset.apy)
  });

  // 4. Типографика (крупная, на переднем плане)
  const typography = `
    <h2 class="asset-title">${asset.name}</h2>
    <div class="asset-apy">${asset.apy}% APY</div>
  `;

  // Итоговый композит:
  // [Photo] → [Gradient Overlay] → [3D Form (positioned top-right)] → [Typography]

  return compositeAssetCover(baseImage, gradient, form3D, typography);
}
```

### Примеры использования:

**1. Social Media Posts**
- Автоматическая генерация обложек для Instagram/Twitter
- Каждый объект = уникальный визуал
- Консистентный бренд (градиенты + формы)

**2. Email Campaigns**
- Превью объектов в рассылках
- Динамическая генерация на сервере

**3. Маркетплейс Thumbnails**
- Каталог объектов с уникальными обложками
- Hover = 3D форма вращается

### Технические детали:

```javascript
// Canvas API для серверной генерации
import { Canvas } from 'canvas';

function renderAssetCoverServer(asset, width = 1200, height = 630) {
  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext('2d');

  // 1. Draw base image
  ctx.drawImage(loadImage(asset.photo), 0, 0, width, height);

  // 2. Apply gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, `rgba(${getPerformanceColor(asset.apy)}, 0.5)`);
  gradient.addColorStop(1, 'rgba(74,88,153,0.7)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 3. Render 3D form as static image (pre-rendered GLB → PNG)
  const form3D = loadFormImage(asset.id);
  ctx.drawImage(form3D, width - 400, 50, 350, 350);

  // 4. Draw typography
  ctx.font = 'bold 64px Work Sans';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(asset.name, 50, height - 150);

  ctx.font = '48px JetBrains Mono';
  ctx.fillStyle = '#00fff0';
  ctx.fillText(`${asset.apy}% APY`, 50, height - 80);

  return canvas.toBuffer('image/png');
}
```

---

## 🚀 SHOWCASE PAGE: Презентация системы

**Вдохновение**: https://gravity-ui.com

### Структура главной страницы (как продукт):

#### 1. Hero Section
```html
<section class="hero">
  <div class="hero-3d-bg">
    <!-- Rotating 3D city (interactive!) -->
  </div>
  <div class="hero-content">
    <h1>Foundation OS</h1>
    <p>Инфраструктурное решение для визуализации цифровой недвижимости</p>
    <div class="hero-cta">
      <button class="btn-primary">Get Started</button>
      <button class="btn-ghost">View on GitHub</button>
    </div>
  </div>
</section>
```

**3D фон**: Full City scene с orbital camera. При скролле — parallax эффект.

#### 2. Philosophy Section
```html
<section class="philosophy">
  <h2>Gravity UI использует физику. ASSET_HAUS использует архитектуру.</h2>
  <div class="materials-grid">
    <div class="material-card">
      <div class="material-visual"><!-- 3D бетон --></div>
      <h3>Бетон</h3>
      <p>Надёжность</p>
    </div>
    <!-- Steel, Glass, Light -->
  </div>
</section>
```

#### 3. Interactive Component Demo
```html
<section class="demo">
  <h2>Живые компоненты</h2>
  <div class="demo-controls">
    <label>Размер:</label>
    <button data-size="s">S</button>
    <button data-size="m" class="active">M</button>
    <button data-size="l">L</button>
    <button data-size="xl">XL</button>
  </div>
  <div class="demo-preview">
    <!-- Реальная кнопка, которую можно изменить в реальном времени -->
    <button class="btn-primary" data-current-size="m">
      Primary Action
    </button>
  </div>
  <div class="demo-code">
    <pre><code class="language-jsx">
&lt;Button size="m" variant="primary"&gt;
  Primary Action
&lt;/Button&gt;
    </code></pre>
  </div>
</section>
```

**Фишка**: Переключаешь размер → кнопка меняется мгновенно + обновляется код.

#### 4. Theme Switcher
```html
<div class="theme-toggle">
  <button class="theme-btn" data-theme="dark">🌙 Dark</button>
  <button class="theme-btn active" data-theme="light">☀️ Light</button>
</div>

<script>
// Вся страница меняет тему мгновенно
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute('data-theme', theme);
  });
});
</script>
```

**Как у Gravity**: Весь сайт мгновенно переключается между темной и светлой темой.

#### 5. Developers First
```html
<section class="dev-section">
  <h2>Для разработчиков</h2>
  <div class="install-command">
    <code>npm install @assethaus/foundation</code>
    <button class="copy-btn">Copy</button>
  </div>
  <div class="quick-start">
    <pre><code class="language-jsx">
import { Button, Card } from '@assethaus/foundation';
import { CityScene } from '@assethaus/3d';

function App() {
  return (
    &lt;Card&gt;
      &lt;CityScene assets={portfolio} /&gt;
      &lt;Button variant="primary"&gt;View Portfolio&lt;/Button&gt;
    &lt;/Card&gt;
  );
}
    </code></pre>
  </div>
</section>
```

#### 6. Resources / Downloads
```html
<section class="resources">
  <h2>Ресурсы</h2>
  <div class="resource-cards">
    <a href="/figma" class="resource-card">
      <h3>Figma Library</h3>
      <p>Все компоненты для дизайнеров</p>
      <span class="download-icon">↓</span>
    </a>
    <a href="/3d-models.zip" class="resource-card">
      <h3>3D Models (GLB)</h3>
      <p>487 MB</p>
    </a>
    <a href="/brand-guidelines.pdf" class="resource-card">
      <h3>Brand Guidelines</h3>
      <p>PDF, 24 страницы</p>
    </a>
  </div>
</section>
```

---

## 📊 МЕТРИКИ УСПЕХА

- **Узнаваемость**: 90%+ узнают бренд по архитектурным формам и материалам
- **Модульность**: Клиенты используют только нужные пакеты (@assethaus/charts, @assethaus/3d)
- **Производительность**: 60 FPS на средних устройствах, max 8 WebGL contexts
- **Адаптивность**: Работает от mobile (320px) до 4K (3840px)
- **Developer Experience**: `npm install` → ready to use за 5 минут

---

## 🎨 ФИНАЛЬНАЯ ФИЛОСОФИЯ

> **"Портфель — это город. Каждый актив — здание. Высота = ценность. Цвет = перформанс. Материал = тип актива."**

### Отличия от конкурентов:

**Atlassian**: Мягкий, "человечный" дизайн (иллюстрации людей)
**Gravity UI**: Космос, физика, гравитация (абстрактные силы)
**ASSET_HAUS**: Архитектура, материалы, строительство (цифровое богатство)

Мы не показываем буквальные здания.
Мы показываем **абстрактные города**, где геометрия рассказывает историю инвестиций.
Каждая форма уникальна (через seed), но все узнаваемы (через стиль).

**Это не просто дизайн-система. Это инфраструктурное решение.**

---

**Версия**: 3.0 "Foundation OS"
**Дата**: Ноябрь 2024
**Статус**: Production Ready
**Вдохновлено**: Gravity UI, но для RWA
