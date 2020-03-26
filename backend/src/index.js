const express = require ('express');
const cors = require ('cors');
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  *
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alter uma informaçã o no back-end
  * DELETE: Deletar uma  informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query params:Parametros nomeados enviados na rota após "?" (filtros, paginação)
   * Route params: Parametros utilizados para identificar recursos.
   * Request Body:
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
    * NoSQL: MongoDB, CouchDB, etc
    */


    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*'). where ()
     */
 app.post ('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response. json({
        evento: 'semana omniStack 11.0',
        aluno: 'Milla Costa'
});
});

app.listen(3333);
 