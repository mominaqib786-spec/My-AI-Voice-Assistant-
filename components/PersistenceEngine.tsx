
import React, { useEffect, useState, useRef } from 'react';

interface Props {
  enabled: boolean;
}

export default function PersistenceEngine({ enabled }: Props) {
  const [active, setActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let wakeLock: any = null;

    const requestWakeLock = async () => {
      if ('wakeLock' in navigator && enabled) {
        try {
          wakeLock = await (navigator as any).wakeLock.request('screen');
          setActive(true);
        } catch (err) {
          console.error('PERSISTENCE_FAULT:', err);
          setActive(false);
        }
      }
    };

    const startPersistenceBuffer = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.01; 
        audioRef.current.play().catch(e => console.debug("Audio heartbeat standby..."));
      }

      if (videoRef.current) {
        videoRef.current.play().catch(e => console.debug("Video persistence standby..."));
      }
    };

    if (enabled) {
      requestWakeLock();
      startPersistenceBuffer();
      
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible' && enabled) {
          requestWakeLock();
          startPersistenceBuffer();
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (wakeLock) {
            try { wakeLock.release(); } catch(e) {}
        }
        if (audioRef.current) audioRef.current.pause();
        if (videoRef.current) videoRef.current.pause();
      };
    } else {
      setActive(false);
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="sr-only">
      {/* 5 second silent WAV as base64 - helps maintain high priority audio focus */}
      <audio 
        ref={audioRef}
        loop 
        src="data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YSAAAAAA"
      />
      
      {/* Hidden Video for Android Background Retention */}
      <video 
        ref={videoRef}
        className="hidden" 
        loop 
        muted 
        playsInline 
        src="data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAAhmcmVlAAAAG21kYXQAAAGUAbXAzAAAAAYAAAAGAAAAAYAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAAAYAAAAGAAAA"
      />
    </div>
  );
}
