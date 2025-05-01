FROM node:23-slim

WORKDIR /app
COPY . .

RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force

EXPOSE 5173

CMD ["npm", "run", "dev"]