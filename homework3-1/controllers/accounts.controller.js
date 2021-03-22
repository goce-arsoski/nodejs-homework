const {
  addAccount,
  getAllAccounts,
  findAccountById,
  editAccount,
  deleteAccount
} = require('../services/accounts.service');

exports.addAccount = (req, res, next) => {
  const accountInfo = req.body;
  const { username, password } = accountInfo;

  if (!username || !password) {
    res.status(400).send('Bad input parameters!');
  } else {
    addAccount(accountInfo)
      .then(() => {
        res.status(201).send('Account created successfully!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

exports.getAllAccounts = (req, res, next) => {
  getAllAccounts()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.getAccountById = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Invalid input parameter!');
  } else {
    getAccountById(id)
      .then(account => {
        if (!account) {
          res.status(404).send('Account not found!');
        } else {
          res.status(200).send(account);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

exports.editAccount = (req, res, next) => {
  const id = req.params.id;
  const accountInfo = req.body;
  if (!id || !accountInfo) {
    res.status(400).send('Missing input parameters!');
  } else {
    editAccount(id, accountInfo)
      .then(() => {
        res.status(200).send('Account edited successfully!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

exports.deleteAccount = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Missing ID!');
  } else {
    deleteAccount(id)
      .then(() => {
        res.status(200).send('Account Deleted successfully!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
