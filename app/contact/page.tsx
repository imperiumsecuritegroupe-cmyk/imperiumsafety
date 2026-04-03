import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Imperium Safety Security',
  description: 'Contactez Imperium Safety Security - Siège : 45 Avenue de la Sécurité, 75008 Paris. Formulaire de contact, téléphone, email. Urgences 24h/24.',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Prenons contact</div>
          <h1>Contactez <span>Imperium Safety</span></h1>
          <p>Notre équipe est disponible du lundi au vendredi de 8h à 18h. Pour les urgences opérationnelles, une astreinte 24h/24 est assurée.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in-left">
              <div className="section__label">Nos coordonnées</div>
              <h2 style={{ marginBottom: '2rem' }}>Où nous trouver</h2>

              <div className="contact-item">
                <div className="contact-item__icon">📍</div>
                <div>
                  <h5>Siège Social</h5>
                  <p>45 Avenue de la Sécurité<br />75008 Paris, France</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">📞</div>
                <div>
                  <h5>Téléphone Principal</h5>
                  <p><a href="tel:+33100000000" style={{ color: 'var(--navy)', fontWeight: 600 }}>+33 1 XX XX XX XX</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">✉</div>
                <div>
                  <h5>Email Général</h5>
                  <p><a href="mailto:contact@imperium-safety.fr" style={{ color: 'var(--navy)' }}>contact@imperium-safety.fr</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">🕰</div>
                <div>
                  <h5>Horaires d&apos;Ouverture</h5>
                  <p>Lundi – Vendredi : 8h00 – 18h00<br />Samedi – Dimanche : Fermé</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">👥</div>
                <div>
                  <h5>Service Recrutement</h5>
                  <p><a href="mailto:rh@imperium-safety.fr" style={{ color: 'var(--navy)' }}>rh@imperium-safety.fr</a><br />
                  <a href="tel:+33100000001" style={{ color: 'var(--navy)' }}>+33 1 XX XX XX X1</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">🏢</div>
                <div>
                  <h5>Direction DOM-TOM</h5>
                  <p><a href="mailto:domtom@imperium-safety.fr" style={{ color: 'var(--navy)' }}>domtom@imperium-safety.fr</a><br />
                  Pointe-à-Pitre, Guadeloupe</p>
                </div>
              </div>

              <div className="urgency-banner">
                <div className="urgency-banner__icon">🚨</div>
                <div>
                  <h4>Urgences Opérationnelles 24h/24</h4>
                  <p>Pour toute urgence liée à nos missions en cours, contactez notre astreinte opérationnelle permanente :<br />
                  <a href="tel:+33600000000">+33 6 XX XX XX XX</a></p>
                </div>
              </div>
            </div>

            <div className="fade-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre réseau</div>
            <h2>Agences Régionales</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4 fade-in">
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--gold)' }}>📍</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Paris – Siège</h5>
              <p style={{ fontSize: '0.85rem' }}>45 Av. de la Sécurité<br />75008 Paris<br /><a href="tel:+33100000000" style={{ color: 'var(--gold)' }}>+33 1 XX XX XX XX</a></p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--gold)' }}>📍</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Marseille – PACA</h5>
              <p style={{ fontSize: '0.85rem' }}>12 Rue du Port<br />13008 Marseille<br /><a href="tel:+33491000000" style={{ color: 'var(--gold)' }}>+33 4 91 XX XX XX</a></p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--gold)' }}>📍</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Lyon – Rhône-Alpes</h5>
              <p style={{ fontSize: '0.85rem' }}>8 Av. Saint-Exupéry<br />69007 Lyon<br /><a href="tel:+33478000000" style={{ color: 'var(--gold)' }}>+33 4 78 XX XX XX</a></p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--gold)' }}>📍</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Pointe-à-Pitre – DOM-TOM</h5>
              <p style={{ fontSize: '0.85rem' }}>Zone Industrielle Jarry<br />97122 Baie-Mahault<br /><a href="tel:+590590000000" style={{ color: 'var(--gold)' }}>+590 5 90 XX XX XX</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Vous êtes recruteur ou partenaire institutionnel ?</h2>
            <p>Prenez contact directement avec notre direction pour discuter de partenariats, appels d&apos;offres ou collaborations institutionnelles.</p>
            <div className="cta__btns">
              <a href="mailto:direction@imperium-safety.fr" className="btn btn--primary">✉ direction@imperium-safety.fr</a>
              <Link href="/recrutement" className="btn btn--outline">Voir nos offres d&apos;emploi</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
