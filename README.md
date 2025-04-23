# 94ème Saint-Augustin - Site Web de l'Unité Scoute

## Description
Ce projet est le site officiel de l'unité scoute **94ème Saint-Augustin**. Il permet d'afficher des informations sur l'unité, les différentes sections, les événements, ainsi que les staffs. Il offre également une interface intuitive pour les parents et les membres de l'unité.

## Technologies utilisées
### Backend : Django
- **Framework** : Django
- **Base de données** : PostgreSQL
- **ORM** : Django ORM
- **API** : Django Rest Framework (DRF)
- **Gestion des dépendances** : Pipenv
- **Déploiement** : Docker, Docker Compose, AWS EC2

### Frontend : React + TypeScript
- **Framework** : React (avec TypeScript)
- **Build Tool** : Vite
- **Styling** : Bootstrap, React-Bootstrap
- **Routing** : React Router
- **Gestion des requêtes API** : Axios
- **Animations** : Framer Motion

## Fonctionnalités principales
- **Affichage des informations des sections** (Baladins, Louveteaux, Guides, Scouts, Pionniers, Unité)
- **Carrousel d'images** pour chaque section
- **Présentation des staffs** avec photo, totem et description
- **Système de navigation fluide et dynamique** avec React Router
- **Backend robuste** avec Django et PostgreSQL
- **Déploiement via Docker et AWS EC2** pour une mise en production efficace

## Installation et exécution
### Prérequis
- **Node.js** (>= 18)
- **Python** (>= 3.10)
- **Pipenv**
- **Docker & Docker Compose**

### Installation Backend
```sh
cd backend
pipenv install
python manage.py migrate
python manage.py runserver
```

### Installation Frontend
```sh
cd frontend
npm install
npm run dev
```

### Exécution avec Docker Compose
```sh
docker-compose up --build
```

## Déploiement
Le projet sera conçu pour être déployé sur **AWS EC2** avec Docker. La base de données PostgreSQL est gérée via un conteneur Docker ou un service cloud externe.


---
Développé par Garreth Verhelpen

