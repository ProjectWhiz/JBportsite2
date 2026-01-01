# Portfolio Website

A modern portfolio website built with React frontend and Flask backend. Flask automatically serves the React application in production mode.

## Project Structure

```
jbportsite/
├── backend/               # Flask backend
│   ├── app.py            # Main Flask application
│   ├── config.py         # Configuration file
│   └── requirements.txt  # Python dependencies
├── frontend/             # React frontend
│   ├── public/           # Public assets
│   ├── src/              # React source code
│   │   ├── App.js        # Main App component
│   │   ├── App.css       # App styles
│   │   ├── index.js      # Entry point
│   │   └── index.css     # Global styles
│   └── package.json      # Node dependencies
├── .venv/                # Python virtual environment
├── run.bat               # Production run script (Windows)
├── run.sh                # Production run script (Unix/Linux)
├── dev.bat               # Development mode script (Windows)
└── README.md             # This file
```

## Features

- **React Frontend**: Modern, responsive UI built with React 18
- **Flask Backend**: RESTful API built with Flask 3.0
- **Automatic Serving**: Flask serves the React build automatically
- **Development Mode**: Run both servers separately for development
- **Production Mode**: Single command to build and serve

## Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```bash
cd c:\jbportsite
```

### 2. Backend Setup

The Python virtual environment has already been created and Flask dependencies are installed.

If you need to reinstall:

```bash
pip install -r backend\requirements.txt
```

### 3. Frontend Setup

Dependencies are already installed. If you need to reinstall:

```bash
cd frontend
npm install
cd ..
```

## Running the Application

### Development Mode (Recommended for Development)

Run both React and Flask servers simultaneously:

```bash
npm run start:all
```

This will:
- Start React dev server on http://localhost:3000
- Start Flask backend on http://localhost:5000
- React dev server has hot-reload enabled
- API proxy configured to Flask backend

### Production Mode

Build React and serve with Flask:

```bash
npm run build:start
```

Visit http://localhost:5000 to see the application.

### Available npm Scripts

- `npm run start:all` - Run both servers in development mode
- `npm run start:frontend` - Run only React dev server
- `npm run start:backend` - Run only Flask backend
- `npm run build` - Build React for production
- `npm run build:start` - Build React and start Flask
- `npm run install:all` - Install all dependencies (root + frontend)

## API Endpoints

- `GET /api/hello` - Test endpoint that returns a greeting message
- `GET /` - Serves the React application
- All other routes are handled by React Router

## Development

### Adding New API Endpoints

Edit [backend/app.py](backend/app.py) to add new Flask routes:

```python
@app.route('/api/your-endpoint')
def your_endpoint():
    return jsonify({'data': 'your data'})
```

### Adding New React Components

1. Create new component files in `frontend/src/components/`
2. Import and use in [frontend/src/App.js](frontend/src/App.js)

### Making API Calls from React

The frontend is configured with a proxy to the Flask backend:

```javascript
import axios from 'axios';

axios.get('/api/your-endpoint')
  .then(response => {
    console.log(response.data);
  });
```

## Customization

### Styling

- Global styles: [frontend/src/index.css](frontend/src/index.css)
- App styles: [frontend/src/App.css](frontend/src/App.css)

### Configuration

- Flask config: [backend/config.py](backend/config.py)
- React config: [frontend/package.json](frontend/package.json)

## Building for Production

To create a production build:

```bash
cd frontend
npm run build
cd ..
```

The build files will be in `frontend/build/` and Flask will automatically serve them.

## Troubleshooting

### Port Already in Use

If port 5000 or 3000 is already in use, you can change it:

- **Flask**: Edit `app.run(port=5000)` in [backend/app.py](backend/app.py)
- **React**: Set `PORT=3001` environment variable before running

### CORS Issues

CORS is already configured in Flask. If you encounter issues, check the CORS settings in [backend/app.py](backend/app.py).

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and reinstall:
   ```bash
   cd frontend
   rm -rf node_modules
   npm install
   ```

2. Clear React cache:
   ```bash
   npm start -- --reset-cache
   ```

## Technologies Used

- **Frontend**: React 18, Axios
- **Backend**: Flask 3.0, Flask-CORS
- **Styling**: Pure CSS with modern design
- **Build Tool**: Create React App

## License

This project is open source and available under the MIT License.

## Next Steps

1. Customize the portfolio content in [frontend/src/App.js](frontend/src/App.js)
2. Add your projects, skills, and contact information
3. Update styling to match your personal brand
4. Add database integration if needed
5. Deploy to a hosting platform (Heroku, AWS, Vercel, etc.)

## Support

For issues or questions, please open an issue in the repository.
