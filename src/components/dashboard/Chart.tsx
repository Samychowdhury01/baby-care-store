import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({
  deliveredAmount,
  PendingAmount,
}: {
  deliveredAmount: number;
  PendingAmount: number;
}) => {
  const data = {
    labels: ["Delivered", "Pending"],

    datasets: [
      {
        label: "product",
        data: [deliveredAmount,PendingAmount],
        backgroundColor: ["rgb(255, 205, 86)", "rgb(255, 99, 132)"],
        borderColor: ["rgb(255, 205, 86)", "rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "data",
      },
    },
  };
  return (
    <>
      <div>
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default Chart;
