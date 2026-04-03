import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales - Imperium Safety Security',
  description: 'Mentions légales - Imperium Safety Security. Informations éditeur, hébergeur, RGPD, cookies et propriété intellectuelle.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero__content">
          <div className="hero__label">Informations légales</div>
          <h1>Mentions <span>Légales</span></h1>
          <p>Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.</p>
        </div>
        <div className="hero__pattern"></div>
      </section>

      <div className="breadcrumb">
        <div className="container">
          <ol>
            <li><Link href="/">Accueil</Link></li>
            <li>Mentions Légales</li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="legal-content">

            <h2>1. Éditeur du site</h2>
            <p>Le présent site internet est édité par :</p>
            <ul>
              <li><strong>Raison sociale :</strong> Imperium Safety Security SAS</li>
              <li><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
              <li><strong>Capital social :</strong> 250 000 €</li>
              <li><strong>Siège social :</strong> 45 Avenue de la Sécurité, 75008 Paris, France</li>
              <li><strong>RCS :</strong> Paris B XXX XXX XXX</li>
              <li><strong>SIRET :</strong> XXX XXX XXX XXXXX</li>
              <li><strong>Code APE/NAF :</strong> 8010Z – Activités de sécurité privée</li>
              <li><strong>Numéro TVA intracommunautaire :</strong> FR XX XXX XXX XXX</li>
              <li><strong>Agrément CNAPS :</strong> AUT-XXX-XXXX-XX-XXXX</li>
              <li><strong>Directeur de la publication :</strong> Jean-Marc Duval, Président Directeur Général</li>
              <li><strong>Email :</strong> <a href="mailto:contact@imperium-safety.fr">contact@imperium-safety.fr</a></li>
              <li><strong>Téléphone :</strong> +33 1 XX XX XX XX</li>
            </ul>

            <h2>2. Hébergeur</h2>
            <p>Ce site est hébergé par :</p>
            <ul>
              <li><strong>Hébergeur :</strong> OVH SAS</li>
              <li><strong>Siège social :</strong> 2 rue Kellermann, 59100 Roubaix, France</li>
              <li><strong>Site web :</strong> <a href="https://www.ovh.com" target="_blank" rel="noopener">www.ovh.com</a></li>
              <li><strong>Téléphone :</strong> +33 9 72 10 10 07</li>
            </ul>

            <h2>3. Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive d&apos;Imperium Safety Security SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
            <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable d&apos;Imperium Safety Security SAS.</p>
            <p>La marque « Imperium Safety Security » ainsi que les logos associés sont des marques déposées. Toute utilisation non autorisée constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.</p>

            <h2>4. Limitation de responsabilité</h2>
            <p>Imperium Safety Security SAS s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Imperium Safety Security SAS ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.</p>
            <p>Imperium Safety Security SAS décline toute responsabilité :</p>
            <ul>
              <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;</li>
              <li>Pour tous dommages résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations mises à disposition ;</li>
              <li>Pour tout dommage résultant de l&apos;utilisation du site ou de sites qui lui sont liés.</li>
            </ul>

            <h2>5. Liens hypertextes</h2>
            <p>Le site peut contenir des liens hypertextes vers d&apos;autres sites présents sur le réseau internet. Les liens vers des sites tiers sont fournis à titre informatif uniquement. Imperium Safety Security SAS n&apos;exerce aucun contrôle sur ces sites et n&apos;assume aucune responsabilité quant à leur contenu.</p>
            <p>La création de liens hypertextes vers le site d&apos;Imperium Safety Security est soumise à l&apos;accord préalable et écrit de la direction.</p>

            <h2 id="rgpd">6. Protection des données personnelles (RGPD)</h2>
            <h3>Responsable du traitement</h3>
            <p>Le responsable du traitement des données personnelles collectées via ce site est :<br />
            Imperium Safety Security SAS – 45 Avenue de la Sécurité, 75008 Paris<br />
            Contact DPO : <a href="mailto:dpo@imperium-safety.fr">dpo@imperium-safety.fr</a></p>

            <h3>Données collectées</h3>
            <p>Dans le cadre de l&apos;utilisation de ce site et de ses formulaires, Imperium Safety Security SAS est susceptible de collecter les données suivantes :</p>
            <ul>
              <li>Données d&apos;identification : nom, prénom, adresse email, numéro de téléphone</li>
              <li>Données professionnelles : nom de société, fonction</li>
              <li>Données de candidature : CV, lettre de motivation, expériences professionnelles</li>
              <li>Données de navigation : adresse IP, cookies de session</li>
            </ul>

            <h3>Finalités des traitements</h3>
            <ul>
              <li>Traitement des demandes de contact et de devis</li>
              <li>Gestion des candidatures et du recrutement</li>
              <li>Amélioration de l&apos;expérience utilisateur du site</li>
              <li>Respect des obligations légales et réglementaires</li>
            </ul>

            <h3>Base légale des traitements</h3>
            <ul>
              <li>Consentement de la personne concernée (formulaires de contact)</li>
              <li>Intérêt légitime d&apos;Imperium Safety Security (amélioration des services)</li>
              <li>Obligations légales (conservation de certaines données)</li>
            </ul>

            <h3>Durée de conservation</h3>
            <ul>
              <li>Données de contact : 3 ans à compter du dernier contact</li>
              <li>Données de candidature : 2 ans à compter du dernier contact avec le candidat</li>
              <li>Données de navigation : 13 mois maximum</li>
            </ul>

            <h3>Destinataires des données</h3>
            <p>Les données collectées sont destinées aux services internes d&apos;Imperium Safety Security SAS (RH, direction commerciale, direction opérationnelle). Elles ne sont pas cédées à des tiers à des fins commerciales sans consentement explicite.</p>

            <h3>Vos droits</h3>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>Pour exercer ces droits, contactez notre DPO à l&apos;adresse : <a href="mailto:dpo@imperium-safety.fr">dpo@imperium-safety.fr</a> ou par courrier à notre siège social. Vous avez également le droit d&apos;introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>.</p>

            <h3>Transferts hors UE</h3>
            <p>Aucun transfert de données personnelles vers des pays situés hors de l&apos;Union Européenne n&apos;est effectué sans les garanties appropriées requises par le RGPD.</p>

            <h2 id="cookies">7. Politique de Cookies</h2>
            <h3>Qu&apos;est-ce qu&apos;un cookie ?</h3>
            <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de votre visite sur notre site. Il permet au site de mémoriser certaines informations sur votre navigation.</p>

            <h3>Cookies utilisés sur ce site</h3>
            <ul>
              <li><strong>Cookies strictement nécessaires :</strong> Indispensables au fonctionnement du site (session, préférences de navigation). Ne peuvent pas être désactivés.</li>
              <li><strong>Cookies analytiques :</strong> Permettent de mesurer l&apos;audience du site et d&apos;analyser les comportements de navigation de manière anonymisée (ex: Google Analytics avec anonymisation d&apos;IP).</li>
              <li><strong>Cookies de préférences :</strong> Mémorisent vos préférences d&apos;affichage.</li>
            </ul>

            <h3>Gestion des cookies</h3>
            <p>Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies. La désactivation des cookies peut affecter le bon fonctionnement de certaines fonctionnalités du site.</p>
            <p>Pour paramétrer vos cookies, consultez l&apos;aide de votre navigateur :</p>
            <ul>
              <li>Google Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
              <li>Mozilla Firefox : Options &gt; Vie privée et sécurité</li>
              <li>Safari : Préférences &gt; Confidentialité</li>
              <li>Microsoft Edge : Paramètres &gt; Confidentialité, recherche et services</li>
            </ul>

            <h2>8. Droit applicable et juridiction compétente</h2>
            <p>Les présentes mentions légales sont soumises au droit français. En cas de litige relatif à l&apos;utilisation de ce site ou à son contenu, les tribunaux français seront seuls compétents, et notamment le Tribunal de Commerce de Paris pour les litiges commerciaux.</p>

            <h2>9. Médiation</h2>
            <p>En cas de litige non résolu, vous pouvez recourir à une médiation conventionnelle auprès du Centre de Médiation et d&apos;Arbitrage de Paris (CMAP) ou de tout médiateur de votre choix.</p>

            <h2>10. Mise à jour des mentions légales</h2>
            <p>Imperium Safety Security SAS se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement. Dernière mise à jour : Décembre 2024.</p>

          </div>
        </div>
      </section>
    </>
  );
}
