module.exports = {
    // eslint --fix:  kiểm tra và sửi lỗi code
    // prettier --write : Format code tự động
    '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  }