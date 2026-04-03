import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Formations & Certifications - Imperium Safety Security',
  description: 'Formations & Certifications - Imperium Safety Security. TFP APS, CQP ASSA, formations cynophiles. Imperium Academy - programme de formation interne professionnel.',
};

export default function FormationsPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Notre engagement qualité</div>
          <h1>Formations &amp; <span>Certifications</span></h1>
          <p>Des formations certifiantes reconnues par l&apos;État pour faire de chaque agent Imperium un professionnel de la sûreté qualifié et opérationnel.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>Formations</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__visual fade-in-left">🎓</div>
            <div className="split__text fade-in-right">
              <div className="section__label">Bientôt disponible</div>
              <h2>Imperium Academy <span style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '20px', fontWeight: 700, verticalAlign: 'middle', marginLeft: '0.5rem' }}>Lancement prochain</span></h2>
              <p>Imperium Academy sera le programme de formation interne d&apos;Imperium Safety Security. Son lancement est prévu prochainement. Elle aura pour mission de former, certifier et accompagner l&apos;ensemble de nos agents, du recrutement initial jusqu&apos;aux formations de perfectionnement.</p>
              <p>Portée par des formateurs issus de la sûreté nationale, de la police et de la gendarmerie, Imperium Academy proposera des formations reconnues par le CNAPS et la DGAC, en présentiel et en e-learning.</p>
              <ul className="check-list mt-3">
                <li><span className="check-icon">✓</span>Agrément CNAPS en cours d&apos;obtention</li>
                <li><span className="check-icon">✓</span>Partenariats avec centres de formation CQP ASSA</li>
                <li><span className="check-icon">✓</span>Formations présentielles et e-learning prévues</li>
                <li><span className="check-icon">✓</span>Simulateurs d&apos;images EDS et exercices de crise</li>
                <li><span className="check-icon">✓</span>Disponible en métropole et dans les DOM-TOM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Premiers pas</div>
            <h2>Formations Initiales</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Les formations indispensables pour intégrer nos équipes et exercer les missions de sûreté.</p>
          </div>
          <div className="grid-3">
            <div className="card fade-in delay-1" style={{ padding: '2.2rem', borderTop: '4px solid var(--gold)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>TFP APS</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Titre à Finalité Professionnelle Agent de Prévention et de Sécurité</p>
              <p>Formation obligatoire pour exercer une activité privée de sécurité. Niveau 3 du cadre national des certifications professionnelles. Prépare aux fondamentaux de la surveillance et de la sécurité.</p>
              <ul className="feature-list mt-2">
                <li>Durée : 140 heures</li>
                <li>Modalité : présentiel</li>
                <li>Certification : CNAPS</li>
              </ul>
            </div>
            <div className="card fade-in delay-2" style={{ padding: '2.2rem', borderTop: '4px solid var(--gold)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✈</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>CQP ASSA</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Certificat de Qualification Professionnelle Agent de Sûreté et de Sécurité Aéroportuaire</p>
              <p>Formation spécialisée pour les missions aéroportuaires. Intègre le maniement des équipements de détection, les procédures ZSAR et les normes ECAC. Requis pour toute mission en zone réglementée.</p>
              <ul className="feature-list mt-2">
                <li>Durée : 280 heures</li>
                <li>Modalité : présentiel + pratique</li>
                <li>Certification : CPNEFP</li>
              </ul>
            </div>
            <div className="card fade-in delay-3" style={{ padding: '2.2rem', borderTop: '4px solid var(--gold)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🐕</div>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Formation Cynophile</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.8rem' }}>Maître-Chien Détection Explosifs et Stupéfiants</p>
              <p>Formation complète des maîtres-chiens incluant le dressage du chien, les techniques de détection et les procédures opérationnelles. Certification individuelle binôme maître-chien.</p>
              <ul className="feature-list mt-2">
                <li>Durée : 400 heures + dressage</li>
                <li>Modalité : présentiel + terrain</li>
                <li>Certification : CNAPS + DGAC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Maintien des compétences</div>
            <h2>Formations Continues</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-2">
            <div className="fade-in-left">
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>Recyclages Réglementaires</h3>
              <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Renouvellement Carte CNAPS</h4>
                <p style={{ fontSize: '0.9rem' }}>Formation de renouvellement obligatoire tous les 5 ans. 14 heures de formation couvrant les évolutions réglementaires, déontologie et actualisation des compétences.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Recyclage EDS Trimestriel</h4>
                <p style={{ fontSize: '0.9rem' }}>Sessions trimestrielles de 4 heures sur simulateur d&apos;images EDS. Maintien des taux de détection au-dessus des seuils réglementaires DGAC.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Recyclage Cynophile Annuel</h4>
                <p style={{ fontSize: '0.9rem' }}>40 heures de formation annuelle pour les maîtres-chiens. Maintien de la certification du binôme et entraînement sur nouvelles substances.</p>
              </div>
            </div>
            <div className="fade-in-right">
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>Formations Spécialisées</h3>
              <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Nouvelles Menaces</h4>
                <p style={{ fontSize: '0.9rem' }}>Sensibilisation aux nouvelles formes de terrorisme, drones de surveillance, CBRN-E et menaces cybernétiques liées aux infrastructures critiques.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Management d&apos;Équipe</h4>
                <p style={{ fontSize: '0.9rem' }}>Programme de formation des chefs d&apos;équipe et superviseurs. Gestion d&apos;équipe, communication de crise, reporting et coordination avec les autorités.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Premiers Secours (SST)</h4>
                <p style={{ fontSize: '0.9rem' }}>Formation Sauveteur Secouriste du Travail pour l&apos;ensemble du personnel. Recyclage bisannuel obligatoire. Gestes qui sauvent et défibrillation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre réseau</div>
            <h2>Partenariats de Formation</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Nos agents sont formés et certifiés via un réseau d&apos;organismes reconnus pour la délivrance des certifications officielles.</p>
          </div>
          <div className="partners-row fade-in">
            <span className="partner-badge">CNAPS</span>
            <span className="partner-badge">DGAC / DSAC</span>
            <span className="partner-badge">CPNEFP Sécurité Privée</span>
            <span className="partner-badge">AFPA</span>
            <span className="partner-badge">Académie de Police</span>
            <span className="partner-badge">GRETA</span>
            <span className="partner-badge">Groupement des Industries Françaises Aéronautiques</span>
            <span className="partner-badge">École Nationale de Sûreté</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            <div className="fade-in">
              <div className="stat__number" data-target="3">0</div>
              <div className="stat__label">Formations certifiantes proposées</div>
            </div>
            <div className="fade-in delay-1">
              <div className="stat__number" data-target="100">0</div>
              <div className="stat__label">% Agents certifiés CNAPS</div>
            </div>
            <div className="fade-in delay-2">
              <div className="stat__number" data-target="5">0</div>
              <div className="stat__label">Formateurs expérimentés</div>
            </div>
            <div className="fade-in delay-3">
              <div className="stat__number" data-target="7">0</div>
              <div className="stat__label">Territoires couverts</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Intégrez une équipe certifiée &amp; formée</h2>
            <p>Que vous soyez débutant ou professionnel expérimenté, Imperium Safety Security prend en charge votre montée en compétence. Imperium Academy arrive bientôt pour aller encore plus loin.</p>
            <div className="cta__btns">
              <Link href="/recrutement" className="btn btn--primary">Postuler maintenant</Link>
              <Link href="/contact" className="btn btn--outline">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
