import { Formik, Field, FieldArray } from "formik";
import TextField from "./TextField";
import TextArea from "./TextArea";
import Select from "./Select"
import Router, { useRouter } from 'next/router'
import jwt_decode from "jwt-decode";
import axios from "axios"
import Button from "./Button";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import essayService from "../services/essayService";
import joinService from "../services/joinService";

const JoinForm = () => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        name: "",
        code: "",
        essayId: 0
      }}
      onSubmit={(values) => {
         
        joinService.joinRoom(values).then((res) => {
          console.log(res); 
          localStorage.setItem("studentid", res.data.id);
          router.push("/slay")
        }).catch(() => {
          alert("There was an error joining the session!")
          Router.reload()

        })
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name || !values.code) {
          errors.contents = "Required";
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
                errors={errors.code && touched.code && errors.code}
                name="code"
                placeholder="Put a join code here!"
                type="input"
                as={TextField}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.code && touched.code && errors.code}
              </div>
            </div>
            <div className="h-16 col-span-2">
              <Field
                errors={errors.name && touched.name && errors.name}
                name="name"
                placeholder="Put your name here!"
                type="input"
                as={TextField}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.name && touched.name && errors.name}
              </div>
            </div>
          </div>

          <div className="w-full grid mt-96">
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
export default JoinForm;
