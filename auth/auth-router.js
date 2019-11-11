const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
  let user = req.body;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username, passsword })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/hash', (req, res) => {
  let userInformation = req.body;
  // read a password from the body
  userInformation.passsword = hash;
  // hash the password using bcryptjs
  const hash = bcrypt.hashSync(userInformation.passsword, 8);
  // return it to the user in an object that looks like
  Users.add(userInformation)
  .then(saved => {
    res.status(201).json(saved);
  })
  .catch(error => {
    res.status(500).json(error);
  });
  
  // { password: 'original passsword', hash: 'hashed password' }
});

module.exports = router;
