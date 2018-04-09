const User = require('../../database/models/UsersModel');
const bcrypt = require('bcrypt');

module.exports = {
  signUp: (req, res) => {
    bcrypt.genSalt(10)
      .then(salt => {
        bcrypt.hash(req.body.password, salt)
          .then(hashedPassword => {
            const user = new User({
              username: req.body.username,
              password: hashedPassword
            });

            user.save()
              .then(data => {
                console.log('signup data: ', data);
                res.status(200).send('Success');
              })
              .catch(error => {
                res.status(400).send('Signup Failed');
              });
          })
          .catch(err => {
            // 
          });
      })
      .catch(err => {
        // 
      });
  },

  login: (req, res) => {
    User.find({ username: req.params.username })
      .then(data => {
        if (data.length) {
          bcrypt.compare(req.params.password, data[0].password, (err, result) => {
            result ?
              res.status(202).send(data[0]._id) :
              res.status(200).send('Invalid Password');
          });
        } else {
          res.status(200).send('No user found');
        }
      })
      .catch(error => {
        res.status(400).send('Login Failed');
      });
  }
}