const router = require('express').Router();
const User = require('../models/User');
// const Order = require('../models/Order');

// signup user
// router.post('/signup', async(req, res)=> {
//   const {name, email, password} = req.body;

//   try {
//     const user = await User.create({name, email, password});
//     res.send({
//       success: true,
//       data: user,
//     });
//     res.status(200);
//     } catch (e) {
//       if(e.code === 11000) return res.status(400).send('Email already exists');
//     res.send({
//       success: false,
//       status: res.status(400),
//       message: e.message
//     });
//     res.status(400);
//     }
// })

// // login user
// router.post('/login', async(req, res) => {
//   const {email, password} = req.body;
//   try {
//     const user = await User.findByCredentials(email, password);
//     res.send({
//       success: true,
//       data: user,
//     });
//     res.status(201);
//     } catch (e) {
//       if(e.code === 11000) return res.status(400).send('Email already exists');
//     res.send({
//       success: false,
//       status: res.status(400),
//       message: e.message
//     });
//     res.status(400);
//     }
// })

// // get users;
// router.get('/', async(req, res)=> {
//   try {
//     const users = await User.find({ isAdmin: false });
//     res.send({
//       success: true,
//       data: users,
//     });
//     res.status(200);
//     } catch (e) {
//     res.send({
//       success: false,
//       status: res.status(400),
//       message: e.message
//     });
//     res.status(400);
//     }
// })

// signup
router.post('/signup', async(req, res)=> {
  const {name, email, password} = req.body;

  try {
    const user = await User.create({name, email, password});
    res.json(user);
  } catch (e) {
    if(e.code === 11000) return res.status(400).send('Email already exists');
    res.status(400).send(e.message)
  }
})

// login

router.post('/login', async(req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// get users;
router.get('/', async(req, res)=> {
  try {
    const users = await User.find({ isAdmin: false }).populate('orders');
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

// get user orders
// router.get('/:id/orders', async (req, res)=> {
//   const {id} = req.params;
//   try {
//     const user = await User.findById(id).populate('orders');
//     res.json(user.orders);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// })

// // update user notifcations
// router.post('/:id/updateNotifications', async(req, res)=> {
//   const {id} = req.params;
//   try {
//     const user = await User.findById(id);
//     user.notifications.forEach((notif) => {
//       notif.status = "read"
//     });
//     user.markModified('notifications');
//     await user.save();
//     res.status(200).send();
//   } catch (e) {
//     res.status(400).send(e.message)
//   }
// })

module.exports = router;