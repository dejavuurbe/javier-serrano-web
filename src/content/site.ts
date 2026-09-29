export type SiteLevel = 1 | 2 | 3;
export type PendingState = 'confirmed' | 'pending' | 'omitted';
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'linkedin' | 'web';
export type VisualBackground = 'clean' | 'chromatic' | 'textured' | 'scenic';
export type VisualSurface = 'open' | 'block' | 'cards' | 'glass';
export type VisualCharacter = 'editorial' | 'organic' | 'cinematic' | 'graphic';
export type VisualImage = 'document' | 'framed' | 'integrated' | 'hero';

type Link = { label: string; url: string };
type Social = { platform: SocialPlatform; label: string; state: PendingState; url?: string };
type ActivityItem = { title: string; type: string; source: string; url: string; description: string };

const works = [
  {
    id: 'migrante',
    title: 'Migrante',
    subtitle: '',
    cover: '/images/portada-placeholder.svg',
    coverState: 'pending' as PendingState,
    synopsis: 'Sinopsis autorizada pendiente. Esta versión de trabajo identifica la obra sin inventar una descripción editorial.',
    genre: 'Poesía',
    year: '',
    pages: '',
    isbn: '',
    publisher: '',
    editorialState: {
      genre: 'confirmed' as PendingState,
      year: 'pending' as PendingState,
      pages: 'pending' as PendingState,
      isbn: 'pending' as PendingState,
      publisher: 'pending' as PendingState,
    },
    sampleUrl: '',
    purchaseLinks: [
      {
        label: 'Ver Migrante en la tienda',
        url: 'https://editorialunodeloeste.empretienda.com.ar/poesia/migrante',
      },
    ] as Link[],
    purchaseState: 'confirmed' as PendingState,
    featured: true,
    aliases: ['Migrante — Javier Serrano'] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Javier Serrano',
  canonicalName: 'Javier Serrano',
  searchVariants: ['Javier Serrano Migrante', 'Javier Serrano escritor'] as string[],
  role: 'Escritor · Docente · Profesor de Historia',
  tagline: 'Poesía entre Jujuy y González Catán: migración, memoria, terruño e identidad.',
  description: 'Sitio de Javier Serrano, autor de Migrante. Prototipo construido con información pública verificada y datos pendientes claramente identificados.',
  url: 'https://dejavuurbe.github.io/javier-serrano-web/',
  email: '',
  emailState: 'pending' as PendingState,
  location: 'González Catán, Buenos Aires',
  footerLine: 'Javier Serrano · Migrante',
  visual: {
    background: 'textured' as VisualBackground,
    surface: 'cards' as VisualSurface,
    character: 'organic' as VisualCharacter,
    image: 'integrated' as VisualImage,
    backgroundImage: '',
  },

  credit: {
    enabled: true,
    label: 'Diseño y desarrollo web por',
    url: 'https://dejavuurbe.github.io/pierre-menard-web/proyecto/',
  },
  social: [
    { platform: 'instagram', label: 'Instagram', state: 'pending' },
    { platform: 'facebook', label: 'Facebook', state: 'pending' },
  ] as Social[],
  author: {
    shortBio: 'Javier Serrano es escritor, docente y profesor de Historia. Nació en Jujuy y vive actualmente en González Catán, Buenos Aires.',
    longBio: 'Javier Serrano nació en Jujuy y se radicó en Buenos Aires. Es docente, profesor de Historia y autor de Migrante. Su poesía se vincula con la experiencia de migración, la identidad de su tierra natal, el folklore, los temas sociales y el terruño; hoy ese mapa vital también incluye González Catán. La redacción biográfica definitiva permanece pendiente de aprobación del autor.'
    photo: '/images/autor-placeholder.svg',
    photoState: 'pending' as PendingState,
    bioState: 'pending' as PendingState,
  },

  works,
  featuredBook: works.find((work) => work.featured) ?? works[0],

  activity: [] as ActivityItem[],
  activityState: 'pending' as PendingState,

  lifecycle: {
    infrastructure: 'CREADA/PUBLICADA',
    delivery: 'EN CONSTRUCCIÓN',
  },

  recovery: {
    incompleteRecall: ['autor de Migrante', 'Javier Serrano poesía'] as string[],
    spellingVariants: [] as string[],
    disambiguationNotes: ['Vincular la identidad autoral de Javier Serrano con la obra Migrante.'] as string[],
  },

  faq: [
    {
      question: '¿Quién es Javier Serrano?',
      answer: 'Javier Serrano es el autor de Migrante. La biografía pública definitiva está pendiente de aprobación.',
    },
    {
      question: '¿Qué es Migrante?',
      answer: 'Migrante es una obra de poesía vinculada públicamente a Javier Serrano.',
    },
    {
      question: '¿Dónde se puede encontrar Migrante?',
      answer: 'Existe una ficha comercial pública de Migrante en la tienda online de Editorial Uno del Oeste.',
    },
  ] as { question: string; answer: string }[],
};

export type SiteData = typeof site;
