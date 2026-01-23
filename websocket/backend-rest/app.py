from flask import Flask, jsonify
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/temperatura', methods=['GET'])
def getTemperatura():
    return jsonify({"valor": random.randint(20,50)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001, debug=True)