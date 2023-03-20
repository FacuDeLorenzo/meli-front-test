import MuiPaper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "components/styled/ProductIListtem";
import Searcher from "components/styled/Searcher";
import { useSearchParams } from "react-router-dom";
import { Products as ProductsResponse } from "types";
import jsonFetch from "utils/jsonFetch";
import { styled } from "@mui/material/styles";
import Body from "components/styled/Body";
import ContentSection from "components/styled/ContentSection";
import Breadcrumbs, { breadcrumbFromCategories } from "components/Breadcrumbs";
import Skeleton from "@mui/material/Skeleton";

const Products = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _] = useSearchParams();

  const searchParam = searchParams?.get("search") ?? "";
  const { data: products } = useQuery<ProductsResponse>({
    queryFn: () => getProducts(searchParam),
    queryKey: ["products", { searchParam }],
  });

  const breadcrumbChilds = breadcrumbFromCategories(products?.categories);
  const loading = !products;

  return (
    <Body>
      <Searcher />
      <ContentSection>
        <Breadcrumbs childs={breadcrumbChilds} />
        <Paper>
          <ProductsContainer>
            {!loading &&
              products?.items?.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            {loading &&
              [1, 2, 3, 4].map((value) => (
                <Skeleton
                  key={value}
                  variant="rounded"
                  height={84}
                  sx={{ margin: "16px" }}
                />
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
