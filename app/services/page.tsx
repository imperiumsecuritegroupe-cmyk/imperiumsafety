import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos Services - Imperium Safety Security',
  description: 'Nos services de sûreté : Sûreté Aéroportuaire, Portuaire, Inspection-Filtrage, Cynophilie et Sûreté Événementielle. Prestations certifiées CNAPS en France et DOM-TOM.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Expertise &amp; Certifications</div>
          <h1>Nos <span>Services</span></h1>
          <p>Des prestations de sûreté complètes, certifiées et adaptées aux exigences réglementaires des infrastructures de transport les plus sensibles.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>Services</li>
          </ol>
        </div>
      </div>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text fade-in-left">
              <div className="section__label">Notre offre globale</div>
              <h2>Une gamme complète de services de sûreté</h2>
              <p>Imperium Safety Security propose une approche intégrée de la sûreté des transports. Chaque prestation est conçue pour répondre aux exigences spécifiques des aéroports, ports et sites événementiels, dans le respect total des réglementations nationales et européennes.</p>
              <p>Nos équipes pluridisciplinaires combinent expertise réglementaire, maîtrise technique des équipements de détection et savoir-faire opérationnel pour garantir un niveau de protection maximal à chacun de nos clients.</p>
              <div className="advantages mt-3">
                <div className="advantage">
                  <div className="advantage__icon">📄</div>
                  <div>
                    <h5>Conformité réglementaire</h5>
                    <p>Conformes aux règlements UE 300/2008, Code ISPS et directives CNAPS.</p>
                  </div>
                </div>
                <div className="advantage">
                  <div className="advantage__icon">⏱</div>
                  <div>
                    <h5>Disponibilité 24h/24</h5>
                    <p>Interventions et astreintes assurées 7j/7 sur l&apos;ensemble de nos sites.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="split__visual fade-in-right">🔒</div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos domaines d&apos;intervention</div>
            <h2>Tous Nos Services</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card card--service fade-in delay-1" style={{ padding: '2.5rem 2rem' }}>
              <div className="card__icon" style={{ width: '72px', height: '72px', fontSize: '2.2rem' }}>✈</div>
              <h3>Sûreté Aéroportuaire</h3>
              <p>Contrôle des accès aux zones réglementées, inspection des bagages, filtrage passagers, surveillance périmètre et missions d&apos;agent de piste. Conformité totale avec le règlement UE 300/2008 et les directives BCAA.</p>
              <Link href="/services/surete-aeroportuaire" className="btn btn--gold-outline btn--sm mt-2">En savoir plus →</Link>
            </div>
            <div className="card card--service fade-in delay-2" style={{ padding: '2.5rem 2rem' }}>
              <div className="card__icon" style={{ width: '72px', height: '72px', fontSize: '2.2rem' }}>⚓</div>
              <h3>Sûreté Portuaire</h3>
              <p>Protection des installations portuaires conformément au Code ISPS. Contrôle d&apos;accès, filtrage des véhicules et personnes, rondes sécurisées, gestion des niveaux de sûreté 1, 2 et 3.</p>
              <Link href="/services/surete-portuaire" className="btn btn--gold-outline btn--sm mt-2">En savoir plus →</Link>
            </div>
            <div className="card card--service fade-in delay-3" style={{ padding: '2.5rem 2rem' }}>
              <div className="card__icon" style={{ width: '72px', height: '72px', fontSize: '2.2rem' }}>🔍</div>
              <h3>Inspection-Filtrage</h3>
              <p>Utilisation de technologies EDS (détection d&apos;explosifs), scanners à rayons X, portiques de détection de métaux, ETD et procédures de fouille manuelle selon les standards ECAC.</p>
              <Link href="/services/inspection-filtrage" className="btn btn--gold-outline btn--sm mt-2">En savoir plus →</Link>
            </div>
            <div className="card card--service fade-in delay-4" style={{ padding: '2.5rem 2rem' }}>
              <div className="card__icon" style={{ width: '72px', height: '72px', fontSize: '2.2rem' }}>🐕</div>
              <h3>Cynophilie</h3>
              <p>Unité cynophile spécialisée dans la détection d&apos;explosifs (EDU) et de stupéfiants. Maîtres-chiens certifiés opérant en aéroport, port, événement ou sur demande spéciale des autorités.</p>
              <Link href="/services/cynophilie" className="btn btn--gold-outline btn--sm mt-2">En savoir plus →</Link>
            </div>
            <div className="card card--service fade-in delay-5" style={{ padding: '2.5rem 2rem' }}>
              <div className="card__icon" style={{ width: '72px', height: '72px', fontSize: '2.2rem' }}>🎭</div>
              <h3>Sûreté Événementielle</h3>
              <p>Sécurisation de grands événements : concerts, compétitions sportives, sommets institutionnels. Filtrage des accès, gestion des foules, coordination avec les forces de l&apos;ordre.</p>
              <Link href="/services/evenementiel" className="btn btn--gold-outline btn--sm mt-2">En savoir plus →</Link>
            </div>
            <div className="card card--service fade-in delay-1" style={{ padding: '2.5rem 2rem', background: 'linear-gradient(135deg, var(--navy), var(--navy-sec))' }}>
              <div className="card__icon" style={{ width: '72px', height: '72px', fontSize: '2.2rem', background: 'rgba(201,168,76,0.2)' }}>📞</div>
              <h3 style={{ color: 'var(--white)' }}>Demande Personnalisée</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>Vous avez un besoin spécifique non listé ? Notre équipe étudie toute demande et élabore une solution sur mesure adaptée à votre site et vos contraintes réglementaires.</p>
              <Link href="/contact" className="btn btn--primary btn--sm mt-2">Nous contacter →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Méthodologie</div>
            <h2>Notre Approche</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Chaque mission est conduite selon une méthodologie rigoureuse, en 4 étapes clés.</p>
          </div>
          <div className="steps fade-in">
            <div className="step">
              <div className="step__number">1</div>
              <h4>Analyse &amp; Audit</h4>
              <p>Évaluation des risques spécifiques au site, revue des obligations réglementaires et identification des besoins opérationnels.</p>
            </div>
            <div className="step">
              <div className="step__number">2</div>
              <h4>Plan de Sûreté</h4>
              <p>Élaboration d&apos;un plan de sûreté personnalisé, validation avec les autorités compétentes (DGAC, Préfecture, DGAM).</p>
            </div>
            <div className="step">
              <div className="step__number">3</div>
              <h4>Déploiement</h4>
              <p>Mise en place des équipes certifiées, installation des dispositifs de contrôle et briefing opérationnel complet.</p>
            </div>
            <div className="step">
              <div className="step__number">4</div>
              <h4>Suivi &amp; Reporting</h4>
              <p>Reporting régulier, audits internes, révision des procédures et adaptation continue aux nouvelles menaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Besoin d&apos;une solution de sûreté sur mesure ?</h2>
            <p>Nos experts analysent votre situation et vous proposent une offre adaptée à vos contraintes réglementaires et opérationnelles.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Demander un devis</Link>
              <Link href="/a-propos" className="btn btn--outline">Découvrir notre société</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
