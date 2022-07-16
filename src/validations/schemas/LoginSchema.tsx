import Yup from '../validation';

export const LoginSchema = Yup.object().shape({
  userName: Yup.string().required().min(6),
  password: Yup.string().required().min(6),
  rememberMe: Yup.boolean(),
});
