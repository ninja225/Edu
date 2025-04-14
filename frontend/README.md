# Frontend - Next.js Application

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Setup environment variables (create .env.local):

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

3. Run the development server:

```bash
npm run dev
```

The app will be available at http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Common Issues and Solutions

### 1. API Connection Issues

**Problem**: Unable to connect to backend API  
**Solution**:

- Ensure backend server is running
- Check API URL in environment variables
- Verify CORS configuration in backend
- Check network tab for specific errors

### 2. Build Errors

**Problem**: TypeScript or build errors  
**Solution**:

- Run `npm run type-check` to find type issues
- Check import paths (case-sensitive)
- Verify tsconfig.json settings
- Clear `.next` folder and node_modules

### 3. Hydration Errors

**Problem**: React hydration errors in console  
**Solution**:

- Ensure server and client render the same content
- Use proper client/server components
- Add suppressHydrationWarning where needed
- Use proper loading states

### 4. State Management Issues

**Problem**: Components not updating or sharing state  
**Solution**:

- Check React component hierarchy
- Verify state management implementation
- Use React DevTools to debug
- Check for proper hook usage

## Project Structure

```
frontend/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # Reusable components
│   ├── utils/        # Utility functions
│   └── types/        # TypeScript types
├── public/           # Static files
└── .env.local        # Environment variables (create this)
```

## Development Guidelines

1. **Code Style**:

   - Follow TypeScript best practices
   - Use functional components
   - Implement proper error handling
   - Add JSDoc comments for complex logic

2. **Components**:

   - Keep components small and focused
   - Use proper prop types
   - Implement error boundaries
   - Add loading states

3. **Performance**:

   - Use proper image optimization
   - Implement code splitting
   - Minimize bundle size
   - Use proper caching strategies

4. **Testing**:
   - Write unit tests for components
   - Add integration tests
   - Test error scenarios
   - Verify responsive design

## Deployment Checklist

1. Set proper environment variables
2. Run and fix all type checks
3. Optimize images and assets
4. Run production build
5. Test all features
6. Configure proper caching
