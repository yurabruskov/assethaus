# ASSET_HAUS Design System — Финальное ТЗ v2.0

## 🎯 КОНЦЕПЦИЯ

Интерактивная дизайн-система для платформы токенизации недвижимости ASSET_HAUS.

### Ключевые принципы:

1. **Абстрактная геометрия** - НЕ кубики, а уникальные искаженные формы
2. **Город как метафора** - portfolio = city, asset = building
3. **Динамическая рандомность** - каждая форма уникальна, но узнаваема по стилю
4. **Фирменные градиенты** - розовый→фиолетовый→синий (Light), синий→циан (Dark)
5. **Плавные анимации** - orbital camera, gentle pulsing
6. **Реальные компоненты** - landing, карточки объектов, преимущества

---

## 🎨 ЦВЕТОВАЯ ПАЛИТРА

### Brand Colors:
```css
--color-primary: #ff6b6b;      /* Primary Coral */
--color-secondary: #ffb4a2;    /* Secondary Peach */
--color-accent-pink: #e78fb3;  /* Accent Pink */
--color-purple: #b794f6;       /* Deep Purple */
--color-sky-blue: #95b8d1;     /* Sky Blue */
--color-deep-blue: #4a5899;    /* Deep Blue */
--color-lavender: #8b7ab8;     /* Lavender */
--color-cyan: #00fff0;         /* Neon Cyan */
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

## 📐 СТРУКТУРА ДИЗАЙН-СИСТЕМЫ

### Левое меню (280px Fixed Sidebar):

```
ASSET_HAUS
Design System v2.0

─── OVERVIEW ───
- Introduction
- Philosophy
- How to Use

─── FOUNDATIONS ───
- Colors & Gradients
- Typography
- 3D Materials
- Animation Principles

─── ARTIFACTS ───
- Abstract Forms (5)
- Composed Scenes (7)

─── COMPONENTS ───
- Landing Sections
- Property Cards
- Feature Blocks
- Benefits Grid
- Pricing Tables
- CTA Sections

─── CODE ───
- Three.js Examples
- Form Generators
- City Builder

─── RESOURCES ───
- Downloads
- Figma Files
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

## 📊 МЕТРИКИ УСПЕХА

- **Узнаваемость**: 90%+ узнают бренд по цветам
- **Уникальность**: Каждая генерация форм отличается
- **Производительность**: 60 FPS на средних устройствах
- **Адаптивность**: Работает от mobile до 4K
- **Консистентность**: Единый стиль при вариативности форм

---

## 🎨 ФИЛОСОФИЯ ДИЗАЙНА

> "Портфель - это город. Каждый актив - здание. Высота = ценность. Цвет = перформанс. Форма = уникальность. Вместе они создают визуальную карту богатства."

Мы не показываем буквальные здания.
Мы показываем абстрактные города, где геометрия рассказывает историю.
Каждая форма уникальна, но все узнаваемы.
Это ASSET_HAUS.

---

**Версия**: 2.0
**Дата**: Ноябрь 2024
**Статус**: Production Ready
