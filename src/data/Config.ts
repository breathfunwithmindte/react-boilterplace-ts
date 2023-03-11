interface AppConfig {
  apiBaseUrl: string;
  environment: 'production' | 'development';
  version: string;
  // Add any other properties you need here
}

const appConfig: AppConfig = {
  apiBaseUrl: 'https://api.example.com',
  environment: 'production',
  version: '1.0.0',
  // Add default values for any other properties you defined here
};

export default appConfig;