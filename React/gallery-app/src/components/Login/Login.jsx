import './Login.css'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import FormInput from "../common/FormInput";
import { schema } from './validation';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/Selectors';
import { useEffect } from 'react';
import { login, actionTypes as userActions } from '../../redux/actions/userAction';
import { hasErrorsSelector, successSelector } from '../../redux/Selectors/statusSelector';
import { getLatestError } from '../../redux/Selectors/errorSelector';

const Login = () => {

    const user = useSelector(getUser)
    const isSuccess = useSelector((state) => successSelector([userActions.LOGIN], state))
    const hasError = useSelector((state) => hasErrorsSelector([userActions.LOGIN], state))
    console.log(hasError)
    const isError = useSelector(getLatestError)
    //console.log(isError)
    //console.log(hasError)
    //console.log(userActions.LOGIN)
    //const test = useSelector((state) => successSelector(UserTracker, state))

    const nextRoute = "/";
    
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const formik = useFormik({

        validationSchema: schema,

        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: (values) => {

            const email = values.email
            const password = values.password

            dispatch(login({ email, password }));
            
            //console.log("Login page after dispatch", user.userToken)

        }
    })
    
    // useEffect(() => {
    //     if(user.isAuth) {
    //         navigate(nextRoute)
    //     }
    // }, [user.isAuth])

    // useEffect(() => {
    //     if (isSuccess) {
    //         console.log("Login page isSuccess")
    //         navigate(nextRoute);
    //     }
    // }, [isSuccess])

    useEffect(() => {
        if (isSuccess) {
            console.log("Login page isSuccess")
            navigate(nextRoute);
            // navigate("/login")
        }
        else {
            console.log("Login page !isSuccess")
            //navigate(nextRoute);
        }
    }, [isSuccess])

    return (
        <div className="login">
            <div className="form">
                <form noValidate onSubmit={formik.handleSubmit}>
                    <span>Login</span>

                    <FormInput 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        type="email"
                        name="email"
                        className="form-control inp_text"
                    />

                    <p className="error">
                        {formik.errors.email && formik.touched.email && formik.errors.email}
                    </p>

                    <FormInput
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                    
                    <p className="error">
                        {formik.errors.password && formik.touched.password && formik.errors.password}
                        {isError && isError.message}
                    </p>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login