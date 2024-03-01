FROM node:alpine

RUN apk add --no-cache git
WORKDIR /usr/src
RUN git clone https://github.com/XaverLeet/aplic.git app
WORKDIR /usr/src/app
RUN npm install

CMD ["npm", "run", "start"]
