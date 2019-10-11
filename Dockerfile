FROM node:latest

WORKDIR /app

COPY app /app/api
COPY web /app/web

RUN cd /app/api; npm install
RUN cd /app/web; npm install

EXPOSE 80
CMD [ "./start.sh"]
