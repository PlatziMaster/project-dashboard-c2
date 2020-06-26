FROM python:3.6

RUN pip3 install pipenv

WORKDIR /app
COPY ./app/Pipfile /app/

RUN pipenv install --system --skip-lock

COPY ./app /app/

CMD celery -A tasks worker -B --loglevel=info