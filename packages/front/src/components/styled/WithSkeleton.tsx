import Skeleton from "@mui/material/Skeleton";

interface IWithSkeleton {
  children: React.ReactNode;
  loading: boolean;
  width?: number | string;
  height: number;
  variant?: "text" | "rectangular" | "rounded" | "circular";
}
const WithSkeleton = ({
  children,
  loading,
  width = "100%",
  height,
  variant = "rectangular",
}: IWithSkeleton) => {
  return (
    <>
      {loading && <Skeleton variant={variant} width={width} height={height} />}
      {!loading && children}
    </>
  );
};

export default WithSkeleton;
