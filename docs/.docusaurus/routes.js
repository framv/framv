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
    component: ComponentCreator('/', '014'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'c77'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b41'),
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
                path: '/types/classes/ElementStreamer',
                component: ComponentCreator('/types/classes/ElementStreamer', '64c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/decodeAudio',
                component: ComponentCreator('/types/functions/decodeAudio', 'dad'),
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
                path: '/types/functions/extractAudioPCM',
                component: ComponentCreator('/types/functions/extractAudioPCM', '905'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/hasAudio',
                component: ComponentCreator('/types/functions/hasAudio', '9dd'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/mixAudioFrame',
                component: ComponentCreator('/types/functions/mixAudioFrame', '8a7'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/registerExporter',
                component: ComponentCreator('/types/functions/registerExporter', '219'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/seekElement',
                component: ComponentCreator('/types/functions/seekElement', 'd6c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/types/functions/seekMedia',
                component: ComponentCreator('/types/functions/seekMedia', 'a42'),
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
                path: '/types/functions/waitMedia',
                component: ComponentCreator('/types/functions/waitMedia', '9b2'),
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
