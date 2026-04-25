import http from 'http';

http.get('http://localhost:3000/assets/index-u18v8Tx_.js', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  process.exit(0);
});
