// hash.js
const bcrypt = require('bcrypt')

const password = 'admin123' // ganti sesuai yang kamu mau

bcrypt.hash(password, 10).then(hash => {
  console.log('Hashed password:', hash)
})
