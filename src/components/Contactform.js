import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Stack, Box} from '@mui/material';


 const Contactform = () => {


    const TextComponent = ({ field, form, ...props }) => {

        const {errors} = form

        return ( 
            <TextField 
                {...field} 
                {...props} 
                error={errors[field.name] ? true : false}
            />
        )

    }



    const handleValidation = (values) => {

        const errors = {};

        const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)


        if (!values.name) errors.name = 'Name required';

        if (!values.lastName) errors.lastName = 'Last name required';

        if (!values.message) errors.message = 'Please enter a message to contact us';

        if (!values.email) {

            errors.email = 'Email required';

        } else if (!validateEmail) {

            errors.email = 'Invalid email address';

        }


        return errors;

    }
    
    const handleSubmission = (values, { setSubmitting }) => {

        setSubmitting(true);
        
        sendMessage(values)
     
        setSubmitting(false);

    } 

    const sendMessage = (values) => {

        

      

    }


    return (

        <Box
          sx={{mb: 5,}}
        > 
            <Formik
                initialValues={{ name: '', lastName: '', email: '', message: ''}}
                validate={handleValidation}
                onSubmit={handleSubmission}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Stack spacing={2}>

                            <Field 
                                name="name" 
                                component={TextComponent} 
                                label='Name' 
                                placeholder='Your Name'
                                required
                            />
                            <ErrorMessage name="name" component="div" />

                            <Field 
                                name="lastName"
                                component={TextComponent} 
                                label='Last name' 
                                placeholder='Your last name'
                                required
                            />
                            <ErrorMessage name="lastName" component="div" />

                            <Field 
                                name="email"
                                component={TextComponent} 
                                label='Email' 
                                placeholder='Your email'
                                required
                            />
                            <ErrorMessage name="email" component="div" />

                            <Field 
                                name="message"
                                component={TextComponent} 
                                label='Message' 
                                placeholder='Enter your message'
                                multiline
                                maxRows={6}
                                required
                            />
                            <ErrorMessage name="email" component="div" />

                            <Button  
                              type="submit" 
                              variant='contained' 
                              sx={{alignSelf: 'center'}} 
                              disabled={isSubmitting}  
                            >
                             Submit 
                            </Button>

                        </Stack>
                        
                    </Form>
                )}
            </Formik>
        </Box>
        
    )
}


export default Contactform;
