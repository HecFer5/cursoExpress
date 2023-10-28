import { pool } from "../db.js";


export const ping =  async (req, res) =>{
    const [result] = await pool.query('select 10572 * 224515445678 as result')
    res.json(result[0])
}
