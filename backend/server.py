from flask import Flask
from flask.json import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# Trivial fixed implementation
# TODO update list with PUT request
heroes = [{ "id": 11, "name": 'Mr. Nice' }, { "id": 12, "name": 'Narco' }, { "id": 13, "name": 'Bombasto' }, { "id": 14, "name": 'Celeritas' }, { "id": 15, "name": 'Magneta' },  { 'id': 16, "name": 'RubberMan' },  { "id": 17, 'name': 'Dynama' },  { "id": 18, 'name': 'Dr IQ' },  { 'id': 19, 'name': 'Magma' },  { 'id': 20, 'name': 'Tornado' }];


@app.route("/heroes/<int:id>", methods=['GET', 'OPTIONS'])
def get_hero(id):
    return jsonify(next((item for item in heroes if item["id"] == id), "{Error: Empty}"))

@app.route("/heroes", methods=['GET', 'OPTIONS'])
def get_heroes():
    return jsonify(heroes)

app.run(debug = True)
