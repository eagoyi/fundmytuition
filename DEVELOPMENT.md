# Development Guide

This guide provides information for developers working on the FundMyTuition React application.

## Setup Instructions

### 1. Environment Setup

```bash
# Clone the repository
git clone https://github.com/eagoyi/fundmytuition.git
cd fundmytuition

# Install dependencies for both backend and frontend
npm install
cd client && npm install && cd ..
```

### 2. Environment Variables

Create `.env` files in root and `client/` directories:

**Root `.env`:**
```
NODE_ENV=development
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

**Client `.env`:**
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### 3. Start Development

```bash
# Terminal 1: Start Express backend (serves React build)
npm run dev

# Terminal 2: Start React dev server (hot reload)
cd client
npm start
```

The app will be available at:
- React app: `http://localhost:3000`
- API: `http://localhost:5000/api`

## Project Architecture

### Frontend (React)
```
client/src/
├── App.tsx                 # Main app with routing
├── index.tsx               # Entry point
├── components/             # Reusable UI components
│   ├── auth/              # Auth-related components
│   ├── common/            # Layout, Header, Footer
│   └── sliders/           # Carousel components
├── pages/                  # Full page components
├── store/                  # Redux store setup
│   └── slices/            # Redux slices (auth, campaigns, user)
├── services/              # API service layer
│   ├── api.ts             # Axios configuration
│   ├── authService.ts     # Auth API calls
│   └── campaignService.ts # Campaign API calls
├── hooks/                 # Custom React hooks
├── styles/                # Theme and global styles
└── types/                 # TypeScript interfaces
```

### Backend (Express)
```
src/
├── app.ts                 # Express app setup
├── server.ts              # Server entry point
├── routes/                # API endpoints
│   ├── auth.ts
│   └── campaigns.ts
├── controllers/           # Route handlers
├── middleware/            # Custom middleware
├── models/                # Database models
└── utils/                 # Utility functions
```

## Development Workflow

### Creating a New Page

1. Create component in `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`
3. Link from navigation in `components/common/Header.tsx`

```tsx
// Example page component
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const YourPage: React.FC = () => {
  return (
    <Container>
      <h1>Your Page</h1>
    </Container>
  );
};

export default YourPage;
```

### Creating a New Component

1. Create in `client/src/components/YourComponent.tsx`
2. Use styled-components for styling
3. Export from component barrel file if needed

```tsx
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px;
`;

interface YourComponentProps {
  title: string;
  onAction?: () => void;
}

const YourComponent: React.FC<YourComponentProps> = ({ title, onAction }) => {
  return (
    <StyledDiv>
      <h2>{title}</h2>
    </StyledDiv>
  );
};

export default YourComponent;
```

### Adding Redux State

1. Create new slice in `client/src/store/slices/yourSlice.ts`
2. Import and add to store in `client/src/store/index.ts`
3. Use in components with Redux hooks

```tsx
// yourSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YourState {
  data: string;
  loading: boolean;
}

const initialState: YourState = {
  data: '',
  loading: false,
};

const yourSlice = createSlice({
  name: 'your',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setData, setLoading } = yourSlice.actions;
export default yourSlice.reducer;
```

### Making API Calls

1. Define service in `client/src/services/yourService.ts`
2. Use with Redux dispatch or custom hooks

```tsx
// yourService.ts
import api from './api';

export const yourService = {
  getData: async () => {
    const response = await api.get('/your-endpoint');
    return response.data;
  },
};

// In component
const { data, loading } = useSelector((state) => state.your);

useEffect(() => {
  dispatch(setLoading(true));
  yourService.getData()
    .then(data => {
      dispatch(setData(data));
    })
    .finally(() => dispatch(setLoading(false)));
}, []);
```

## Code Style Guide

### Naming Conventions
- **Components**: PascalCase (MyComponent.tsx)
- **Files**: PascalCase for components, camelCase for utilities
- **Constants**: UPPER_SNAKE_CASE
- **Variables/Functions**: camelCase

### Component Structure
```tsx
// Imports
import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`...`;
const Title = styled.h1`...`;

// Types
interface MyComponentProps {
  prop1: string;
  prop2?: number;
}

// Component
const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2 }) => {
  return <Container><Title>{prop1}</Title></Container>;
};

// Export
export default MyComponent;
```

### Styling Best Practices
- Use `styled-components` for component styles
- Reference theme colors from `theme.ts`
- Use consistent spacing from spacing scale
- Mobile-first responsive design with breakpoints

```tsx
const Card = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.radius.md};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.md};
  }
`;
```

## Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run cypress
```

## Debugging

### React Developer Tools
- Install React DevTools browser extension
- Inspect component tree, props, and state

### Redux DevTools
- Install Redux DevTools Extension
- Track actions and state changes
- Time-travel debugging

### Console Logging
Use debug prefix for easy identification:
```tsx
console.log('[v0] Component loaded:', data);
console.error('[v0] Error occurred:', error);
```

## Performance Optimization

### Code Splitting
```tsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

### Memoization
```tsx
const MemoComponent = React.memo(MyComponent);

const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

### Redux Selectors
```tsx
const selectUserData = (state: RootState) => state.user.data;
const user = useSelector(selectUserData);
```

## Deployment

### Build for Production
```bash
cd client
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
Set production environment variables in:
- Vercel Dashboard → Project Settings → Environment Variables
- GitHub Secrets (for CI/CD)

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Redux State Not Updating
- Check action creators are dispatched correctly
- Verify reducer is processing action
- Check selector is returning correct state
- Use Redux DevTools to trace actions

### API Calls Failing
- Check backend is running on correct port
- Verify API URL in `.env`
- Check request headers in Network tab
- Review browser console for CORS errors

## Documentation

- [README.md](./client/README.md) - Project overview
- [MIGRATION.md](./MIGRATION.md) - HTML to React migration
- [API.md](./API.md) - API documentation (if available)

## Resources

- [React Docs](https://react.dev)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [React Router Docs](https://reactrouter.com)
- [Styled Components Docs](https://styled-components.com)

## Getting Help

1. Check existing issues on GitHub
2. Review component/service documentation
3. Ask in team Slack/Discord
4. Create an issue with detailed description
