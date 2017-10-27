# Almundo API

Asegurarse de instalar todas las dependencias del proyecto corriendo:
`npm install`

## Inicial el proyecto
1 - Iniciar el servidor de base de datos con el siguiente comando:
`npm run database`

2 - En otra ventana del terminal cuando el servicio `mongod` esta corriendo importar el dataset con el siguiente comando de mongodb. * Hay que estar parado en el root del proyecto.
`npm run import_database`

3 - Una vez importado el dataset podemos iniciar la api con el comando:
`npm run dev`

## Metodos soportados

GET `/hotels` retorna un listado de hoteles con un `limit` y `offset` para el paginado.

GET `/hotels_search` búsca el item por `name`


