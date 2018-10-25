# Descriptions:
This is a conference website for VES-5 and can be inherited for futre projects.

## Project Structure

```
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
│   ├── index.html           # Main HTML page container for app
├── src                      # Application source code
│   ├── index.js             # Application main file for React and Redux configurations/integrations
│   ├── App.js               # Application bootstrap and rendering Routes/Footer
│   ├── Layouts              # Components that dictate and encapsulated major page structure 
│   │   ├── index.js         # Main file of layout that will automatically exported
│   │   ├── Components       # Layout encapsulated Components
│   │   ├── Containers       # Layout encapsulated Containers
│   │   ├── module           # Layout encapsulated Redux actions, constants, and reducers
│   │   ├── styles           # Style directory for Layout
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── Routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   ├── store                # Redux-specific pieces
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```

## Installations
```bash
$ npm install
```

```bash
$ npm run start
```

## License

[MIT](https://tldrlegal.com/license/mit-license)