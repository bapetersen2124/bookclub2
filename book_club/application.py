from flask import Flask

from flask_jwt_extended import JWTManager
from playhouse.flask_utils import FlaskDB
from flask_bcrypt import Bcrypt

DATABASE = 'postgresqlext://book_club:password@localhost:5432/book_club_dev'

app = Flask(__name__)
app.config.from_object(__name__)

bcrypt = Bcrypt(app)
db_wrapper = FlaskDB(app)
jwt = JWTManager(app)
