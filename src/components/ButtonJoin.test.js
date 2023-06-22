import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ButtonJoin } from './ButtonJoin';

describe('ButtonJoin', () => {
  it('button "Join Now" exists on page and has link', () => {
    render(
      <BrowserRouter>
        <ButtonJoin />
      </BrowserRouter>
    );

    const buttonElement = screen.getByText('Join Now');

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement); 

    expect(window.location.pathname).toBe('/join');
  });
});

