from book_club import helpers

from book_club.models import *

print('Seeding test data')

UserAccount.create(
    email='brooke@example.com',
    password_hash=helpers.hash_password('brooke')
)
UserAccount.create(
    email='chris@example.com',
    password_hash=helpers.hash_password('chris')
)
UserAccount.create(
    email='ernest@example.com',
    password_hash=helpers.hash_password('ernest')
)
UserAccount.create(
    email='jana@example.com',
    password_hash=helpers.hash_password('jana')
)

Book.create(
    title="Ender's Game",
    authors="Orson Scott Card"
)
Book.create(
    title="Cloud Atlas",
    authors="David Mitchell"
)
Book.create(
    title="The Bible",
    authors="God"
)
Book.create(
    title="Butt Sniffing for Dummies",
    authors="Bark Twain"
)
Book.create(
    title="Rooster Bar",
    authors="John Grisham"
)

Reader.create(
    user=1,
    book=2,
    status='read'
)
Reader.create(
    user=1,
    book=5
)
Reader.create(
    user=2,
    book=1,
    status='read'
)
Reader.create(
    user=2,
    book=2
)
Reader.create(
    user=3,
    book=3
)
Reader.create(
    user=3,
    book=4,
    status='read'
)
Reader.create(
    user=4,
    book=3
)
Reader.create(
    user=4,
    book=5
)

print('Test data seeded')
