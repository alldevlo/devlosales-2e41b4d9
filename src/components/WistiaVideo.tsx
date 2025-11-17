import { useEffect, useRef } from "react";

interface WistiaVideoProps {
  mediaId: string;
  className?: string;
}

declare global {
  interface Window {
    _wq?: any[];
  }
  
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': any;
    }
  }
}

const WistiaVideo = ({ mediaId, className = "" }: WistiaVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Wistia player script
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Load specific video embed script
    const embedScript = document.createElement("script");
    embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    embedScript.async = true;
    embedScript.type = "module";
    document.head.appendChild(embedScript);

    return () => {
      // Cleanup scripts on unmount
      if (playerScript.parentNode) {
        playerScript.parentNode.removeChild(playerScript);
      }
      if (embedScript.parentNode) {
        embedScript.parentNode.removeChild(embedScript);
      }
    };
  }, [mediaId]);

  return (
    <div ref={containerRef} className={className}>
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      <wistia-player media-id={mediaId} aspect="1.7777777777777777"></wistia-player>
    </div>
  );
};

export default WistiaVideo;
