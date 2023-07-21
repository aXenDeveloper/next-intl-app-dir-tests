import { render } from '@testing-library/react';
import { Button } from './Button';
import { RootMock } from '../__mocks__/RootMock';
import { expect, describe, it } from 'vitest';

describe('Button', () => {
  it('renders a button with the correct text', () => {
    const { getByText } = render(<Button />, {
      wrapper: RootMock
    });
    expect(getByText('Click me')).toBeDefined();
  });
});
