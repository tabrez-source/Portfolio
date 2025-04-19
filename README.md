# DevOps Portfolio Website

A professional portfolio website showcasing DevOps skills, projects, and services.

## Project Structure

```
Portfolio/
├── assets/
│   ├── css/          # CSS stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Image files
├── config/           # Configuration files
│   ├── php.ini       # PHP configuration
│   └── sendgrid_config.php  # Email service config
├── docker/           # Docker configuration
│   ├── Dockerfile    # Docker build instructions
│   ├── nginx.conf    # Nginx web server config
│   └── supervisord.conf  # Process supervisor config
├── includes/         # PHP processing files
│   └── contact.php   # Contact form handler
├── vendor/           # Composer dependencies
├── .env              # Environment variables (not tracked in git)
├── .gitignore        # Git ignore rules
├── composer.json     # PHP dependencies
├── index.html        # Main website
└── ShamshTabrezDevOps.pdf  # Resume
```

## Setup Instructions

### Local Development

1. Clone the repository
   ```
   git clone https://github.com/tabrez-source/Portfolio.git
   cd Portfolio
   ```

2. Install PHP dependencies
   ```
   composer install
   ```

3. Start local PHP server
   ```
   php -S localhost:8000
   ```

4. Access the website at http://localhost:8000

### Docker Deployment

1. Build the Docker image
   ```
   docker build -t devops-portfolio -f docker/Dockerfile .
   ```

2. Run the container
   ```
   docker run -p 80:80 devops-portfolio
   ```

3. Access the website at http://localhost

## Email Configuration

The contact form uses PHPMailer to send emails. To configure:

1. Update your Gmail credentials in `includes/contact.php`
2. Generate an App Password from your Google Account if using 2FA
3. Or, use environment variables for better security

## Features

- Responsive design
- Contact form with email integration
- Project showcase
- Skills and services sections
- Professional resume download

## Technologies Used

- HTML5/CSS3
- JavaScript
- PHP
- Docker
- Nginx
- Composer

## License

MIT License

## Contact

Shamsh Tabrez Shaikh - shaikhtabrez56@gmail.com 
