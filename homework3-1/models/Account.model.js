const fs = require('fs/promises');

const accountReader = async () => {
  const rawData = await fs.readFile(process.env.ACCOUNTS_PATH);
  return JSON.parse(rawData);
};

const accountWriter = async content => {
  await fs.writeFile(process.env.ACCOUNTS_PATH, content);
};

module.exports = class Account {
  constructor() {}

  static getAccounts() {
    return accountReader();
  }

  static saveAccounts(accounts) {
    return accountWriter(JSON.stringify(accounts));
  }
};
