module.exports = {
    getUserId(len) {
        if(len < 9) {
            return `0000${ len + 1 }`;
        } else if(len < 99 && len >= 9) {
            return `000${ len + 1 }`;
        } else if(len < 999 && len >= 99) {
            return `00${ len + 1 }`;
        } else if(len < 9999 && len >= 999) {
            return `0${ len + 1 }`;
        } else {
            return `${ len + 1 }`;
        }
    },

    getTicketId(len) {
        return `user${ len + 1 }`;
    }
}