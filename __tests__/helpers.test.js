const { format_date, format_plural, format_url } = require('../utils/helpers');

test('checks format_date() returns date string', () => {
    const date = new Date('2022-02-14 23:07:04');

    expect(format_date(date)).toBe('2/14/2022');
});

test('checks format_plural() correctly pluralizes point & comment', () => {
    
    expect(format_plural('Tiger', 2)).toBe('Tigers');
    expect(format_plural('Lion', 1)).toBe('Lion');
});

test('checks format_url returns simple url string',() => {
    const url1 = 'https://test.com/page/1?id=12345';
    const url2 = 'www.test.com/youraccount/';
    const url3 = 'http://www.test.net?q=houston';

    expect(format_url(url1)).toBe('test.com');
    expect(format_url(url2)).toBe('test.com');
    expect(format_url(url3)).toBe('test.net');
});