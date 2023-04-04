import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  useEffect(() => { setData(() => getData());
  }, [events]);

  const [data, setData ] = useState([]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const eventsData = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    const data = eventsData.filter((genre) => genre.value !== 0).length;
      return data;
  };

  const colors = ["#B1FF6D", "#000000", "#BEBE00", "#FFFFFF", "#02219B"];

  return (
    <ResponsiveContainer width={400} height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          // labelLine={false}
          // dataKey="value"
          // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;