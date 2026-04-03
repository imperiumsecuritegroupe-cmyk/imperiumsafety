import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cynophilie - Imperium Safety Security',
  description: 'Unité Cynophile - Imperium Safety Security. Détection d\'explosifs et de stupéfiants. Maîtres-chiens certifiés pour aéroports, ports et événements en France et DOM-TOM.',
};

export default function CynophiliePage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Service Spécialisé</div>
          <h1>Unité <span>Cynophile</span></h1>
          <p>Des équipes maîtres-chiens certifiées pour la détection d&apos;explosifs et de stupéfiants dans les environnements aéroportuaires, portuaires et événementiels.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>Cynophilie</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text fade-in-left">
              <div className="section__label">Détection canine</div>
              <h2>L&apos;excellence de la détection cynophile</h2>
              <p>L&apos;unité cynophile d&apos;Imperium Safety Security représente l&apos;une des capacités de détection les plus fiables et les plus dissuasives disponibles. Nos chiens détecteurs, soigneusement sélectionnés et entraînés pendant plus de 18 mois, sont capables d&apos;identifier des traces infimes d&apos;explosifs ou de stupéfiants dans des conditions opérationnelles variées.</p>
              <p>Chaque binôme maître-chien constitue une équipe de travail certifiée, évaluée régulièrement par des organismes indépendants. Nos maîtres-chiens sont des professionnels de la sûreté disposant en plus d&apos;une spécialisation cynophile reconnue par la DGAC et le CNAPS.</p>
              <div className="info-box mt-3">
                <h4>🐕 Capacité de Détection</h4>
                <p>Un chien détecteur entraîné peut identifier des concentrations d&apos;explosifs ou de stupéfiants à des niveaux de l&apos;ordre du nanogramme, surpassant les capacités de nombreux équipements électroniques dans des environnements complexes.</p>
              </div>
            </div>
            <div className="split__visual fade-in-right">🐕</div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Capacités opérationnelles</div>
            <h2>Types de Détection</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-2">
            <div className="card fade-in delay-1" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1.5rem' }}>💥</div>
              <h3 style={{ color: 'var(--navy)', textAlign: 'center', marginBottom: '1.2rem' }}>Détection d&apos;Explosifs (EDU)</h3>
              <p>Nos chiens détecteurs d&apos;explosifs (Explosive Detection Unit) sont entraînés sur une gamme étendue de substances explosives et précurseurs chimiques :</p>
              <ul className="check-list mt-2">
                <li><span className="check-icon">✓</span>Explosifs militaires (TNT, RDX, PETN, HMX)</li>
                <li><span className="check-icon">✓</span>Explosifs industriels (ANFO, dynamite)</li>
                <li><span className="check-icon">✓</span>Engins explosifs improvisés (IED) et précurseurs</li>
                <li><span className="check-icon">✓</span>Poudres pyrotechniques et compositions diverses</li>
                <li><span className="check-icon">✓</span>Liquides explosifs et peroxyde d&apos;acétone (TATP)</li>
              </ul>
              <div className="info-box mt-3" style={{ margin: '1.2rem 0 0' }}>
                <p style={{ fontSize: '0.88rem' }}><strong>Certification :</strong> Conformément aux exigences ECAC et DGAC pour les missions aéroportuaires. Tests de certification tous les 12 mois.</p>
              </div>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1.5rem' }}>💊</div>
              <h3 style={{ color: 'var(--navy)', textAlign: 'center', marginBottom: '1.2rem' }}>Détection de Stupéfiants</h3>
              <p>Nos chiens détecteurs de stupéfiants sont certifiés pour l&apos;identification de substances psychoactives illicites, en complément des équipes douanières :</p>
              <ul className="check-list mt-2">
                <li><span className="check-icon">✓</span>Cannabis et dérivés (résine, herbe, huile)</li>
                <li><span className="check-icon">✓</span>Cocaïne et crack</li>
                <li><span className="check-icon">✓</span>Héroïne et opiacés</li>
                <li><span className="check-icon">✓</span>Amphétamines et ecstasy (MDMA)</li>
                <li><span className="check-icon">✓</span>Nouvelles substances psychoactives (NPS)</li>
              </ul>
              <div className="info-box mt-3" style={{ margin: '1.2rem 0 0' }}>
                <p style={{ fontSize: '0.88rem' }}><strong>Certification :</strong> Accréditation CNAPS cynophile. Coordination possible avec les Douanes et la Police Judiciaire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Missions</div>
            <h2>Domaines d&apos;Intervention</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4 fade-in">
            <div className="card card--feature">
              <div className="card__icon">✈</div>
              <h4>Aéroports</h4>
              <p>Inspection des zones de fret, bagages non réclamés, zones de remise en correspondance et espaces publics côté ville.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">⚓</div>
              <h4>Ports</h4>
              <p>Contrôle des conteneurs, inspection des navires, zones de fret maritime et terminaux à passagers.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🎭</div>
              <h4>Événementiel</h4>
              <p>Fouille préalable des lieux événementiels, contrôle des accès, présence dissuasive pendant les manifestations.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🏠</div>
              <h4>Sites Sensibles</h4>
              <p>Bâtiments institutionnels, ambassades, centres de données et toute infrastructure nécessitant une protection renforcée.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Qualifications</div>
            <h2>Certifications Maîtres-Chiens &amp; Chiens</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-2 fade-in">
            <div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>Qualifications Maîtres-Chiens</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Carte professionnelle CNAPS avec mention cynophile</li>
                <li><span className="check-icon">✓</span>Certificat de capacité pour la conduite de chiens de détection</li>
                <li><span className="check-icon">✓</span>Formation initiale de 400 heures minimum</li>
                <li><span className="check-icon">✓</span>Recyclage annuel obligatoire de 40 heures</li>
                <li><span className="check-icon">✓</span>Habilitation préfectorale (aéroportuaire ou portuaire)</li>
                <li><span className="check-icon">✓</span>Formation aux procédures de signalement et interpellation</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>Qualification des Chiens</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Sélection génétique et comportementale rigoureuse</li>
                <li><span className="check-icon">✓</span>Dressage spécialisé de 12 à 18 mois</li>
                <li><span className="check-icon">✓</span>Certification individuelle sur substances cibles</li>
                <li><span className="check-icon">✓</span>Tests de performance trimestriels (taux de détection &gt;95%)</li>
                <li><span className="check-icon">✓</span>Suivi vétérinaire régulier et tenue du carnet de santé</li>
                <li><span className="check-icon">✓</span>Races utilisées : Berger Allemand, Labrador, Malinois</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Renforcez votre sûreté avec nos équipes cynophiles</h2>
            <p>Nos binômes maîtres-chiens certifiés sont disponibles pour des missions permanentes ou ponctuelles sur l&apos;ensemble du territoire.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Demander une intervention</Link>
              <Link href="/services" className="btn btn--outline">Tous nos services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
