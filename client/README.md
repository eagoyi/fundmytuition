# FundMyTuition - React SPA

A modern, responsive React Single Page Application for FundMyTuition crowdfunding platform. This application provides a complete educational crowdfunding experience with campaign creation, discovery, and donation features.

## Features

### Authentication
- User registration and login with validation
- Social login integration (LinkedIn, Google)
- Redux-based auth state management
- Secure token handling with HTTP-only cookies

### Campaign Management
- Create, view, and filter campaigns
- Campaign progress tracking and funding visualization
- Category-based filtering and sorting
- Campaign detail pages with creator information

### User Experience
- Responsive design (mobile, tablet, desktop)
- Hero slider with auto-play animations
- Interactive forms with validation
- Real-time error handling
- Loading states and success messages

### Pages
- **Home**: Hero slider with featured campaigns
- **Campaigns**: Browse, filter, and search campaigns
- **Campaign Detail**: Individual campaign page with funding progress
- **About**: Platform mission and process information
- **Student Form**: Create campaign
- **Volunteer**: Support page and registration
- **Contact**: Contact form
- **Donate**: Donation gateway
- **FAQs**: Frequently asked questions
- **Privacy**: Privacy policy
- **Student Profile**: User dashboard

## Tech Stack

- **React 19.1.1**: Modern UI framework
- **React Router DOM 6**: Client-side routing
- **Redux Toolkit**: State management
- **Styled Components**: Component-scoped CSS
- **Axios**: API communication
- **React Icons**: Icon library
- **React Responsive Carousel**: Slider component

## Project Structure

```
client/src/
├── components/
│   ├── auth/          # Login/Register modals
│   ├── common/        # Header, Footer, Layout
│   ├── sliders/       # Hero slider, carousels
│   └── Layout.tsx
├── pages/             # All page components
├── store/
│   ├── index.ts       # Redux store configuration
│   └── slices/        # Auth, campaigns, user slices
├── services/
│   ├── api.ts         # Axios instance with interceptors
│   ├── authService.ts # Auth API calls
│   └── campaignService.ts # Campaign API calls
├── hooks/
│   ├── useAuth.ts     # Authentication hook
│   ├── useCampaigns.ts # Campaign management hook
│   └── useResponsive.ts # Responsive design hook
├── styles/
│   ├── GlobalStyle.tsx # Global styled-components
│   ├── theme.ts       # Theme configuration
│   └── globals.css    # Global CSS
├── App.tsx            # Main app component with routing
└── index.tsx          # Entry point
```

## Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update the API URL in `.env` if needed:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Development

Start the development server:
```bash
npm start
# or
yarn start
```

The app will open at `http://localhost:3000`

### Building

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

The build folder is ready to be deployed. The Express backend serves the build files.

## API Integration

The app expects the following API endpoints (already configured in Express backend):

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Campaigns
- `GET /api/campaigns` - Get all campaigns
- `GET /api/campaigns/:id` - Get campaign detail
- `POST /api/campaigns` - Create campaign
- `PUT /api/campaigns/:id` - Update campaign
- `DELETE /api/campaigns/:id` - Delete campaign

## State Management

The app uses Redux Toolkit with three main slices:

### Auth Slice
- `isLoggedIn`: Boolean login state
- `user`: User profile object
- `loginModalOpen`: Modal visibility state
- `registerModalOpen`: Modal visibility state

### Campaigns Slice
- `campaigns`: All campaigns array
- `filteredCampaigns`: Filtered campaigns
- `selectedCampaign`: Currently viewed campaign
- `loading`: Loading state
- `error`: Error message
- `filterCategory`: Active filter

### User Slice
- `profile`: User profile data
- `loading`: Loading state
- `error`: Error message

## Styling

The app uses styled-components with a centralized theme system:

- **Colors**: Primary (#224390), secondary (#606060), neutrals
- **Typography**: Open Sans font family
- **Breakpoints**: Mobile (480px), Tablet (768px), Desktop (1024px)
- **Spacing**: Consistent spacing scale (xs: 4px to xxl: 48px)

## Responsive Design

- Mobile-first approach
- Breakpoints at 480px (mobile), 768px (tablet), 1024px (desktop)
- Flexbox and CSS Grid layouts
- Responsive navigation with mobile menu toggle

## Performance Optimizations

- Code splitting with React.lazy
- Image optimization
- CSS-in-JS with styled-components for automatic critical CSS
- Lazy loading of carousel images
- Redux selector memoization

## Security

- JWT token handling with localStorage
- API request interceptor for token injection
- Response interceptor for token expiration handling
- CORS configuration on backend
- Input validation on all forms

## Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT

## Support

For issues or questions, please contact support@fundmytuition.com

## Deployment

The React app builds to a `build/` folder that the Express backend serves. Deploy both together:

1. Build the React app: `npm run build`
2. Start the Express server (it serves the React build)
3. Deploy to Vercel or your hosting provider

## Environment Variables

### Development
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

### Production
```
REACT_APP_API_URL=https://api.fundmytuition.com
REACT_APP_ENV=production
```

## Migration from HTML

This React app is a complete migration from the original HTML/jQuery application. See the [MIGRATION.md](../MIGRATION.md) file for details on:
- Architecture changes
- Technology replacements
- API integration
- Performance improvements
