import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Another',
            items: [
                'another/markdown-tutorial',
                'another/mdx-tutorial',
                'another/cool-effects',
                'another/git',
            ],
        },
        {
            type: 'category',
            label: 'Attendance',
            items: [
                'attendance/joumon',
            ],
        },
        {
            type: 'category',
            label: 'Cloud',
            items: [
                'cloud/intro'
            ],
        },
        {
            type: 'category',
            label: 'Container',
            items: [
                'container/intro',
            ],
        },
        {
            type: 'category',
            label: 'Database',
            items: [
                'database/intro',
            ],
        },
        {
            type: 'category',
            label: "desknet's NEO",
            items: [
                'desknet-neo/config',
            ],
        },
        {
            type: 'category',
            label: 'Domain',
            items: [
                'domain/intro',
            ],
        },
        {
            type: 'category',
            label: 'IJS',
            items: [
                'ijs/intro'
            ],
        },
        {
            type: 'category',
            label: 'Microsoft 365',
            items: [
                'microsoft-365/teams-cache',
            ],
        },
        {
            type: 'category',
            label: 'Mobile Device',
            items: [
                'mobile-device/ios-exchange',
            ],
        },
        {
            type: 'category',
            label: 'Network',
            items: [
                'network/intro',
            ],
        },
        {
            type: 'category',
            label: 'PC',
            items: [
                'pc/bios',
                'pc/powershell-kitting',
            ],
        },
        {
            type: 'category',
            label: 'Printer',
            items: [
                'printer/intro',
            ],
        },
        {
            type: 'category',
            label: 'Router',
            items: [
                'router/intro'
            ],
        },
        {
            type: 'category',
            label: 'Security',
            items: [
                'security/intro',
            ],
        },
        {
            type: 'category',
            label: 'Server',
            items: [
                'server/prometheus',
                'server/alert',
                'server/prometheus-zabbix',
                'server/thanos',
                'server/prometheus-container',
            ],
        },
        {
            type: 'category',
            label: 'Surveillance camera',
            items: [
                'surveillance-camera/intro',
            ],
        },
        {
            type: 'category',
            label: 'Thunder',
            items: [
                'thunder/intro',
            ],
        },
        {
            type: 'category',
            label: 'Trouble Shooting',
            items: [
                'trouble-shooting/intro',
            ],
        },
    ],
};

export default sidebars;
