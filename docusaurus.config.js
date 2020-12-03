module.exports = {
  title: 'Amos-徐振雄',
  tagline: '码农【前端小老弟】-摄影【器材越来越小的咸鱼】-音乐【想学钢琴但只会吉他T T】',
  url: 'https://github.com/AmossXu/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Amos', // Usually your GitHub org/user name.
  projectName: 'amos-city', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Amos',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        {to: 'blog', label: '博客', position: 'right'},
        {
          href: 'https://github.com/AmossXu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: '文档',
      //     items: [
      //     ],
      //   },
      //   {
      //     title: '更多',
      //     items: [
      //       {
      //         label: '博客',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}，浙ICP备2020042248号 ，Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          // showReadingTime: true,
          // blogSidebar: require.resolve('./blogSideBar.js'),
          // Please change this to your repo.blogSidebar
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
