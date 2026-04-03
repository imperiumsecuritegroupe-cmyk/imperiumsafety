import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos Secteurs - Imperium Safety Security',
  description: 'Zones d\'intervention - Imperium Safety Security. Présence en France métropolitaine et dans tous les DOM-TOM : Guadeloupe, Martinique, Guyane, Réunion, Mayotte, Polynésie, Calédonie.',
};

export default function SecteursPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Présence nationale</div>
          <h1>Nos Zones <span>d&apos;Intervention</span></h1>
          <p>De Paris à Nouméa, Imperium Safety Security couvre l&apos;ensemble du territoire français avec des équipes locales formées et habilitées.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>Secteurs</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre couverture territoriale</div>
            <h2>Une présence sur tout le territoire</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Imperium Safety Security dispose d&apos;équipes locales dans les principales zones aéroportuaires et portuaires de France métropolitaine et d&apos;outre-mer.</p>
          </div>
          <div className="stats__grid fade-in" style={{ background: 'none', padding: '2rem 0' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="stat__number" style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 800 }} data-target="9">0</div>
              <div style={{ color: 'var(--gray-text)', fontSize: '0.9rem', marginTop: '0.3rem' }}>Régions métropolitaines</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="stat__number" style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 800 }} data-target="7">0</div>
              <div style={{ color: 'var(--gray-text)', fontSize: '0.9rem', marginTop: '0.3rem' }}>Territoires d&apos;outre-mer</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="stat__number" style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 800 }} data-target="20">0</div>
              <div style={{ color: 'var(--gray-text)', fontSize: '0.9rem', marginTop: '0.3rem' }}>Aéroports couverts</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="stat__number" style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 800 }} data-target="15">0</div>
              <div style={{ color: 'var(--gray-text)', fontSize: '0.9rem', marginTop: '0.3rem' }}>Ports sécurisés</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="grid-2">
            <div className="card card--sector fade-in-left" style={{ minHeight: '420px' }}>
              <div className="card__bg" style={{ background: 'linear-gradient(135deg, #0d2040 0%, #1a3d6e 100%)' }}></div>
              <div className="card__overlay"></div>
              <div className="card__body">
                <div className="card__icon">🏭</div>
                <h3>France Métropolitaine</h3>
                <p>Présence dans les 9 principales zones aéroportuaires et dans les 7 grands ports maritimes français. Équipes locales réactives en Île-de-France, PACA, Occitanie, Nouvelle-Aquitaine, Pays de la Loire, Auvergne-Rhône-Alpes et Grand Est.</p>
                <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                  <li style={{ padding: '0.3rem 0' }}>✈ CDG, Orly, Nice, Lyon, Marseille, Bordeaux...</li>
                  <li style={{ padding: '0.3rem 0' }}>⚓ Marseille, Le Havre, Bordeaux, Dunkerque...</li>
                </ul>
                <Link href="/secteurs/france-metropolitaine" className="btn btn--primary btn--sm">Explorer la France métro</Link>
              </div>
            </div>
            <div className="card card--sector fade-in-right" style={{ minHeight: '420px' }}>
              <div className="card__bg" style={{ background: 'linear-gradient(135deg, #0a2535 0%, #124060 100%)' }}></div>
              <div className="card__overlay"></div>
              <div className="card__body">
                <div className="card__icon">🌎</div>
                <h3>Outre-Mer &amp; DOM-TOM</h3>
                <p>Imperium Safety Security est implanté dans 7 territoires d&apos;outre-mer avec des équipes locales habilitées et des responsables régionaux dédiés. Une expertise unique des contraintes insulaires et de la réglementation spécifique DOM-TOM.</p>
                <ul style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                  <li style={{ padding: '0.3rem 0' }}>✈ Guadeloupe, Martinique, Guyane, Réunion...</li>
                  <li style={{ padding: '0.3rem 0' }}>⚓ Mayotte, Polynésie française, Nouvelle-Calédonie</li>
                </ul>
                <Link href="/secteurs/dom-tom" className="btn btn--primary btn--sm">Explorer l&apos;outre-mer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre approche territoriale</div>
            <h2>Des équipes ancrées localement</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4 fade-in">
            <div className="card card--feature">
              <div className="card__icon">📍</div>
              <h4>Présence Locale</h4>
              <p>Des responsables régionaux implantés sur chaque territoire, connaissant les acteurs locaux et les spécificités du terrain.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">⏱</div>
              <h4>Réactivité 24h/24</h4>
              <p>Astreinte opérationnelle permanente pour répondre aux urgences et aux renforts d&apos;effectifs dans des délais minimaux.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🌎</div>
              <h4>Expertise DOM-TOM</h4>
              <p>Connaissance des réglementations spécifiques à l&apos;outre-mer, des contraintes insulaires et des particularités de chaque territoire.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">👥</div>
              <h4>Recrutement Local</h4>
              <p>Privilège donné à l&apos;emploi local dans chaque territoire, favorisant l&apos;intégration et la connaissance du tissu humain local.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Votre site est-il dans notre zone d&apos;intervention ?</h2>
            <p>Contactez-nous pour vérifier notre présence sur votre territoire et recevoir une proposition adaptée à vos besoins.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Nous contacter</Link>
              <Link href="/recrutement" className="btn btn--outline">Rejoindre l&apos;équipe locale</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
