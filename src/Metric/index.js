import { MetricContainer } from "./styles";
import Donut from "../Donut";


export default function Metric() {
  return (
    <MetricContainer id="metric">
        <h2>
          Quelques statisques
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="dataviz">
        <Donut />
        </div>
    </MetricContainer>
  );
}
