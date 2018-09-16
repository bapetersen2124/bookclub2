from book_club.application import bcrypt


def hash_password(password):
    return bcrypt.generate_password_hash(password)


def check_password(pw_hash, password):
    return bcrypt.check_password_hash(pw_hash, password)
