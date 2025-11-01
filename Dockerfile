# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run", "dev"]


# Étape 1 : build
FROM node:20-alpine AS build
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer uniquement les dépendances nécessaires
RUN npm install

# Copier le reste du code source
COPY . .

# Définir la variable d'environnement par défaut
ENV NODE_ENV=production
ENV PORT=8080

# Exposer le port sur lequel ton app écoute
EXPOSE 8080

# Démarrer ton app
CMD ["npm", "start"]
