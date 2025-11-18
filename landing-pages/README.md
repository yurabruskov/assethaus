# Asset.haus Landing Pages

Три версии лендингов на чистом HTML/CSS/JS, созданные на основе продуктового анализа RWA-платформ (методология Lenny Rachitsky).

## 📁 Структура

```
landing-pages/
├── assets/
│   ├── css/
│   │   └── style.css          # Общие стили для всех версий
│   └── js/
│       └── calculator.js       # ROI калькулятор + интерактивность
├── version-a/
│   └── index.html             # Для застройщиков (Developers)
├── version-b/
│   └── index.html             # Для владельцев недвижимости (Property Owners)
├── version-c/
│   └── index.html             # Универсальная с сегментацией
└── README.md
```

## 🎯 Версии

### Version A: For Developers
**Файл:** `version-a/index.html`

**Целевая аудитория:** Застройщики, девелоперы

**Hero Message:**
> "Fund Your Development Project in **6 Weeks** — Without Bank Approval"

**Фокус:**
- Быстрое привлечение капитала (6 недель vs 6 месяцев)
- Обход банковского одобрения
- Глобальный пул инвесторов
- Сохранение контроля над проектом

**Ключевые секции:**
1. Hero с outcome-driven messaging
2. 4-step процесс (Submit → Tokenize → Raise → Build)
3. ROI калькулятор
4. Case study: Marina Bay Development ($12M за 3 недели)
5. 6 бенефитов для девелоперов
6. Social proof (статистика)

**Метрики успеха:**
- Demo requests от квалифицированных застройщиков
- Calculator interactions
- Time on page > 2:30

---

### Version B: For Property Owners
**Файл:** `version-b/index.html`

**Целевая аудитория:** Владельцы готовой недвижимости

**Hero Message:**
> "Turn Your Property Into **Liquid Capital** Without Selling"

**Фокус:**
- Частичная токенизация (10-50%)
- Сохранение ownership + управление
- Быстрая ликвидность без рефинансирования
- Нет долга, нет процентов

**Ключевые секции:**
1. Hero с акцентом на "keep control"
2. 4-step процесс (Valuation → Choose % → List → Get Cash)
3. ROI калькулятор с отображением % ownership
4. **Comparison table:** Traditional Refinancing vs Tokenization
5. Case study: Seattle Office Building ($2M, 30% tokenized)
6. 6 бенефитов для владельцев

**Уникальные элементы:**
- Comparison table показывает преимущества
- Калькулятор показывает "Your Ownership" процент
- Акцент на "No Debt, No Interest"

---

### Version C: Universal with Segmentation
**Файл:** `version-c/index.html`

**Целевая аудитория:** Все сегменты (Developers, Owners, Investors)

**Hero Message:**
> "Turn Your Real Estate Into **Liquid Capital in 48 Hours**"

**Фокус:**
- Универсальное позиционирование
- Интерактивный выбор сегмента
- Comprehensive approach

**Ключевые секции:**
1. Hero с универсальным value prop
2. **Audience Selector** — выбор пути (Developers / Owners / Investors)
3. 4-step процесс "Tokenize → Raise → Manage → Exit"
4. Stats (Social proof)
5. ROI калькулятор
6. 6 универсальных бенефитов
7. 2 Case studies (Developer + Owner)
8. **Dedicated section для инвесторов**

**Уникальные элементы:**
- Audience selector cards с переходами на специализированные страницы
- Секция для инвесторов (fractional ownership от $1,000)
- Два кейса вместо одного

---

## 🎨 Дизайн-система

### Цвета
```css
--primary: #1a365d        /* Dark blue - trust */
--accent: #3182ce         /* Blue - action */
--success: #38a169        /* Green - positive metrics */
--text-dark: #1a202c      /* Almost black */
--text-medium: #4a5568    /* Medium gray */
--bg-light: #f7fafc       /* Light background */
```

### Типографика
- **Система шрифтов:** `-apple-system, SF Pro, Segoe UI, Roboto`
- **Headings:** 700 weight, tight letter-spacing
- **Body:** 1.125rem (18px), 1.6 line-height
- **Responsive:** `clamp()` для адаптивности

### Компоненты

#### Кнопки
- `.btn-primary` — основные действия (синий)
- `.btn-secondary` — второстепенные (outlined)
- `.btn-large` — hero CTAs

#### Process Steps
- 4 карточки в grid
- Номер в круге (цветной)
- Таймлайн внизу
- Hover эффект: border-color + lift

#### Calculator
- Gradient background (темно-синий)
- Range inputs с белыми thumb
- Real-time расчет
- Highlight для главной метрики

#### Case Studies
- Белый фон с border
- Badge для категории
- Quote стиль с border-left
- 4 метрики в grid

---

## 💡 Применённые Best Practices

На основе анализа Securitize, Brickken, Marsbase:

### 1. Outcome-Driven Messaging ✅
```
❌ "Blockchain-powered tokenization platform"
✅ "Fund Your Project in 6 Weeks"
✅ "Turn Property Into Cash Without Selling"
```

### 2. Social Proof Immediately ✅
- Hero badges: "SEC Compliant", "$450M+ Tokenized"
- Stats section: конкретные цифры
- Case studies с метриками ($12M, 3 weeks)

### 3. Process Visualization ✅
- Четкие 4 шага
- Feature → Outcome mapping
- Таймлайны для каждого шага

### 4. Segmented CTAs ✅
- Version A: "Request Demo" (enterprise)
- Version B: "Schedule Consultation" (personal)
- Version C: "Choose Your Path" (selector)

### 5. Interactive Calculator ✅
- Real-time расчёт
- Понятные слайдеры
- Highlight главной метрики
- Specific outcomes (не абстрактные цифры)

### 6. Friction Reduction ✅
- "See How It Works" < "Request Demo" (low friction first)
- Trust badges в hero
- "No commitment required" в CTA
- Comparison table для снятия uncertainty

---

## 📊 Рекомендации по A/B тестированию

### Test 1: Hero Headline
- **A:** "Turn Real Estate Into Liquid Capital in 48 Hours"
- **B:** "Raise $1M in 6 Weeks Without Banks"
- **Metric:** CTA click-through rate

### Test 2: CTA Text
- **A:** "Calculate My Potential"
- **B:** "See What I Can Raise"
- **Metric:** Calculator interaction rate

### Test 3: Social Proof Placement
- **A:** Trust badges in hero
- **B:** Stats section first, hero second
- **Metric:** Scroll depth to process section

### Test 4: Calculator Position
- **A:** After process explanation
- **B:** Immediately after hero
- **Metric:** Form completions

---

## 🚀 Как использовать

### Локальное тестирование
```bash
# Откройте любую версию в браузере
open landing-pages/version-a/index.html
open landing-pages/version-b/index.html
open landing-pages/version-c/index.html
```

### Deployment
Все файлы — статичные. Можно деплоить на:
- Vercel
- Netlify
- GitHub Pages
- Любой статичный хостинг

### Интеграция с аналитикой
В `calculator.js` есть плейсхолдеры для аналитики:

```javascript
// Добавьте свой tracking
btn.addEventListener('click', function() {
  const action = this.textContent.trim();
  // gtag('event', 'cta_click', { action });
  // plausible('CTA Click', { props: { action } });
});
```

---

## 📈 Метрики для отслеживания

### Leading Indicators
- **Hero CTA click-through:** Target >8%
- **Scroll depth to Process:** Target >60%
- **Calculator interactions:** Proxy for intent
- **Time on page:** Target >2:30

### Conversion Metrics
- **Demo requests:** Primary conversion
- **Email captures:** Secondary conversion
- **Calculator → Demo:** Conversion funnel

### Engagement Metrics
- **Bounce rate:** Target <45%
- **Pages per session:** Target >2
- **Return visitors:** Quality signal

---

## 🔧 Customization

### Изменить цвета
Отредактируйте `assets/css/style.css`:
```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_COLOR;
}
```

### Изменить калькулятор defaults
Отредактируйте `assets/js/calculator.js`:
```javascript
this.propertyValue = 5000000;  // Default property value
this.tokenizePercent = 25;     // Default %
this.platformFee = 0.02;       // 2%
```

### Добавить форму
Замените `href="#"` на реальную форму или API endpoint:
```html
<a href="https://calendly.com/your-link" class="btn btn-primary">
  Schedule Demo
</a>
```

---

## ✅ Чеклист перед запуском

- [ ] Заменить placeholder CTAs на реальные ссылки
- [ ] Добавить favicon
- [ ] Настроить аналитику (GA4, Plausible, etc)
- [ ] Добавить Open Graph теги для social sharing
- [ ] Проверить мобильную версию
- [ ] Настроить email capture форму
- [ ] Добавить privacy policy / terms
- [ ] SEO: meta descriptions, titles
- [ ] Speed test (должно быть <1s load)
- [ ] A11y проверка (контрастность, alt texts)

---

## 📚 Связанные документы

- **Продуктовый анализ:** `../rwa-landing-analysis.md`
- **Методология:** Lenny Rachitsky Framework
- **Референсы:** Securitize, Brickken, Marsbase, CompanyDAO

---

## 🎯 Рекомендации по использованию

### Для MVT (Minimum Viable Test)
**Используйте Version A или B** в зависимости от основной ЦА:
- Если >80% ЦА = застройщики → Version A
- Если >80% ЦА = владельцы → Version B

### Для полного запуска
**Используйте Version C** как главную страницу:
- Universal hero привлекает всех
- Audience selector направляет на специализированные страницы
- A и B используйте как landing pages для таргетированного трафика

### Для платной рекламы
- **Google Ads для застройщиков** → Version A
- **Facebook/LinkedIn для владельцев** → Version B
- **Общий трафик / брендовые запросы** → Version C

---

**Created:** 2024-11-18
**Based on:** RWA Landing Page Analysis (Lenny Rachitsky Methodology)
**Stack:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
