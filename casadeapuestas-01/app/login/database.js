import pool from '../lib/db';

export default function DatabasePage({ currentTime }) {
    return (
        <div>
            <h1>Verificación de Conexión a Base de Datos</h1>
            <p>Última hora obtenida de la base de datos: {currentTime}</p>
        </div>
    );
}

export async function getServerSideProps() {
    let currentTime = 'No se pudo obtener la hora actual'; // Valor por defecto en caso de error

    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW() as now');
        currentTime = result.rows[0].now;
        client.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    } finally {
        // Siempre se debe liberar el cliente al terminar
        pool.end();
    }

    // Pasar los datos obtenidos a la página como props
    return { props: { currentTime } };
}