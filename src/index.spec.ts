import add from '.';

describe('add', () => {
  it('returns the expected output', () => {
    const output = add(1, 3);

    expect(output).toEqual(4);
  });

  it.each`
    arg1 | arg2 | result
    ${1} | ${2} | ${3}
    ${2} | ${3} | ${5}
    ${3} | ${4} | ${7}
    ${4} | ${5} | ${9}
    ${5} | ${6} | ${11}
  `('adds $arg1 and $arg2 together correctly', ({ arg1, arg2, result }) => {
    expect(add(arg1, arg2)).toEqual(result);
  });
});
