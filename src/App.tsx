import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './utils/routes';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { applySeoToDocument } from './seo/seo';
import './styles/globals.css';

const router = createBrowserRouter(routes);

/** Mantiene título, descripción, canonical y lang al día al navegar o cambiar idioma. */
function SeoSync() {
  const { language } = useLanguage();
  const [pathname, setPathname] = useState(router.state.location.pathname);

  useEffect(() => router.subscribe((state) => setPathname(state.location.pathname)), []);
  useEffect(() => applySeoToDocument(pathname, language), [pathname, language]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <SeoSync />
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
