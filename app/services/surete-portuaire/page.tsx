import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sûreté Portuaire - Imperium Safety Security',
  description: 'Sûreté Portuaire - Imperium Safety Security. Protection des installations portuaires selon le Code ISPS. Contrôle d\'accès, surveillance, filtrage en France et DOM-TOM.',
};

export default function SuretePortuairePage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Service Spécialisé</div>
          <h1>Sûreté <span>Portuaire</span></h1>
          <p>Protection des installations portuaires françaises conformément au Code ISPS et à la réglementation européenne sur la sûreté maritime.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>Sûreté Portuaire</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text fade-in-left">
              <div className="section__label">Protection maritime</div>
              <h2>Sécurisation des infrastructures portuaires</h2>
              <p>Les installations portuaires représentent des cibles stratégiques nécessitant une protection spécialisée. Imperium Safety Security intervient dans les grands ports maritimes français en appliquant strictement les dispositions du Code ISPS (International Ship and Port Facility Security Code), transposé en droit européen par le règlement CE 725/2004.</p>
              <p>Nos équipes portuaires maîtrisent les spécificités du milieu maritime : gestion des niveaux de sûreté, interface navire-port, contrôle des accès aux zones réglementées portuaires et coordination avec les Agents de Sûreté des Navires (ASN) et les Agents de Sûreté des Installations Portuaires (ASIP).</p>
              <div className="info-box mt-3">
                <h4>⚓ Niveaux de Sûreté ISPS</h4>
                <p>Nos procédures s&apos;adaptent dynamiquement aux niveaux de sûreté 1 (normal), 2 (renforcé) et 3 (exceptionnel) définis par les autorités portuaires et le Préfet Maritime.</p>
              </div>
            </div>
            <div className="split__visual fade-in-right">⚓</div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos missions</div>
            <h2>Prestations de Sûreté Portuaire</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🔒</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Contrôle d&apos;Accès ZAP</h4>
              <p>Filtrage de toutes les personnes et véhicules accédant aux Zones d&apos;Accès Réglementées Portuaires (ZAP). Vérification des habilitations, cartes de résident portuaire et autorisations de passage.</p>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🚗</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Filtrage Véhicules</h4>
              <p>Contrôle systématique des poids lourds, véhicules légers et engins de manutention à l&apos;entrée des zones portuaires. Utilisation de miroirs d&apos;inspection et, si nécessaire, de matériel de détection.</p>
            </div>
            <div className="card fade-in delay-3" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🚶</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Rondes de Surveillance</h4>
              <p>Rondes régulières et aléatoires sur l&apos;ensemble du périmètre portuaire, incluant les quais, les postes à quai et les zones de stockage. Patrouilles pédestres et motorisées.</p>
            </div>
            <div className="card fade-in delay-4" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📷</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Surveillance Électronique</h4>
              <p>Monitoring des systèmes de vidéosurveillance (CCTV), gestion des alarmes périmètre, centralisation des informations au poste de contrôle de sûreté.</p>
            </div>
            <div className="card fade-in delay-5" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>👨‍✈️</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Interface Navire-Port</h4>
              <p>Coordination avec les Agents de Sûreté des Navires lors des escales, mise en place des mesures de sûreté adaptées au niveau d&apos;évaluation et accompagnement des procédures d&apos;appareillage.</p>
            </div>
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📝</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Registres &amp; Rapports</h4>
              <p>Tenue des registres réglementaires, rédaction de rapports d&apos;incidents, coordination avec l&apos;Officier de Sûreté de l&apos;Installation Portuaire (OSIP) et les autorités douanières.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Références légales</div>
            <h2>Cadre Réglementaire Maritime</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-2 fade-in">
            <div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>Réglementation applicable</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Code ISPS - Chapitre XI-2 de la Convention SOLAS</li>
                <li><span className="check-icon">✓</span>Règlement (CE) n° 725/2004 relatif à l&apos;amélioration de la sûreté des navires et des installations portuaires</li>
                <li><span className="check-icon">✓</span>Directive 2005/65/CE relative à l&apos;amélioration de la sûreté des ports</li>
                <li><span className="check-icon">✓</span>Code des transports (Articles L5332-1 et suivants)</li>
                <li><span className="check-icon">✓</span>Plans de Sûreté des Installations Portuaires (PSIP)</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>Habilitations de nos agents</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Formation ASIP (Agent de Sûreté de l&apos;Installation Portuaire)</li>
                <li><span className="check-icon">✓</span>Carte professionnelle CNAPS</li>
                <li><span className="check-icon">✓</span>Habilitation préfectorale maritime</li>
                <li><span className="check-icon">✓</span>Laissez-passer portuaire en cours de validité</li>
                <li><span className="check-icon">✓</span>Formation aux procédures ISPS niveau 1, 2 et 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos zones cibles</div>
            <h2>Zones d&apos;Intervention Portuaire</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-2 fade-in">
            <div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>🏭 France Métropolitaine</h3>
              <ul className="feature-list">
                <li>Grand Port Maritime de Marseille</li>
                <li>Grand Port Maritime du Havre</li>
                <li>Grand Port Maritime de Bordeaux</li>
                <li>Nantes-Saint-Nazaire</li>
                <li>Grand Port Maritime de Dunkerque</li>
                <li>Port de Toulon</li>
                <li>Port de Sète</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem' }}>🌎 Outre-Mer</h3>
              <ul className="feature-list">
                <li>Port de Pointe-à-Pitre (Guadeloupe)</li>
                <li>Port de Fort-de-France (Martinique)</li>
                <li>Port de Dégrad des Cannes (Guyane)</li>
                <li>Port Réunion - Le Port</li>
                <li>Port de Longoni (Mayotte)</li>
                <li>Port de Papeete (Polynésie française)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Sécurisez votre installation portuaire</h2>
            <p>Nos experts en sûreté maritime vous accompagnent dans la mise en conformité ISPS et le déploiement opérationnel.</p>
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
