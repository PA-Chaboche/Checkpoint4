const models = require("../models");
const { hashPassword, verifyPassword } = require("../helpers/helpersPassword");

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      const filterValue = [...rows];
      const finalFilter = filterValue.map((i) => {
        const newI = { ...i };
        delete newI.password;
        return newI;
      });
      res.send(finalFilter);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.users
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const user = req.body;

  user.password = await hashPassword(user.password);
  // TODO validations (length, format...)

  models.users
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.users
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(400);
  }
  return models.users
    .findByEmail(email)
    .then(async ([rows]) => {
      if (!rows.length) {
        return res.sendStatus(403);
      }

      const verifPassword = await verifyPassword(password, rows[0].password);
      if (!verifPassword) {
        return res.sendStatus(403);
      }
      const currentUser = rows[0];
      delete currentUser.password;

      return res.status(200).json(currentUser);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
};
