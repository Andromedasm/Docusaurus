import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Microsoft 365',
            items: ['microsoft-365/intro'],
        },
        {
            type: 'category',
            label: 'Azure',
            items: ['azure/intro'],
        },
        {
            type: 'category',
            label: 'PC',
            items: ['pc/intro'],
        },
        {
            type: 'category',
            label: 'Mobile Device',
            items: ['mobile-device/intro'],
        },
        {
            type: 'category',
            label: 'Network',
            items: ['network/intro'],
        },
        {
            type: 'category',
            label: 'Printer',
            items: ['printer/intro'],
        },
        {
            type: 'category',
            label: 'Server',
            items: ['server/intro'],
        },
        {
            type: 'category',
            label: "desknet's NEO",
            items: ['desknet-neo/intro'],
        },
        {
            type: 'category',
            label: 'Database',
            items: ['database/intro'],
        },
        {
            type: 'category',
            label: 'Container',
            items: ['container/intro'],
        },
        {
            type: 'category',
            label: 'Another',
            items: ['another/intro'],
        },
    ],
};

export default sidebars;
