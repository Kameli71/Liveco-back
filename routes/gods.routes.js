const connection = require('../db-config');
const router = require("express").Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM gods', (err, result) => {
        if (err) {
            res.status(500).send('Error retrieving gods from database');
        } else {
            res.json(result);
        }
    })
});

router.get('/:id', (req, res) => {
    const godId = req.params.id;
    connection.query(
        'SELECT * FROM gods WHERE id = ?',
        [godId],
        (err, results) => {
            if (err) {
                res.status(500).send('Error retrieving god from database');
            } else {
                if (results.length) res.json(results[0]);
                else res.status(404).send('God not found');
            }
        }
    )
});

router.post('/', (req, res) => {
    const {name, image, level} = req.body;
    connection.query(
        'INSERT INTO gods (name, image, level) VALUES (?, ?, ?)',
        [name, image, level],
        (err, result) => {
            if (err) {
                res.status(500).send('Error saving the god');
            } else {
                const id = result.insertId;
                const createdGod = { id, name, image, level };
                res.status(201).json(createdGod);
            }
        }
    )
});

router.put('/:id', (req, res) => {
    connection.query(
      'UPDATE gods SET ? WHERE id = ?',
      [req.body,req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error updating a god');
        } else {
          if (result.affectedRows)
          {
            const updatedGod={id:req.params.id,name:req.body.name,level:req.body.level,image:req.body.image}
            res.status(200).json(updatedGod);
          } 
          else res.status(404).send('God not found.');
        }
      }
    );
  });

module.exports = router;