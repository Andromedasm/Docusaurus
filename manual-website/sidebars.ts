import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Microsoft 365',
            items: ['microsoft-365/intro',
                    'microsoft-365/teams-cache'
            ],
        },
        {
            type: 'category',
            label: 'Azure',
            items: ['azure/intro'],
        },
        {
            type: 'category',
            label: 'PC',
            items: ['pc/intro',
                    'pc/bios',
                    'pc/powershell-kitting',
            ],
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
            items: ['server/intro',
                    'server/prometheus',
                    'server/prometheus-grafana',
                    'server/alert',
                    'server/prometheus-zabbix',
                    'server/thanos',
                    'server/prometheus-container',
            ],
        },
        {
            type: 'category',
            label: "desknet's NEO",
            items: ['desknet-neo/intro',
                    'desknet-neo/config',
            ],
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
