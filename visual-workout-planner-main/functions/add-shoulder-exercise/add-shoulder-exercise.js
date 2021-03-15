// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
const q = faunadb.query;

const handler = async (event) => {
  try {
    const memory = { data: JSON.parse(event.body) }
    const req = await faunaClient.query(q.Create(q.Ref("classes/shoulder"), memory));
    // const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Successfully added exercise!'}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({error: err.message})}
  }
}



module.exports = { handler }
