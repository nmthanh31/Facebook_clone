import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .email("Sai định dạng email").required("Trường này là bắt buộc!!!"),
  password: Yup.string()
    .min(8, "Tối thiểu 8 ký tự").required("Trường này là bắt buộc!!!")
});

export default SignupSchema