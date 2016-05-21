module.exports = {
    'Demo test Github' : function (browser) {
        var github = browser.page.githubPo();
        var username = browser.globals.data.username;
        var password = browser.globals.data.password;
        github.navigate()
            browser.waitForElementVisible('body', 3000);
            github.click('@signIn');
            browser.pause(2000);
            github.setValue('@username', username)
            .setValue('@password', password)
            .click('@submitButton');
            browser.pause(2000);
            github.assert.containsText('@shelfLead', 'Hello World');
            browser.end();
    }
};