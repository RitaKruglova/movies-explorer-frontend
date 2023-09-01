export function validateEmail(value) {
  if (!value) {
    return 'Email обязателен';
  }
  if (!/\S+@\S+\.\S+/.test(value)) {
    return 'Неправильный формат email';
  }
  return '';
}

export function validateText(value) {
  if (value.length < 2 && value.length > 30) {
    return 'Текст должен быть не короче 2 символов и не длиннее 30 символов';
  } else {
    return '';
  }
}

export function validatePassword(value) {
  if (value.length < 8) {
    return 'Пароль должен быть не короче 8 символов';
  } else {
    return '';
  }
}

