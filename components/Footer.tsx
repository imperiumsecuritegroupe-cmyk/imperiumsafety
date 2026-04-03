import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-badge">I</div>
              <span>Imperium Safety Security</span>
            </div>
            <p className="footer__desc">Société spécialisée en sûreté aéroportuaire et portuaire. Interventions en France métropolitaine et dans l&apos;ensemble des territoires d&apos;outre-mer.</p>
            <div className="footer__certs">
              <span className="footer__cert-tag">CNAPS</span>
              <span className="footer__cert-tag">TFP APS</span>
              <span className="footer__cert-tag">ISPS</span>
              <span className="footer__cert-tag">DGAC</span>
            </div>
          </div>
          <div className="footer__col">
            <h5>Liens Rapides</h5>
            <nav className="footer__links" aria-label="Liens rapides">
              <Link href="/">Accueil</Link>
              <Link href="/a-propos">À Propos</Link>
              <Link href="/formations">Formations</Link>
              <Link href="/recrutement">Recrutement</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/mentions-legales">Mentions Légales</Link>
            </nav>
          </div>
          <div className="footer__col">
            <h5>Nos Services</h5>
            <nav className="footer__links" aria-label="Services">
              <Link href="/services/surete-aeroportuaire">Sûreté Aéroportuaire</Link>
              <Link href="/services/surete-portuaire">Sûreté Portuaire</Link>
              <Link href="/services/inspection-filtrage">Inspection-Filtrage</Link>
              <Link href="/services/cynophilie">Cynophilie</Link>
              <Link href="/services/evenementiel">Sûreté Événementielle</Link>
            </nav>
          </div>
          <div className="footer__col">
            <h5>Contact</h5>
            <div className="footer__contact-item"><span>📍</span><span>45 Avenue de la Sécurité<br />75008 Paris, France</span></div>
            <div className="footer__contact-item"><span>📞</span><span>+33 1 XX XX XX XX</span></div>
            <div className="footer__contact-item"><span>✉</span><span>contact@imperium-safety.fr</span></div>
            <div className="footer__contact-item"><span>🕰</span><span>Lun–Ven : 8h–18h<br />Urgences : 24h/24</span></div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>&copy; 2026 Imperium Safety Security. Tous droits réservés.</span>
          <div className="footer__bottom-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/mentions-legales#rgpd">RGPD</Link>
            <Link href="/mentions-legales#cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
