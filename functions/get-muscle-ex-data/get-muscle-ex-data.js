// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
const q = faunadb.query;

const handler = async (event) => 
{
  //require teh request to be a get request
  if (event.httpMethod !== 'GET')
  {
    return { statusCode: 500, body: 'GET A BETTER REQUEST!' }
  }

  try 
  {
    //returns all exercises in the exercise database, where the code in react will parse through to get only what it needs
    const req = await faunaClient.query(q.Map(q.Paginate(q.Match(q.Index("Exercise_Name"))), q.Lambda("attr", q.Get(q.Var("attr")))))
    return { statusCode: 200, body: JSON.stringify(req.data) }
  } 
  catch (err) 
  {
    return { statusCode: 500, body: JSON.stringify({ error: err.message}) }
  }
}

module.exports = { handler }
