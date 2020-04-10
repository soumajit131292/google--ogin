FROM nginx:1.17.8
RUN rm -v /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/default.conf
ADD gzip.conf /etc/nginx/conf.d/
ADD build /usr/share/nginx/html/