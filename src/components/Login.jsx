import { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';

import axios from "axios";

import { useHistory } from 'react-router-dom';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};

const errorMessages = {
  email: 'Please enter a valid email address',
  password: "Password must be at least 4 characters long and contain at least 1 uppercase letter, 1 lowercase letter and 1 number.",
  hataliGiris: "Invalid email or password."
};

export default function Login() {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

    const emailError = !emailRegex.test(form.email);
    const passwordError = !passwordRegex.test(form.password);
    const termsError = !form.terms;

    setErrors({
      email: emailError,
      password: passwordError,
      terms: termsError,
    });

    setIsValid(!emailError && !passwordError && !termsError);
    
  }, [form]);

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === 'checkbox' ? event.target.checked : value;

    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

    if (!passwordRegex.test(form.password)) {
      alert("Şifre en az 4 karakter olmalıdır ve 1 büyük harf, 1 küçük harf ve 1 sayı içermelidir.");
    };

    if (!emailRegex.test(form.email)) {
      alert("Lütfen geçerli bir e-posta adresi girin.");
    };

    if (isValid === true) {
      axios
        .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
        .then((res) => {
          const user = res.data.find(
            (item) => item.password == form.password && item.email == form.email
          );
          if (user) {
            setForm(initialForm);
            history.push('./success');
          } else {
            alert(errorMessages.hataliGiris)
          }
        }
      )
    }

    
  };

  return (
    <>
    <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
          invalid={errors.email}
          data-cy="email-input"
        />
        {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
          value={form.password}
          invalid={errors.password}
          data-cy="password-input"
        />
        {errors.password && (
          <FormFeedback>{errorMessages.password}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          checked={form.terms}
          type="checkbox"
          onChange={handleChange}
          data-cy="checkbox-input"
        />{' '}
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button color="primary" disabled={!isValid} data-cy="button-input">
          Sign In
        </Button>
      </FormGroup>
    </Form>
    </>
  );
}