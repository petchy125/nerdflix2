import { render } from '@testing-library/react';

import SharedContainer from './shared-container';

describe('SharedContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedContainer />);
    expect(baseElement).toBeTruthy();
  });
});
