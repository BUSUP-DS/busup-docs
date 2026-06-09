import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'design',
    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      items: [
        'design-tokens/colors',
        'design-tokens/spacing',
        'typography',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        'buttons',
        { type: 'doc', id: 'inputs', label: 'Text input' },
        { type: 'doc', id: 'form-controls', label: 'Form Controls' },
        { type: 'doc', id: 'feedback-modals', label: 'Feedback Modals' },
        { type: 'doc', id: 'feedback-signs', label: 'Feedback Signs' },
        { type: 'doc', id: 'side-menu', label: 'Side Menu' },
        { type: 'doc', id: 'tabs', label: 'Tabs' },
        { type: 'doc', id: 'toast', label: 'Toast' },
        { type: 'doc', id: 'badge', label: 'Badge' },
        { type: 'doc', id: 'avatar', label: 'Avatar' },
        { type: 'doc', id: 'segmented-control', label: 'Segmented Control' },
        { type: 'doc', id: 'progress-bar', label: 'Progress Bar' },
        { type: 'doc', id: 'code-input', label: 'Code Input' },
        { type: 'doc', id: 'navigation-bar', label: 'Navigation Bar' },
        { type: 'doc', id: 'notification', label: 'Notification' },
        { type: 'doc', id: 'cards', label: 'Cards' },
        { type: 'doc', id: 'ticket', label: 'Ticket' },
      ],
    },
  ],
};

export default sidebars;