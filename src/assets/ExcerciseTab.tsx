import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface ExerciseTabSvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const ExerciseTabSvg = ({ width = 50, height = 50, color = "#fff", ...props }: ExerciseTabSvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 40"
      fill="none"
      {...props}
    >
      <Path
        d="M28.27 7.333c-.224.67-.683 1.185-1.334 1.474-2.09.926-3.599 2.435-4.526 4.525-.288.651-.803 1.11-1.473 1.334"
        fill={color}
      />
      <Path
        d="M28.27 7.333c-.224.67-.683 1.185-1.334 1.474-2.09.926-3.599 2.435-4.526 4.525-.288.651-.803 1.11-1.473 1.334"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="m16.537 19.067-1.1 1.1m16.232-16.234 1.1-1.1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.909 2.22 28.523 3.553l3.52 3.553 1.355-1.315c.406-.479.53-.84.024-1.505l-1.014-1.066-1.027-1.014c-.657-.589-1.174-.272-1.472.014Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.447 3.444c1.018-1.076 1.715-.31 2.073.116l3.49 3.505c.435.348 1.23 1.016.18 2.057-.17.168-.336.343-.52.495-.68.559-1.333.096-1.679-.33l-3.553-3.553c-.374-.336-1.02-.945-.474-1.757.147-.188.319-.358.483-.533Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.808 19.819 16.762 18.784l-.994-1.047c-.59-.59-.25-1.18.042-1.472l1.358-1.36 3.536 3.55-1.392 1.367c-.486.397-.82.518-1.474.037m1.5-7.095c-.358-.426-1.055-1.192-2.073-.116-.165.175-.337.345-.483.533-.547.812.1 1.421.474 1.757l3.553 3.553c.346.426.999.889 1.68.33.183-.152.349-.327.519-.495 1.05-1.04.255-1.709-.18-2.057L19.307 12.764Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ExerciseTabSvg

