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
        <PicBox>
          <img src={product.thumbnail} alt="product-picture" />
        </PicBox>
        <Description>
          <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
            $
            <NumericFormat
              value={product.price.amount}
              displayType={"text"}
              thousandSeparator="."
              decimalSeparator=","
            />
          </Typography>
          <Typography>{product.title}</Typography>
        </Description>
      </Card>
    </Link>
  );
};

const Card = styled(MuiCard)({
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
  gap: "1rem",
  marginBottom:"1px"
});
const Description = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});
const PicBox = styled("div")({
  maxWidth: 90,
  maxHeight: 90,
});
export default ProductListItem;
