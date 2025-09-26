import React from "react";
import { Skeleton, Box } from "@mui/material";
import { FlexBox } from "../../style";

function ProductCardSkeleton() {
  return (
    <Box width={250}>
      <Skeleton
        variant="rectangular"
        width={250}
        height={400}
        sx={{ bgcolor: "grey.800" }} 
      />

      <FlexBox style={{ justifyContent: "space-between", marginTop: "10px" }}>
        <div>
          <Skeleton
            variant="text"
            width={120}
            height={25}
            sx={{ bgcolor: "grey.700" }}
          />
          <Skeleton
            variant="text"
            width={80}
            height={20}
            sx={{ bgcolor: "grey.700" }}
          />
        </div>
        <Skeleton
          variant="text"
          width={60}
          height={25}
          sx={{ bgcolor: "grey.700" }}
        />
      </FlexBox>
    </Box>
  );
}

export default ProductCardSkeleton;
