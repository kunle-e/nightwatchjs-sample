module.exports = {
    'Demo test Github no page objects or global data' : function (browser) {
        var username = "atentaten";
        var password = "656-34332-3223atentaten-netatneta$%^&#@#99323";
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