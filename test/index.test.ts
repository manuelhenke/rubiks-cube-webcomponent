import { expect } from '@open-wc/testing';

describe('index', () => {
  it('mock', async () => {
    await expect('true').to.equals('true');
  });
});
