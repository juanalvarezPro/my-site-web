import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://juanalvarez.pro',
  // The name of your site, used in the title and for SEO.
  title: 'juanalvarez.pro',
  // The description of your site, used for SEO and RSS feed.
  description:
    'yo soy juan alvarez desarrollador full-stack, amante de la robótica y la música',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'Juan Alvarez',
  // Keywords for SEO, used in the meta tags.
  tags: ['software', 'robotics', 'programming', 'integracion'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/me.webp',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  // The homepage will display half this number in the "Latest Posts" section.
  pageSize: 6,
  // Whether Astro should resolve trailing slashes in URLs or not.
  // This value is used in the astro.config.mjs file and in the "Search" component to make sure pagefind links match this setting.
  // It is not recommended to change this, since most links existing in the site currently do not have trailing slashes.
  trailingSlashes: false,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: 'Inicio',
      url: '/',
    },
    {
      name: 'Sobre mi',
      url: '/about',
    },
    {
      name: 'Mi Blog',
      url: '/posts',
    },
    {
      name: 'n8n',
      url: '/n8n',
    },
    {
      name: 'GitHub', 
      url: 'https://github.com/juanalvarezpro',
      external: true,
    },
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'light-dark-auto',
    // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
    // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
    default: 'slack-ochin',
    // Shiki themes to bundle with the site.
    // https://expressive-code.com/guides/themes/#using-bundled-themes
    // These will be used to theme the entire site along with syntax highlighting.
    // To use light-dark-auto mode, only include a light and a dark theme in that order.
    // include: [
    //   'github-light',
    //   'github-dark',
    // ]
    include: [
      'slack-ochin',
      'slack-dark'
    ],
    // Optional overrides for specific themes to customize colors.
    // Their values can be either a literal color (hex, rgb, hsl) or another theme key.
    // See themeKeys list in src/types.ts for available keys to override and reference.
    overrides: {
      // Personalizar el tema catppuccin-mocha
      'slack-ochin': {
        background: '', // Fondo personalizado
      },
    },
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/juanalvarezpro',
    email: 'mailto:hola@juanalvarez.pro',
    linkedin: 'https://www.linkedin.com/in/juanalvarez-pro/',
    rss: true, // Set to true to include an RSS feed link in the footer
  },
  // Configuration for Giscus comments.
  // To set up Giscus, follow the instructions at https://giscus.app/
  // You'll need a GitHub repository with discussions enabled and the Giscus app installed.
  // Take the values from the generated script tag at https://giscus.app and fill them in here.
  // IMPORTANT: Update giscus.json in the root of the project with your own website URL
  // If you don't want to use Giscus, set this to undefined.
  giscus: {
    repo: 'juanalvarezPro/my-site-web', // Tu repositorio actual
    repoId: 'R_kgDOPqC6-g', // Obtén este ID de giscus.app
    category: 'General', // O el nombre que prefieras
    categoryId: 'DIC_kwDOPqC6-s4Cu-uP', // Obtén este ID de giscus.app
    reactionsEnabled: true, // Enable reactions on post itself
  },
  // These are characters available for the character chat feature.
  // To add your own character, add an image file to the top-level `/public` directory
  // Make sure to compress the image to a web-friendly size (<100kb)
  // Try using the excellent https://squoosh.app web app for creating small webp files
  characters: {
    owl: '/owl.webp',
    unicorn: '/unicorn.webp',
    duck: '/duck.webp',
  },
}

export default config
