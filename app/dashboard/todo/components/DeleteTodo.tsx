"use client";

import { Button } from '@/components/ui/button'
import { TrashIcon } from '@radix-ui/react-icons'
import React, { useTransition } from 'react'
import { deleteTodoById } from '../actions';
import { toast } from '@/components/ui/use-toast';
import { ITodo } from '@/lib/types';

export default function DeleteTodo({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();

    const onSubmit = () => {
        startTransition(async () => {
            const {error} = JSON.parse(await deleteTodoById(id));

            if(error?.message){
                toast({
                    title: "Fail to delete"
                })
            } else {
                toast({
                    title: "Successfully delete"
                })
            }
        })
    };

    return (
      <form action={onSubmit}>
            <Button
	    		variant="outline"
	    		className="bg-dark dark:bg-inherit"
		    >
    		    <TrashIcon />
    		    Delete
    	    </Button>
      </form>
    )
}