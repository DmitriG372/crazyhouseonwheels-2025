import React, { useState } from 'react';
import './InfoModal.css';

interface InfoModalProps {
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'meelespea' | 'apps'>('meelespea');

  const openAppStore = (appName: string) => {
    // Generate App Store search URL
    const searchQuery = encodeURIComponent(appName);
    const appStoreUrl = `https://apps.apple.com/search?term=${searchQuery}`;
    window.open(appStoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="info-modal-overlay" onClick={onClose}>
      <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="info-modal-close" onClick={onClose}>✕</button>
        
        <div className="info-modal-header">
          <h2>📋 Reisi informatsioon</h2>
          <div className="info-tabs">
            <button 
              className={`info-tab ${activeTab === 'meelespea' ? 'active' : ''}`}
              onClick={() => setActiveTab('meelespea')}
            >
              📝 Meelespea
            </button>
            <button 
              className={`info-tab ${activeTab === 'apps' ? 'active' : ''}`}
              onClick={() => setActiveTab('apps')}
            >
              📱 Äpid
            </button>
          </div>
        </div>

        <div className="info-modal-body">
          {activeTab === 'meelespea' && (
            <div className="info-content">
              <div className="info-section">
                <h3>🚐 TripINFO – Meelespea</h3>
                <p className="info-subtitle">Salvesta see vaheleht telefoni ja prindi 1 eksemplar camperi kindalaekasse. Kõik punktid on kohandatud 27.06 – 06.07 marsruudile (EE → LT → PL → DE → EE) ning &lt;3,5 t matkaautole.</p>
              </div>

              <div className="info-section">
                <h4>📄 1. Dokumendid & äpid</h4>
                <ul>
                  <li><strong>Isikut tõendavad dokumendid:</strong> ID-kaart + pass (juhuks kui mõni Poola piiripoliitsei küsib)</li>
                  <li><strong>Auto:</strong> roheline kaart, rendileping, EU liikluskindlustus (print + PDF)</li>
                  <li><strong>Tervisekindlustus:</strong> EHIC + reisikindlustuse poliis (PDF telefonis)</li>
                  <li><strong>Äpid:</strong> e-TOLL PL, Autopay, e-Dalnice, Park4Night Pro offline, Google Maps offline, Revolut/Wise, Windy</li>
                  <li><strong>Paberkaardid:</strong> ADAC Saksamaa kiirteede atlas (varu, kui netti pole)</li>
                </ul>
              </div>

              <div className="info-section">
                <h4>🔧 2. Camper & tehniline hooldus</h4>
                <ul>
                  <li><strong>Kütus:</strong> täis paak enne sõitu; tanki järgmiseks Poznańis ja enne Tallinna Neste Laagris</li>
                  <li><strong>Vesi / jäätmed:</strong> Hall vesi iga 2.–3. päev; must vesi <strong>iga päev</strong> kui täituv ≥ ¾</li>
                  <li><strong>Joogivesi:</strong> vali Camping Malta Poznań, Camping Heider Bergsee, Pasvalys</li>
                  <li><strong>Gaas:</strong> 1 varuballoon (11 kg) + adapterid D/PL</li>
                  <li><strong>Öörahu:</strong> 22 – 07 DE & PL kämpingutes; hiline saabumine → "self-check-in" kast, vaikne režiim</li>
                </ul>
              </div>

              <div className="info-section">
                <h4>🚗 3. Liiklus & teemaksud</h4>
                <ul>
                  <li><strong>Kiiruspiirangud</strong> (camper &lt;3,5 t): EE/LV/LT 90; PL 120 (S-teed) / 140 (A-teed); DE "Richtgeschwindigkeit" 100 – 120</li>
                  <li><strong>Tööpäeva tipptunnid:</strong> PL A2 Poznań-Berlin 15 – 18; DE A4 Erfurt-Frankfurt 07 – 09 ja 16 – 19</li>
                  <li><strong>Puhkepausid:</strong> iga 2–2,5 h (lapsed & koerad venitus + WC)</li>
                </ul>
              </div>

              <div className="info-section">
                <h4>👥 Laste meelespea (Gloria & Ariana)</h4>
                <ul>
                  <li><strong>Autosõit:</strong> Kindel turvavöö, lauamäng "Reisi ümber Euroopa", iga 2 h venitus</li>
                  <li><strong>Wieliczka:</strong> Mugavad jalatsid soolakaevanduses käimiseks</li>
                  <li><strong>Soojakad riided:</strong> Õhtuti võib olla jahe, eriti Nürburgringil ja Eschwege järvel</li>
                  <li><strong>Õhtukämping:</strong> Ujumisosad: Malta järv, Heider Bergsee, Pasvalys – alati vanematega koos</li>
                </ul>
              </div>

              <div className="info-section">
                <h4>🐕 Koerte (Sanja & Vaflja) meelespea</h4>
                <ul>
                  <li><strong>Pass + kiip + marutaudi vaktsiin</strong> – kontrolli kuupäevad, hoia pass salongi taskus</li>
                  <li><strong>Autosse:</strong> jahutusmatt + veepudel; aknatsoon 21 °C maks (kasuta ClimateControl ventilaatorit)</li>
                  <li><strong>Jalutusnorm:</strong> minimaalselt 3×15 min + pikk 30 min õhtul</li>
                  <li><strong>Rihmareeglid:</strong> DE rahvuspargid – ≤ 2 m rihm; PL kiirteetanklad – <em>alati</em> rihmas</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'apps' && (
            <div className="info-content">
              <div className="info-section">
                <h3>📱 Praktilised äpid reisiks</h3>
                <p className="info-subtitle">Kõik äpid on saadaval nii Androidile kui iOS-ile. Kliki äpi nimel, et avada App Store.</p>
              </div>

              <div className="info-section">
                <h4>💳 1. Kohustuslikud tolli-/vinjetiäpid</h4>
                <div className="app-grid">
                  <div className="app-card" onClick={() => openAppStore('e-TOLL PL')}>
                    <div className="app-icon">🇵🇱</div>
                    <div className="app-info">
                      <h5>e-TOLL PL</h5>
                      <p>Poola riigimaanteed automaatne maksmine</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('Autopay')}>
                    <div className="app-icon">💳</div>
                    <div className="app-info">
                      <h5>Autopay</h5>
                      <p>Poola erakontsessiooni lõigud A1 & A4</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="info-section">
                <h4>🗺️ 2. Navigatsioon & liiklus</h4>
                <div className="app-grid">
                  <div className="app-card" onClick={() => openAppStore('Google Maps')}>
                    <div className="app-icon">🗺️</div>
                    <div className="app-info">
                      <h5>Google Maps</h5>
                      <p>Reaalajas ummikud, offline kaardid</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('Waze')}>
                    <div className="app-icon">🚗</div>
                    <div className="app-info">
                      <h5>Waze</h5>
                      <p>Liiklusinfo ja kiiruskontrollid</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('HERE WeGo')}>
                    <div className="app-icon">📍</div>
                    <div className="app-info">
                      <h5>HERE WeGo</h5>
                      <p>Offline navigatsioon varuks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h4>🏕️ 3. Camper-parkla & ööbimine</h4>
                <div className="app-grid">
                  <div className="app-card" onClick={() => openAppStore('Park4Night')}>
                    <div className="app-icon">🏕️</div>
                    <div className="app-info">
                      <h5>Park4Night</h5>
                      <p>210,000+ stellplatz'i Euroopas</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('Campercontact')}>
                    <div className="app-icon">🚐</div>
                    <div className="app-info">
                      <h5>Campercontact</h5>
                      <p>ADAC andmebaas, hinnangud</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('ACSI Camping Europe')}>
                    <div className="app-icon">⛺</div>
                    <div className="app-info">
                      <h5>ACSI Camping</h5>
                      <p>9,000+ kontrollitud kämpingut</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h4>⛽ 4. Kütus & maksed</h4>
                <div className="app-grid">
                  <div className="app-card" onClick={() => openAppStore('Revolut')}>
                    <div className="app-icon">💰</div>
                    <div className="app-info">
                      <h5>Revolut</h5>
                      <p>Valuuta-kaardid PLN/EUR</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('Orlen Mobile')}>
                    <div className="app-icon">⛽</div>
                    <div className="app-info">
                      <h5>Orlen Mobile</h5>
                      <p>Mobiilimakse Poola tanklates</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('Fuelio')}>
                    <div className="app-icon">📊</div>
                    <div className="app-info">
                      <h5>Fuelio</h5>
                      <p>Tankimispäevik, kütusehindade kaart</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h4>🌤️ 5. Ilm & matk</h4>
                <div className="app-grid">
                  <div className="app-card" onClick={() => openAppStore('Windy')}>
                    <div className="app-icon">🌬️</div>
                    <div className="app-info">
                      <h5>Windy</h5>
                      <p>Täpne mägi- ja järveilmaprognoos</p>
                    </div>
                  </div>
                  
                  <div className="app-card" onClick={() => openAppStore('AllTrails')}>
                    <div className="app-icon">🥾</div>
                    <div className="app-info">
                      <h5>AllTrails</h5>
                      <p>Matkarajad Nürburgringi ümbruses</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-note">
                <h4>💡 Ettevalmistus:</h4>
                <ol>
                  <li>Lae alla e-TOLL PL ja Autopay juba kodus</li>
                  <li>Sisesta camperi reg-number Wi-Fi-s</li>
                  <li>Salvesta offline-kaardid Google Maps'is</li>
                  <li>Märgi Park4Night'is ära valitud stellplatzid</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;