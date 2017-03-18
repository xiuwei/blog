// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://coderstalk.cn',
        mail: {
            from: 'xiuwei168@qq.com',
            transport: 'SMTP',
            host: 'smtp.qq.com',
            options: {
                port: 465,
                service: 'QQ',
                auth: {
                    user: 'xiuwei168@qq.com',
                    pass: 'gswfxejgifqicbci'
                }
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        // 七牛云存储
        storage: { 
            provider: 'qiniu',
            bucketname: 'blog',//在七牛云创建的bucketname
            ACCESS_KEY: '8BqaVpajNbZZVSyNvOCJAzk3IEk58Kpc23LHKKsi',//七牛云的ACCESS_KEY
            SECRET_KEY: 'flFd-wShwauOvim-sKXli199ngjjZQq7akNqALmg',//七牛云的SECRET_KEY
            root: '/blog/storage/',//自定义前缀，随便写也可以
            prefix: 'https://ompxmtln6.qnssl.com'//七牛云的域名
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',
        mail: {
            from: 'xiuwei168@qq.com',
            transport: 'SMTP',
            host: 'smtp.qq.com',
            options: {
                port: 465,
                service: 'QQ',
                auth: {
                    user: 'xiuwei168@qq.com',
                    pass: 'gswfxejgifqicbci'
                }
            }
        },
        // Example refferer policy
        // Visit https://www.w3.org/TR/referrer-policy/ for instructions
        // default 'origin-when-cross-origin',
        // referrerPolicy: 'origin-when-cross-origin',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // 七牛云存储
        storage: { 
            provider: 'qiniu',
            bucketname: 'blog',//在七牛云创建的bucketname
            ACCESS_KEY: '8BqaVpajNbZZVSyNvOCJAzk3IEk58Kpc23LHKKsi',//七牛云的ACCESS_KEY
            SECRET_KEY: 'flFd-wShwauOvim-sKXli199ngjjZQq7akNqALmg',//七牛云的SECRET_KEY
            root: '/blog/storage/',//自定义前缀，随便写也可以
            prefix: 'https://ompxmtln6.qnssl.com'//七牛云的域名
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            },
            pool: {
                afterCreate: function (conn, done) {
                    conn.run('PRAGMA synchronous=OFF;' +
                    'PRAGMA journal_mode=MEMORY;' +
                    'PRAGMA locking_mode=EXCLUSIVE;' +
                    'BEGIN EXCLUSIVE; COMMIT;', done);
                }
            },
            useNullAsDefault: true
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
