'use client';

import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'About us - Bryan-an',
};

const AboutPage = () => {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        totam quae aut dolore quia vero aliquid ipsa. Assumenda natus minus eos
        animi laborum velit voluptatibus facere harum sunt quia, consequatur
        maiores, similique dignissimos et architecto iusto. Placeat dicta, iusto
        iste voluptates maxime, amet cum temporibus deleniti, repellendus
        adipisci id. Rem, vitae excepturi, molestiae distinctio rerum dolorum
        architecto sequi exercitationem reiciendis ducimus fugit quae odit iure
        soluta quidem? Iste cumque dolore rerum. Adipisci necessitatibus minima
        ipsa corporis expedita, eius libero quae distinctio quod debitis labore
        perspiciatis harum laudantium tenetur cum praesentium voluptatibus magni
        laborum quasi! Maxime expedita corrupti itaque culpa eaque!
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert('Excecuting code!!!');
          router.push('/');
        }}
      >
        Click
      </button>
    </section>
  );
};

export default AboutPage;
