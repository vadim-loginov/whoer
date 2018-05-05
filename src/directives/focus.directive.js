export default {
  inserted(el) {
    if (el.classList.contains('el-input')) {
      // Фокусируемся на настоящем инпуте внутри обёртки
      el.querySelector('input').focus();
    } else {
      el.focus();
    }
  },
};
