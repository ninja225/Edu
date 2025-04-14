# Educational Platform Project

A comprehensive educational platform built with Django and Next.js, designed to connect educators and students through interactive features, real-time collaboration, and secure content management.

## Technologies Used

### Backend

- Django 5.2
- Django REST Framework
- Django Channels (WebSocket)
- PostgreSQL/SQLite
- Redis (for Channels)
- Celery (Background Tasks)
- Django Elasticsearch DSL

### Frontend

- Next.js 14
- TypeScript
- Material-UI
- Redux Toolkit
- TailwindCSS
- Socket.io Client

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- npm/yarn
- Redis (optional, for WebSocket)
- PostgreSQL (optional, can use SQLite)

### Starting the Backend

1. Navigate to backend directory:

```bash
cd backend
```

2. Create and activate virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run migrations:

```bash
python manage.py migrate
```

5. Start the development server:

```bash
python manage.py runserver
```

Backend will be available at http://localhost:8000

### Starting the Frontend

1. Navigate to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Frontend will be available at http://localhost:3000

## Common Issues & Solutions

### Cross-Origin (CORS) Issues

If the frontend can't connect to the backend:

1. Check that both servers are running
2. Verify CORS settings in backend/core/settings.py
3. Ensure API URLs are correctly configured in frontend

### Database Setup

For PostgreSQL:

1. Install PostgreSQL
2. Create database
3. Update DATABASE_URL in backend/.env
4. Run migrations

For SQLite (development):

- No additional setup needed
- Uses db.sqlite3 file

### WebSocket Connection

If real-time features aren't working:

1. Ensure Redis is installed and running
2. Check WebSocket configuration in backend
3. Verify frontend WebSocket connection setup

## Development Workflow

1. **Backend Development**:

   - Create models in api/models.py
   - Define serializers in api/serializers.py
   - Add views in api/views.py
   - Update URLs in api/urls.py
   - Run migrations for model changes

2. **Frontend Development**:

   - Add new components in src/components
   - Create new pages in src/app
   - Update API client in src/utils/api.ts
   - Handle state management as needed

3. **Testing**:
   - Backend: python manage.py test
   - Frontend: npm run test
   - API: Check /api/docs/ for endpoints

## Project Structure Overview

```
AUE/
├── backend/                 # Django REST API
│   ├── api/                # Main API application
│   ├── core/               # Project settings
│   └── requirements.txt    # Python dependencies
├── frontend/               # Next.js application
│   ├── src/               # Source code
│   │   ├── app/          # Pages and layouts
│   │   └── utils/        # Utilities and hooks
│   └── package.json      # Node.js dependencies
└── README.md             # This file
```

## Contributing Guidelines

1. **Code Style**:

   - Backend: Follow PEP 8
   - Frontend: Follow TypeScript best practices
   - Use meaningful commit messages

2. **Branch Strategy**:

   - main: Production-ready code
   - develop: Development branch
   - feature/\*: New features
   - bugfix/\*: Bug fixes

3. **Pull Requests**:
   - Include description of changes
   - Add tests where applicable
   - Ensure all tests pass
   - Update documentation

## Deployment

### Backend Deployment:

1. Set DEBUG=False
2. Configure proper database
3. Set up static files serving
4. Configure ALLOWED_HOSTS
5. Set up SSL/TLS

### Frontend Deployment:

1. Set production environment variables
2. Build the application
3. Configure CDN for static assets
4. Set up proper caching
5. Configure CI/CD

## Additional Resources

- Backend Documentation: See backend/README.md
- Frontend Documentation: See frontend/README.md
- API Documentation: http://localhost:8000/api/docs/
- Product Requirements: See PRD.md
