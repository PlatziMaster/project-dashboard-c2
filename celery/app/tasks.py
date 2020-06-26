from celery import Celery
from celery.schedules import crontab
import logging

celery_app = Celery('tasks', broker='redis://redis:6379/')
celery_app.conf.timezone = 'America/Bogota'

celery_app.conf.beat_schedule = {
    'each min': {
        'task': 'tasks.suma',
        'schedule': crontab()
    },
    'each 5 min': {
        'task': 'tasks.resta',
        'schedule': crontab(minute='*/5')
    },
}


@celery_app.task()
def suma():
    return 5 + 3


@celery_app.task()
def resta():
    return 5 - 3

