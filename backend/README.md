# Backend - Django REST API

## Setup Instructions

1. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Setup environment variables (create .env file):

```env
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3  # For PostgreSQL: postgresql://user:password@localhost:5432/dbname
```

4. Run migrations:

```bash
python manage.py migrate
```

5. Create a superuser:

```bash
python manage.py createsuperuser
```

6. Run the development server:

```bash
python manage.py runserver
```

## API Documentation

- API Schema: http://localhost:8000/api/schema/
- Swagger UI: http://localhost:8000/api/docs/

## Common Issues and Solutions

### 1. Database Connection Issues

**Problem**: Unable to connect to PostgreSQL database
**Solution**:

- Ensure PostgreSQL is installed and running
- Check database credentials in .env file
- For development, you can use SQLite by setting `DATABASE_URL=sqlite:///db.sqlite3`

### 2. CORS Issues

**Problem**: Frontend unable to connect to backend API
**Solution**:

- Check CORS settings in settings.py
- Ensure frontend origin is listed in CORS_ALLOWED_ORIGINS
- Verify API endpoint URLs are correct

### 3. Channels/WebSocket Issues

**Problem**: WebSocket connection fails
**Solution**:

- Ensure Redis is installed and running (if using channels-redis)
- Check ASGI configuration in asgi.py
- Verify routing configuration

### 4. Static/Media Files

**Problem**: Static or media files not serving
**Solution**:

- Run `python manage.py collectstatic`
- Check STATIC_URL and MEDIA_URL in settings.py
- Ensure proper file permissions

## Project Structure

```
backend/
├── api/              # Main API app
├── core/             # Project settings
├── manage.py         # Django management script
├── requirements.txt  # Project dependencies
└── .env             # Environment variables (create this)
```

## Development Guidelines

1. **Code Style**:

   - Follow PEP 8 guidelines
   - Use descriptive variable names
   - Add docstrings to functions and classes

2. **API Endpoints**:

   - Use meaningful URL patterns
   - Implement proper authentication
   - Add request/response validation

3. **Testing**:

   - Write tests for new features
   - Run tests before commits

   ```bash
   python manage.py test
   ```

4. **Security**:
   - Keep dependencies updated
   - Don't commit sensitive data
   - Use environment variables

## Deployment Checklist

1. Set DEBUG=False in production
2. Configure proper database settings
3. Set up proper ALLOWED_HOSTS
4. Configure static file serving
5. Set up SSL/TLS
6. Configure proper logging
