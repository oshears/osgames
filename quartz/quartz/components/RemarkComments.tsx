// components/Remark42Comments.tsx
import React, { useEffect } from 'react';

interface Remark42Props {
  id?: string;
}

declare global {
  interface Window {
    REMARK42: any;
    remark_config: any;
  }
}

const Remark42Comments: React.FC<Remark42Props> = ({ id = window.location.pathname }) => {
  useEffect(() => {
    // Remove any existing Remark42 script
    const existingScript = document.getElementById('remark42-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Configure Remark42
    window.remark_config = {
      host: 'https://remark42.giaze.home',
      site_id: 'giaze',
      url: window.location.origin + id,
      components: ['embed'],
      theme: window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? "dark" : "light",
    };

    // Load Remark42 script
    const script = document.createElement('script');
    script.id = 'remark42-script';
    script.async = true;
    script.defer = true;
    script.src = `${window.remark_config.host}/web/embed.js`;
    document.body.appendChild(script);

    // Add theme switching capability
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (window.REMARK42) {
          window.REMARK42.changeTheme(newColorScheme);
        }
      });
    }

    return () => {
      // Cleanup
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [id]);

  return <div id="remark42" />;
};

export default Remark42Comments;