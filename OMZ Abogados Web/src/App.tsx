import { RouterProvider } from 'react-router';
import { router } from './utils/routes';
import { LanguageProvider } from './context/LanguageContext';
import './styles/globals.css';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}