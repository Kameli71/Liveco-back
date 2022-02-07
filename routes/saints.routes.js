const connection = require('../db-config');
const router = require("express").Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM saints', (err, result) => {
        if (err) {
            res.status(500).send('Error retrieving saints from database');
        } else {
            res.json(result);
        }
    })
});

router.get('/:id', (req, res) => {
    const saintId = req.params.id;
    connection.query(
        'SELECT * FROM saints WHERE id = ?',
        [saintId],
        (err, results) => {
            if (err) {
                res.status(500).send('Error retrieving saint from database');
            } else {
                if (results.length) res.json(results[0]);
                else res.status(404).send('Saint not found');
            }
        }
    )
});

router.get('/rank/:level', (req, res) => {
  const saintLvl = req.params.level;
  connection.query(
    'SELECT * FROM saints WHERE level = ?',
    [saintLvl],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving saints from database');
      } else {
        if (results.length) res.json(results);
        else res.status(404).send('Saint not found');
      }
    }
  );
});

router.post('/', (req, res) => {
    const {name, image, level} = req.body;
    connection.query(
        'INSERT INTO saints (name, image, level) VALUES (?, ?, ?)',
        [name, image, level],
        (err, result) => {
            if (err) {
                res.status(500).send('Error saving the saint');
            } else {
                const id = result.insertId;
                const createdSaint = { id, name, image, level };
                res.status(201).json(createdSaint);
            }
        }
    )
});

// router.put('/:id', (req, res) => {
//     const saintId = req.params.id;
//     const db = connection.promise();
//     let existingSaint = null;
//     db.query('SELECT * FROM saints WHERE id = ?', [saintId])
//       .then(([results]) => {
//         existingSaint = results[0];
//         if (!existingSaint) return Promise.reject('RECORD_NOT_FOUND');
//         return db.query('UPDATE saints SET ? WHERE id = ?', [req.body, saintId]);
//       })
//       .then(() => {
//         res.status(200).json({ ...existingSaint, ...req.body });
//       })
//       .catch((err) => {
//         console.error(err);
//         if (err === 'RECORD_NOT_FOUND')
//           res.status(404).send(`Saint with id ${saintId} not found.`);
//         else res.status(500).send('Error updating a saint');
//       });
// });

router.put('/:id', (req, res) => {
    connection.query(
      'UPDATE saints SET ? WHERE id = ?',
      [req.body,req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error updating a saint');
        } else {
          if (result.affectedRows)
          {
            const updatedSaint={id:req.params.id,name:req.body.name,level:req.body.level,image:req.body.image}
            res.status(200).json(updatedSaint);
          } 
          else res.status(404).send('Saint not found.');
        }
      }
    );
});

router.delete('/:id', (req, res) => {
    connection.query(
      'DELETE FROM saints WHERE id = ?',
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error deleting an saint');
        } else {
          if (result.affectedRows) res.status(200).send('🎉 Saint deleted!');
          else res.status(404).send('Saint not found.');
        }
      }
    );
});

module.exports = router;