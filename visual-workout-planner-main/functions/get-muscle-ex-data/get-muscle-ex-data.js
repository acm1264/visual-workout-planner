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
    //////////////////////////placeholder return all shoulder exercises
    const req = await faunaClient.query(q.Map(q.Paginate(q.Match(q.Index("all_shoulder_ex"))), q.Lambda("attr", q.Get(q.Var("attr")))))
    return { statusCode: 200, body: JSON.stringify(req.data) }
  } 
  catch (err) 
  {
    return { statusCode: 500, body: JSON.stringify({ error: err.message}) }
  }
}

module.exports = { handler }
