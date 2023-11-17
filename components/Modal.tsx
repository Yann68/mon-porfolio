'use client';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface FormProps {
  disabled: boolean;
  modalActive: boolean;
  errorForm: boolean;
  onSubmit: any;
  onCloseModal: () => void;
}

const Modal = ({
  disabled,
  modalActive,
  errorForm,
  onSubmit,
  onCloseModal,
}: FormProps) => {
  const router = useRouter();

  return (
    <AlertDialog open={modalActive}>
      <AlertDialogTrigger asChild>
        <Button
          type="submit"
          disabled={disabled}
          className="w-full bg-secondary text-primary hover:bg-secondary hover:opacity-90 dark:bg-primary dark:text-secondary dark:hover:bg-primary dark:hover:opacity-90">
          Souscrire
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-primary text-secondary dark:bg-secondary dark:text-primary">
        <AlertDialogHeader>
          <AlertDialogTitle>Validation</AlertDialogTitle>
          <AlertDialogDescription
            className={cn(errorForm && 'text-destructive')}>
            {!errorForm
              ? 'Merci votre message a été envoyer avec succès. Vous serez contacté très rapidement'
              : 'Une erreur est survenue, veuillez réessayer'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            {!errorForm ? (
              <Button
                onClick={() => router.push('/')}
                className="bg-secondary text-primary hover:bg-secondary hover:opacity-90 dark:bg-primary dark:text-secondary dark:hover:bg-primary dark:hover:opacity-90">
                Fermer
              </Button>
            ) : (
              <Button
                onClick={onCloseModal}
                className="bg-secondary text-primary hover:bg-secondary hover:opacity-90 dark:bg-primary dark:text-secondary dark:hover:bg-primary dark:hover:opacity-90">
                Réessayer
              </Button>
            )}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
