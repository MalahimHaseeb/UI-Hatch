import { GameIconsFlowerTwirl } from '@/components/icons';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <GameIconsFlowerTwirl width={32} height={32}/>
        UI Hatch
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: 'How To use',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

