import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inspection-Filtrage - Imperium Safety Security',
  description: 'Inspection-Filtrage - Imperium Safety Security. Équipements EDS, rayons X, portiques, ETD et fouille manuelle. Agents certifiés ECAC pour la détection de menaces.',
};

export default function InspectionFilragePage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Service Spécialisé</div>
          <h1>Inspection <span>Filtrage</span></h1>
          <p>Détection de menaces par des technologies de pointe : EDS, rayons X, portiques de détection, ETD. Des agents certifiés ECAC pour une sûreté sans faille.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>Inspection-Filtrage</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__visual fade-in-left">🔍</div>
            <div className="split__text fade-in-right">
              <div className="section__label">Technologie &amp; Expertise</div>
              <h2>L&apos;inspection-filtrage au cœur de la sûreté</h2>
              <p>Le filtrage des passagers, des bagages, du fret et du personnel constitue la première ligne de défense contre les menaces terroristes et criminelles dans les environnements aéroportuaires et portuaires. Imperium Safety Security déploie des agents spécialement formés à l&apos;utilisation des technologies de détection les plus avancées.</p>
              <p>Nos opérateurs de filtrage suivent une formation rigoureuse incluant la reconnaissance de profils d&apos;images sur équipements EDS, la gestion des alarmes et les procédures de fouille. Leurs compétences sont validées par des tests d&apos;aptitude réguliers conformes aux exigences ECAC et DGAC.</p>
              <div className="info-box mt-3">
                <h4>🔎 Performance de Détection</h4>
                <p>Nos agents maintiennent des taux de détection conformes aux standards européens, mesurés par des tests cachés réguliers (covert testing) réalisés par les autorités compétentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Technologies utilisées</div>
            <h2>Équipements de Détection</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>📷</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Équipements EDS</h4>
              <p>Systèmes de Détection d&apos;Explosifs de dernière génération. Analyse automatisée des bagages de soute avec algorithmes de détection certifiés. Gestion des alarmes et processus de résolution.</p>
              <ul className="feature-list mt-2" style={{ fontSize: '0.85rem' }}>
                <li>Certification ECAC Catégorie C</li>
                <li>Détection multi-couches</li>
                <li>Analyse en temps réel</li>
              </ul>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>▶</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Scanners Rayons X</h4>
              <p>Équipements de radiographie X pour l&apos;inspection des bagages cabine et du fret. Lecture d&apos;images en deux projections, analyse de la densité et identification des objets suspects.</p>
              <ul className="feature-list mt-2" style={{ fontSize: '0.85rem' }}>
                <li>Haute résolution d&apos;image</li>
                <li>Détection matières organiques</li>
                <li>Double vue simultanée</li>
              </ul>
            </div>
            <div className="card fade-in delay-3" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>⚡</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Portiques de Détection</h4>
              <p>Portiques de détection de métaux (WTMD) et scanners millimétriques de sécurité (SMD) pour le filtrage des passagers. Gestion des alarmes primaires et secondaires.</p>
              <ul className="feature-list mt-2" style={{ fontSize: '0.85rem' }}>
                <li>Sensibilité réglable</li>
                <li>Faible taux de fausses alarmes</li>
                <li>Détection armes &amp; explosifs</li>
              </ul>
            </div>
            <div className="card fade-in delay-4" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>🐱</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>ETD - Traces d&apos;Explosifs</h4>
              <p>Détecteurs de traces d&apos;explosifs (ETD) utilisant la spectrométrie de mobilité ionique. Prélèvements sur les bagages, les mains et les surfaces pour détection de résidus.</p>
              <ul className="feature-list mt-2" style={{ fontSize: '0.85rem' }}>
                <li>Détection sub-nanogramme</li>
                <li>Résultats en moins de 10 secondes</li>
                <li>Large spectre de détection</li>
              </ul>
            </div>
            <div className="card fade-in delay-5" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>👮</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Fouille Manuelle</h4>
              <p>Procédures de fouille manuelle des personnes et des bagages conformes aux techniques validées par la DGAC. Respect des droits des passagers et des procédures de consentement.</p>
              <ul className="feature-list mt-2" style={{ fontSize: '0.85rem' }}>
                <li>Formation technique certifiée</li>
                <li>Respect dignité &amp; procédures</li>
                <li>Fouille corps entier et ciblée</li>
              </ul>
            </div>
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>🐧</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Liquides, Aérosols, Gels</h4>
              <p>Contrôle des LAG (Liquides, Aérosols et Gels) par équipements de détection dédiés. Gestion des exemptions réglementaires (médicaments, alimentation nourrissons).</p>
              <ul className="feature-list mt-2" style={{ fontSize: '0.85rem' }}>
                <li>Analyseur LAG certifié</li>
                <li>Procédures réglementaires</li>
                <li>Formation agents dédiée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos agents certifiés</div>
            <h2>Formation des Opérateurs de Filtrage</h2>
            <div className="section__divider"></div>
          </div>
          <div className="split fade-in">
            <div className="split__text">
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>Programme de formation Imperium Academy</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Formation initiale EDS : 40 heures de lecture d&apos;images certifiées ECAC</li>
                <li><span className="check-icon">✓</span>Recyclage trimestriel sur simulateurs d&apos;images (bibliothèque TIP)</li>
                <li><span className="check-icon">✓</span>Habilitation individuelle sur chaque type d&apos;équipement utilisé</li>
                <li><span className="check-icon">✓</span>Formation aux gestes et postures de fouille manuelle</li>
                <li><span className="check-icon">✓</span>Connaissance des menaces actuelles (IED, CBRN)</li>
                <li><span className="check-icon">✓</span>Gestion du stress et prise de décision sous pression</li>
                <li><span className="check-icon">✓</span>Tests d&apos;aptitude annuels avec seuils de performance définis</li>
              </ul>
            </div>
            <div className="split__visual" style={{ fontSize: '5rem' }}>🎓</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Des opérateurs de filtrage certifiés pour votre site</h2>
            <p>Renforcez la sûreté de votre aéroport ou port avec nos équipes d&apos;inspection-filtrage formées aux plus hauts standards.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Demander un devis</Link>
              <Link href="/services" className="btn btn--outline">Tous nos services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
