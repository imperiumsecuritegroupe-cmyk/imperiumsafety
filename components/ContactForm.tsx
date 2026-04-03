'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormErrors {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  objet?: string;
  message?: string;
  rgpd?: string;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    prenom: '',
    nom: '',
    societe: '',
    email: '',
    telephone: '',
    objet: '',
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
    if (values.telephone && !/^[+\d\s\-()]{7,20}$/.test(values.telephone)) {
      newErrors.telephone = 'Numéro invalide.';
    }
    if (!values.objet) newErrors.objet = 'Veuillez sélectionner un objet.';
    if (!values.message.trim()) newErrors.message = 'Veuillez saisir un message.';
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
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h3>Envoyer un message</h3>
      {success && (
        <div className="form__success" style={{ display: 'block' }}>
          Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}
      <div className="form-row">
        <div className={`form-group${errors.prenom ? ' has-error' : ''}`}>
          <label htmlFor="c-prenom">Prénom <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="text" id="c-prenom" name="prenom" placeholder="Votre prénom" value={values.prenom} onChange={handleChange} required />
          {errors.prenom && <span className="form-error" style={{ display: 'block' }}>{errors.prenom}</span>}
        </div>
        <div className={`form-group${errors.nom ? ' has-error' : ''}`}>
          <label htmlFor="c-nom">Nom <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="text" id="c-nom" name="nom" placeholder="Votre nom" value={values.nom} onChange={handleChange} required />
          {errors.nom && <span className="form-error" style={{ display: 'block' }}>{errors.nom}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="c-societe">Société / Organisation</label>
        <input type="text" id="c-societe" name="societe" placeholder="Nom de votre organisation (facultatif)" value={values.societe} onChange={handleChange} />
      </div>
      <div className="form-row">
        <div className={`form-group${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="c-email">Email <span style={{ color: '#e74c3c' }}>*</span></label>
          <input type="email" id="c-email" name="email" placeholder="votre@email.fr" value={values.email} onChange={handleChange} required />
          {errors.email && <span className="form-error" style={{ display: 'block' }}>{errors.email}</span>}
        </div>
        <div className={`form-group${errors.telephone ? ' has-error' : ''}`}>
          <label htmlFor="c-tel">Téléphone</label>
          <input type="tel" id="c-tel" name="telephone" placeholder="+33 1 XX XX XX XX" value={values.telephone} onChange={handleChange} />
          {errors.telephone && <span className="form-error" style={{ display: 'block' }}>{errors.telephone}</span>}
        </div>
      </div>
      <div className={`form-group${errors.objet ? ' has-error' : ''}`}>
        <label htmlFor="c-objet">Objet de votre demande <span style={{ color: '#e74c3c' }}>*</span></label>
        <select id="c-objet" name="objet" value={values.objet} onChange={handleChange} required>
          <option value="">-- Sélectionner l&apos;objet --</option>
          <option value="devis">Demande de devis</option>
          <option value="information">Demande d&apos;information</option>
          <option value="recrutement">Candidature / Recrutement</option>
          <option value="partenariat">Partenariat</option>
          <option value="presse">Presse / Médias</option>
          <option value="autre">Autre</option>
        </select>
        {errors.objet && <span className="form-error" style={{ display: 'block' }}>{errors.objet}</span>}
      </div>
      <div className={`form-group${errors.message ? ' has-error' : ''}`}>
        <label htmlFor="c-message">Votre message <span style={{ color: '#e74c3c' }}>*</span></label>
        <textarea id="c-message" name="message" placeholder="Décrivez votre demande en détail : nature du site, localisation, type de prestation souhaitée, nombre d'agents estimé..." value={values.message} onChange={handleChange} required></textarea>
        {errors.message && <span className="form-error" style={{ display: 'block' }}>{errors.message}</span>}
      </div>
      <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
        <input type="checkbox" id="c-rgpd" name="rgpd" style={{ width: 'auto', marginTop: '0.2rem' }} checked={values.rgpd} onChange={handleChange} required />
        <label htmlFor="c-rgpd" style={{ fontWeight: 400, fontSize: '0.85rem', cursor: 'pointer' }}>
          J&apos;accepte que mes données soient traitées conformément à notre{' '}
          <Link href="/mentions-legales#rgpd" style={{ color: 'var(--gold)' }}>politique de confidentialité</Link>.
        </label>
      </div>
      {errors.rgpd && <span className="form-error" style={{ display: 'block' }}>{errors.rgpd}</span>}
      <button type="submit" className="btn btn--primary mt-3" style={{ width: '100%' }}>📧 Envoyer le message</button>
    </form>
  );
}
