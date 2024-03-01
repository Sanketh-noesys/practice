import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";

export default function CreateGenre() {
    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{name:''}}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 3));
                    console.log(value)
                }}
            />
        </>
    )
}