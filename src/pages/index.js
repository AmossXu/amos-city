import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Ui 组件库模板',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        为公司编写用于发布至npm仓库的组件库，此项目为测试可用性的demo，内容不多但五脏俱全。
        包含组件编写、storybook预览组件各类用法、代码、ts props定义等。<a href="https://github.com/AmossXu/amos-ui-components">Github仓库</a>
      </>
    ),
  },
  {
    title: '本博客项目',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        本项目内容不多，基于docusaurus框架的博客项目，内容主要为
        自己平时的一些博客编写、文档纪要、以及自我展示平台。<a href="https://github.com/AmossXu/amos-city">Github仓库</a>
      </>
    ),
  },
  {
    title: '待开发',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              冲冲冲！看博客
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
