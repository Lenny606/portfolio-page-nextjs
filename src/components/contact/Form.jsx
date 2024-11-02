"use client"
import React from 'react';
import {useForm} from 'react-hook-form';
import * as emailjs from "@emailjs/browser";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {toast, Toaster} from "sonner";
import {motion} from "framer-motion";

export default function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    //animation config
    const item = {
        hidden: {
            opacity: 0, y: 100
        },
        show: {
            opacity: 1, y: 0
        }
    }
    const container = {
        hidden: {
            opacity: 0,

        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }
    const sendEmail = (params) => {
        // e.preventDefault();
        const toastId = toast.loading("Sending message...")

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000 //not posible to send more than 1 request per 5 second
                    }
                })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Message sent successfully", {
                        id: toastId
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Message had an error: ", {
                        id: toastId
                    })
                },
            );
    };
    const onSubmit = data => {

        //for email template
        const templateData = {
            to_name: "Lenny606",
            from_name: data.name,
            reply_to: data.email,
            message: data.message
        }

        sendEmail(templateData)
    };
    console.error(errors);

    return (

        <>
            <Toaster richColors={true}/>

            {/*<h1 className={'text-4xl text-foreground font-bold'}>Contact Me</h1>*/}
            {/*<p className={'text-sm text-foreground'}>Please fill out the form below to get in touch.</p>*/}

            <motion.form
                variants={container}
                initial={"hidden"}
                animate={"show"}
                onSubmit={handleSubmit(onSubmit)}
                className={'max-w-md w-full flex flex-col items-center justify-center space-y-4'}>
                <motion.input
                    variants={item}
                    className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                    type="text" placeholder="Name" {...register("name",
                    {
                        required: "This field is required",
                        minLength: {
                            value: 2,
                            message: "Name must have at least 2 characters"
                        },
                        maxLength: 80
                    })} />
                {
                    errors.name && (
                        <span className={'inline-block self-start text-accent'}>{errors.name.message}</span>
                    )
                }
                <motion.input
                    variants={item}
                    className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                    type="text" placeholder="Email" {...register("email", {
                    required: 'This field is required',
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email address'
                    }
                })} />
                {
                    errors.email && (
                        <span className={'inline-block self-start text-accent'}>{errors.email.message}</span>
                    )
                }
                <motion.textarea
                    variants={item}
                    className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                    rows={5}
                    placeholder="Message" {...register("message", {
                    required: 'This field is required',
                    minLength: {
                        value: 2,
                        message: "Message must have at least 2 characters"
                    },
                    maxLength: {
                        value: 256,
                        message: "Message must have less than 256 characters"
                    },
                    max: 256, min: 50
                })} />
                {
                    errors.message && (
                        <span className={'inline-block self-start text-accent'}>{errors.message.message}</span>
                    )
                }
                <motion.input
                    variants={item}
                    type="submit"
                    value={'Send'}
                    className={'px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'}
                />
            </motion.form>
        </>

    );
}