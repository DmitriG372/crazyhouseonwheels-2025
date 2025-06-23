import React, { useState, useEffect } from 'react';
import './OfflineIndicator.css';

interface OfflineIndicatorProps {
  onInstallPrompt?: () => void;
}

const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ onInstallPrompt }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="offline-indicator">
      {!isOnline && (
        <div className="offline-banner">
          📶 Offline režiim - andmed cache'ist
        </div>
      )}
      
      {showInstallPrompt && (
        <div className="install-prompt">
          <div className="install-content">
            <span>📱 Lisa äpp avaekraanile</span>
            <button onClick={handleInstallClick} className="install-btn">
              Lisa
            </button>
            <button 
              onClick={() => setShowInstallPrompt(false)} 
              className="dismiss-btn"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfflineIndicator;