import Yup from '../validation';

export const TodoSchema = Yup.object().shape({
  todo: Yup.string().required().min(3),
  done: Yup.boolean(),
});
