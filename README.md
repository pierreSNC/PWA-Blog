# PWA Blog

## Installation

```bash
git clone git@github.com:pierreSNC/PWA-Blog.git
```

OR

```bash
git clone https://github.com/pierreSNC/PWA-Blog.git
```

## Back-end

```bash
cd api/
cp .env.dist .env
npm install
npm run db-init
npm start
```
You must import the pwa-blog.sql file on your datase before run npm start.

You must complete the .env file with your own information before run npm install.

```bash
BASE_URL=[URL of your front-end]  #http://localhost:56466/

PUBLIC_KEY=
PRIVATE_KEY=

DB_NAME=pwa-blog
DB_USER=
DB_PASSWORD=
DB_HOST=[localhost]
DB_DIALECT=mysql
```

## Front-end

```bash
cd front/
cp .env.dist .env
npm install
npm run build
npm install -g serve
serve -s build
```

You must complete the .env file before run npm install.

```bash
REACT_APP_API_URL=[URL of your API] # http://localhost:3000/
REACT_APP_PUBLIC_KEY=
```