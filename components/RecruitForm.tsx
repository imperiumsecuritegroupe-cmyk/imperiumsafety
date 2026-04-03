'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormErrors {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  poste?: string;
  region?: string;
  rgpd?: string;
}

export default function RecruitForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    poste: '',
    region: '',
    message: '',
    rgpd: false,
  });

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!values.prenom.trim()) newErrors.prenom = 'Ce champ est obligatoire.';
    if (!values.nom.trim()) newErrors.nom = 'Ce champ est obligatoire.';
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Adresse email invalide.';
    }
    if (!values.telephone.trim() || !/^[+\d\s\-()]{7,20}$/.test(values.telephone)) {
      newErrors.telephone = 'Numéro de téléphone invalide.';
    }
    if (!values.poste) newErrors.poste = 'Veuillez sélectionner un poste.';
    if (!values.region) newErrors.region = 'Veuillez sélectionner une région.';
    if (!values.rgpd) newErrors.rgpd = 'Vous devez accepter la politique de confidentialité.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate data-validate>
      {success && (
        <div className="form__success" style={{ display: 'block' }}>
          Votre candidature a bien été reçue. Nous vous contacterons dans les plus brefs délais.
        </div>
      )}
      <div className="form-row">
        <div className={`form-group${errors.prenom ? ' has-error' : ''}`}>
          <label htmlFor="prenom">Prénom <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" value={values.prenom} onChange={handleChange} required />
          {errors.prenom && <span className="form-error" style={{ display: 'block' }}>{errors.prenom}</span>}
        </div>
        <div className={`form-group${errors.nom ? ' has-error' : ''}`}>
          <label htmlFor="nom">Nom <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="text" id="nom" name="nom" placeholder="Votre nom de famille" value={values.nom} onChange={handleChange} required />
          {errors.nom && <span className="form-error" style={{ display: 'block' }}>{errors.nom}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="email">Email <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="email" id="email" name="email" placeholder="votre@email.fr" value={values.email} onChange={handleChange} required />
          {errors.email && <span className="form-error" style={{ display: 'block' }}>{errors.email}</span>}
        </div>
        <div className={`form-group${errors.telephone ? ' has-error' : ''}`}>
          <label htmlFor="telephone">Téléphone <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="tel" id="telephone" name="telephone" placeholder="+33 6 XX XX XX XX" value={values.telephone} onChange={handleChange} required />
          {errors.telephone && <span className="form-error" style={{ display: 'block' }}>{errors.telephone}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group${errors.poste ? ' has-error' : ''}`}>
          <label htmlFor="poste">Poste Souhaité <span style={{ color: '#e74c3c' }}>*</span></label>
          <select id="poste" name="poste" value={values.poste} onChange={handleChange} required>
            <option value="">-- Sélectionner un poste --</option>
            <option value="agent-surete">Agent de Sûreté Aéroportuaire</option>
            <option value="agent-portuaire">Agent de Sûreté Portuaire</option>
            <option value="chef-equipe">Chef d&apos;Équipe</option>
            <option value="superviseur">Superviseur de Sûreté</option>
            <option value="maitre-chien">Maître-Chien</option>
            <option value="autre">Autre</option>
          </select>
          {errors.poste && <span className="form-error" style={{ display: 'block' }}>{errors.poste}</span>}
        </div>
        <div className={`form-group${errors.region ? ' has-error' : ''}`}>
          <label htmlFor="region">Région Souhaitée <span style={{ color: '#e74c3c' }}>*</span></label>
          <select id="region" name="region" value={values.region} onChange={handleChange} required>
            <option value="">-- Sélectionner une région --</option>
            <option value="idf">Île-de-France</option>
            <option value="paca">PACA</option>
            <option value="auvergne-ra">Auvergne-Rhône-Alpes</option>
            <option value="naq">Nouvelle-Aquitaine</option>
            <option value="occitanie">Occitanie</option>
            <option value="pays-loire">Pays de la Loire</option>
            <option value="grand-est">Grand Est</option>
            <option value="dom-tom">DOM-TOM</option>
            <option value="mobile">Mobile (toute France)</option>
          </select>
          {errors.region && <span className="form-error" style={{ display: 'block' }}>{errors.region}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Lettre de motivation / Message</label>
        <textarea id="message" name="message" placeholder="Parlez-nous de votre expérience, de vos certifications et de vos motivations pour rejoindre Imperium Safety Security..." value={values.message} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="cv">Curriculum Vitae (PDF, Word – max. 5 Mo)</label>
        <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" />
      </div>
      <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem' }}>
        <input type="checkbox" id="rgpd" name="rgpd" style={{ width: 'auto', marginTop: '0.2rem' }} checked={values.rgpd} onChange={handleChange} required />
        <label htmlFor="rgpd" style={{ fontWeight: 400, fontSize: '0.85rem', cursor: 'pointer' }}>
          J&apos;accepte que mes données personnelles soient traitées par Imperium Safety Security dans le cadre de ma candidature, conformément à notre{' '}
          <Link href="/mentions-legales#rgpd" style={{ color: 'var(--gold)' }}>politique de confidentialité</Link>.
        </label>
      </div>
      {errors.rgpd && <span className="form-error" style={{ display: 'block' }}>{errors.rgpd}</span>}
      <button type="submit" className="btn btn--primary mt-3" style={{ width: '100%' }}>Envoyer ma candidature</button>
    </form>
  );
}
