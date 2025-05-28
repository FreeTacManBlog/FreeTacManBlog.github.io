/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '',      // 如果部署在子目录，这里需要设置
  images: {
    unoptimized: true, // 禁用图片优化，因为静态导出不支持
  },
}

module.exports = nextConfig 