# Use PHP with Nginx as the base image
FROM php:8.2-fpm-alpine

# Install Nginx and other dependencies
RUN apk add --no-cache nginx supervisor

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Create necessary log directories
RUN mkdir -p /var/log/nginx && \
    chown -R www-data:www-data /var/log/nginx

# Configure Nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Configure PHP
COPY config/php.ini /usr/local/etc/php/conf.d/custom.ini

# Copy application files
COPY . /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Configure supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose port 80
EXPOSE 80

# Start supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"] 