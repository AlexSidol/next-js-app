import Head from "next/head";
import Heading from "../../components/Heading";
import PostInfo from "@/components/PostInfo";

//створює структуру шляхів? щоб усі файли вже були створені на ресурсі 
export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }
};
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
};


const Post = ({ post }) => (
  <>
    <Head>
      <title>Post page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;