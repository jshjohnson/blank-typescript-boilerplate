import init from '.';

describe('init', () => {
  it('returns the expected output', () => {
    const output = init();

    expect(output).toEqual('Hello world!');
  });
});
