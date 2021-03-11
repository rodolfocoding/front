import * as yup from 'yup';

const loginSchema = yup.object().shape({
  name: yup.string().required('The name is required'),
  email: yup.string().email().required('Invalid E-mail'),
  password: yup.string().min(6, 'The password must be at leats 6 characters'),
});

export default loginSchema;
