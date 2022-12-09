/* eslint-disable no-undef */
test('il n\'y a pas de I dans team', () => {
    expect('team').not.toMatch(/I/);
});

test('mais il y a "stop" dans Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});
