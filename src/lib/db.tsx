import mysql from "mysql2/promise";

const dbconection = {
    host: "Local instance MySQL80", 
    port: 3306,
    user: "root", 
    password: "12345", 
    database: "kebekwakdb", 
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0, 
};

export const db = mysql.createPool(dbconection);