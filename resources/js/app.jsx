export default defineConfig({
    plugins: [
      laravel({
        input: [
          'resources/css/app.css',
          'resources/js/app.jsx',
        ],
        refresh: true,
      }),
      React(),
    ],
  });
