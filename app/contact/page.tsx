import FormContact from '@/components/FormContact';

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col-reverse justify-center md:flex-row md:justify-evenly px-5 pb-5">
      <div className="flex justify-center">
        <div className="w-[400px] shadow dark:shadow-primary rounded-md text-secondary dark:text-primary bg-slate-900 p-5">
          <FormContact />
        </div>
      </div>
      <div className="md:max-w-[400px] md:mx-5 rounded p-3 pt-0">
        <h2 className="text-primary mb-3 font-semibold mt-3 text-3xl sm:text-4xl">
          Contactez-moi pour discuter de projets !
        </h2>
        <p className="text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
          Cher visiteur, Je suis ravi de votre intérêt pour mon portfolio de
          développeur web. Si vous avez des projets passionnants, des idées
          innovantes ou si vous souhaitez discuter de collaborations
          potentielles, n&apos;hésitez pas à me laisser vos coordonnées ainsi
          qu&apos;un message expliquant vos besoin. Je suis là pour vous
          répondre rapidement.
        </p>
        <p className="py-2 font-bold text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
          Merci d&apos;avoir visiter mon portfolio. J&apos;attends avec
          impatience la possibilité de discuter de vos projets.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
