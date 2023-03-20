import MuiCard from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import { ListProduct } from "types";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

interface IProductListItem {
  product: ListProduct;
}

const ProductListItem = ({ product }: IProductListItem) => {
  return (
    <Link to={`/items/${product.id}`} style={{ textDecoration: "none" }}>
      <Card>
      <Thumbnail src={product.thumbnail} alt="product" />
        <Description>
          <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
            $
            <NumericFormat
              value={product.price.amount}
              displayType={"text"}
              thousandSeparator="."
              decimalSeparator=","
            />
            {product?.price?.decimals !== 0 && (
              <Sup>{String(product?.price?.decimals).padStart(2, "0")}</Sup>
            )}
          </Typography>
          <Typography>{product.title}</Typography>
        </Description>
      </Card>
    </Link>
  );
};

export default ProductListItem;

const Card = styled(MuiCard)({
  boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
  gap: "1rem",
  marginBottom: "1px",
});
const Description = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});
const Thumbnail = styled("img")({
  maxWidth: 90,
  maxHeight: 90,
});

const Sup = styled("sup")({
  fontSize: "10px",
});
