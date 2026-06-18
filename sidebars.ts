import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',

    // ─── Foundation ──────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🎨 Foundation',
      collapsed: false,
      items: [
        { type: 'doc', id: 'foundation/index', label: 'Overview' },
        {
          type: 'category',
          label: 'Design Tokens',
          collapsed: false,
          items: [
            { type: 'doc', id: 'foundation/design-tokens/colors', label: 'Colors' },
            { type: 'doc', id: 'foundation/design-tokens/spacing', label: 'Spacing' },
          ],
        },
        { type: 'doc', id: 'foundation/typography', label: 'Typography' },
        { type: 'doc', id: 'foundation/principles', label: 'Principles' },
      ],
    },

    // ─── App User ─────────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '📱 App User',
      collapsed: false,
      items: [
        { type: 'doc', id: 'app-user/index', label: 'Overview' },

        // Components
        {
          type: 'category',
          label: 'Navigation',
          collapsed: false,
          items: [
            { type: 'doc', id: 'app-user/navigation-bar', label: 'Navigation Bar' },
            { type: 'doc', id: 'app-user/side-menu', label: 'Side Menu' },
            { type: 'doc', id: 'app-user/tabs', label: 'Tabs' },
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          collapsed: false,
          items: [
            { type: 'doc', id: 'app-user/toast', label: 'Toast' },
            { type: 'doc', id: 'app-user/feedback-signs', label: 'Feedback Signs' },
            { type: 'doc', id: 'app-user/feedback-modals', label: 'Feedback Modals' },
            { type: 'doc', id: 'app-user/notification', label: 'Notification' },
          ],
        },
        {
          type: 'category',
          label: 'Input & Controls',
          collapsed: false,
          items: [
            { type: 'doc', id: 'app-user/buttons', label: 'Buttons' },
            { type: 'doc', id: 'app-user/inputs', label: 'Text Input' },
            { type: 'doc', id: 'app-user/form-controls', label: 'Form Controls' },
            { type: 'doc', id: 'app-user/code-input', label: 'Code Input' },
            { type: 'doc', id: 'app-user/segmented-control', label: 'Segmented Control' },
          ],
        },
        {
          type: 'category',
          label: 'Display',
          collapsed: false,
          items: [
            { type: 'doc', id: 'app-user/badge', label: 'Badge' },
            { type: 'doc', id: 'app-user/avatar', label: 'Avatar' },
            { type: 'doc', id: 'app-user/progress-bar', label: 'Progress Bar' },
          ],
        },

        // Patterns
        {
          type: 'category',
          label: 'Patterns',
          collapsed: false,
          items: [
            { type: 'doc', id: 'app-user/cards', label: 'Cards' },
            { type: 'doc', id: 'app-user/ticket', label: 'Ticket' },
          ],
        },
      ],
    },

    // ─── Dashboard ───────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🖥️ Dashboard',
      collapsed: false,
      items: [
        { type: 'doc', id: 'dashboard/index', label: 'Overview' },
        { type: 'doc', id: 'dashboard/layout', label: 'Layout' },
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: [
            { type: 'doc', id: 'dashboard/side-menu', label: 'Side Menu' },
            { type: 'doc', id: 'dashboard/toast', label: 'Toast' },
            { type: 'doc', id: 'dashboard/data-table', label: 'Data Table' },
            { type: 'doc', id: 'dashboard/filters', label: 'Filters' },
            { type: 'doc', id: 'dashboard/modal', label: 'Modal' },
            { type: 'doc', id: 'dashboard/alert-system', label: 'Alert System' },
            { type: 'doc', id: 'dashboard/accordion', label: 'Accordion' },
            { type: 'doc', id: 'dashboard/service-detail-modal', label: 'Service Detail Modal' },
            { type: 'doc', id: 'landings/title', label: 'Title' },
          ],
        },
      ],
    },

    // ─── App Driver ──────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🚌 App Driver',
      collapsed: false,
      items: [
        { type: 'doc', id: 'app-driver/index', label: 'Overview' },
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: [
            { type: 'doc', id: 'app-driver/welcome-header', label: 'Welcome Header' },
            { type: 'doc', id: 'app-driver/route-components', label: 'Route Components' },
            { type: 'doc', id: 'app-driver/incidence-modals', label: 'Incidence Modals' },
            { type: 'doc', id: 'app-driver/passenger-information', label: 'Passenger Information' },
            { type: 'doc', id: 'app-driver/manual-boarding-control', label: 'Manual Boarding Control' },
            { type: 'doc', id: 'app-driver/on-demand-control', label: 'On Demand Control' },
            { type: 'doc', id: 'app-driver/buttons', label: 'Square Button' },
            { type: 'doc', id: 'app-driver/toast', label: 'Toast' },
          ],
        },
      ],
    },
    // ─── Landings ─────────────────────────────────────────────────────────────
    {
      type: 'category',
      label: '🌐 Landings',
      collapsed: false,
      items: [
        { type: 'doc', id: 'landings/index', label: 'Overview' },
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: [
            { type: 'doc', id: 'landings/navigation-header', label: 'Navigation Header' },
            { type: 'doc', id: 'landings/search-bar', label: 'Search Bar' },
            { type: 'doc', id: 'landings/title', label: 'Title' },
            { type: 'doc', id: 'landings/calendar-modal', label: 'Calendar Modal' },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
