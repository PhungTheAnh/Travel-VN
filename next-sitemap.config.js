/** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: 'https://travel-vn.vercel.app',
//   generateRobotsTxt: true,
//   changefreq: 'daily',
//   priority: 0.7,
//   sitemapSize: 5000, // Nếu ít page vẫn cần để tách file con
//   exclude: [], // đừng loại trừ route nào trừ khi thật sự cần
//   outDir: './public', // hoặc './out' nếu dùng export
// };

module.exports = {
  siteUrl: 'https://example.com', // phải có dù không dùng
  generateRobotsTxt: false, // ❌ không generate robots.txt
  outDir: './', // không cần xuất vào public
  exclude: ['/**'], // loại trừ tất cả route khỏi sitemap (không tạo file luôn)
};
