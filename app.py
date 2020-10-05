from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html') 

@app.route("/tool", methods = ['GET'])
def tool():
    radio_images = readLinkFile('radio.txt')
    microwave_images = readLinkFile('millimeter.txt')
    optical_images = readLinkFile('optical.txt')
    infrared_images = readLinkFile('infrared.txt')
    ultrav_images = readLinkFile('uv.txt')
    gammar_images = readLinkFile('gamma-ray.txt')
    xray_images = readLinkFile('x-ray.txt')

    return render_template('tool.html', micro_imgs = microwave_images, rad_imgs = radio_images, opt_imgs = optical_images, infr_imgs = infrared_images, uv_imgs = ultrav_images, gamma_imgs = gammar_images, xr_imgs = xray_images)

def readLinkFile(filename):
	file = open(filename, 'r')
	links = file.readlines()
	file.close()

	return links

