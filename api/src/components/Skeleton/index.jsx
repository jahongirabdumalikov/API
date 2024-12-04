import React from "react";
import { Skeleton } from "@mui/material";

const Example = () => (
  <div>
    <Skeleton variant="rectangular" width={210} height={118} />
    <Skeleton variant="text" />
  </div>
);

export default Example;
