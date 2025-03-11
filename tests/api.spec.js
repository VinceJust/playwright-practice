const { test, expect } = require('@playwright/test');

test('API antwortet mit Status 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
});

test('API-Fehler simulieren', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/99999'); // Nicht existierend
  expect(response.status()).toBe(404);
});
