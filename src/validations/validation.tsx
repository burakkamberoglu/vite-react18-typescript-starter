import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: '*Bu alan zorunludur.',
  },
  string: {
    min: 'Bu alan minimum ${min} karakter olmalıdır.',
    max: 'Bu alan minimum ${max} karakter olmalıdır.',
  },
});

export default Yup;
