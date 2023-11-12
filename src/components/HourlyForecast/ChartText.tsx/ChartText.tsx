import { LabelProps } from "recharts";
import { ThunderIcon } from "../../Icons/Icons";
import moment from "moment";

//css
import './chartText.scss'

const convertToAMPM = (timeString: string): string => {
  return moment(timeString, 'HH:mm').format('h:mm A');
};

export const CustomizedLabelTop: React.FC<LabelProps> = (props) => {
  const { x, y, value } = props;
  return (
    <text
      x={x}
      y={y}
      dy={-10}
      fill="#fff"
      fontSize={10}
      textAnchor="middle"
      style={{ maxWidth: "10px" }}
    >
      {value}°
    </text>
  );
};

export const CustomizedLabelBottom: React.FC<LabelProps & { x?: any, y?: any, value?: any }> = (props) => {
  const { x, y, value } = props;
  let newValue: string = convertToAMPM(value).toLocaleLowerCase();
  return (
    <g>
      <text x={x} y={y} dy={20} fill="#fff" fontSize={10} textAnchor="middle">
        {newValue}
      </text>
      <g transform={`translate(${x - 5},${y + 30})`}>
        <ThunderIcon width={15} height={15} />
      </g>
    </g>
  );
};
