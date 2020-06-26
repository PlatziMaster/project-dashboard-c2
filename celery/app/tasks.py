import requests
from celery import Celery
from celery.schedules import crontab
import logging

celery_app = Celery('tasks', broker='redis://redis:6379/')
celery_app.conf.timezone = 'America/Bogota'

logger = logging.getLogger(__name__)

celery_app.conf.beat_schedule = {
    'each min': {
        'task': 'tasks.run_sum',
        'schedule': crontab()
    },
}


@celery_app.task()
def run_sum():
    return 5 + 3
