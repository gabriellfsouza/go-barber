module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    tymestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
