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
    subtitle: 'Escribir para que el odio no nos venza',
    cover: '/images/migrante-cover.jpg',
    coverState: 'confirmed' as PendingState,
    synopsis: 'Obra poética más reciente de Javier Serrano y actualmente la más difundida por el autor. La sinopsis editorial autorizada permanece pendiente.',
    genre: 'Poesía',
    year: '',
    pages: '',
    isbn: '',
    publisher: 'Editorial Uno del Oeste',
    editorialState: {
      genre: 'confirmed' as PendingState,
      year: 'pending' as PendingState,
      pages: 'pending' as PendingState,
      isbn: 'pending' as PendingState,
      publisher: 'confirmed' as PendingState,
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
  {
    id: 'ventana-a-mi-pueblo',
    title: 'Ventana a mi pueblo',
    subtitle: '',
    cover: '',
    coverState: 'omitted' as PendingState,
    synopsis: 'Obra poética anterior de Javier Serrano. El material aportado para esta ficha documenta ejemplares físicos y una quinta edición.',
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
    purchaseLinks: [] as Link[],
    purchaseState: 'pending' as PendingState,
    featured: false,
    aliases: ['Ventana a mi pueblo — Javier Serrano'] as string[],
  },
];

export const site = {
  level: 1 as SiteLevel,
  name: 'Javier Serrano',
  canonicalName: 'Javier Serrano',
  searchVariants: ['Javier Serrano Migrante', 'Javier Serrano escritor', 'Javier Serrano Ventana a mi pueblo'] as string[],
  role: 'Escritor · Docente · Profesor de Historia',
  tagline: 'Poesía de caminos, pueblo, memoria y pertenencia entre Jujuy y González Catán.',
  description: 'Sitio de Javier Serrano, autor de Migrante y Ventana a mi pueblo. Prototipo en construcción con información y materiales aportados y verificados.',
  url: 'https://dejavuurbe.github.io/javier-serrano-web/',
  email: '',
  emailState: 'pending' as PendingState,
  location: 'González Catán, Buenos Aires',
  footerLine: 'Javier Serrano · Poesía, territorio y memoria',
  visual: {
    background: 'scenic' as VisualBackground,
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
    { platform: 'instagram', label: '@ap.enitasfolklore', state: 'confirmed', url: 'https://www.instagram.com/ap.enitasfolklore/' },
    { platform: 'facebook', label: 'Facebook', state: 'pending' },
  ] as Social[],
  author: {
    shortBio: 'Javier Serrano es escritor, docente y profesor de Historia. Nació en Jujuy y vive actualmente en González Catán, Buenos Aires.',
    longBio: 'Javier Serrano nació en Jujuy y se radicó en Buenos Aires. Es docente, profesor de Historia y autor de Ventana a mi pueblo y Migrante. Su poesía se vincula con la experiencia de migración, la identidad de su tierra natal, el folklore, los temas sociales, la memoria y el terruño; hoy ese mapa vital también incluye González Catán. La redacción biográfica definitiva permanece pendiente de aprobación del autor.',
    photo: '/images/javier-serrano.jpg',
    photoState: 'confirmed' as PendingState,
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
    incompleteRecall: ['autor de Migrante', 'Javier Serrano poesía', 'Ventana a mi pueblo'] as string[],
    spellingVariants: [] as string[],
    disambiguationNotes: ['Vincular la identidad autoral de Javier Serrano con Migrante y Ventana a mi pueblo.'] as string[],
  },

  faq: [
    {
      question: '¿Quién es Javier Serrano?',
      answer: 'Javier Serrano es escritor, docente y profesor de Historia, nacido en Jujuy y radicado en Buenos Aires.',
    },
    {
      question: '¿Qué libros publicó Javier Serrano?',
      answer: 'Entre las obras identificadas se encuentran Ventana a mi pueblo y Migrante, ambas de poesía.',
    },
    {
      question: '¿Dónde se puede encontrar Migrante?',
      answer: 'Migrante cuenta con una ficha comercial pública en la tienda online de Editorial Uno del Oeste.',
    },
  ] as { question: string; answer: string }[],
};

export type SiteData = typeof site;
