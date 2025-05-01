FROM node:23-slim AS builder

WORKDIR /app
COPY frontend/ .

RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force

RUN npm install && npm run build



FROM nginx:1.28-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Copier les fichiers React compilés dans le dossier que NGINX sert
COPY --from=builder /app/dist /usr/share/nginx/html