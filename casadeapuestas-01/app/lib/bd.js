import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'postgresapuesta.postgres.database.azure.com',
    database: 'postgres',
    password: 'Lodos1474*',
    port:5432,
});

export default pool;