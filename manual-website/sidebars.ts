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
            ],
        },
        {
            type: 'category',
            label: '勤怠',
            items: [
                'attendance/joumon',
            ],
        },
        {
            type: 'category',
            label: 'Cloud',
            items: [
                'cloud/cloud-guide',
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
                'database/database-guide',
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
                'database/apache-hive-guide',
                'database/neo4j-guide',
                'database/azure-cosmosdb-guide',
                'database/aws-dynamodb-guide',
                'database/apache-spark-guide',
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
                'domain/domain-guide',
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
                'printer/printer-setup-guide',
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
                'server/ssh-guide',
            ],
        },
        {
            type: 'category',
            label: 'Trouble Shooting',
            items: [
                'trouble-shooting/intro',
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
        {
            type: 'category',
            label: '売上原価PRO',
            items: [
                'ijs/intro'
            ],
        },
        {
            type: 'category',
            label: '雷検知',
            items: [
                'thunder/intro',
            ],
        },
        {
            type: 'category',
            label: '防犯カメラ',
            items: [
                'surveillance-camera/hikvision-ivms4200-guide',
            ],
        },
    ],
};

export default sidebars;
