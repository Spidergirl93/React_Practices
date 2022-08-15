import { useRouter } from "next/router";

// domain.com/news/newsId

const Detail = () => {
  const router = useRouter();


  return <h1>{router.query.newsId}</h1>;
};

export default Detail;
