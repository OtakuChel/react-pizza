import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block" 
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="326" rx="10" ry="10" width="286" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
