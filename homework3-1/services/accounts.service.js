const Account = require('../models/Account.model');
const uuid = require('uuid');

exports.addAccount = async accountInfo => {
  const allAccounts = await Account.getAccounts();
  const newAccountId = uuid.v4();
  const newAccount = {
    id: newAccountId,
    username: accountInfo.username,
    password: accountInfo.password,
  };

  allAccounts.push(newAccount);
  await Account.saveAccounts(allAccounts);
};

exports.getAllAccounts = async () => {
  const allAccounts = await Account.getAccounts();
  return allAccounts;
};

exports.getAccountById = async id => {
  const allAccounts = await Account.getAccounts();
  const foundAccount = allAccounts.find(account => account.id == id);
  return foundAccount;
};

exports.editAccount = async (id, accountInfo) => {
  const allAccounts = await Account.getAccounts();
  const foundAccountIndex = allAccounts.findIndex(account => account.id == id);
  if (!foundAccountIndex) {
    throw new Error('Account does not exist.');
  }
  allAccounts[foundAccountIndex] = {
    ...allAccounts[foundAccountIndex],
    username: accountInfo.username,
    password: accountInfo.password
  };

  await Account.saveAccounts(allAccounts);
};

exports.deleteAccount = async id => {
  const allAccounts = await Account.getAccounts();
  const updatedAccounts = allAccounts.filter(account => account.id != id);

  await Account.saveAccounts(updatedAccounts);
};
