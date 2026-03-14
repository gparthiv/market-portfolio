import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { useSectorAllocation } from "../../hooks/useSectorAllocation"

export default function SectorPieChart() {

  const data = useSectorAllocation()

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div>

      <h3>Sector Allocation</h3>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >

          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}

        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </div>
  )
}