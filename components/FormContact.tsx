'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Textarea } from './ui/textarea';
const FormContact = () => {
  const formSchema = z.object({
    firstName: z
      .string()
      .min(1, {
        message: 'Un nom est requis',
      })
      .max(200, {
        message: 'Un maximum de 200 lettres est autorisé',
      }),
    lastName: z
      .string()
      .min(1, {
        message: 'Un prénom est requis',
      })
      .max(200, {
        message: 'Un maximum de 200 lettres est autorisé',
      }),
    email: z
      .string()
      .email('Adresse e-mail non valide')
      .min(2, {
        message: 'Une adresse e-mail est requise',
      })
      .max(200, {
        message: 'Un maximum de 200 lettres est autorisé',
      })
      .regex(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Adresse e-mail non valide'
      ),
    message: z
      .string()
      .min(10, {
        message: 'Un minimum de 10 lettres est requis',
      })
      .max(1000, {
        message: 'un maximum de 1000 caractéres est autorisé',
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('https://formspree.io/f/maygkrlj', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
      }
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:opacity-50 text-primary dark:text-primary"
                  placeholder="Entrer votre Nom"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:opacity-50 text-primary dark:text-primary"
                  placeholder="Entrer votre Prénom"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse e-mail</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:opacity-50 text-primary dark:text-primary"
                  placeholder="e-mail@exemple.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="placeholder:opacity-50 text-primary dark:text-primary"
                  placeholder="Enter votre Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary hover:opacity-90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary dark:hover:opacity-90"
          type="submit">
          Souscrire
        </Button>
      </form>
    </Form>
  );
};

export default FormContact;
