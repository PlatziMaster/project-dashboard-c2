from celery import Celery

app = Celery('redis://localhost:6379/0')
# app.send_task('ttasks.suma', kwargs={ 'param1': 'value1' })
app.send_task('tasks.suma')