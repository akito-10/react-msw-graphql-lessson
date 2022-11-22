import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { worker } from './mocks/browser';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  /**
   * - set quiet to false if you want to see API responses in the console
   * - onUnhandledRequest will just hide the warnings about APIs not being intercepted
   */
  worker
    .start({
      quiet: true,
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    })
    .then(() => {
      return root.render(<App />);
    });
} else {
  throw new Error('No container with the name of root found');
}
