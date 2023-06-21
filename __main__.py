from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/table')
def table():
    return render_template('table.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    return jsonify(data)

@app.route('/shared_states')
def shared_states():
    return render_template('shared_states.html')

if __name__ == "__main__":
    app.run()
