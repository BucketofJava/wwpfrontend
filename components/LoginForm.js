import { Formik, Field } from "formik";
import TextField from "./TextField";

import { useRouter } from 'next/router'

import Button from "./Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import userService from "../services/userService";
const LogInForm = () => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      onSubmit={(values) => {
        userService.LogInUser(values).then((user) => {
          console.log(user)
          localStorage.setItem('username',user.data.username);
          localStorage.setItem('password',user.data.password);
          router.push('/')
        }).catch(() => window.location.reload())
      }}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = "Please enter your password!";
        }
        if (!values.username) {
          errors.username = "Please enter your username!";
        } else if (values.username.length > 20) {
          errors.username = "Username must be less than 20 characters";
        }
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="h-16 col-span-2">
              <Field
                errors={errors.username && touched.username && errors.username}
                name="username"
                placeholder="Username"
                type="input"
                as={TextField}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.username && touched.username && errors.username}
              </div>
            </div>
            
            <div className="h-16 col-span-2">
              <Field
                errors={errors.password && touched.password && errors.password}
                name="password"
                placeholder="Password"
                type="password"
                as={TextField}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.password && touched.password && errors.password}
              </div>
            </div>
          </div>

          <div className="w-full grid mt-5">
            <div className="flex justify-center">
              <Button
                color="bg-sky-200"
                disabled={isSubmitting}
                type="submit"
              >
                <div className="flex items-center">
                <ArrowRightIcon className="h-5 w-5"></ArrowRightIcon>
                </div>
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}


export default LogInForm;
