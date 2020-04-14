FROM node:13

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

EXPOSE 3000

COPY ./ /app/

CMD while true; do sleep 1; done