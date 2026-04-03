import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sûreté Aéroportuaire - Imperium Safety Security',
  description: 'Sûreté Aéroportuaire - Imperium Safety Security. Contrôle d\'accès, filtrage passagers, inspection bagages. Conformité règlement UE 300/2008, DGAC, BCAA.',
};

export default function SureteAeroportuairePage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Service Spécialisé</div>
          <h1>Sûreté <span>Aéroportuaire</span></h1>
          <p>Protection des zones réglementées aéroportuaires conformément au règlement UE 300/2008 et aux directives de la DGAC.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>Sûreté Aéroportuaire</li>
          </ol>
        </div>
      </div>

      {/* DESCRIPTION */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text fade-in-left">
              <div className="section__label">Notre expertise</div>
              <h2>Des agents formés aux standards les plus exigeants</h2>
              <p>La sûreté aéroportuaire constitue le cœur de métier d&apos;Imperium Safety Security. Portée par une équipe fondatrice issue des forces de l&apos;ordre et de la sûreté des transports, nous fournissons aux gestionnaires d&apos;aéroports et aux compagnies aériennes des agents de sûreté hautement qualifiés, parfaitement conformes aux exigences réglementaires nationales et européennes.</p>
              <p>Chacun de nos agents aéroportuaires est titulaire du CQP Agent de Sûreté et de Sécurité Aéroportuaire (ASSA), de son habilitation préfectorale et de son badge d&apos;accès délivré par les autorités compétentes. Ils sont régulièrement testés et évalués par des équipes d&apos;audit internes.</p>
              <div className="info-box mt-3">
                <h4>🔒 Zone de Sûreté à Accès Réglementé (ZSAR)</h4>
                <p>Tous nos agents maîtrisent les procédures d&apos;accès et de contrôle des ZSAR, incluant les zones côté piste, les zones de tri des bagages et les zones d&apos;embarquement.</p>
              </div>
            </div>
            <div className="split__visual fade-in-right">✈</div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Ce que nous faisons</div>
            <h2>Nos Prestations Aéroportuaires</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🔒</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Contrôle d&apos;Accès ZSAR</h4>
              <p>Vérification systématique des habilitations, badges d&apos;accès et autorisations pour toute entrée en zone réglementée. Gestion des portiques et sas d&apos;accès.</p>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>💳</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Filtrage Passagers</h4>
              <p>Filtrage des passagers avant embarquement : portique de détection de métaux, scanner corporel millimétrique, fouille manuelle conforme aux procédures ECAC.</p>
            </div>
            <div className="card fade-in delay-3" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📄</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Inspection Bagages Cabine</h4>
              <p>Contrôle des bagages à main par équipement de détection à rayons X (EDS). Traitement des alarmes, fouille manuelle et décision de conformité.</p>
            </div>
            <div className="card fade-in delay-4" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📦</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Bagages de Soute</h4>
              <p>Rapprochement passager-bagage, inspection EDS des bagages de soute, traitement des alarmes et réconciliation avant chargement en soute.</p>
            </div>
            <div className="card fade-in delay-5" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🚶</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Agent de Piste</h4>
              <p>Surveillance et sécurisation de la zone côté piste : contrôle des véhicules et personnes accédant au tablier, rondes périmètre, gestion des incidents.</p>
            </div>
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📷</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Surveillance Périmètre</h4>
              <p>Rondes de surveillance du périmètre aéroportuaire, détection des intrusions, gestion des alarmes périmètre et coordination avec le PCSI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CADRE RÉGLEMENTAIRE */}
      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Conformité</div>
            <h2>Cadre Réglementaire</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-2">
            <div className="fade-in-left">
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>Textes applicables</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Règlement (CE) n° 300/2008 du Parlement européen relatif à l&apos;instauration de règles communes dans le domaine de la sûreté de l&apos;aviation civile</li>
                <li><span className="check-icon">✓</span>Règlement d&apos;exécution (UE) 2015/1998 fixant les mesures détaillées pour la mise en œuvre des normes de base communes</li>
                <li><span className="check-icon">✓</span>Programme National de Sûreté de l&apos;Aviation Civile (PNSAC)</li>
                <li><span className="check-icon">✓</span>Arrêté du 11 septembre 2013 modifié relatif aux mesures de sûreté de l&apos;aviation civile</li>
                <li><span className="check-icon">✓</span>Instructions techniques de la Direction de la Sûreté de l&apos;Aviation Civile (DSAC)</li>
                <li><span className="check-icon">✓</span>Normes ECAC Doc 30 (Partie II - Mesures relatives aux passagers et aux bagages)</li>
              </ul>
            </div>
            <div className="fade-in-right">
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>Qualifications de nos agents</h3>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>CQP Agent de Sûreté et de Sécurité Aéroportuaire (ASSA)</li>
                <li><span className="check-icon">✓</span>Carte professionnelle CNAPS en cours de validité</li>
                <li><span className="check-icon">✓</span>Habilitation préfectorale pour l&apos;accès en zone réglementée</li>
                <li><span className="check-icon">✓</span>Formation initiale et recyclages triennaux obligatoires</li>
                <li><span className="check-icon">✓</span>Habilitation aux équipements de détection (EDS, ETD, portiques)</li>
                <li><span className="check-icon">✓</span>Enquête administrative préalable à l&apos;embauche</li>
                <li><span className="check-icon">✓</span>Extrait de casier judiciaire vierge (bulletin n°2)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AÉROPORTS */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre présence</div>
            <h2>Aéroports Couverts</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Imperium Safety Security opère dans les principaux aéroports français, métropole et outre-mer.</p>
          </div>
          <div className="grid-3 fade-in">
            <div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--gold)' }}>Île-de-France</h4>
              <ul className="feature-list">
                <li>Paris-Charles de Gaulle (CDG)</li>
                <li>Paris-Orly (ORY)</li>
                <li>Paris-Le Bourget (LBG)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--gold)' }}>Régions</h4>
              <ul className="feature-list">
                <li>Nice Côte d&apos;Azur (NCE)</li>
                <li>Lyon Saint-Exupéry (LYS)</li>
                <li>Marseille Provence (MRS)</li>
                <li>Bordeaux-Mérignac (BOD)</li>
                <li>Toulouse-Blagnac (TLS)</li>
                <li>Nantes Atlantique (NTE)</li>
                <li>Strasbourg Entzheim (SXB)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--gold)' }}>Outre-Mer</h4>
              <ul className="feature-list">
                <li>Pointe-à-Pitre Guadeloupe (PTP)</li>
                <li>Fort-de-France Martinique (FDF)</li>
                <li>Cayenne Félix Éboué (CAY)</li>
                <li>La Réunion Roland Garros (RUN)</li>
                <li>Mayotte Dzaoudzi (DZA)</li>
                <li>Tahiti Faa&apos;a (PPT)</li>
                <li>Nouméa La Tontouta (NOU)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Sécurisez votre aéroport avec Imperium Safety</h2>
            <p>Contactez nos experts pour une analyse de vos besoins et une proposition adaptée à vos obligations réglementaires.</p>
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
