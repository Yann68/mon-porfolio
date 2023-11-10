import FormContact from '@/components/FormContact';

const ContactPage = () => {
  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-[500px] rounded-md bg-slate-900 p-5">
        <FormContact />
      </div>
    </div>
  );
};

export default ContactPage;
