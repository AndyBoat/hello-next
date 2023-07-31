import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

const DynamicHello = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return repo.stargazers_count;
};

export default DynamicHello;
