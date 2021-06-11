import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 268 46" {...props}>
      <image
        width="268"
        height="46"
        href={
          isDark
            ? "/images/basset/LogoTextNewDark.png"
            : "/images/basset/LogoTextNewDark.png"
        }
      />
    </Svg>
  );
};

export default Logo;
