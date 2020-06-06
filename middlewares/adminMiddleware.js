let admin = {
    ingreso: function (req,res,next) {
        let usersOk = ['Ada', 'Greta', 'Vim', 'Tim'];
        let adminIngresado = req.query.user;
        
        for (let i=0; i<usersOk.length; i++) {
            if (usersOk[i] == adminIngresado) {
                res.send('Hola admin: ' + usersOk[i]);
            }
        }
       
        res.send('No tienes los privilegios para ingresar');

    }
}

module.exports = admin;