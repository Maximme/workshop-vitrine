import { MetricContainer } from "./styles";
import Donut from "../Donut";


export default function Metric() {
  return (
    <MetricContainer id="metric">
        <h2>
        Quelques statistiques
        </h2>
        <p>
        Nous nous efforçons de récolter des données à des fins d'amélioration, mais aussi dans un objectif pédagogique. Grâce aux métrics, vous vous rendrez compte que toute fleur n'est pas bonne à butiner !
        </p>
        <div className="dataviz">
        <Donut />
        </div>
    </MetricContainer>
  );
}
