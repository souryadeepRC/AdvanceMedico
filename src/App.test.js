import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
describe('Testing App Component',()=> {
  test('renders learn react link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByText('Advance Medico');
    expect(linkElement).toBeInTheDocument();
  });
})

