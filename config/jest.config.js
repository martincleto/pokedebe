{
  "transform": {".*": "<rootDir>/scripts/jest-preprocessor.js"},
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
    "app": "<rootDir>/src/core/app.jsx",
    "layout": "<rootDir>/src/core/layout.jsx",
    "Containers/AppContainer": "<rootDir>/src/containers/AppContainer.jsx",
    "Components/Detail": "<rootDir>/src/components/Detail.jsx",
    "Components/Footer": "<rootDir>/src/components/Footer.jsx",
    "Components/Header": "<rootDir>/src/components/Header.jsx",
    "Components/Search": "<rootDir>/src/components/Search.jsx",
    "Core/App": "<rootDir>/src/core/app.jsx"
  }
}
