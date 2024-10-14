from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Función para conectarse a la base de datos SQLite
def conectar_db():
    conn = sqlite3.connect('eco_bloques.db')
    conn.row_factory = sqlite3.Row
    return conn

# Ruta para buscar un usuario por cédula
@app.route('/buscar_usuario', methods=['POST'])
def buscar_usuario():
    cedula = request.json.get('cedula')

    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM usuarios WHERE cedula = ?", (cedula,))
    usuario = cursor.fetchone()

    if usuario:
        return jsonify({
            "nombre": usuario["nombre"],
            "fecha_nacimiento": usuario["fecha_nacimiento"],
            "eco_bloques": usuario["eco_bloques"]
        })
    else:
        return jsonify({"error": "Cédula no encontrada"}), 404

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registro')
def registro():
    return render_template('registro.html')

@app.route('/acerca')
def acerca():
    return render_template('acerca.html')

@app.route('/premios')
def premios():
    return render_template('premios.html')

# Correr la app Flask
if __name__ == '__main__':
    app.run(debug=True)

