"use client"
import React from 'react';
import {useForm} from 'react-hook-form';
import * as emailjs from "@emailjs/browser";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const sendEmail = (params) => {
        // e.preventDefault();

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
                },
                (error) => {
                    console.log('FAILED...', error.text);
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
        <form onSubmit={handleSubmit(onSubmit)}
              className={'max-w-md w-full flex flex-col items-center justify-center space-y-4'}>
            <input
                className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                type="text" placeholder="Name" {...register("name", {required: true, maxLength: 80})} />
            <input
                className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />

            <textarea
                className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                placeholder="Message" {...register("message", {required: true, max: 256, min: 50})} />

            <input type="submit"
                   value={'Submit'}
                   className={'px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'}
            />
        </form>
    );
}