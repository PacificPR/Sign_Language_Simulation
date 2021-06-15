from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)
app.config['UPLOAD_URL']='static/uploads/'

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload',methods=['POST'])
def upload():
    if request.method == "POST":
        f = request.files['file']
        f.save('./static/uploads/sign.jpg')
        return render_template('sign_uploaded.html')

if __name__ == '__main__':
    app.run(debug = True);

