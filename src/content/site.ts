export type SiteLevel = 1 | 2 | 3;
export type PendingState = 'confirmed' | 'pending' | 'omitted';
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'linkedin' | 'web';

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
  role: 'Escritor · Autor de Migrante',
  tagline: 'Una presencia autoral centrada en Migrante y su trabajo poético.',
  description: 'Sitio de Javier Serrano, autor de Migrante. Prototipo construido con información pública verificada y datos pendientes claramente identificados.',
  url: 'https://dejavuurbe.github.io/javier-serrano-web/',
  email: '',
  emailState: 'pending' as PendingState,
  location: '',
  footerLine: 'Javier Serrano · Migrante',
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
    shortBio: 'Javier Serrano es autor de Migrante, una obra de poesía con ficha comercial pública.',
    longBio: 'Javier Serrano es autor de Migrante. También aparecen textos suyos en la antología Vivan las luchas colectivas II. La biografía pública definitiva está pendiente de aprobación del autor.',
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
