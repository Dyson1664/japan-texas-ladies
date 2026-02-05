import DestinationTemplate from "@/components/DestinationTemplate";
import { destinationsData } from "@/data/destinations";

const FranceDestination = () => {
  return <DestinationTemplate data={destinationsData.france} />;
};

export default FranceDestination;