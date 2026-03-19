/* eslint-disable @next/next/no-img-element */
import { Creature } from "@/data/models";

interface WidgetProps {
  data: Creature;
}

export const Widget = (props: WidgetProps) => {
  const { data } = props;
  return <img width={300} src={data.image} alt={data.name} />;
};
