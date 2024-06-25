import bcrypt from 'bcryptjs';
import pool from './lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { usuario, contraseña } = req.body;

    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM usuarios WHERE usuario = $1', [usuario]);
      client.release();

      if (result.rows.length > 0) {
        const user = result.rows[0];
        const validPassword = await bcrypt.compare(contraseña, user.contraseña);

        if (validPassword) {
          // Aquí puedes generar un token de sesión o JWT
          res.status(200).json({ message: 'Login exitoso' });
        } else {
          res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}