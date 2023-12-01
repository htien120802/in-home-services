FROM mysql:8.0
ADD script.sql /docker-entrypoint-initdb.d/script.sql
RUN chmod -R 775 /docker-entrypoint-initdb.d

ARG MYSQL_ROOT_PASSWORD
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}