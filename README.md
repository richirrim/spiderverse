# Spiderverse
## ⚙️ Comandos para ejectutar tests y fix con ayuda del standard js

Los sig. comandos en el `package.json` se ejecutan de la sig. forma:

⚡ El comando `test` dentro de **"scripts"**

    $ npm test 

O puedes pasar la ruta donde se encuentra el test.

    $ npm test /test/spiderman.test.js

Este comando, como podrás observar en el archivo `package.json`, está construido de tal forma que no solo ejecuta una única acción, si no, que ejecuta un conjunto de acciones en el orden en el que están.

    "scripts": {
        "test": "standard && node ./node_modules/.bin/jest"
    }

Es decir,  una vez lanzado el comando `npm test` en la terminal,  lo primero que se ejecutará será el comando `standard`, seguido por el comando `node ./node_modules/.bin/`.


⚡ El comando `start`:

    $ npm start

Tal como vimos en el caso anterior, una vez ejecutado ` npm start` en la terminal, una serie de acciones y no solo una serán lanzadas.

    "scripts": {
        "test": "standard && node ./node_modules/.bin/jest",
        "start": "standard && node index.js" 
    }

⚡ El comando `lint`:

Al ejecutarse el comando `npm run lint` nos lanzara una serie de mensajes o alertas indicando que hemos escrito código feo y que debemos corregirlos, ya mismo.

    $ npm run lint

Así se ve en el `package.json`:

    "scripts": {
        "test": "standard && node ./node_modules/.bin/jest",
        "start": "standard && node index.js", 
        "lint": "standard"
    }
    
⚡ El comano `lint-fix`:

Al ejecutarse el comando `npm run lint-fix` en la terminal,  Js corregirá por nosotros ciertos errores de estilo, es decir, no nos dejará escribir código feo. Y cuando no pueda revisarlos, nos tocara corregir dichos problemas de estilo y así crearemos código menos desordenado o inconsistente.

    $ npm run lint-fix

Y así se ve en el `package.json`:

    "scripts": {
        "test": "standard && node ./node_modules/.bin/jest",
        "start": "standard && node index.js", 
        "lint": "standard",
        "lint-fix": "standard --fix"
    }