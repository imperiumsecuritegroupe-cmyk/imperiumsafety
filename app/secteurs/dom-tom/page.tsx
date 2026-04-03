import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outre-Mer DOM-TOM - Imperium Safety Security',
  description: 'Outre-Mer DOM-TOM - Imperium Safety Security. Présence en Guadeloupe, Martinique, Guyane, Réunion, Mayotte, Polynésie française et Nouvelle-Calédonie.',
};

export default function DomTomPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Zone d&apos;intervention</div>
          <h1>Outre-Mer &amp; <span>DOM-TOM</span></h1>
          <p>Présence dans 7 territoires d&apos;outre-mer. Une expertise unique des contraintes insulaires et de la réglementation spécifique à chaque territoire.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/secteurs">Secteurs</Link></li>
            <li>Outre-Mer &amp; DOM-TOM</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text fade-in-left">
              <div className="section__label">Notre expertise outre-mer</div>
              <h2>Un partenaire de proximité dans vos territoires</h2>
              <p>Imperium Safety Security a développé une expertise unique de la sûreté dans les territoires français d&apos;outre-mer. Nos équipes locales, recrutées et formées sur place, connaissent les spécificités de chaque île et de chaque territoire, les acteurs institutionnels locaux et les contraintes logistiques propres à l&apos;insularité.</p>
              <p>Nous intervenons dans 7 territoires d&apos;outre-mer, des Antilles au Pacifique en passant par l&apos;Océan Indien, avec une direction régionale DOM-TOM dédiée basée à Pointe-à-Pitre et un réseau de correspondants locaux actifs.</p>
              <div className="info-box mt-3">
                <h4>🌎 Spécificités Outre-Mer</h4>
                <p>Les territoires d&apos;outre-mer appliquent la réglementation française de sûreté aéroportuaire et portuaire, adaptée aux réalités locales. Imperium Safety assure la coordination avec les DSAC régionales et les préfectures territoriales.</p>
              </div>
            </div>
            <div className="split__visual fade-in-right">🌎</div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos implantations</div>
            <h2>Présence par Territoire</h2>
            <div className="section__divider"></div>
          </div>

          <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem', marginTop: '1rem' }} className="fade-in">🌎 Antilles françaises</h3>
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            <div className="territory-card fade-in delay-1">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Guadeloupe</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport de Pointe-à-Pitre - Pôle Caraïbes (PTP)</li>
                  <li>Aéroport de Marie-Galante</li>
                  <li className="port">Port de Pointe-à-Pitre</li>
                  <li className="port">Port de Basse-Terre</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-2">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Martinique</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport Martinique Aimé Césaire (FDF)</li>
                  <li>Aérodrome de Sainte-Marie</li>
                  <li className="port">Port de Fort-de-France</li>
                  <li className="port">Port de La Trinité</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }} className="fade-in">🌎 Amérique du Sud</h3>
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            <div className="territory-card fade-in delay-1">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Guyane française</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport Félix Éboué - Cayenne (CAY)</li>
                  <li>Aéroport de Saint-Laurent-du-Maroni</li>
                  <li className="port">Port de Dégrad des Cannes</li>
                  <li className="port">Port fluvial de Kourou</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-2">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Saint-Martin / Saint-Barth</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport Princess Juliana (SXM) - côté français</li>
                  <li>Aéroport de Saint-Barthélemy (SBH)</li>
                  <li className="port">Port de Marigot</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }} className="fade-in">🌎 Océan Indien</h3>
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            <div className="territory-card fade-in delay-1">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>La Réunion</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport Roland Garros (RUN)</li>
                  <li>Aéroport Pierrefonds (ZSE)</li>
                  <li className="port">Port Réunion - Le Port</li>
                  <li className="port">Port de Saint-Gilles</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-2">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Mayotte</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport de Dzaoudzi-Pamandzi (DZA)</li>
                  <li className="port">Port de Longoni</li>
                  <li className="port">Port de Dzaoudzi</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }} className="fade-in">🌎 Pacifique</h3>
          <div className="grid-2">
            <div className="territory-card fade-in delay-1">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Polynésie française</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport Tahiti Faa&apos;a (PPT)</li>
                  <li>Aéroport de Bora-Bora (BOB)</li>
                  <li>Aéroport de Moorea (MOZ)</li>
                  <li className="port">Port de Papeete</li>
                </ul>
              </div>
            </div>
            <div className="territory-card fade-in delay-2">
              <div className="territory-card__header">
                <div className="icon">🏴</div>
                <div>
                  <h4>Nouvelle-Calédonie</h4>
                  <p>Zone d&apos;intervention</p>
                </div>
              </div>
              <div className="territory-card__body">
                <ul>
                  <li>Aéroport La Tontouta - Nouméa (NOU)</li>
                  <li>Aéroport Magenta - Nouméa (GEA)</li>
                  <li className="port">Port autonome de Nouméa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre savoir-faire</div>
            <h2>Spécificités de l&apos;Intervention Outre-Mer</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3 fade-in">
            <div className="card card--feature">
              <div className="card__icon">📄</div>
              <h4>Réglementation Adaptée</h4>
              <p>Application de la réglementation nationale de sûreté adaptée aux spécificités locales. Coordination avec les DSAC régionales (DSAC-NCO pour le Pacifique) et les préfectures territoriales.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">👥</div>
              <h4>Équipes Locales</h4>
              <p>Priorité donnée au recrutement local. Nos agents sont des ressortissants des territoires concernés, formés sur place via nos partenaires de formation certifiants. Notre programme Imperium Academy DOM-TOM sera prochainement déployé dans les territoires.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">📦</div>
              <h4>Logistique Insulaire</h4>
              <p>Maîtrise des contraintes logistiques de l&apos;insularité : rotation des équipes, acheminement du matériel, gestion des formations à distance et en présentiel sur site.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🌙</div>
              <h4>Décalages Horaires</h4>
              <p>Organisation opérationnelle adaptée aux fuseaux horaires des territoires du Pacifique (UTC+11 pour la Nouvelle-Calédonie) avec une direction régionale dédiée.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🌐</div>
              <h4>Contexte Multiculturel</h4>
              <p>Sensibilisation de nos équipes aux spécificités culturelles de chaque territoire pour une relation passagers respectueuse et adaptée.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">📞</div>
              <h4>Astreinte Régionale</h4>
              <p>Chaque zone géographique dispose d&apos;une astreinte opérationnelle régionale. La direction DOM-TOM assure une veille opérationnelle 24h/24 depuis Pointe-à-Pitre.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Votre infrastructure est en outre-mer ?</h2>
            <p>Notre direction régionale DOM-TOM est à votre disposition pour analyser vos besoins et vous proposer une solution adaptée.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Contacter la direction DOM-TOM</Link>
              <Link href="/secteurs/france-metropolitaine" className="btn btn--outline">Voir la France métropolitaine</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
