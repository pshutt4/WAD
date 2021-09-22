
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'pashutt.it.pointpark.edu',
  user     : 'paulina',
  password : 'Palisnryan#4',
  database : 'AP'
});

connection.connect();

connection.query('SELECT * from CUSTOMER;', function(err, rows, fields) {
  if (!err)
  {
    /*console.log('The solution is: ', rows);*/
    for( var i=0; i < rows.length; i++)
    {
     console.log('Rows Notation: '+ rows[i].LastName +' ' + rows[i].FirstName);
    }
  }
  else
    console.log('Error while performing Query.');
});

connection.end();
