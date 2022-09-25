import { Formik, Field, FieldArray } from "formik";
import TextField from "./TextField";
import Select from "./Select"
import Router, { useRouter } from 'next/router'
import jwt_decode from "jwt-decode";
import axios from "axios"
import Button from "./Button";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import userService from "../services/userService";
const SignUpForm = () => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        username: "",
        name: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={(values) => {
        userService.CreateUser(values).then(() => {
          router.push('/login')
        }).catch(() => {
          alert("This username already exists!")
          Router.reload()

        })
      }}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password !== values.passwordConfirm) {
          errors.password = "Passwords must match";
        }
        if (!values.passwordConfirm) {
          errors.passwordConfirm = "Required";
        }
        if (!values.username) {
          errors.username = "Required";
        } else if (values.username.length > 20) {
          errors.username = "Username must be less than 20 characters";
        }
        if (!values.name) {
          errors.name = "Required";
        } else if (values.name.length > 40) {
          errors.name = "Name must be less than 40 characters";
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
                errors={errors.name && touched.name && errors.name}
                name="name"
                placeholder="Name"
                type="input"
                as={TextField}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.name && touched.name && errors.name}
              </div>
            </div>
            <div className="h-16">
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
            <div className="h-16">
              <Field
                errors={
                  errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm
                }
                name="passwordConfirm"
                placeholder="Confirm Password"
                type="password"
                as={TextField}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm}
              </div>
            </div>
          </div>

          <div className="w-full grid mt-5">
            <div className="flex justify-center">
              <Button
                color="bg-green-300"
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


export default SignUpForm;


