import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Searcher from "components/styled/Searcher";
import { NumericFormat } from "react-number-format";
import { useParams } from "react-router-dom";
import jsonFetch from "utils/jsonFetch";
import { ProductResponse, ProductDTO } from "types";
import Body from "components/styled/Body";
import ContentSection from "components/styled/ContentSection";
import Breadcrumbs, { breadcrumbFromCategories } from "components/Breadcrumbs";
import WithSkeleton from "components/styled/WithSkeleton";

const Product = () => {
  const { id } = useParams();
  const { data: product } = useQuery<ProductResponse, any, ProductDTO>({
    enabled: !!id,
    queryKey: ["product", { id }],
    queryFn: () => getProduct(id!),
    select: (data) => data.item,
  });
  const breadcrumbChilds = breadcrumbFromCategories(
    product?.category?.path_from_root
  );

  return (
    <Body>
      <Searcher />
      <ContentSection>
        <Breadcrumbs childs={breadcrumbChilds} />
        <WhitePaper>
          <LeftColumn>
            <PicBox>
              <WithSkeleton loading={!product} height={400}>
                <img src={product?.picture} alt="product" />
              </WithSkeleton>
            </PicBox>
            <DescriptionBox>
              <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
                Descripcion del producto
              </Typography>
              <WithSkeleton variant="text" height={100} loading={!product}>
                <DescriptionText variant="body2" color="grey">
                  {product?.description}
                </DescriptionText>
              </WithSkeleton>
            </DescriptionBox>
          </LeftColumn>
          <RightColumn>
          <WithSkeleton variant="text" height={180} loading={!product}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              {product?.title}
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
              $
              <NumericFormat
                value={product?.price?.amount}
                displayType={"text"}
                thousandSeparator="."
                decimalSeparator=","
              />
              <Sup>{String(product?.price?.decimals).padStart(2, "0")}</Sup>
            </Typography>
            </WithSkeleton>
            <Button variant="contained" disabled={!product}>Comprar</Button>
          </RightColumn>
        </WhitePaper>
      </ContentSection>
    </Body>
  );
};

export default Product;

const getProduct = (id: string) => {
  return jsonFetch({
    endpoint: `http://localhost:3001/api/items/${id}`,
  });
};

const DescriptionBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

const DescriptionText = styled(Typography)({
  whiteSpace: "pre-line",
});
const PicBox = styled("div")({
  justifyContent: "center",
  display: "flex",
  padding: "1rem",
});
const LeftColumn = styled("div")({
  flex: 2,
});

const RightColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flex: 1,
});

const WhitePaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
  marginBottom:"1rem"
});

const Sup = styled("sup")({
  fontSize: "20px",
});
