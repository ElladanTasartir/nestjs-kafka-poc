FROM node:14

WORKDIR /home/app

COPY . ./

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:dev"]