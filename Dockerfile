FROM node:21.6.2-alpine3.18 as base
LABEL org.opencontainers.image.vendor="Superklok Labs"
LABEL org.opencontainers.image.authors="trev@superklok.com"
LABEL org.opencontainers.image.title="SuperklokLabs.com"
LABEL org.opencontainers.image.description="SuperklokLabs.com"
LABEL org.opencontainers.image.version="1.12.43"
LABEL org.opencontainers.image.created="2024-03-25"
LABEL org.opencontainers.image.url="https://hub.docker.com/r/superklok/superkloklabs"
LABEL org.opencontainers.image.source="https://github.com/Superklok/SuperklokLabs"
LABEL org.opencontainers.image.licenses="ISC"
ENV NODE_ENV=production
WORKDIR /usr/src/app
EXPOSE 80
ENV PORT 80
COPY package*.json ./
RUN npm i
COPY . .

FROM base as dev
ENV NODE_ENV=development
CMD ["npm", "start"]
USER node

FROM dev as test
RUN npm audit
USER root

FROM base as prod
RUN npm run build
CMD ["npm", "start"]
USER node