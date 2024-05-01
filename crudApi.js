const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();

// 使用body-parser來解析請求主體
router.use(bodyParser.json());


let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Alice', email: 'alice@example.com' },
  { id: 3, name: 'Bob', email: 'bob@example.com' }
];



// 新增資料
router.post('/users', (req, res) => {
  const userData = req.body;
  // 生成新的ID
  const id = users.length + 1;
  const newUser = { id, ...userData };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 檢索所有資料
router.get('/users', (req, res) => {
  res.json(users);
});

// 更新資料
router.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userData = req.body;
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: '使用者未找到' });
  }
});

// 刪除資料
router.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: '使用者已刪除' });
  } else {
    res.status(404).json({ message: '使用者未找到' });
  }
});

module.exports = router;