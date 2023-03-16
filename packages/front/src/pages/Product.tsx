import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import Searcher from "components/styled/Searcher";
import { NumericFormat } from "react-number-format";
import { useParams } from "react-router-dom";
import jsonFetch from "utils/jsonFetch";
import { Product as ProductResponse } from "types";
import Body from "components/styled/Body";
import ContentSection from "components/styled/ContentSection";
import Breadcrumbs from "components/Breadcrumbs";

const Product = () => {
  const { id } = useParams();
  const { data: product } = useQuery<ProductResponse>({
    enabled: !!id,
    queryFn: () => getProduct(id!),
    queryKey: ["product", {id}]
  });
  const breadcrumbChilds = [
    {
      to: "#",
      label: "Product",
    },
  ];
  return (
    <Body>
      <Searcher />
      <ContentSection>
        <Breadcrumbs childs={breadcrumbChilds} />
        <WhitePaper>
          <LeftColumn>
            <PicBox>
              <img
                src={product?.picture}
                alt="product"
                style={{
                  maxWidth: 400,
                }}
              />
            </PicBox>
            <Description>
              <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
                Descripcion del producto
              </Typography>
              <Typography variant="h6">{product?.description}</Typography>
            </Description>
          </LeftColumn>
          <RightColumn>
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
            <Button variant="contained">Comprar</Button>
          </RightColumn>
        </WhitePaper>
      </ContentSection>
    </Body>
  );
};

const getProduct = (id: string) => {
  return jsonFetch({
    endpoint: `http://localhost:3001/api/items/${id}`,
  });
};

const Description = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});
const PicBox = styled("div")({
  justifyContent: "center",
  display: "flex",
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
});

const Sup = styled("sup")({
  fontSize: "20px",
});
export default Product;
