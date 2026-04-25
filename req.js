import http from 'http';
http.get('http://localhost:3000/@vite/client', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
});
