"use client"
import React from 'react';
import {useForm} from 'react-hook-form';

export default function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.error(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={'max-w-md w-full flex flex-col items-center justify-center space-y-4'}>
            <input
                className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
            <input
                className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'}
                type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

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