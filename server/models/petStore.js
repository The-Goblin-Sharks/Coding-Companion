// going to have to install this dependency
const { Pool } = require('pg');

const PG_URL = 
  'postgres://zjhrmgpe:ICiWSbi058dDHa_kyIXJD2ftPGMj0IKW@drona.db.elephantsql.com/zjhrmgpe'; // our own link here

// create a new pool here using the connection string above
const pool = new Pool({
	connectionString: PG_URL,
});

module.exports = {
	query: (text, params, callback) => {
		console.log('executed query', text);
		return pool.query(text, params, callback);
	},
};