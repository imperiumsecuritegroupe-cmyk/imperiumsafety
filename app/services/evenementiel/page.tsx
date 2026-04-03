import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sûreté Événementielle - Imperium Safety Security',
  description: 'Sûreté Événementielle - Imperium Safety Security. Sécurisation de concerts, compétitions sportives, sommets. Agents certifiés CNAPS pour vos grands événements.',
};

export default function EvenementielPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Service Spécialisé</div>
          <h1>Sûreté <span>Événementielle</span></h1>
          <p>Sécurisation professionnelle de vos grands événements : concerts, compétitions sportives, sommets institutionnels. Agents certifiés CNAPS et coordination avec les forces de l&apos;ordre.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>Sûreté Événementielle</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__visual fade-in-left">🎪</div>
            <div className="split__text fade-in-right">
              <div className="section__label">Grands événements</div>
              <h2>La sûreté événementielle, un enjeu majeur</h2>
              <p>Les rassemblements de masse constituent des cibles prioritaires pour les menaces terroristes et criminelles. Imperium Safety Security déploie des équipes expérimentées pour assurer la sécurisation complète de vos événements, de la phase de préparation jusqu&apos;à l&apos;évacuation finale du site.</p>
              <p>Notre approche événementielle intègre une analyse préalable des risques, l&apos;élaboration d&apos;un plan de sûreté spécifique, la coordination avec la préfecture et les forces de l&apos;ordre, ainsi qu&apos;un dispositif de commandement opérationnel dédié.</p>
              <ul className="feature-list mt-3">
                <li>Audit préalable du site et analyse des flux</li>
                <li>Élaboration du plan de sûreté (PSS)</li>
                <li>Coordination préfectorale et forces de l&apos;ordre</li>
                <li>Commandement opérationnel dédié (PC Sûreté)</li>
                <li>Gestion de crise et évacuation d&apos;urgence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos missions</div>
            <h2>Prestations Événementielles</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3">
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🔍</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Fouille Préalable du Site</h4>
              <p>Inspection complète du site en amont de l&apos;événement. Vérification des zones d&apos;accès public, des loges, sous-scènes, tribunes et zones techniques. Déploiement possible de l&apos;unité cynophile EDU.</p>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🔐</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Filtrage des Accès</h4>
              <p>Contrôle de l&apos;accès du public aux différentes zones : portiques de détection, palpation de sécurité, inspection des sacs et contrôle des billets. Gestion des flux et des queues.</p>
            </div>
            <div className="card fade-in delay-3" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>👥</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Gestion des Foules</h4>
              <p>Agents positionnés stratégiquement pour canaliser les flux, prévenir les mouvements de foule dangereux et intervenir rapidement en cas d&apos;incident. Formation aux techniques de désescalade.</p>
            </div>
            <div className="card fade-in delay-4" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🏠</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Protection des VIP</h4>
              <p>Dispositif de protection rapprochée pour les personnalités, artistes et officiels présents. Coordination avec les services de protection personnelle et les forces de l&apos;ordre.</p>
            </div>
            <div className="card fade-in delay-5" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📦</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Contrôle Fret &amp; Matériel</h4>
              <p>Inspection des véhicules d&apos;approvisionnement, du matériel technique et des livraisons. Contrôle des accréditations des prestataires et du personnel technique.</p>
            </div>
            <div className="card fade-in delay-1" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🚨</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.6rem' }}>Gestion de Crise</h4>
              <p>Procédures d&apos;évacuation d&apos;urgence, gestion des situations de crise (menace, incident médical de masse), liaison permanente avec le poste de commandement préfectoral.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre expérience</div>
            <h2>Types d&apos;Événements Sécurisés</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4 fade-in">
            <div className="card card--feature">
              <div className="card__icon">🎶</div>
              <h4>Concerts &amp; Festivals</h4>
              <p>De 5 000 à plusieurs centaines de milliers de spectateurs. Festivals de musique, concerts en salle et en plein air.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">⚽</div>
              <h4>Compétitions Sportives</h4>
              <p>Matchs de football, rugby, tennis. Grands prix automobiles. Compétitions olympiques et championnats internationaux.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🏛</div>
              <h4>Événements Institutionnels</h4>
              <p>Sommets diplomatiques, conférences internationales, cérémonies officielles et visites de délégations étrangères.</p>
            </div>
            <div className="card card--feature">
              <div className="card__icon">🎉</div>
              <h4>Événements Privés</h4>
              <p>Galas, cocktails d&apos;entreprise, soirées privées de grande envergure nécessitant un dispositif de sûreté professionnel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre track-record</div>
            <h2>Quelques Références</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Imperium Safety Security a assuré la sûreté d&apos;événements majeurs sur l&apos;ensemble du territoire français.</p>
          </div>
          <div className="grid-3 fade-in">
            <div className="card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>🎪</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.4rem' }}>Festival Plein Air</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>80 000 spectateurs • 3 jours • Sud de la France</p>
              <p style={{ fontSize: '0.9rem' }}>Déploiement de 250 agents, 4 équipes cynophiles, filtrage de 240 000 personnes sur 3 jours.</p>
            </div>
            <div className="card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>⚽</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.4rem' }}>Match International</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>60 000 spectateurs • Stade national</p>
              <p style={{ fontSize: '0.9rem' }}>Coordination avec le SDIS, la PAF et les forces de l&apos;ordre. Gestion de 8 accès simultanés avec portiques de détection.</p>
            </div>
            <div className="card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>🏛</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.4rem' }}>Sommet International</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '0.5rem' }}>Conférence diplomatique • Paris</p>
              <p style={{ fontSize: '0.9rem' }}>Protection de délégations officielles, coordination avec le GSPR et la DGSI. Fouille préalable complète du site.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Sécurisez votre prochain événement</h2>
            <p>Contactez nos experts en sûreté événementielle pour une analyse préalable de vos besoins et une proposition adaptée.</p>
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
