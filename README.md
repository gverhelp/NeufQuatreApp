# 🏕️ NeufQuatreApp – Site de l’unité Saint-Augustin

Ce projet est une application web développée pour l’unité scoute 94ème Saint-Augustin. Elle permet de présenter l’unité, ses sections, son agenda, des documents utiles, ainsi qu'une fonctionnalité de "Radio Camp" pour suivre les actualités des camps en temps réel.

---

## ✨ Fonctionnalités principales

- 🏡 Page d'accueil avec présentation de l'unité
- 📅 Agenda des événements
- 👥 Présentation des différentes sections et des chefs
- 📻 Module "Radio Camp" (blog/commentaires pendant les camps)
- 📄 Téléchargement de documents utiles

---

## ⚙️ Technologies utilisées

### Backend

- [Django](https://www.djangoproject.com/) & [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Pipenv](https://pipenv.pypa.io/)

### Frontend

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)

### Autres

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Nginx](https://nginx.org/)
- [AWS EC2](https://aws.amazon.com/)

---

## 🛠️ Développement local

### 1. Cloner le projet
```sh
 git clone https://github.com/ton-utilisateur/NeufQuatreApp.git
 cd NeufQuatreApp
```

### 2. Créer et configurer l'environnement :
   - Copier le fichier `.env.example` à la racine du projet et le renommer en `.env`.
   - Remplir les variables avec les bonnes valeurs.
   - Copier le fichier `.env.example` dans le dossier frontend et le renommer en `.env`.
   - Remplir la variable avec la valeur `http://localhost:8000/api`.

### 3. Lancer l'app en mode développement :
```sh
docker-compose -f docker-compose.yml up -d --build
```

### 4 Accéder à l'application :
   - API : `http://127.0.0.1:8000/api`
   - Admin Panel : `http://127.0.0.1:8000/api/admin`
   - App : `http://localhost:5173`

---

## 🏗️ Lancement en Production

### 1. Cloner le projet
```sh
 git clone https://github.com/ton-utilisateur/NeufQuatreApp.git
 cd NeufQuatreApp
```

### 2. Créer et configurer l'environnement :
   - Copier le fichier `.env.example` à la racine du projet et le renommer en `.env.prod`.
   - Remplir les variables avec les bonnes valeurs.
   - Copier le fichier `.env.example` dans le dossier frontend et le renommer en `.env.prod`.
   - Remplir la variable avec la valeur `http://localhost/api`.

### 3. Lancer l'app en mode développement :
```sh
docker-compose -f docker-compose.prod.yml up -d --build
```

### 4 Accéder à l'application :
   - API : `http://127.0.0.1/api`
   - Admin Panel : `http://127.0.0.1/api/admin`
   - App : `http://localhost`

---
Développé par Garreth Verhelpen

