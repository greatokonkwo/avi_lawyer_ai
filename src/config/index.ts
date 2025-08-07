const dotenv = require('dotenv');
const path = require('path');

// Load environment variables based on NODE_ENV
const loadEnv = () => {
  const env = process.env.NODE_ENV || 'development';
  
  // Load base .env file
  dotenv.config();
  
  // Load environment-specific file
  const envFile = path.join(process.cwd(), `env.${env}`);
  dotenv.config({ path: envFile });
  
  return env;
};

// Load environment
const env = loadEnv();

// Environment configuration
const config = {
  // Application
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_ENV: process.env.APP_ENV || 'dev',
  APP_NAME: process.env.APP_NAME || 'LegalDocs Automation Tool',
  APP_VERSION: process.env.APP_VERSION || '1.0.0',
  APP_PORT: parseInt(process.env.APP_PORT || '3000', 10),
  APP_HOST: process.env.APP_HOST || 'localhost',
  APP_URL: process.env.APP_URL || 'http://localhost:3000',

  // Database
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/legal_docs_dev',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  PROD_DATABASE_URL: process.env.PROD_DATABASE_URL,
  DB_POOL_MIN: parseInt(process.env.DB_POOL_MIN || '2', 10),
  DB_POOL_MAX: parseInt(process.env.DB_POOL_MAX || '10', 10),
  DB_POOL_IDLE_TIMEOUT: parseInt(process.env.DB_POOL_IDLE_TIMEOUT || '30000', 10),
  DB_POOL_ACQUIRE_TIMEOUT: parseInt(process.env.DB_POOL_ACQUIRE_TIMEOUT || '60000', 10),

  // Security
  JWT_SECRET: process.env.JWT_SECRET || 'dev-jwt-secret-key-change-in-production',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  GOOGLE_CLOUD_API_KEY: process.env.GOOGLE_CLOUD_API_KEY,

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  CORS_CREDENTIALS: process.env.CORS_CREDENTIALS === 'true',

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FORMAT: process.env.LOG_FORMAT || 'json',
  SENTRY_DSN: process.env.SENTRY_DSN,
  SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT || 'development',

  // External Services
  EMAIL_PROVIDER: process.env.EMAIL_PROVIDER || 'console',
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || 'LegalDocs AI',

  // Storage
  STORAGE_PROVIDER: process.env.STORAGE_PROVIDER || 'local',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  AWS_S3_BUCKET: process.env.AWS_S3_BUCKET || 'legal-docs-storage',

  // Document Processing
  DOCUMENT_PROCESSING_ENABLED: process.env.DOCUMENT_PROCESSING_ENABLED === 'true',
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10),
  ALLOWED_FILE_TYPES: process.env.ALLOWED_FILE_TYPES || 'pdf,doc,docx,txt',

  // Feature Flags
  AI_FEATURES_ENABLED: process.env.AI_FEATURES_ENABLED === 'true',
  AUTO_SAVE_ENABLED: process.env.AUTO_SAVE_ENABLED === 'true',
  REAL_TIME_COLLABORATION: process.env.REAL_TIME_COLLABORATION === 'true',
  ANALYTICS_ENABLED: process.env.ANALYTICS_ENABLED === 'true',

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),

  // Cache
  REDIS_URL: process.env.REDIS_URL,
  CACHE_TTL: parseInt(process.env.CACHE_TTL || '3600', 10),

  // Development
  DEBUG: process.env.DEBUG === 'true',
  HOT_RELOAD: process.env.HOT_RELOAD === 'true',
  ENABLE_SWAGGER: process.env.ENABLE_SWAGGER === 'true',
  ENABLE_GRAPHIQL: process.env.ENABLE_GRAPHIQL === 'true',
};

// Helper functions
const isDevelopment = () => config.NODE_ENV === 'development';
const isTesting = () => config.NODE_ENV === 'test';
const isProduction = () => config.NODE_ENV === 'production';

const getDatabaseUrl = () => {
  if (isTesting()) {
    return config.TEST_DATABASE_URL || config.DATABASE_URL;
  }
  if (isProduction()) {
    return config.PROD_DATABASE_URL || config.DATABASE_URL;
  }
  return config.DATABASE_URL;
};

const getCorsOrigins = () => {
  return config.CORS_ORIGIN.split(',').map((origin: string) => origin.trim());
};

const getAllowedFileTypes = () => {
  return config.ALLOWED_FILE_TYPES.split(',').map((type: string) => type.trim());
};

// Log environment info
console.log(`🌍 Environment loaded: ${env}`);
console.log(`📱 App: ${config.APP_NAME} v${config.APP_VERSION}`);
console.log(`🔧 Mode: ${config.NODE_ENV} (${config.APP_ENV})`);
console.log(`🌐 URL: ${config.APP_URL}:${config.APP_PORT}`);

// Export everything
module.exports = {
  config,
  isDevelopment,
  isTesting,
  isProduction,
  getDatabaseUrl,
  getCorsOrigins,
  getAllowedFileTypes,
}; 