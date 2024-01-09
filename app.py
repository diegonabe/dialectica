from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Datos que quieres pasar a la plantilla
    datos = {
        'titulo_pagina': 'Dialéctica - Página Principal',
        'mensaje_bienvenida': 'Bienvenido a Dialéctica',
        'contenido_pagina': 'Conéctate y aprende juntos.',
    }
    return render_template('index.html', **datos)

if __name__ == '__main__':
    app.run(debug=True)