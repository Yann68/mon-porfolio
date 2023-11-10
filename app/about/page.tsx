'use client';
import Image from 'next/image';
import photoProfil from '@/public/photo-profil.jpg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-evenly">
      <div className="w-full md:max-w-[400px] lg:max-w-[600px] p-5 md:p-0">
        <h1 className="text-primary underline underline-offset-2 md:underline-offset-4 decoration-primary decoration-2 md:decoration-[3px] font-semibold mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          A propos de moi
        </h1>
        <p className="text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg  md:pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          laudantium corporis iusto, porro dolorem dolor eligendi quae aut
          distinctio aliquid voluptates reprehenderit maiores! Similique velit
          quae illum totam saepe, qui eos consequuntur vero, delectus eveniet
          neque ducimus officiis nemo atque nulla animi perspiciatis voluptate
          laudantium nesciunt odit ex sed ea quibusdam? Modi eveniet, harum
          repellendus quia a excepturi! Veniam at, cumque consequuntur ex
          doloribus laboriosam eos sunt architecto recusandae corrupti, dolor
          assumenda illo! Eaque ut distinctio, inventore aliquam, error libero
          qui sit ipsam reiciendis beatae tempora aliquid accusamus dolorum.
          Dicta numquam similique non. Adipisci iusto nesciunt consectetur
          similique eveniet nulla, inventore dolore excepturi dolorum possimus
          saepe, asperiores magnam ex quaerat blanditiis fugit cum a in, ipsam
          optio suscipit corrupti! Ipsam optio consequuntur, nihil veniam
          voluptate totam officiis ea hic explicabo earum saepe sapiente est
          placeat natus eveniet ducimus inventore dolor? Quos debitis corporis
          sint doloremque facilis unde ipsam vitae magni?
        </p>
        <div className="mt-3 md:my-5 w-full flex justify-start">
          <Button onClick={() => router.push('/contact')}>Contactez-moi</Button>
        </div>
      </div>
      <div className="flex justify-center lg:items-center">
        <div className="max-w-[200px] sm:max-w-[500px] sm:h-[500px]">
          <Image
            className="rounded shadow shadow-primary dark:shadow-primary"
            alt="photo-profil"
            src={photoProfil}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
