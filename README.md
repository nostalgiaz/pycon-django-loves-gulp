# Django <3 Gulp

### Setup
```bash
$ pip install -r requirements.txt
$ npm install
```

### Dev
```bash
$ python manage.py runserver  # in terminal A
$ gulp  # in terminal B
```

### Prod
```bash
$ ./node_modules/.bin/webpack --config webpack-prod.config.babel.js
$ python manage.py collectstatic --no-input
```
