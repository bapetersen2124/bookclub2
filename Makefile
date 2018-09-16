#!make

run:
	@FLASK_APP=book_club/api.py \
	FLASK_DEBUG=1 \
	flask run --port 5000

manage:
	@PYTHONPATH=./ python manage.py

seed:
	@make manage && \
	PYTHONPATH=./ python seed.py

connect_db:
	@docker exec -it book_club_python_postgres psql -U "book_club" book_club_dev