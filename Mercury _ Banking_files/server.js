const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('Mercury-_-Banking_files-main/Mercury _ Banking_files'));

app.use('/check-api', createProxyMiddleware({
  target: 'https://sandbox.checkhq.com',
  changeOrigin: true,
  pathRewrite: {
    '^/check-api': '',
  },
}));

app.listen(3000, () => {
  console.log('🚀 Local server running at http://localhost:3000');
});
