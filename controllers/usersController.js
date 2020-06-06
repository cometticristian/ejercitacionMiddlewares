

let usersController = {
    main: function (req, res, next) {
        res.send('respond with a resource');
    },
    admin: function (req, res, next) {
        res.send('admin');
    }
}

module.exports = usersController;