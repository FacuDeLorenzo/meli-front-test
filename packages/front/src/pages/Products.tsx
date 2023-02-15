import MuiPaper from "@mui/material/Paper";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "components/styled/ProductIListtem";
import Searcher from "components/styled/Searcher";
import { Link, useSearchParams } from "react-router-dom";
import { Products as ProductsResponse } from "types";
import jsonFetch from "utils/jsonFetch";
import { styled } from "@mui/material/styles";
import getMostPopular from "utils/getMostPopular";
import Typography from "@mui/material/Typography";

const Products = () => {
  const [searchParams, _] = useSearchParams();

  const { data: products } = useQuery<ProductsResponse>({
    queryFn: () => getProducts(searchParams?.get("search") ?? ""),
  });
  const popularCategory = getMostPopular(products?.categories ?? []);

  console.log("products", products);
  return (
    <Body>
      <Searcher />
      <Paper>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="#" style={{ textDecoration: "none" }}>
            {popularCategory}
          </Link>
        </Breadcrumbs>
        <ProductsContainer>
          {products?.items?.map((product) => (
            <ProductListItem product={product} />
          ))}
        </ProductsContainer>
      </Paper>
    </Body>
  );
};

const getProducts = (query: string) => {
  return jsonFetch({
    endpoint: `http://localhost:3001/api/items?q=${query}`,
  });
};

const Breadcrumbs = styled(MuiBreadcrumbs)({
  "& .MuiBreadcrumbs-ol": { display: "flex", flexDirection: "row" },
});
const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#EEEFF1",
  justifyContent: "start",
  alignItems: "center",
});

const ProductsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const Paper = styled(MuiPaper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "80%",
  padding: "1rem",
});
export default Products;
