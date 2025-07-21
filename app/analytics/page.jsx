"use client";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

export default function page() {
  const { state } = useContext(AppContext);


  const departmentData = [
    { department: "HR", avgRating: 4.1 },
    { department: "Engineering", avgRating: 4.5 },
    { department: "Sales", avgRating: 3.9 },
    { department: "Design", avgRating: 4.2 },
  ];

  const bookmarkTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bookmarks",
        data: [12, 20, 30, 25, 40, 50],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const ratingBarData = {
    labels: departmentData.map((d) => d.department),
    datasets: [
      {
        label: "Avg Rating",
        data: departmentData.map((d) => d.avgRating),
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
     
      <Card>
        <CardHeader>
          <CardTitle>Department-wise Avg Ratings</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={ratingBarData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </CardContent>
      </Card>

    
      <Card>
        <CardHeader>
          <CardTitle>Bookmark Trends (Mocked)</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={bookmarkTrendData} options={{ responsive: true }} />
        </CardContent>
      </Card>
    </div>
  );
}
