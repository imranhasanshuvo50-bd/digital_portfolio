import type { Certificate } from "@/features/portfolio/types";

export const certificates = [
  {
    title: "Dean's List Honors",
    issuer: "American International University-Bangladesh (AIUB)",
    issueDate: "26 June 2025",
    thumbnail: {
      src: "/images/certificates/deans-list-honors.png",
      alt: "Dean's List Honors certificate from American International University-Bangladesh"
    },
    downloadUrl: "/images/certificates/deans-list-honors.png"
  },
  {
    title: "Higher Secondary Certificate Examination",
    issuer: "Board of Intermediate and Secondary Education, Dhaka",
    issueDate: "30 January 2021",
    thumbnail: {
      src: "/images/certificates/hsc-certificate.png",
      alt: "Higher Secondary Certificate Examination certificate from Dhaka Education Board"
    },
    downloadUrl: "/images/certificates/hsc-certificate.png"
  },
  {
    title: "Secondary School Certificate Examination",
    issuer: "Board of Intermediate and Secondary Education, Dhaka",
    issueDate: "6 May 2018",
    thumbnail: {
      src: "/images/certificates/ssc-certificate.png",
      alt: "Secondary School Certificate Examination certificate from Dhaka Education Board"
    },
    downloadUrl: "/images/certificates/ssc-certificate.png"
  },
  {
    title: "Junior School Certificate Examination",
    issuer: "Board of Intermediate and Secondary Education, Dhaka",
    issueDate: "31 December 2015",
    thumbnail: {
      src: "/images/certificates/jsc-certificate.png",
      alt: "Junior School Certificate Examination certificate from Dhaka Education Board"
    },
    downloadUrl: "/images/certificates/jsc-certificate.png"
  },
  {
    title: "Primary Education Completion Examination",
    issuer: "Directorate of Primary Education, Bangladesh",
    issueDate: "2012",
    thumbnail: {
      src: "/images/certificates/psc-certificate.png",
      alt: "Primary Education Completion Examination certificate from Bangladesh Directorate of Primary Education"
    },
    downloadUrl: "/images/certificates/psc-certificate.png"
  }
] satisfies Certificate[];
