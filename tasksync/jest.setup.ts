import '@testing-library/jest-dom';

// Mocking matchMedia
window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

// Mock the process.env
process.env = {
  ...process.env,
  GOOGLE_CLIENT_ID: 'mock-google-client-id',
  GOOGLE_CLIENT_SECRET: 'mock-google-client-secret',
};