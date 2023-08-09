FROM node:lts
WORKDIR /srv/front-end

COPY . ./

# building the app
RUN npm i
# RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "run", "dev" ]