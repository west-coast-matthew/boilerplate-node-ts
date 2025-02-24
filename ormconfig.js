{

  "type": "mysql",

  "host": "localhost",

  "port": 3306,

  "username": "your_mysql_username",

  "password": "your_mysql_password",

  "database": "your_database_name",

  "entities": ["path/to/your/entities/**/*.ts"], // Path to your entity files

  "synchronize": true,  // Optional: Automatically create tables on startup (not recommended in production)

  "logging": false  // Optional: Enable logging for debugging

}

