import { Form, LoaderFunction, useTransition } from "remix";
import { useEffect, useRef } from "react";

interface FormComponentProps {
    message: string;
    name: string;
}

const FormComponent = ({ message, name }: FormComponentProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const { state } = useTransition();

    const isAdding = state === "submitting";

    useEffect(() => {
        if (!isAdding) {
            formRef.current?.reset();
        }
    }, [isAdding]);

    return (
        <Form ref={formRef}>
            <div className="relative px-4">
                <input
                    type="text"
                    className="flex-1 block w-full px-4 py-2 mx-auto text-base placeholder-gray-400 border-2 border-gray-300 rounded-lg shadow-sm appearance-none dark:border-transparent sm:w-2/5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-[#000000]"
                    name={name}
                    placeholder={message}
                    autoComplete="off"
                />
            </div>
        </Form>
    );
};

export default FormComponent;
