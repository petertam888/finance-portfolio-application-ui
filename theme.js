export const lightTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
    background: '#F3F4F6',
    text: '#1F2937',
    accent: '#10B981',
    card: '#FFFFFF',
    border: '#E5E7EB',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#60A5FA',
    secondary: '#3B82F6',
    background: '#111827',
    text: '#F9FAFB',
    accent: '#34D399',
    card: '#1F2937',
    border: '#374151',
  },
};
