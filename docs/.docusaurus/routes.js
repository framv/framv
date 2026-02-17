import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ae8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e2f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4d5'),
            routes: [
              {
                path: '/docs/architecture',
                component: ComponentCreator('/docs/architecture', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage',
                component: ComponentCreator('/docs/usage', 'f66'),
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
