from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html') 

@app.route("/tool", methods = ['GET'])
def tool():
    #radio_images = readLinkFile('radio.txt')
    microwave_images = readLinkFile('millimeter.txt')
    #optical_images = readLinkFile('optical.txt')
    #infrared_images = readLinkFile('infrared.txt')
    #uv_images = readLinkFile('uv.txt')
    #infrared_images = readLinkFile('radio.txt')

    return render_template('tool.html', , micro_imgs = microwave_images)

def readLinkFile(filename):
    file = open(filename, 'r')
    links = file.readlines()
    file.close()

    return links

