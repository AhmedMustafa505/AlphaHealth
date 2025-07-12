import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface PlanTabSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlanTabSvg = ({ width = 50, height = 50, color = "#fff", ...props }: PlanTabSvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 40"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M33.645 11.694v-.471c0-1.585 0-2.856-.072-3.89H16.3c-.072 1.034-.072 2.305-.072 3.89v.47c0 3.995 0 5.992 1.148 7.233 1.148 1.24 2.995 1.24 6.69 1.24h1.741c3.695 0 5.542 0 6.69-1.24 1.148-1.241 1.148-3.238 1.148-7.232z"
        fill={color}
      />
      <Path
        d="M30.436 1.833v1.834m-11-1.834v1.834M16.228 11.223c0-3.994 0-5.991 1.148-7.232 1.148-1.241 2.995-1.241 6.69-1.241h1.741c3.695 0 5.542 0 6.69 1.24 1.148 1.242 1.148 3.239 1.148 7.233v.47c0 3.995 0 5.992-1.148 7.233-1.148 1.24-2.995 1.24-6.69 1.24h-1.741c-3.695 0-5.542 0-6.69-1.24-1.148-1.241-1.148-3.238-1.148-7.232v-.471zM16.686 7.333h16.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default PlanTabSvg;
