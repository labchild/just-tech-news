module.exports = {
    // helper format date obj to MM/DD/YYYY
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    // helper adds plural on comment and vote counts
    format_plural: (word, count) => {
        if (count !== 1) {
            return `${word}s`;
        }
        return word;
    },
    // helper to simplify url string
    format_url: url => {
        return url.replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    }
}