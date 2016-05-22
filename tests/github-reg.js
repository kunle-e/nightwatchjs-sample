module.exports = {
    'Demo test Github no page objects or global data' : function (browser) {
        var username = "your-github-username";
        var password = "your-github-password";
        browser
            .url('https://github.com')
            .waitForElementVisible('body', 3000)
            .click('a[href="/login"]')
            .pause(2000)
            .setValue('#login_field', username)
            .setValue('#password', password)
            .click('input[type="submit"]')
            .pause(2000)
            .assert.containsText('.shelf-lead', 'Hello World')
        browser.end();
    }
};
