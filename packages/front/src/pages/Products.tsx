import Searcher from "components/styled/Searcher";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { search: searchParam } = useParams();

  useEffect(() => {
    console.log("sarasuli: ", searchParam);
  }, [searchParam]);
  return (
    <>
      <Searcher />
      <div>Products</div>
    </>
  );
};

export default Products;
