import { useState } from 'react';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").regex(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(1, "Message is required")
});

type FormState = {
  name: string;
  email: string;
  message: string;
};

export const useContactForm = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = contactSchema.safeParse(form);

    if (!validation.success) {
      const errorMessages: Partial<FormState> = {};

      validation.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof FormState;
        errorMessages[fieldName] = error.message;
      });

      setErrors(errorMessages);
    } else {
      setErrors({});

      const formData = {
        from_name: form.name,
        to_name: "Firman Khoiril",
        from_email: form.email,
        message: form.message,
      };


      emailjs
        .send(
          'service_yz8oavm',
          'template_pel69iv',
          formData, {
          publicKey: 'xdNBf7o7j_u7BjyjX',
        })
        .then(
          () => {
            toast.success("Successfully Sending a Message!")
            setForm({
              name: "",
              email: "",
              message: ""
            })
          },
          () => {
            toast.error("Failed sending a message!")
          }
        );
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    errors,
  };
};
