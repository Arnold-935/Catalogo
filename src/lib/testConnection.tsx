import { db } from "./db"; // Ajusta la ruta según la ubicación de tu archivo db.js

async function testConnection() {
    try {
        // Prueba básica: Realiza una consulta simple
        const [result] = await db.query("SELECT 1 AS resultado");
        console.log("Conexión exitosa:", result);
        process.exit(0); // Finaliza el script correctamente
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        process.exit(1); // Finaliza el script con error
    }
}

testConnection();