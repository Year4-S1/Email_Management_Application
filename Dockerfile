FROM node:16-alpine

RUN npm i -g typescript ts-node

WORKDIR /Email-Management_Application

COPY . .

RUN npm install

EXPOSE 8082

ENTRYPOINT [ "npm", "run" ]
CMD ["start" ]