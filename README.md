# DevOps Portfolio - Shamsh Tabrez Shaikh

A responsive personal portfolio website showcasing my DevOps skills, projects, and professional achievements.

## Features

- Responsive design for all device sizes
- Dark/Light mode toggle
- Contact form with SendGrid integration
- CSS animations and transitions
- Docker container support
- CI/CD pipeline with GitHub Actions

## Technologies Used

- HTML5, CSS3, JavaScript
- Bootstrap for responsive layout
- Typed.js for dynamic text effects
- SendGrid for email functionality
- Docker for containerization
- NGINX and PHP for server-side functionality

## Getting Started

### Prerequisites

- Node.js (for development tools)
- Docker (for containerized deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. For local development:
   ```bash
   # If using live-server or similar tool
   npx live-server
   ```

3. For Docker deployment:
   ```bash
   docker build -t portfolio .
   docker run -d -p 80:80 portfolio
   ```

## Deployment

This project includes GitHub Actions workflows for CI/CD pipeline:
- Automatically builds Docker image
- Runs tests to ensure site functionality
- Deploys to production when merged to main branch

## Environment Variables

The following environment variables are required for the contact form:
- `SENDGRID_API_KEY`: Your SendGrid API key
- `FROM_EMAIL`: Email address used to send messages
- `FROM_NAME`: Name displayed as the sender

## License

[MIT](LICENSE)

## Contact

Shamsh Tabrez Shaikh - shaikhshamshtabrez7@gmail.com
