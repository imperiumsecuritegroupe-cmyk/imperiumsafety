import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'France Métropolitaine - Imperium Safety Security',
  description: 'France Métropolitaine - Imperium Safety Security. Présence dans 9 aéroports majeurs et 5 grands ports : CDG, Orly, Nice, Lyon, Marseille, Le Havre, Bordeaux et plus.',
};

export default function FranceMetropolitainePage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Zone d&apos;intervention</div>
          <h1>France <span>Métropolitaine</span></h1>
          <p>Présence établie dans les principaux aéroports et ports de France métropolitaine, de l&apos;Île-de-France au littoral méditerranéen.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/secteurs">Secteurs</Link></li>
            <li>France Métropolitaine</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text fade-in-left">
              <div className="section__label">Notre implantation</div>
              <h2>Une couverture nationale complète</h2>
              <p>Depuis notre création, Imperium Safety Security a progressivement étendu sa présence à travers toute la France métropolitaine. Nous disposons aujourd&apos;hui d&apos;agences régionales et d&apos;équipes permanentes sur les sites les plus stratégiques du territoire national.</p>
              <p>Notre modèle repose sur des équipes locales encadrées par des responsables de site expérimentés, garantissant une connaissance approfondie de chaque infrastructure et une réactivité maximale face aux besoins opérationnels. Chaque site bénéficie d&apos;un chef d&apos;équipe dédié et d&apos;un plan de continuité d&apos;activité.</p>
              <div className="advantages mt-3">
                <div className="advantage">
                  <div className="advantage__icon">📍</div>
                  <div>
                    <h5>9 régions couvertes</h5>
                    <p>De l&apos;Île-de-France au Grand Est en passant par PACA et la Nouvelle-Aquitaine.</p>
                  </div>
                </div>
                <div className="advantage">
                  <div className="advantage__icon">⏱</div>
                  <div>
                    <h5>Disponibilité permanente</h5>
                    <p>Astreintes 24h/24, 7j/7 sur l&apos;ensemble des sites métropolitains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="split__visual fade-in-right">🏭</div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Sûreté aérienne</div>
            <h2>Aéroports Métropolitains</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="territory-card fade-in delay-1">
              <div className="territory-card__header">
                <div className="icon">✈</div>
                <div>
                  <h4>Île-de-France</h4>
                  <p>Hub principal d&apos;Imperium Safety</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Paris-Charles de Gaulle (CDG) – 120 agents</li>
                  <li>Paris-Orly (ORY) – 80 agents</li>
                  <li>Paris-Le Bourget (LBG) – 25 agents</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-2">
              <div className="territory-card__header">
                <div className="icon">✈</div>
                <div>
                  <h4>Sud-Est</h4>
                  <p>PACA &amp; Auvergne-Rhône-Alpes</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Nice Côte d&apos;Azur (NCE) – 60 agents</li>
                  <li>Marseille Provence (MRS) – 55 agents</li>
                  <li>Lyon Saint-Exupéry (LYS) – 50 agents</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-3">
              <div className="territory-card__header">
                <div className="icon">✈</div>
                <div>
                  <h4>Sud-Ouest &amp; Ouest</h4>
                  <p>Nouvelle-Aquitaine &amp; Occitanie</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Bordeaux-Mérignac (BOD) – 45 agents</li>
                  <li>Toulouse-Blagnac (TLS) – 40 agents</li>
                  <li>Nantes Atlantique (NTE) – 35 agents</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-4">
              <div className="territory-card__header">
                <div className="icon">✈</div>
                <div>
                  <h4>Est &amp; Nord</h4>
                  <p>Grand Est &amp; Hauts-de-France</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Strasbourg Entzheim (SXB) – 30 agents</li>
                  <li>Lille-Lesquin (LIL) – 25 agents</li>
                  <li>Bâle-Mulhouse (BSL) – 20 agents</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-5">
              <div className="territory-card__header">
                <div className="icon">✈</div>
                <div>
                  <h4>Autres Sites</h4>
                  <p>Aéroports régionaux</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Montpellier-Méditerranée (MPL)</li>
                  <li>Clermont-Ferrand (CFE)</li>
                  <li>Rennes Saint-Jacques (RNS)</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-1" style={{ background: 'var(--navy)' }}>
              <div className="territory-card__header" style={{ borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
                <div className="icon" style={{ color: 'var(--gold)' }}>👥</div>
                <div>
                  <h4 style={{ color: 'var(--white)' }}>Total Métropole</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>Sûreté aéroportuaire</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li style={{ color: 'rgba(255,255,255,0.8)' }}>👤 + de 350 agents aéroportuaires</li>
                  <li style={{ color: 'rgba(255,255,255,0.8)' }}>✈ 12 aéroports couverts</li>
                  <li style={{ color: 'rgba(255,255,255,0.8)' }}>⏰ Opérations 24h/24</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Sûreté maritime</div>
            <h2>Ports Métropolitains</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="territory-card fade-in delay-1">
              <div className="territory-card__header">
                <div className="icon">⚓</div>
                <div>
                  <h4>Méditerranée</h4>
                  <p>Premier port français</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li className="port">Grand Port Maritime de Marseille</li>
                  <li className="port">Port de Toulon</li>
                  <li className="port">Port de Sète</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-2">
              <div className="territory-card__header">
                <div className="icon">⚓</div>
                <div>
                  <h4>Atlantique Nord</h4>
                  <p>Façade atlantique</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li className="port">Grand Port du Havre</li>
                  <li className="port">Grand Port de Dunkerque</li>
                  <li className="port">Port de Rouen</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-3">
              <div className="territory-card__header">
                <div className="icon">⚓</div>
                <div>
                  <h4>Atlantique Sud-Ouest</h4>
                  <p>Estuaires de la Gironde et Loire</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li className="port">Grand Port Maritime de Bordeaux</li>
                  <li className="port">Nantes-Saint-Nazaire</li>
                  <li className="port">Port de La Rochelle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Organisation</div>
            <h2>Nos Agences Régionales</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4 fade-in">
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>🏠</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.3rem' }}>Paris Île-de-France</h5>
              <p style={{ fontSize: '0.85rem' }}>Siège social &amp; direction opérationnelle<br />75008 Paris</p>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>🏠</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.3rem' }}>Marseille PACA</h5>
              <p style={{ fontSize: '0.85rem' }}>Agence régionale Sud-Est<br />13008 Marseille</p>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>🏠</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.3rem' }}>Lyon Auvergne-RA</h5>
              <p style={{ fontSize: '0.85rem' }}>Agence régionale Rhône-Alpes<br />69007 Lyon</p>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>🏠</div>
              <h5 style={{ color: 'var(--navy)', marginBottom: '0.3rem' }}>Bordeaux NAQ</h5>
              <p style={{ fontSize: '0.85rem' }}>Agence régionale Sud-Ouest<br />33000 Bordeaux</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Votre infrastructure est en France métropolitaine ?</h2>
            <p>Contactez l&apos;agence la plus proche de votre site pour une analyse de vos besoins et une proposition personnalisée.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Contacter une agence</Link>
              <Link href="/secteurs/dom-tom" className="btn btn--outline">Voir l&apos;outre-mer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
