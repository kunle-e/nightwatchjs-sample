/**
 * Page object for github test
 */
module.exports  = {

    url: 'https://github.com/',

    elements: {

        signIn: {

            selector: 'a[href="/login"]'
        },

        username: {

            selector: '#login_field'
        },

        password: {

            selector: '#password'

        },
        submitButton: {

            selector: 'input[type="submit"]'
        },
        shelfLead: {

            selector: '.shelf-lead'
        }
    }
}
