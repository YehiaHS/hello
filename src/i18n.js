// Helper function to get the correct base path
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};

// Language translations
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    portfolio: 'Portfolio',
    viewPortfolio: 'View Portfolio →',
    backToHome: '← Back to Home',
    
    // Hero section
    hello: 'Hello, I\'m',
    tagline: 'Multidisciplinary Designer & Creative Strategist',
    contactMe: 'Get in Touch',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    
    // Skills section
    skillsTitle: 'Skills & Expertise',
    
    // Awards section
    awardsTitle: 'Awards & Recognition',
    
    // Education section
    educationTitle: 'Education',
    present: 'Present',
    
    // Contact section
    contactTitle: 'Let\'s Work Together',
    available: 'Available',
    whatsapp: 'WhatsApp',
    whyReachOut: 'Why reach out?',
    reachOutText: 'Yehia is excited to contribute to bold, interdisciplinary projects where storytelling meets technology. Open to internships, creative collaborations, and junior roles spanning media production, marketing, and software experiences.',
    
    // Section Labels
    capabilities: 'Capabilities',
    recognition: 'Recognition',
    educationLabel: 'Education',
    stayInTouch: 'Stay In Touch',
    explore: 'Explore',
    footerText: 'Designed for Yehia Hatem Salah Salem',

    // Portfolio page
    portfolioTitle: 'Creative Works',
    portfolioSubtitle: 'A showcase of my design projects and creative endeavors',
    portfolioDescription: 'A showcase of creative projects spanning video editing, animation, graphic design, and digital storytelling.',
    category: 'Category',
    year: 'Year',
    
    // Language selector
    language: 'Language',

    // Ticker
    ticker: {
      item1: 'Digital Storyteller',
      item2: 'Creative Technologist',
      item3: 'Fluent in Arabic / English / French',
      item4: 'Open to Boundary-Pushing Collaborations',
    },

    // Data
    profile: {
      name: 'Yehia Hatem Salah Salem',
      role: 'Integrated Marketing Communication & Computer Science Student',
      location: 'Heliopolis, Cairo, Egypt',
      contact: {
        whatsapp: '+201226094788',
        phone: '+201105177931',
        email: 'yehiahatemsalem@gmail.com',
      },
      summary:
        'Highly motivated dual-degree student blending creativity and technology across marketing communications and computer science. Experienced in digital media creation, storytelling, and problem solving with fluency in Arabic, English, and French.',
      highlights: [
        'Dual-degree student (IMC & Computer Science)',
        'IELTS Overall Band 8.5',
        'Cairo Mobile Film Festival Winner (Under 18)',
      ],
      skills: [
        {
          title: 'Visual & Motion',
          accent: 'bg-brutalYellow',
          items: [
            'Photo Editing: Affinity Photo, Photoshop, GIMP',
            'Video Editing: Sony Vegas, DaVinci Resolve, Adobe Premiere',
            'Graphic Design: Affinity Designer, Affinity Publisher',
            'Animation: Krita',
          ],
        },
        {
          title: 'Digital Art & Tools',
          accent: 'bg-brutalCyan',
          items: ['Digital Art: Krita, Paint Tool SAI, Affinity Photo', 'Creative Suite Workflow & Asset Management'],
        },
        {
          title: 'Languages',
          accent: 'bg-brutalMagenta',
          items: ['Arabic — Fluent', 'English — Fluent', 'French — Fluent'],
        },
        {
          title: 'Personal Strengths',
          accent: 'bg-ink text-alabaster',
          items: ['Excellent Communication & Presentation', 'Dedicated & Meticulous Work Ethic', 'Problem Solving & Lateral Thinking'],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Arts in Integrated Marketing Communication',
          institution: 'The British University in Egypt',
          location: 'Cairo, Egypt',
          period: 'Expected 2026',
        },
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University of the People',
          period: 'Expected 2027',
        },
      ],
      awards: [
        { name: 'IELTS Certificate — Overall Band 8.5', year: '2022' },
        { name: 'French Immersion Certificate', year: '2022' },
        { name: 'International Business Award', year: '2022' },
        { name: 'Cairo Mobile Film Festival Winner (Under 18)', year: '2016' },
        { name: 'Graduation Award — International Business', year: '2022' },
      ],
    },
    portfolioWorks: [
      {
        id: 1,
        title: 'BUE Film Festival Poster Banner',
        description: 'Official poster design for the British University in Egypt International Student Film Festival, featuring bold typography and cinematic imagery.',
        category: 'Poster Design',
        thumbnail: getAssetPath('portfolio/bue poster banner.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/bue poster banner.png'),
        },
        year: '2024',
      },
      {
        id: 2,
        title: 'BUE ISFF Logo',
        description: 'Brand identity design for the International Student Film Festival, combining film reel motifs with modern minimalism.',
        category: 'Logo Design',
        thumbnail: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
        },
        year: '2024',
      },
      {
        id: 3,
        title: 'Film Festival Billboard',
        description: 'Large-scale billboard design for campus-wide festival promotion with high-impact visual hierarchy.',
        category: 'Billboard Design',
        thumbnail: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
        },
        year: '2024',
      },
      {
        id: 4,
        title: 'Book Cover Design',
        description: 'Editorial design project featuring typography exploration and narrative-driven composition.',
        category: 'Book Design',
        thumbnail: getAssetPath('portfolio/Book Cover final submission.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/Book Cover final submission.png'),
        },
        year: '2024',
      },
    ],
  },
  
  ar: {
    // Navigation
    home: 'الرئيسية',
    portfolio: 'معرض الأعمال',
    viewPortfolio: 'عرض معرض الأعمال ←',
    backToHome: '→ العودة للرئيسية',
    
    // Hero section
    hello: 'مرحباً، أنا',
    tagline: 'مصمم متعدد التخصصات واستراتيجي إبداعي',
    contactMe: 'تواصل معي',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    location: 'الموقع',
    
    // Skills section
    skillsTitle: 'المهارات والخبرات',
    
    // Awards section
    awardsTitle: 'الجوائز والتقدير',
    
    // Education section
    educationTitle: 'التعليم',
    present: 'الحاضر',
    
    // Contact section
    contactTitle: 'لنعمل معاً',
    available: 'متاح',
    whatsapp: 'واتساب',
    whyReachOut: 'لماذا تتواصل معي؟',
    reachOutText: 'يحيى متحمس للمساهمة في مشاريع جريئة ومتعددة التخصصات حيث يلتقي سرد القصص بالتكنولوجيا. منفتح للتدريب الداخلي، والتعاون الإبداعي، والأدوار المبتدئة التي تغطي الإنتاج الإعلامي، والتسويق، وتجارب البرمجيات.',
    
    // Section Labels
    capabilities: 'القدرات',
    recognition: 'التقدير',
    educationLabel: 'التعليم',
    stayInTouch: 'ابق على تواصل',
    explore: 'استكشف',
    footerText: 'صمم ليحيى حاتم صلاح سالم',

    // Portfolio page
    portfolioTitle: 'الأعمال الإبداعية',
    portfolioSubtitle: 'عرض لمشاريعي التصميمية ومساعيي الإبداعية',
    portfolioDescription: 'عرض للمشاريع الإبداعية التي تغطي تحرير الفيديو، والرسوم المتحركة، والتصميم الجرافيكي، وسرد القصص الرقمي.',
    category: 'الفئة',
    year: 'السنة',
    
    // Language selector
    language: 'اللغة',

    // Ticker
    ticker: {
      item1: 'راوي قصص رقمي',
      item2: 'تقني إبداعي',
      item3: 'طليق في العربية / الإنجليزية / الفرنسية',
      item4: 'منفتح على التعاونات التي تتجاوز الحدود',
    },

    // Data
    profile: {
      name: 'يحيى حاتم صلاح سالم',
      role: 'طالب في الاتصالات التسويقية المتكاملة وعلوم الحاسب',
      location: 'مصر الجديدة، القاهرة، مصر',
      contact: {
        whatsapp: '+201226094788',
        phone: '+201105177931',
        email: 'yehiahatemsalem@gmail.com',
      },
      summary:
        'طالب مزدوج الدرجة يجمع بين الإبداع والتكنولوجيا عبر الاتصالات التسويقية وعلوم الحاسب. ذو خبرة في إنشاء الوسائط الرقمية، وسرد القصص، وحل المشكلات مع إتقان اللغات العربية والإنجليزية والفرنسية.',
      highlights: [
        'طالب مزدوج الدرجة (IMC & Computer Science)',
        'شهادة IELTS بمعدل 8.5',
        'فائز بمهرجان القاهرة لأفلام الموبايل (تحت 18)',
      ],
      skills: [
        {
          title: 'بصري وحركي',
          accent: 'bg-brutalYellow',
          items: [
            'تحرير الصور: Affinity Photo, Photoshop, GIMP',
            'تحرير الفيديو: Sony Vegas, DaVinci Resolve, Adobe Premiere',
            'التصميم الجرافيكي: Affinity Designer, Affinity Publisher',
            'الرسوم المتحركة: Krita',
          ],
        },
        {
          title: 'الفن الرقمي والأدوات',
          accent: 'bg-brutalCyan',
          items: ['الفن الرقمي: Krita, Paint Tool SAI, Affinity Photo', 'إدارة الأصول وسير العمل الإبداعي'],
        },
        {
          title: 'اللغات',
          accent: 'bg-brutalMagenta',
          items: ['العربية — طليق', 'الإنجليزية — طليق', 'الفرنسية — طليق'],
        },
        {
          title: 'نقاط القوة الشخصية',
          accent: 'bg-ink text-alabaster',
          items: ['التواصل والعرض الممتاز', 'أخلاقيات عمل متفانية ودقيقة', 'حل المشكلات والتفكير الجانبي'],
        },
      ],
      education: [
        {
          degree: 'بكالوريوس الآداب في الاتصالات التسويقية المتكاملة',
          institution: 'الجامعة البريطانية في مصر',
          location: 'القاهرة، مصر',
          period: 'متوقع 2026',
        },
        {
          degree: 'بكالوريوس العلوم في علوم الحاسب',
          institution: 'جامعة الشعب',
          period: 'متوقع 2027',
        },
      ],
      awards: [
        { name: 'شهادة IELTS — المعدل العام 8.5', year: '2022' },
        { name: 'شهادة الانغماس الفرنسي', year: '2022' },
        { name: 'جائزة الأعمال الدولية', year: '2022' },
        { name: 'فائز بمهرجان القاهرة لأفلام الموبايل (تحت 18)', year: '2016' },
        { name: 'جائزة التخرج — الأعمال الدولية', year: '2022' },
      ],
    },
    portfolioWorks: [
      {
        id: 1,
        title: 'لافتة ملصق مهرجان أفلام الجامعة البريطانية',
        description: 'تصميم الملصق الرسمي لمهرجان أفلام الطلاب الدولي بالجامعة البريطانية في مصر، يتميز بطباعة جريئة وصور سينمائية.',
        category: 'تصميم ملصقات',
        thumbnail: getAssetPath('portfolio/bue poster banner.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/bue poster banner.png'),
        },
        year: '2024',
      },
      {
        id: 2,
        title: 'شعار مهرجان أفلام الطلاب الدولي',
        description: 'تصميم هوية العلامة التجارية لمهرجان أفلام الطلاب الدولي، يجمع بين زخارف بكرة الفيلم والبساطة الحديثة.',
        category: 'تصميم شعارات',
        thumbnail: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
        },
        year: '2024',
      },
      {
        id: 3,
        title: 'لوحة إعلانية لمهرجان الأفلام',
        description: 'تصميم لوحة إعلانية واسعة النطاق للترويج للمهرجان في الحرم الجامعي مع تسلسل هرمي بصري عالي التأثير.',
        category: 'تصميم لوحات إعلانية',
        thumbnail: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
        },
        year: '2024',
      },
      {
        id: 4,
        title: 'تصميم غلاف كتاب',
        description: 'مشروع تصميم تحريري يتميز باستكشاف الطباعة والتكوين القائم على السرد.',
        category: 'تصميم كتب',
        thumbnail: getAssetPath('portfolio/Book Cover final submission.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/Book Cover final submission.png'),
        },
        year: '2024',
      },
    ],
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    portfolio: 'Portfolio',
    viewPortfolio: 'Voir le Portfolio →',
    backToHome: '← Retour à l\'Accueil',
    
    // Hero section
    hello: 'Bonjour, je suis',
    tagline: 'Designer Multidisciplinaire & Stratège Créatif',
    contactMe: 'Contactez-moi',
    email: 'E-mail',
    phone: 'Téléphone',
    location: 'Localisation',
    
    // Skills section
    skillsTitle: 'Compétences et Expertise',
    
    // Awards section
    awardsTitle: 'Prix et Reconnaissance',
    
    // Education section
    educationTitle: 'Éducation',
    present: 'Présent',
    
    // Contact section
    contactTitle: 'Travaillons Ensemble',
    available: 'Disponible',
    whatsapp: 'WhatsApp',
    whyReachOut: 'Pourquoi me contacter ?',
    reachOutText: 'Yehia est enthousiaste à l\'idée de contribuer à des projets audacieux et interdisciplinaires où le storytelling rencontre la technologie. Ouvert aux stages, aux collaborations créatives et aux postes juniors couvrant la production médiatique, le marketing et les expériences logicielles.',
    
    // Section Labels
    capabilities: 'Capacités',
    recognition: 'Reconnaissance',
    educationLabel: 'Éducation',
    stayInTouch: 'Restons en Contact',
    explore: 'Explorer',
    footerText: 'Conçu pour Yehia Hatem Salah Salem',

    // Portfolio page
    portfolioTitle: 'Travaux Créatifs',
    portfolioSubtitle: 'Une vitrine de mes projets de design et créations',
    portfolioDescription: 'Une vitrine de projets créatifs couvrant le montage vidéo, l\'animation, la conception graphique et la narration numérique.',
    category: 'Catégorie',
    year: 'Année',
    
    // Language selector
    language: 'Langue',

    // Ticker
    ticker: {
      item1: 'Conteur Numérique',
      item2: 'Technologue Créatif',
      item3: 'Courant en Arabe / Anglais / Français',
      item4: 'Ouvert aux Collaborations Audacieuses',
    },

    // Data
    profile: {
      name: 'Yehia Hatem Salah Salem',
      role: 'Étudiant en Communication Marketing Intégrée et Informatique',
      location: 'Héliopolis, Le Caire, Égypte',
      contact: {
        whatsapp: '+201226094788',
        phone: '+201105177931',
        email: 'yehiahatemsalem@gmail.com',
      },
      summary:
        'Étudiant en double cursus alliant créativité et technologie à travers la communication marketing et l\'informatique. Expérimenté dans la création de médias numériques, le storytelling et la résolution de problèmes, parlant couramment l\'arabe, l\'anglais et le français.',
      highlights: [
        'Étudiant en double cursus (IMC & Informatique)',
        'Score IELTS Global 8.5',
        'Gagnant du Festival du Film Mobile du Caire (Moins de 18 ans)',
      ],
      skills: [
        {
          title: 'Visuel & Animation',
          accent: 'bg-brutalYellow',
          items: [
            'Retouche Photo: Affinity Photo, Photoshop, GIMP',
            'Montage Vidéo: Sony Vegas, DaVinci Resolve, Adobe Premiere',
            'Design Graphique: Affinity Designer, Affinity Publisher',
            'Animation: Krita',
          ],
        },
        {
          title: 'Art Numérique & Outils',
          accent: 'bg-brutalCyan',
          items: ['Art Numérique: Krita, Paint Tool SAI, Affinity Photo', 'Flux de Travail Suite Créative & Gestion d\'Actifs'],
        },
        {
          title: 'Langues',
          accent: 'bg-brutalMagenta',
          items: ['Arabe — Courant', 'Anglais — Courant', 'Français — Courant'],
        },
        {
          title: 'Forces Personnelles',
          accent: 'bg-ink text-alabaster',
          items: ['Excellente Communication & Présentation', 'Éthique de Travail Dédiée & Méticuleuse', 'Résolution de Problèmes & Pensée Latérale'],
        },
      ],
      education: [
        {
          degree: 'Licence en Communication Marketing Intégrée',
          institution: 'L\'Université Britannique en Égypte',
          location: 'Le Caire, Égypte',
          period: 'Prévu 2026',
        },
        {
          degree: 'Licence en Informatique',
          institution: 'University of the People',
          period: 'Prévu 2027',
        },
      ],
      awards: [
        { name: 'Certificat IELTS — Score Global 8.5', year: '2022' },
        { name: 'Certificat d\'Immersion Française', year: '2022' },
        { name: 'Prix du Commerce International', year: '2022' },
        { name: 'Gagnant du Festival du Film Mobile du Caire (Moins de 18 ans)', year: '2016' },
        { name: 'Prix de Fin d\'Études — Commerce International', year: '2022' },
      ],
    },
    portfolioWorks: [
      {
        id: 1,
        title: 'Bannière d\'Affiche du Festival du Film BUE',
        description: 'Conception de l\'affiche officielle du Festival International du Film Étudiant de l\'Université Britannique en Égypte, avec une typographie audacieuse et une imagerie cinématographique.',
        category: 'Conception d\'Affiches',
        thumbnail: getAssetPath('portfolio/bue poster banner.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/bue poster banner.png'),
        },
        year: '2024',
      },
      {
        id: 2,
        title: 'Logo BUE ISFF',
        description: 'Conception de l\'identité de marque pour le Festival International du Film Étudiant, combinant des motifs de bobines de film avec un minimalisme moderne.',
        category: 'Conception de Logos',
        thumbnail: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
        },
        year: '2024',
      },
      {
        id: 3,
        title: 'Panneau d\'Affichage du Festival du Film',
        description: 'Conception de panneau d\'affichage à grande échelle pour la promotion du festival sur le campus avec une hiérarchie visuelle à fort impact.',
        category: 'Conception de Panneaux',
        thumbnail: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
        },
        year: '2024',
      },
      {
        id: 4,
        title: 'Conception de Couverture de Livre',
        description: 'Projet de design éditorial explorant la typographie et la composition narrative.',
        category: 'Conception de Livres',
        thumbnail: getAssetPath('portfolio/Book Cover final submission.png'),
        media: {
          type: 'image',
          src: getAssetPath('portfolio/Book Cover final submission.png'),
        },
        year: '2024',
      },
    ],
  },
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇪🇬', rtl: true },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];
