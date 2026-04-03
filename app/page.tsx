import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Imperium Safety Security - Sûreté Aéroportuaire & Portuaire',
  description: 'Imperium Safety Security - Votre partenaire de confiance en sûreté aéroportuaire et portuaire en France et DOM-TOM. Agents certifiés CNAPS, habilitation préfectorale.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" role="banner">
        <div className="hero__content">
          <div className="hero__label">Excellence &amp; Sécurité</div>
          <h1>IMPERIUM SAFETY <span>SECURITY</span></h1>
          <p>Votre partenaire de confiance en sûreté aéroportuaire &amp; portuaire en France métropolitaine et DOM-TOM. Des professionnels certifiés pour protéger vos infrastructures.</p>
          <div className="hero__btns">
            <Link href="/services" className="btn btn--primary">Découvrir nos services</Link>
            <Link href="/contact" className="btn btn--outline">Nous contacter</Link>
          </div>
        </div>
        <div className="hero__pattern"></div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="Chiffres clés">
        <div className="container">
          <div className="stats__grid">
            <div className="fade-in">
              <div className="stat__number" data-target="5">0</div>
              <div className="stat__label">Services spécialisés</div>
            </div>
            <div className="fade-in delay-1">
              <div className="stat__number" data-target="7">0</div>
              <div className="stat__label">Territoires DOM-TOM</div>
            </div>
            <div className="fade-in delay-2">
              <div className="stat__number" data-target="100">0</div>
              <div className="stat__label">% Agents certifiés CNAPS<span className="stat__suffix"></span></div>
            </div>
            <div className="fade-in delay-3">
              <div className="stat__number" data-target="24">0</div>
              <div className="stat__label">h/24 Disponibilité urgences</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="section" aria-label="Présentation">
        <div className="container">
          <div className="split">
            <div className="split__visual fade-in-left">✈</div>
            <div className="split__text fade-in-right">
              <div className="section__label">Qui sommes-nous</div>
              <h2>La sûreté aéroportuaire &amp; portuaire par le Groupe Imperium</h2>
              <p>Imperium Safety Security est la dernière entité créée par le <strong>Groupe Imperium</strong>, acteur multi-métiers de la sécurité privée qui regroupe déjà Imperium Security Services (gardiennage), Imperium Private Protection (protection rapprochée) et une activité de cybersécurité et management des risques.</p>
              <p>Spécialisée dans la sûreté des infrastructures de transport, nous intervenons dans les aéroports, les ports et lors d&apos;événements sur l&apos;ensemble du territoire français et dans les DOM-TOM. Nos agents, certifiés CNAPS et habilités préfectoralement, opèrent avec une rigueur absolue. Notre engagement : zéro compromis sur la sécurité.</p>
              <Link href="/a-propos" className="btn btn--navy mt-3">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--gray" aria-label="Nos services">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Ce que nous faisons</div>
            <h2 className="section__title">Nos Services de Sûreté</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Des prestations certifiées, adaptées aux exigences réglementaires les plus strictes du transport aérien et maritime.</p>
          </div>
          <div className="grid-4">
            <div className="card card--service fade-in delay-1">
              <div className="card__icon">✈</div>
              <h3>Sûreté Aéroportuaire</h3>
              <p>Contrôle d&apos;accès, filtrage passagers, inspection bagages et surveillance périmètre conformes au règlement UE 300/2008.</p>
              <Link href="/services/surete-aeroportuaire" className="card__link">Découvrir →</Link>
            </div>
            <div className="card card--service fade-in delay-2">
              <div className="card__icon">⚓</div>
              <h3>Sûreté Portuaire</h3>
              <p>Protection des installations portuaires selon le Code ISPS. Filtrage des accès, rondes de surveillance et contrôle des véhicules.</p>
              <Link href="/services/surete-portuaire" className="card__link">Découvrir →</Link>
            </div>
            <div className="card card--service fade-in delay-3">
              <div className="card__icon">🔍</div>
              <h3>Inspection-Filtrage</h3>
              <p>Utilisation de technologies EDS, rayons X, portiques de détection et ETD pour un filtrage sécurisé et efficace.</p>
              <Link href="/services/inspection-filtrage" className="card__link">Découvrir →</Link>
            </div>
            <div className="card card--service fade-in delay-4">
              <div className="card__icon">🐕</div>
              <h3>Cynophilie</h3>
              <p>Unité cynophile spécialisée dans la détection d&apos;explosifs et de stupéfiants. Chiens et maîtres certifiés.</p>
              <Link href="/services/cynophilie" className="card__link">Découvrir →</Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/services" className="btn btn--gold-outline">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="section" aria-label="Pourquoi nous choisir">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos atouts</div>
            <h2 className="section__title">Pourquoi choisir Imperium Safety ?</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4">
            <div className="card card--feature fade-in delay-1">
              <div className="card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Certification Officielle</h4>
              <p>Tous nos agents sont titulaires de la carte professionnelle CNAPS et des habilitations préfectorales requises.</p>
            </div>
            <div className="card card--feature fade-in delay-2">
              <div className="card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Expertise Terrain</h4>
              <p>Une équipe fondatrice issue de la Police Nationale, de la Gendarmerie et des services de sûreté aéroportuaire, avec une maîtrise approfondie des environnements les plus exigeants.</p>
            </div>
            <div className="card card--feature fade-in delay-3">
              <div className="card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h4>Présence Nationale</h4>
              <p>Présence sur l&apos;ensemble du territoire français : métropole et DOM-TOM, avec des équipes locales réactives.</p>
            </div>
            <div className="card card--feature fade-in delay-4">
              <div className="card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
              </div>
              <h4>Formation Continue</h4>
              <p>Programme de formation interne Imperium Academy en cours de lancement, pour garantir la montée en compétence permanente de nos équipes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPE IMPERIUM */}
      <section className="section section--navy" aria-label="Groupe Imperium" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2d4d 100%)', color: 'white' }}>
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label" style={{ color: 'var(--gold)' }}>Notre groupe</div>
            <h2 className="section__title" style={{ color: 'white' }}>Le Groupe Imperium</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>Imperium Safety Security s&apos;inscrit dans un groupe intégré couvrant l&apos;ensemble du spectre de la sécurité privée.</p>
          </div>
          <div className="grid-4">
            <div className="fade-in delay-1" style={{ textAlign: 'center', padding: '1.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>🛡</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Imperium Security Services</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', margin: 0 }}>Gardiennage &amp; sécurité humaine</p>
            </div>
            <div className="fade-in delay-2" style={{ textAlign: 'center', padding: '1.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>👨‍🛡</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Imperium Private Protection</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', margin: 0 }}>Protection rapprochée des personnes</p>
            </div>
            <div className="fade-in delay-3" style={{ textAlign: 'center', padding: '1.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>🖥</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Cybersécurité &amp; Intelligence</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', margin: 0 }}>Cyber, renseignement &amp; gestion des risques</p>
            </div>
            <div className="fade-in delay-4" style={{ textAlign: 'center', padding: '1.5rem 1rem', background: 'rgba(201,168,76,0.15)', borderRadius: '12px', border: '2px solid var(--gold)' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>✈</div>
              <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Imperium Safety Security</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', margin: 0 }}>Sûreté aéroportuaire &amp; portuaire</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/a-propos" className="btn btn--primary">En savoir plus sur le groupe</Link>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="section section--gray" aria-label="Zones d'intervention">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre couverture</div>
            <h2 className="section__title">Zones d&apos;Intervention</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">De Paris à la Polynésie française, nous assurons la sûreté de vos infrastructures sur l&apos;ensemble du territoire.</p>
          </div>
          <div className="grid-2">
            <div className="card card--sector fade-in-left">
              <div className="card__bg" style={{ background: 'linear-gradient(135deg, #1a2d4d 0%, #0a1628 100%)' }}></div>
              <div className="card__overlay"></div>
              <div className="card__body">
                <div className="card__icon">🏭</div>
                <h3>France Métropolitaine</h3>
                <p>CDG, Orly, Nice, Lyon, Marseille, Bordeaux, Toulouse, Nantes, Strasbourg et les grands ports nationaux.</p>
                <Link href="/secteurs/france-metropolitaine" className="btn btn--primary btn--sm">Explorer</Link>
              </div>
            </div>
            <div className="card card--sector fade-in-right">
              <div className="card__bg" style={{ background: 'linear-gradient(135deg, #0d2035 0%, #1a3a5c 100%)' }}></div>
              <div className="card__overlay"></div>
              <div className="card__body">
                <div className="card__icon">🌎</div>
                <h3>Outre-Mer &amp; DOM-TOM</h3>
                <p>Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Polynésie française, Nouvelle-Calédonie.</p>
                <Link href="/secteurs/dom-tom" className="btn btn--primary btn--sm">Explorer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" aria-label="Certifications">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos agréments</div>
            <h2 className="section__title">Certifications &amp; Agréments</h2>
            <div className="section__divider"></div>
          </div>
          <div className="certs-grid">
            <div className="cert-badge fade-in delay-1">
              <div className="cert-badge__icon">🌟</div>
              <div className="cert-badge__text">
                <strong>CNAPS</strong>
                <span>Conseil National des Activités Privées de Sécurité</span>
              </div>
            </div>
            <div className="cert-badge fade-in delay-2">
              <div className="cert-badge__icon">🎯</div>
              <div className="cert-badge__text">
                <strong>TFP APS</strong>
                <span>Titre à Finalité Professionnelle Agent de Prévention et de Sécurité</span>
              </div>
            </div>
            <div className="cert-badge fade-in delay-3">
              <div className="cert-badge__icon">📄</div>
              <div className="cert-badge__text">
                <strong>Habilitation Préfectorale</strong>
                <span>Zones réglementées aéroportuaires et portuaires</span>
              </div>
            </div>
            <div className="cert-badge fade-in delay-4">
              <div className="cert-badge__icon">✅</div>
              <div className="cert-badge__text">
                <strong>Agrément DGAC</strong>
                <span>Direction Générale de l&apos;Aviation Civile</span>
              </div>
            </div>
            <div className="cert-badge fade-in delay-5">
              <div className="cert-badge__icon">📜</div>
              <div className="cert-badge__text">
                <strong>Code ISPS</strong>
                <span>International Ship and Port Facility Security Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section" aria-label="Appel à l'action">
        <div className="container">
          <div className="fade-in">
            <h2>Rejoignez notre équipe ou demandez un devis</h2>
            <p>Que vous soyez une infrastructure à sécuriser ou un professionnel de la sûreté, Imperium Safety Security est votre partenaire de confiance.</p>
            <div className="cta__btns">
              <Link href="/recrutement" className="btn btn--primary">Rejoindre notre équipe</Link>
              <Link href="/contact" className="btn btn--outline">Demander un devis</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
