import type { Metadata } from 'next';
import Link from 'next/link';
import RecruitForm from '@/components/RecruitForm';

export const metadata: Metadata = {
  title: 'Recrutement - Imperium Safety Security',
  description: 'Recrutement - Imperium Safety Security. Offres d\'emploi : Agent de Sûreté Aéroportuaire, Chef d\'équipe, Agent cynophile, Superviseur. CDI, formation et évolution assurés.',
};

export default function RecrutementPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Rejoignez notre équipe</div>
          <h1>Construisez votre carrière avec <span>Imperium</span></h1>
          <p>Des opportunités de carrière dans la sûreté aéroportuaire et portuaire en France métropolitaine et dans les DOM-TOM. CDI, formation, évolution : tout commence ici.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>Recrutement</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Pourquoi nous rejoindre</div>
            <h2>Les Avantages Imperium</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-4">
            <div className="card card--feature fade-in delay-1">
              <div className="card__icon">📄</div>
              <h4>CDI à terme</h4>
              <p>Après une période de mission, intégration en CDI avec tous les avantages liés au statut de salarié permanent.</p>
            </div>
            <div className="card card--feature fade-in delay-2">
              <div className="card__icon">🎓</div>
              <h4>Formation Garantie</h4>
              <p>Prise en charge complète des formations initiales et continues. Prise en charge complète de vos formations initiales et continues via nos partenaires certifiants. Imperium Academy, notre programme interne, est en cours de lancement.</p>
            </div>
            <div className="card card--feature fade-in delay-3">
              <div className="card__icon">📈</div>
              <h4>Évolution de Carrière</h4>
              <p>Plan de carrière structuré : Agent, Chef d&apos;équipe, Superviseur, Responsable de site. Mobilité géographique possible.</p>
            </div>
            <div className="card card--feature fade-in delay-4">
              <div className="card__icon">🏥</div>
              <h4>Protection Sociale</h4>
              <p>Mutuelle d&apos;entreprise familiale, prévoyance, tickets restaurant, prime de nuit et prime de risque selon les postes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Nos offres actuelles</div>
            <h2>Postes Disponibles</h2>
            <div className="section__divider"></div>
          </div>

          <div className="job-card fade-in">
            <div className="job-card__info">
              <h4>Agent de Sûreté Aéroportuaire (H/F)</h4>
              <div className="job-meta">
                <span className="job-meta__tag">📍 Île-de-France (CDG / Orly)</span>
                <span className="job-meta__tag">📄 CDI</span>
                <span className="job-meta__tag">⏱ Temps complet</span>
                <span className="job-meta__tag">⭐ Plusieurs postes</span>
              </div>
            </div>
            <a href="#formulaire" className="btn btn--gold-outline btn--sm">Postuler</a>
          </div>

          <div className="job-card fade-in delay-1">
            <div className="job-card__info">
              <h4>Agent de Sûreté Aéroportuaire (H/F)</h4>
              <div className="job-meta">
                <span className="job-meta__tag">📍 Nice / Lyon / Marseille</span>
                <span className="job-meta__tag">📄 CDI</span>
                <span className="job-meta__tag">⏱ Temps complet</span>
                <span className="job-meta__tag">⭐ Plusieurs postes</span>
              </div>
            </div>
            <a href="#formulaire" className="btn btn--gold-outline btn--sm">Postuler</a>
          </div>

          <div className="job-card fade-in delay-2">
            <div className="job-card__info">
              <h4>Agent de Sûreté Aéroportuaire (H/F)</h4>
              <div className="job-meta">
                <span className="job-meta__tag">📍 DOM-TOM (Guadeloupe / Réunion)</span>
                <span className="job-meta__tag">📄 CDI</span>
                <span className="job-meta__tag">⏱ Temps complet</span>
                <span className="job-meta__tag">⭐ Urgents</span>
              </div>
            </div>
            <a href="#formulaire" className="btn btn--gold-outline btn--sm">Postuler</a>
          </div>

          <div className="job-card fade-in delay-3">
            <div className="job-card__info">
              <h4>Chef d&apos;Équipe de Sûreté (H/F)</h4>
              <div className="job-meta">
                <span className="job-meta__tag">📍 Toute France</span>
                <span className="job-meta__tag">📄 CDI</span>
                <span className="job-meta__tag">⏱ Temps complet</span>
                <span className="job-meta__tag">⭐ Expérience requise</span>
              </div>
            </div>
            <a href="#formulaire" className="btn btn--gold-outline btn--sm">Postuler</a>
          </div>

          <div className="job-card fade-in delay-4">
            <div className="job-card__info">
              <h4>Maître-Chien Détection (H/F)</h4>
              <div className="job-meta">
                <span className="job-meta__tag">📍 Île-de-France / PACA</span>
                <span className="job-meta__tag">📄 CDI</span>
                <span className="job-meta__tag">⏱ Temps complet</span>
                <span className="job-meta__tag">🐕 Certification CNAPS requise</span>
              </div>
            </div>
            <a href="#formulaire" className="btn btn--gold-outline btn--sm">Postuler</a>
          </div>

          <div className="job-card fade-in delay-5">
            <div className="job-card__info">
              <h4>Superviseur de Sûreté (H/F)</h4>
              <div className="job-meta">
                <span className="job-meta__tag">📍 Paris / Marseille / Nice</span>
                <span className="job-meta__tag">📄 CDI cadre</span>
                <span className="job-meta__tag">⏱ Temps complet</span>
                <span className="job-meta__tag">⭐ Expérience appréciée</span>
              </div>
            </div>
            <a href="#formulaire" className="btn btn--gold-outline btn--sm">Postuler</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Conditions d&apos;accès</div>
            <h2>Prérequis pour Rejoindre Nos Équipes</h2>
            <div className="section__divider"></div>
          </div>
          <div className="grid-3 fade-in">
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>📄</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Documents Obligatoires</h4>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Carte professionnelle CNAPS en cours de validité</li>
                <li><span className="check-icon">✓</span>Extrait de casier judiciaire vierge (bulletin n°2)</li>
                <li><span className="check-icon">✓</span>Titre d&apos;identité en cours de validité</li>
                <li><span className="check-icon">✓</span>Justificatif de domicile récent</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>✈</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Habilitations Aéroportuaires</h4>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Habilitation préfectorale (ou accepter l&apos;enquête)</li>
                <li><span className="check-icon">✓</span>CQP ASSA ou équivalent reconnu</li>
                <li><span className="check-icon">✓</span>Aptitude médicale à exercer</li>
                <li><span className="check-icon">✓</span>Disponibilité horaires décalés 3x8</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>⭐</div>
              <h4 style={{ color: 'var(--navy)', marginBottom: '0.8rem' }}>Qualités Recherchées</h4>
              <ul className="check-list">
                <li><span className="check-icon">✓</span>Rigueur et sens des responsabilités</li>
                <li><span className="check-icon">✓</span>Présentation soignée et professionnelle</li>
                <li><span className="check-icon">✓</span>Excellente maîtrise de soi</li>
                <li><span className="check-icon">✓</span>Aptitude au travail en équipe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Notre processus</div>
            <h2>Le Recrutement en 4 Étapes</h2>
            <div className="section__divider"></div>
          </div>
          <div className="steps fade-in">
            <div className="step">
              <div className="step__number">1</div>
              <h4>Candidature</h4>
              <p>Envoi de votre CV et lettre de motivation via notre formulaire en ligne ou par email. Réponse garantie sous 48h ouvrées.</p>
            </div>
            <div className="step">
              <div className="step__number">2</div>
              <h4>Entretien RH</h4>
              <p>Entretien téléphonique de 20 minutes avec notre équipe RH pour valider votre profil, vos motivations et vos disponibilités.</p>
            </div>
            <div className="step">
              <div className="step__number">3</div>
              <h4>Entretien Opérationnel</h4>
              <p>Rencontre avec un responsable opérationnel pour évaluer vos compétences techniques et votre connaissance du métier.</p>
            </div>
            <div className="step">
              <div className="step__number">4</div>
              <h4>Intégration</h4>
              <p>Accueil personnalisé, visite du site, présentation des équipes, remise des équipements et parcours d&apos;intégration interne personnalisé.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="formulaire">
        <div className="container">
          <div className="section__header fade-in">
            <div className="section__label">Candidature</div>
            <h2>Candidature Spontanée</h2>
            <div className="section__divider"></div>
            <p className="section__subtitle">Pas de poste disponible dans votre région ? Envoyez-nous votre candidature, nous revenons vers vous dès qu&apos;une opportunité se présente.</p>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }} className="fade-in">
            <RecruitForm />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="fade-in">
            <h2>Des questions sur le recrutement ?</h2>
            <p>Notre équipe RH est disponible pour répondre à toutes vos questions sur les postes, les conditions de travail et les prérequis.</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary">Contacter les RH</Link>
              <Link href="/formations" className="btn btn--outline">Découvrir nos formations</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
