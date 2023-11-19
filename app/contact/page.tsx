import ContactPage from '@/components/contact/ContactPage';
import FormContact from '@/components/contact/FormContact';

const Contact = () => {
  return (
    <div className="w-full flex flex-col-reverse justify-center md:flex-row md:justify-evenly px-5 pb-5">
      <div className="flex justify-center">
        <div className="w-[400px] shadow dark:shadow-primary rounded-md text-secondary dark:text-primary bg-slate-900 p-5">
          <FormContact />
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Contact;
