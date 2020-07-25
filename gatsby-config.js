module.exports = {
  siteMetadata: {
    siteTitle: `코딩하는펭귄의 Today I Learned`,
    defaultTitle: `코딩하는펭귄의 Today I Learned`,
    siteTitleShort: `코딩하는펭귄의 TIL`,
    siteDescription: `개발을 하면서 새롭게 얻은 지식 조각을 기록합니다📝`,
    siteUrl: `https://cooding-penguin-til.netlify.app/`,
    siteAuthor: `CoodingPenguin`,
    siteImage: `/banner.png`,
    siteLanguage: `ko`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Theme by Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/CoodingPenguin/til-wiki`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cooding-penguin-til.netlify.app/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
