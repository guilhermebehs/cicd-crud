FROM node:stretch as builder

WORKDIR /home/app

COPY . .

RUN npm i

RUN npm t

FROM node:alpine

WORKDIR /home/app

COPY --from=builder /home/app/src /home/app/src

COPY --from=builder /home/app/package.json /home/app

RUN npm i --only=prod

EXPOSE 8080

CMD ["npm", "start"]