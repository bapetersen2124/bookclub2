import arrow
import peewee

from playhouse import postgres_ext

from book_club.application import db_wrapper


class UserAccount(db_wrapper.Model):
    email = peewee.TextField(unique=True)
    password_hash = peewee.TextField()
    ctime = peewee.DateTimeField(default=lambda: arrow.utcnow().naive)
    profile = postgres_ext.BinaryJSONField(default=lambda: {})
    settings = postgres_ext.BinaryJSONField(default=lambda: {})


class Book(db_wrapper.Model):
    isbn = peewee.BigIntegerField(unique=True, null=True)
    title = peewee.TextField()
    authors = peewee.TextField()
    added_date = peewee.DateTimeField(default=lambda: arrow.utcnow().naive)
    meta = postgres_ext.BinaryJSONField(default=lambda: {})

    class Meta:
        indexes = (
            (('title', 'authors'), True),
        )


class Reader(db_wrapper.Model):
    user = peewee.ForeignKeyField(UserAccount, backref='readers')
    book = peewee.ForeignKeyField(Book, backref='readers')
    status = peewee.CharField(max_length=20, default='unread')
    rating = peewee.SmallIntegerField(null=True)
    added_date = peewee.DateTimeField(default=lambda: arrow.utcnow().naive)
    read_date = peewee.DateTimeField(null=True)
    meta = postgres_ext.BinaryJSONField(default=lambda: {})
