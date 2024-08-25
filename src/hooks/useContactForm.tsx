import { useState } from 'react';
import { z } from 'zod';

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
        
        console.log("Form submitted", form);
      }
    };

  return {
    form, handleChange, handleSubmit, errors
  }
}
