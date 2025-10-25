from flask import Flask, render_template

app = Flask(__name__)

# Main Pages
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/crop')
def crop():
    return render_template('crop.html')

@app.route('/weather')
def weather():
    return render_template('weather.html')

@app.route('/guide')
def smart_guidance():
    return render_template('guide/index.html')

@app.route('/explore')
def explore():
    return render_template('explore/index.html')

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
