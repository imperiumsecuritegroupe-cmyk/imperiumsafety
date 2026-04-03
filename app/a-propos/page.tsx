import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos - Imperium Safety Security',
  description: 'À Propos d\'Imperium Safety Security - Entité du Groupe Imperium spécialisée en sûreté aéroportuaire et portuaire. Mission, valeurs, équipe dirigeante. France et DOM-TOM.',
};

export default function AProposPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Notre Société</div>
          <h1>À Propos d&apos;<span>Imperium Safety</span></h1>
          <p>Créée par le <strong>Groupe Imperium</strong>, Imperium Safety Security est la nouvelle entité spécialisée en sûreté aéroportuaire et portuaire, forte de l&apos;expertise et de la structure d&apos;un groupe déjà établi dans la sécurité privée.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>À Propos</li>
          </ol>
        </div>
      </div>

      {/* MISSION / VISION / VALEURS */}
      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre identité</div>
            <h2>Mission, Vision &amp; Valeurs</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card card--feature fade-in delay-1" style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--gold)' }}>
              <div className="card__icon" style={{ marginBottom: '1.2rem' }}>🎯</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Notre Mission</h3>
              <p>Garantir la sûreté des aéroports, des ports et des infrastructures de transport en France et dans les territoires d&apos;outre-mer, en fournissant des prestations certifiées conformes aux réglementations nationales et européennes les plus exigeantes.</p>
            </div>
            <div className="card card--feature fade-in delay-2" style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--gold)' }}>
              <div className="card__icon" style={{ marginBottom: '1.2rem' }}>🔧</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Notre Vision</h3>
              <p>Devenir le leader reconnu de la sûreté aéroportuaire et portuaire sur l&apos;ensemble du territoire français, en plaçant l&apos;excellence opérationnelle, la technologie et le développement humain au cœur de notre stratégie de croissance.</p>
            </div>
            <div className="card card--feature fade-in delay-3" style={{ padding: '2.5rem 2rem', borderTop: '4px solid var(--gold)' }}>
              <div className="card__icon" style={{ marginBottom: '1.2rem' }}>✨</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Nos Valeurs</h3>
              <ul className="feature-list">
                <li>Intégrité et éthique professionnelle</li>
                <li>Excellence opérationnelle</li>
                <li>Respect des réglementations</li>
                <li>Engagement et loyauté</li>
                <li>Innovation et adaptabilité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE LANCEMENT */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre lancement</div>
            <h2>Une Société Née d&apos;un Groupe Solide</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Imperium Safety Security s&apos;inscrit dans la continuité du Groupe Imperium, acteur multi-métiers de la sécurité privée en France et dans les DOM-TOM.</p>
          </div>
          <div className="timeline">
            <div className="timeline__item fade-in">
              <div className="timeline__content">
                <h4>Création par le Groupe Imperium</h4>
                <p>Imperium Safety Security est créée par le <strong>Groupe Imperium</strong>, qui regroupe déjà <strong>Imperium Security Services</strong> (gardiennage et sécurité humaine), <strong>Imperium Private Protection</strong> (protection de l&apos;intégrité physique des personnes) et une activité de <strong>Cybersécurité, Intelligence &amp; Management des Risques</strong>. La création d&apos;Imperium Safety Security étend le groupe au secteur stratégique de la sûreté aéroportuaire et portuaire.</p>
              </div>
              <div className="timeline__year"><div className="timeline__year-badge">2026</div></div>
            </div>
            <div className="timeline__item fade-in delay-1">
              <div className="timeline__year"><div className="timeline__year-badge">J+1</div></div>
              <div className="timeline__content">
                <h4>Obtention des agréments</h4>
                <p>Dépôt et obtention des agréments CNAPS, habilitations préfectorales et accréditation DGAC. Constitution d&apos;une équipe initiale d&apos;agents certifiés TFP APS et CQP ASSA, prêts à intervenir dès les premières missions.</p>
              </div>
            </div>
            <div className="timeline__item fade-in delay-2">
              <div className="timeline__content">
                <h4>Déploiement national &amp; outre-mer</h4>
                <p>Lancement simultané des opérations en France métropolitaine et dans les territoires d&apos;outre-mer. Installation d&apos;équipes locales dans les 7 territoires DOM-TOM, avec des responsables régionaux dédiés connaissant les spécificités locales.</p>
              </div>
              <div className="timeline__year"><div className="timeline__year-badge">J+2</div></div>
            </div>
            <div className="timeline__item fade-in delay-3">
              <div className="timeline__year"><div className="timeline__year-badge">Demain</div></div>
              <div className="timeline__content">
                <h4>Notre ambition</h4>
                <p>Devenir un acteur incontournable de la sûreté aéroportuaire et portuaire en France. Développer l&apos;Imperium Academy pour la formation continue, renforcer l&apos;unité cynophile et étendre nos partenariats institutionnels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPE IMPERIUM */}
      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre appartenance</div>
            <h2>Le Groupe Imperium</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Imperium Safety Security fait partie d&apos;un groupe intégré couvrant l&apos;ensemble du spectre de la sécurité privée et de la gestion des risques.</p>
          </div>
          <div className="grid-4">
            <div className="card card--feature fade-in delay-1" style={{ borderTop: '4px solid var(--gold)', padding: '2rem 1.5rem' }}>
              <div className="card__icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Imperium Security Services</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Gardiennage &amp; Sécurité Humaine</p>
              <p>Surveillance de sites industriels, commerciaux et institutionnels. Agents de sécurité qualifiés CNAPS, rondes, contrôle d&apos;accès et gestion des flux.</p>
            </div>
            <div className="card card--feature fade-in delay-2" style={{ borderTop: '4px solid var(--gold)', padding: '2rem 1.5rem' }}>
              <div className="card__icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>👨‍🛡</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Imperium Private Protection</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Protection Rapprochée</p>
              <p>Protection de l&apos;intégrité physique des personnes : personnalités publiques, dirigeants d&apos;entreprises, personnalités à risque. Agents formés aux techniques de protection rapprochée.</p>
            </div>
            <div className="card card--feature fade-in delay-3" style={{ borderTop: '4px solid var(--gold)', padding: '2rem 1.5rem' }}>
              <div className="card__icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>🖥</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Cybersécurité &amp; Intelligence</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Cyber &amp; Management des Risques</p>
              <p>Audit de cybersécurité, renseignement compétitif, analyse de menaces et management des risques stratégiques pour les organisations publiques et privées.</p>
            </div>
            <div className="card card--feature fade-in delay-4" style={{ borderTop: '4px solid var(--gold)', padding: '2rem 1.5rem', background: 'linear-gradient(135deg, var(--navy) 0%, #1a2d4d 100%)', color: 'white' }}>
              <div className="card__icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>✈</div>
              <h4 style={{ color: 'var(--gold)', marginBottom: '0.6rem' }}>Imperium Safety Security</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Sûreté Aéroportuaire &amp; Portuaire</p>
              <p style={{ color: 'rgba(255,255,255,0.85)' }}>La dernière-née du Groupe Imperium. Spécialisée dans la sûreté des infrastructures de transport en France métropolitaine et dans les DOM-TOM.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem', padding: '1.5rem', background: 'var(--gray)', borderRadius: '12px' }} className="fade-in">
            <p style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: 600, margin: 0 }}>Le Groupe Imperium — une vision globale de la sécurité, des réponses sur-mesure à chaque menace.</p>
          </div>
        </div>
      </section>

      {/* ÉQUIPE DIRIGEANTE */}
      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Les hommes et femmes qui guident</div>
            <h2>Notre Équipe Dirigeante</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4">
            <div className="card card--team fade-in delay-1">
              <div className="card__avatar">👤</div>
              <div className="card__body">
                <h4>Jean-Marc Duval</h4>
                <p className="card__role">Président Directeur Général</p>
                <p>Ancien officier de la Police Nationale. 25 ans d&apos;expérience en sûreté des transports et gestion des risques.</p>
              </div>
            </div>
            <div className="card card--team fade-in delay-2">
              <div className="card__avatar">👤</div>
              <div className="card__body">
                <h4>Sophie Marchand</h4>
                <p className="card__role">Directrice des Opérations</p>
                <p>Spécialiste en réglementation aéroportuaire internationale. Pilote le déploiement opérationnel sur l&apos;ensemble des sites.</p>
              </div>
            </div>
            <div className="card card--team fade-in delay-3">
              <div className="card__avatar">👤</div>
              <div className="card__body">
                <h4>Thierry Benoît</h4>
                <p className="card__role">Directeur Formation &amp; RH</p>
                <p>Futur fondateur d&apos;Imperium Academy, le programme de formation interne d&apos;Imperium Safety Security actuellement en préparation. Expert en formation professionnelle des agents de sûreté aéroportuaire et portuaire.</p>
              </div>
            </div>
            <div className="card card--team fade-in delay-4">
              <div className="card__avatar">👤</div>
              <div className="card__body">
                <h4>Claudine Rivière</h4>
                <p className="card__role">Directrice DOM-TOM</p>
                <p>Coordinatrice des opérations outre-mer. Expertise unique des spécificités réglementaires et logistiques des territoires d&apos;outre-mer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS DÉTAILLÉES */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Conformité &amp; qualité</div>
            <h2>Nos Certifications &amp; Agréments</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>CNAPS</h4>
              <p>Agrément du Conseil National des Activités Privées de Sécurité. L&apos;ensemble de nos agents est titulaire de la carte professionnelle en cours de validité, renouvelée tous les 5 ans après formation continue obligatoire.</p>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✈</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Agrément DGAC / BCAA</h4>
              <p>Autorisation de la Direction Générale de l&apos;Aviation Civile pour les missions de sûreté en zone réglementée aéroportuaire. Conformité totale avec le règlement UE 300/2008 et ses textes d&apos;application.</p>
            </div>
            <div className="card fade-in delay-3" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚓</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Code ISPS</h4>
              <p>Certification conformément au Code International pour la Sûreté des Navires et des Installations Portuaires (ISPS). Accréditation pour opérer dans les zones maritimes réglementées de niveau 1, 2 et 3.</p>
            </div>
            <div className="card fade-in delay-4" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Habilitation Préfectorale</h4>
              <p>Habilitations préfectorales pour l&apos;accès aux zones réglementées dans l&apos;ensemble des régions où nous opérons, y compris les territoires d&apos;outre-mer. Enquêtes administratives régulières.</p>
            </div>
            <div className="card fade-in delay-5" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>TFP APS &amp; CQP ASSA</h4>
              <p>Nos agents maîtrisent le Titre à Finalité Professionnelle d&apos;Agent de Prévention et de Sécurité ainsi que le CQP Agent de Sûreté et de Sécurité Aéroportuaire, garantissant une formation reconnue par l&apos;État.</p>
            </div>
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🐕</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Certification Cynophile</h4>
              <p>Nos maîtres-chiens et leurs équipages sont certifiés pour la détection d&apos;explosifs (EOD) et de stupéfiants, conformément aux standards ECAC et aux exigences de la DGAC pour les missions aéroportuaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre cadre réglementaire</div>
            <h2>Organismes de Tutelle &amp; Régulation</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Imperium Safety Security opère dans un cadre strictement réglementé, sous la supervision des autorités nationales compétentes en matière de sûreté des transports.</p>
          </div>
          <div className="partners-row fade-in">
            <span className="partner-badge">DGAC</span>
            <span className="partner-badge">Préfecture de Police</span>
            <span className="partner-badge">PAF - Police aux Frontières</span>
            <span className="partner-badge">Douanes Françaises</span>
            <span className="partner-badge">Ministère de l&apos;Intérieur</span>
            <span className="partner-badge">CNAPS</span>
            <span className="partner-badge">ECAC</span>
            <span className="partner-badge">Organisation Maritime Internationale</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Construisons ensemble la sûreté de demain</h2>
            <p>Vous avez un projet de sécurisation d&apos;infrastructure ou souhaitez rejoindre nos équipes ? Contactez-nous dès aujourd&apos;hui.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Nous contacter</Link>
              <Link href="/recrutement" className="btn btn--outline">Rejoindre l&apos;équipe</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
