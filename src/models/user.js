const _ = require('underscore');

/**
 * user model
 */
class user {
    constructor(data = {}) {
        this.data = data;
    }

    make(username) {
        let promise;

        promise = this.get(`users?username=${username}`);

        promise.then(user => {
            this.data = user.body;
            return promise;
        });

        return promise;
    }

    /*
     * properties
     */

    get id() {
        return this.data.id;
    }

    get name() {
        return this.data.name;
    }

    get state() {
        return this.data.state === "active" ? true : false;
    }

    get avatar_url() {
        return this.data.avatar_url;
    }

    get web_url() {
        return this.data.web_url;
    }
}
