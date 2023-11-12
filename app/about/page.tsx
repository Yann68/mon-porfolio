'use client';
import Image from 'next/image';
import photoProfil from '@/public/photo-profil.jpg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
  const router = useRouter();
  return (
    <div className="p-5">
      <h1 className="text-primary underline underline-offset-2 md:underline-offset-4 decoration-primary decoration-2 md:decoration-[3px] font-semibold mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        A propos de moi
      </h1>
      <div className="float-right mx-2 md:mx-5 mb-5 md:mb-0 w-[120px] h-[190px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[400px] ">
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
      <p className="text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg md:pt-5">
        Mon parcours professionnel a débuté de manière simple en tant que
        préparateur de commande pour une enseigne de magasin. Durant ces
        premières années, j&apos;ai développé des compétences solides en
        logistique, en gestion des stocks et en coordination d&apos;équipes pour
        garantir une efficacité optimale dans les opérations de préparation et
        de distribution des produits. Ce travail m&apos;a permis d&apos;acquérir
        une discipline rigoureuse et une approche méthodique dans
        l&apos;exécution de mes tâches quotidiennes. Après avoir évolué en tant
        que cariste au sein de la même entreprise, j&apos;ai continué à
        développer mes compétences, notamment en matière de manutention et de
        gestion des flux de marchandises. Les responsabilités accrues m&apos;ont
        offert une perspective plus globale sur le fonctionnement de
        l&apos;entreprise et renforcé ma capacité à résoudre rapidement les
        problèmes opérationnels. Cependant, au fil des années, une passion
        grandissante pour le développement informatique a émergé. Mon intérêt
        pour la programmation, les technologies web et la création
        d&apos;applications a pris de l&apos;ampleur. C&apos;est ainsi
        qu&apos;après une décennie au sein de la même entreprise, j&apos;ai
        décidé de franchir le cap et de me lancer dans une reconversion
        professionnelle. J&apos;ai entrepris une formation intensive en
        développement Full Stack, désireux de transformer ma passion pour la
        programmation en une carrière épanouissante. Cette transition n&apos;a
        pas été sans défis, mais ma détermination et ma volonté d&apos;apprendre
        ont été des moteurs essentiels dans cette nouvelle aventure. Au cours de
        ma formation, j&apos;ai choisi de me spécialiser spécifiquement dans
        React.js et Next.js, deux frameworks JavaScript modernes très prisés
        dans le domaine du développement web. Ma fascination pour ces
        technologies réside dans leur capacité à créer des interfaces
        utilisateur réactives et performantes, ainsi que dans leur flexibilité
        pour le développement côté serveur avec Next.js. Mon approche du
        développement web intègre constamment les dernières fonctionnalités et
        pratiques à jour. Je reste attentif aux évolutions rapides du secteur,
        m&apos;assurant d&apos;adopter les meilleures pratiques et
        d&apos;exploiter les fonctionnalités les plus récentes pour offrir des
        solutions innovantes et efficientes. Aujourd&apos;hui, fort de mon
        expérience en logistique et de ma reconversion réussie dans le domaine
        du développement Full Stack, je suis prêt à relever de nouveaux défis.
        Ma polyvalence, acquise au fil des années, combinée à ma passion pour la
        programmation, fait de moi un professionnel engagé et résolu à
        contribuer de manière significative au monde du développement web.
      </p>
      <div className="mt-3 md:my-5 w-full flex justify-end">
        <Button onClick={() => router.push('/contact')}>Contactez-moi</Button>
      </div>
    </div>
  );
};

export default AboutPage;
