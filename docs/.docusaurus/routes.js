import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e16'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/next-gen-frameworks',
    component: ComponentCreator('/blog/next-gen-frameworks', '4c5'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/development',
    component: ComponentCreator('/blog/tags/development', '35e'),
    exact: true
  },
  {
    path: '/blog/tags/framework',
    component: ComponentCreator('/blog/tags/framework', '015'),
    exact: true
  },
  {
    path: '/blog/tags/web',
    component: ComponentCreator('/blog/tags/web', 'da1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bc1'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '978'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'e37'),
            routes: [
              {
                path: '/architecture',
                component: ComponentCreator('/architecture', 'c5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/types/',
                component: ComponentCreator('/types/', '349'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/classes/ElementExporter',
                component: ComponentCreator('/types/classes/ElementExporter', '904'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/classes/ElementFreezer',
                component: ComponentCreator('/types/classes/ElementFreezer', 'fb2'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/classes/ElementRenderer',
                component: ComponentCreator('/types/classes/ElementRenderer', '1e0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/exportElement',
                component: ComponentCreator('/types/functions/exportElement', 'c43'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/renderVideo',
                component: ComponentCreator('/types/functions/renderVideo', '3f0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/settings',
                component: ComponentCreator('/types/functions/settings', '94a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/interfaces/ExportOptions',
                component: ComponentCreator('/types/interfaces/ExportOptions', 'e49'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/interfaces/ExportProgress',
                component: ComponentCreator('/types/interfaces/ExportProgress', '7f3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/interfaces/ExportSettings',
                component: ComponentCreator('/types/interfaces/ExportSettings', '564'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/interfaces/FreezeOptions',
                component: ComponentCreator('/types/interfaces/FreezeOptions', '424'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/usage',
                component: ComponentCreator('/usage', '8ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
