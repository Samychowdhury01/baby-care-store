"use client";
import AdminOverview from "@/components/dashboard/AdminOverview";
import UserOverview from "@/components/dashboard/UserOverview";
import Container from "@/components/ui/Container";
import { useAuth } from "@/lib/AuthProviders";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({});
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_PRODUCTION_SERVER as string}/users/dashboard`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const { data } = await res.json();
          setDashboardData(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [token]);
  return (
    <Container>
      <div className="mt-16">
        {user && user?.role === "admin" ? (
          <AdminOverview data={dashboardData} />
        ) : (
          <UserOverview data={dashboardData} />
        )}
      </div>
    </Container>
  );
};

export default DashboardPage;
