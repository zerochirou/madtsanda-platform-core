import http from 'k6/http';
import { check } from 'k6';

export const options = {
  discardResponseBodies: true, // Hemat resource saat load tinggi

  scenarios: {
    high_load: {
      executor: 'constant-arrival-rate',
      rate: 5000,                    // Target 5000 request per detik
      timeUnit: '1s',
      duration: '10m',               // Naikkan durasi biar lebih meaningful
      preAllocatedVUs: 2000,         // Siapkan VUs dari awal (penting!)
      maxVUs: 8000,                  // Izinkan scale up sampai 8000 VU
    },
  },

  thresholds: {
    http_req_duration: ['p(95)<800'],   // 95% request < 800ms
    http_req_failed: ['rate<0.01'],     // Error rate < 1%
  },
};

export default function () {
  const res = http.get('http://localhost:3333/api/v1/news');

  check(res, {
    'status adalah 200': (r) => r.status === 200,
  });
}