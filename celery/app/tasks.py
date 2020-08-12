from celery import Celery
from celery.schedules import crontab
import time
import random

celery_app = Celery('tasks', broker='redis://redis:6379/')
celery_app.conf.timezone = 'America/Bogota'

celery_app.conf.beat_schedule = {
    'each 2 min': {
        'task': 'tasks.resta',
        'schedule': crontab(minute='*/2')
    },
}


@celery_app.task()
def suma():
    time.sleep(20)
    # code insert db
    # send correo
    # pandas
    return random.randint(1, 100)


@celery_app.task()
def resta():
    time.sleep(10)
    return 5 - 3


@celery_app.task()
def divide():
    time.sleep(15)
    return 10 / 2

