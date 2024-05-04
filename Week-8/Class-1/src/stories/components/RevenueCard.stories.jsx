import { RevenueCard } from "../../components/RevenueCard";

export default {
  component: RevenueCard,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => <RevenueCard primary label="RevenueCard" />,
};