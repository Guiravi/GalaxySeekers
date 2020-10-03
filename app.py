from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html') 

@app.route("/tool", methods = ['GET'])
def tool():
	return render_template('tool.html')
