import { useEffect } from 'react';
import './styles/preview.css';
import bodyHtml from './body.html?raw';
import scriptCode from './preview-script.js?raw';

let scriptInjected = false;

export default function App() {
  useEffect(() => {
    if (scriptInjected) return;          // run the preview script exactly once
    scriptInjected = true;
    const s = document.createElement('script');
    s.textContent = scriptCode;
    document.body.appendChild(s);
  }, []);

  // Render the preview's exact markup (sections, subpages, footer, base64 hero)
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
