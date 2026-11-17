import supportImage from './public/images/support.jpg';
import networkImage from './public/images/reseau.jpg';
import hardwareImage from './public/images/materiel.jpg';
import cloudImage from './public/images/cloud.jpg';

export const brand = 'ITStart';
export const hero = {
  title: 'Votre informatique tourne. Vous vous occupez du reste.',
  text: 'Support, infrastructure et matériel pour les PME : un interlocuteur, des techniciens réactifs, des interventions suivies.',
};
export const services = [
  { title: 'Support et maintenance', text: 'Assistance à distance et sur site, résolution rapide des incidents.', image: supportImage },
  { title: 'Infrastructure et réseau', text: 'Installation, sécurisation et supervision de vos postes et serveurs.', image: networkImage },
  { title: 'Fourniture de matériel', text: 'Achat, configuration et déploiement de votre parc informatique.', image: hardwareImage },
  { title: 'Cloud et sauvegardes', text: 'Migration, messagerie, sauvegardes automatiques et plan de reprise.', image: cloudImage },
];
