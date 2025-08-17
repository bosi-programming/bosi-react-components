import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Paper } from './Paper';

describe('Paper', () => {
  it('should accept children', () => {
    render(<Paper>Content</Paper>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  it('should accept className', () => {
    render(<Paper className="test">Content</Paper>);
    expect(screen.getByText('Content')).toHaveClass('test');
  });
});
