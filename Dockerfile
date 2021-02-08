FROM strapi/base

WORKDIR /my-path

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

CMD ["sh", "start.sh"]