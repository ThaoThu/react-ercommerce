FROM node:12.15.0

ENV REACT_APP_ENV development

WORKDIR /app

COPY ./ /app

RUN yarn install
RUN yarn build

#--------------------------------------
# Stage 2: Run app
#--------------------------------------
FROM nginx:1.13-alpine
COPY --from=0 /app/build /app/

EXPOSE 3000
COPY docker-entrypoint.sh /
CMD ["/docker-entrypoint.sh"]