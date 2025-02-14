FROM node:20-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm i --force
ADD . .
ENV NODE_ENV=production
RUN npm run build
RUN npm prune --production --force
CMD ["npm", "start"]
EXPOSE 3000