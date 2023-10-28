import { pool } from "../db.js";

/// CONSULTAR REGISTROS
export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch {
    return res.status(500).json({ message: "hay un error" });
  }
};

///////////////consultar por un solo registro
export const getUnEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({ message: "registro no encontrado" });
    res.json(rows);
  } catch {
    return res.status(500).json({ message: "hy un error" });
  }
};

///// CREAR REGISTRO
export const postEmpleados = async (req, res) => {
  try {
    const { nombre, salario } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO  empleados (nombre, salario) VALUES (?, ?) ",
      [nombre, salario]
    );
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });

    console.log("");
  } catch {
    return res.status(500).json({ message: "hy un error" });
  }
};

//////////////////////Editar un registro

export const putEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    const [result] = await pool.query(
      "UPDATE empleados SET nombre = IFNULL(?, nombre),salario= IFNULL(?, salario) WHERE id = ?",
      [nombre, salario, id]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "registro no encontrado" });
    } else {
      res.send("registro actualizado");
    }
  } catch {
    return res.status(500).json({ message: "hy un error" });
  }
};

/////////////Eliminar un registro

export const deleteEmpleados = async (req, res) => {
  const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0) {
    return res.status(404).json({ message: "registro no encontrado" });
  } else {
    res.send("reistro eliminado");
  }
};
