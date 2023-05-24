# docker build -t my-web-server .
# docker run --rm -d -p 1234:80 --name mycontainer my-web-server
FROM httpd:2.4.54
COPY index.html /usr/local/apache2/htdocs
EXPOSE 80
CMD ["httpd-foreground"]