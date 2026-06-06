export interface ProjectData {
    title: string;
    description: string;
    link: string; // image url
    color: string;
    slug: string;
}
  
export const projects: ProjectData[] = [
    {
      title: 'SajaBazaar',
      description:
        'We developed a comprehensive e-commerce platform for SajaBazaar, enhancing their online presence and boosting sales.',
      link: 'https://picsum.photos/seed/sajabazaar/1000/800',
      color: '#FDBA74', // orange
      slug: 'sajabazaar'
    },
    {
      title: 'Gau Ko Swad',
      description:
        'Created a unique brand identity and a modern website for Gau Ko Swad, connecting them with a wider audience.',
      link: 'https://picsum.photos/seed/gaukoswad/1000/800',
      color: '#86EFAC', // green
      slug: 'gau-ko-swad'
    },
    {
      title: 'NepTalent',
      description:
        'Built a talent management platform for NepTalent, streamlining their recruitment and HR processes with a custom software solution.',
      link: 'https://picsum.photos/seed/neptalent/1000/800',
      color: '#FBBF24', // yellow
      slug: 'neptalent'
    }
];
