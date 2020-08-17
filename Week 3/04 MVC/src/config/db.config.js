module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASS: '200801',
    DB: 'mvc',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}