// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineBank title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineBank/i);
    expect(titleElement).toBeInTheDocument();
});
