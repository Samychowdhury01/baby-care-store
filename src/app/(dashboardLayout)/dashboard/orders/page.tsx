/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { useAuth } from "@/lib/AuthProviders";
import { toast } from "sonner";
const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = useAuth();
  const columns = [
    {
      key: "username",
      label: "User Name",
    },
    {
      key: "total",
      label: "Total Amount",
    },
    {
      key: "quantity",
      label: "Quantity",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "action",
      label: "Action",
    },
  ];
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/orders`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = await res.json();
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. try Again!", {
          className: "bg-red-500 text-white",
        });
      }
    };

    fetchOrders();
  }, [user, token]);
  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold text-center mb-5 pb-2 border-b-2 bor">
          Order Management
        </h1>
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {orders?.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell>{order?.username}</TableCell>
                <TableCell>{order?.quantity}</TableCell>
                <TableCell>{order?.total}</TableCell>
                <TableCell>{order?.status}</TableCell>
                <TableCell>
                  <Button color="primary" variant="shadow" size="sm">
                    Delivered
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default OrdersPage;
