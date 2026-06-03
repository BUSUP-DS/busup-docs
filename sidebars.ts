import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
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
        { type: 'doc', id: 'side-menu', label: 'Side Menu' },
        { type: 'doc', id: 'tabs', label: 'Tabs' },
      ],
    },
  ],
};

export default sidebars;