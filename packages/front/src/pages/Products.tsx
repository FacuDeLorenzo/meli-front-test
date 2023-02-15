import MuiPaper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "components/styled/ProductIListtem";
import Searcher from "components/styled/Searcher";
import { useSearchParams } from "react-router-dom";
import { Products as ProductsResponse } from "types";
import jsonFetch from "utils/jsonFetch";
import { styled } from "@mui/material/styles";
import getMostPopular from "utils/getMostPopular";
import Body from "components/styled/Body";
import ContentSection from "components/styled/ContentSection";
import Breadcrumbs from "components/Breadcrumbs";

const Products = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  const { data: products } = useQuery<ProductsResponse>({
    queryFn: () => getProducts(searchParams?.get("search") ?? ""),
  });
  //Todo: fix category fetch on API
  const popularCategory = getMostPopular(products?.categories ?? []);
  const breadcrumbChilds = [{ to: "#", label: popularCategory }];

  return (
    <Body>
      <Searcher />
      <ContentSection>
        <Breadcrumbs childs={breadcrumbChilds} />
        <Paper>
          <ProductsContainer>
            {products?.items?.map((product) => (
              <ProductListItem product={product} />
            ))}
          </ProductsContainer>
        </Paper>
      </ContentSection>
    </Body>
  );
};

const getProducts = (query: string) => {
  return jsonFetch({
    endpoint: `http://localhost:3001/api/items?q=${query}`,
  });
};

const ProductsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const Paper = styled(MuiPaper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
export default Products;
