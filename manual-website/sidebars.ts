import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'AI',
            items: [
                'ai/azure-ai-studio',
            ],
        },
        {
            type: 'category',
            label: 'Another',
            items: [
                'another/markdown-tutorial',
                'another/mdx-tutorial',
                'another/cool-effects',
                'another/html-basic-guide',
                'another/css-guide',
                'another/javascript-guide',
                'another/modern-css-guide',
                'another/electron-manual',
                'another/pyqt-manual',
                'another/tkinter-manual',
            ],
        },
        {
            type: 'category',
            label: 'Cloud',
            items: [
                'cloud/azure-cli',
                'cloud/azure-functions',
                'cloud/aws-lambda',
            ],
        },
        {
            type: 'category',
            label: 'Container',
            items: [
                'container/container-guide',
                'container/docker-guide',
                'container/podman-guide',
                'container/kubernetes-guide',
            ],
        },
        {
            type: 'category',
            label: 'Database',
            items: [
                'database/postgresql-guide',
                'database/mysql-guide',
                'database/sqlserver-guide',
                'database/oracle-guide',
                'database/db2-guide',
                'database/sqlite-guide',
                'database/mongodb-guide',
                'database/redis-guide',
                'database/apache-cassandra-guide',
                'database/apache-hadoop-guide',
                'database/neo4j-guide',
                'database/azure-cosmosdb-guide',
                'database/aws-dynamodb-guide',
                'database/apache-spark-guide',
            ],
        },
        {
            type: 'category',
            label: "Docusaurus",
            items: [
                'docusaurus/docusaurus-guide',
                'docusaurus/docusaurus-install',
                'docusaurus/docusaurus-setting',
                'docusaurus/docusaurus-typescript',
                'docusaurus/docusaurus-create-document',
                'docusaurus/docusaurus-warning',
                'docusaurus/docusaurus-tabs',
                'docusaurus/docusaurus-heading',
                'docusaurus/docusaurus-links',
                'docusaurus/docusaurus-mermaid',
            ],
        },
        {
            type: 'category',
            label: 'Domain',
            items: [
                'domain/domain-guide',
            ],
        },
        {
            type: 'category',
            label: 'Interview',
            items: [
                'interview/questions',
            ],
        },
        {
            type: 'category',
            label: 'Microsoft 365',
            items: [
                'microsoft-365/teams-cache',
                'microsoft-365/excel-functions',
                'microsoft-365/office-scripts',
            ],
        },
        {
            type: 'category',
            label: 'Linux',
            items: [
                'linux/shell-guide',
                'linux/git',
                'linux/ubuntu-guide',
                'linux/rhel-guide',
                'linux/azure-fsck',
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
                'network/network-guide',
            ],
        },
        {
            type: 'category',
            label: 'Router',
            items: [
                'router/telnet-guide'
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
                'server/ssh-guide',
            ],
        },
        {
            type: 'category',
            label: 'Unix',
            items: [
                'unix/freebsd-guide',
            ],
        },
        {
            type: 'category',
            label: 'Windows',
            items: [
                'windows/powershell-guide',
                'windows/wsl-guide'
            ],
        },
    ],
};

export default sidebars;
