import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'cloudaccountsFE',
  favicon:
    'https://infra-engineering-yos-prod.obs.cn-north-1.myhuaweicloud.com/9cdcb2f3dc540c966fa42e765855ba51a47de429-logo_%E4%BA%91%E8%B4%A6%E6%88%B7logo%402x.png',
  logo:
    'https://infra-engineering-yos-prod.obs.cn-north-1.myhuaweicloud.com/9cdcb2f3dc540c966fa42e765855ba51a47de429-logo_%E4%BA%91%E8%B4%A6%E6%88%B7logo%402x.png',
  outputPath: 'docs-dist',
  mode: 'site',
  styles: [
    '.__dumi-default-previewer-demo > div > div { min-height: 400px; }',
    '.__dumi-default-layout-content {overflow: hidden; overflow-x: auto;}',
    '.markdown > h4 { color: #1890ff !important}',
  ],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/ant-design/pro-components',
    },
  ],
});
