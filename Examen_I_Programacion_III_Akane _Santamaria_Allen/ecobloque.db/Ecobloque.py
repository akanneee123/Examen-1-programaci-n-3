import sqlite3

# Conectar o crear una nueva base de datos
conn = sqlite3.connect('eco_bloques.db')
cursor = conn.cursor()

# Crear la tabla de usuarios
cursor.execute('''
CREATE TABLE IF NOT EXISTS usuarios (
    cedula TEXT PRIMARY KEY,
    nombre TEXT NOT NULL,
    fecha_nacimiento TEXT NOT NULL,
    eco_bloques INTEGER DEFAULT 0
)
''')

# Algunos usuarios de prueba
cursor.execute('''
INSERT OR IGNORE INTO usuarios (cedula, nombre, fecha_nacimiento, eco_bloques)
VALUES 
    ('123456789', 'Juan Pérez', '1990-05-20', 12),
    ('987654321', 'María López', '1985-11-15', 20)
''')

# Confirmar los cambios
conn.commit()

# Cerrar la conexión
conn.close()

print("Base de datos y tabla creadas exitosamente.")
