FROM node:23-slim

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 5173
CMD ["npm", "run", "dev"]
