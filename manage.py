from book_club.application import db_wrapper

from book_club import models

db = db_wrapper.database

all_models = [
    models.UserAccount,
    models.Book,
    models.Reader,
]

db.drop_tables(all_models)

for m in all_models:
    m.create_table()

print("Postgres cleaned")
