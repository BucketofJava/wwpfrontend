import { Formik, Field, FieldArray } from "formik";
import TextField from "./TextField";
import TextArea from "./TextArea";
import Select from "./Select"
import Router, { useRouter } from 'next/router'
import jwt_decode from "jwt-decode";
import axios from "axios"
import Button from "./Button";
import { ArrowRightIcon, ArrowLeftIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline"
import essayService from "../services/essayService";
const EssayForm = () => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        contents: "",
        studentid: 1000
      }}
      onSubmit={(values) => {
        console.log("ballse")
        
        essayService.CreateEssay(values).then(() => {

          Router.reload()
        }).catch(() => {
          alert("There was an error creating your essay!")
          Router.reload()

        })
      }}
      validate={(values) => {
        const errors = {};
        if (!values.contents||!values.studentid) {
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
                errors={errors.contents && touched.contents && errors.contents}
                name="contents"
                placeholder="Upload your essay here!"
                type="input"
                as={TextArea}
              ></Field>
              <div className="text-xs m-px text-red-500">
                {errors.contents && touched.contents && errors.contents}
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


export default EssayForm;


