- CusterName: app
- User: admin
- Pass: admin123
- Bucket: platzi

```sql
CREATE PRIMARY INDEX ON `platzi` USING GSI
CREATE INDEX `type` ON `platzi`(`type`)
```

```sql
SELECT doc.*
FROM platzi_store AS doc
WHERE doc.type = "conversation"
```

## MapReduce: conversations by Date

### Map

```js
function (doc, meta) {
  if(
    doc.type === 'conversation' &&
    doc.created_at
  ){
    var datetime = doc.created_at.split('T');
    var date = datetime[0].split('-')
    .map(function(i) {return parseInt(i, 10)})
    emit([date[0], date[1], date[2]]);
  }
}
```

```js
function (doc, meta) {
  if (doc.type === 'conversation') {
    var datetime = doc.created_at.split('T')[0];
    var date = datetime.split('-');
    emit(date, doc.rate);
  }
}
```

### Reduce

```js
function (keys, values, rereduce) {
  if (rereduce) {
    return values.reduce((count, value) => count + value, 0);
  } else {
    return values.length;
  }
}
```