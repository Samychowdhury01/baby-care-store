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
  Spinner,
} from "@nextui-org/react";
import { useAuth } from "@/lib/AuthProviders";
import { toast } from "sonner";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
        const api = `${process.env.NEXT_PUBLIC_PRODUCTION_SERVER}/orders`;
        console.log(api, token);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PRODUCTION_SERVER}/orders`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = await res.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong. Try again!", {
          className: "bg-red-500 text-white",
        });
      }
    };

    fetchOrders();
  }, [user, token]);

  const handleDeliveredProduct = async (id: string) => {
    try {
      const res = await fetch(`${process.env.PRODUCTION_SERVER}/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        setOrders((prevOrders: any) =>
          prevOrders.map((order: any) => {
            if (order._id === id) {
              return { ...order, status: "delivered" };
            }
            return order;
          })
        );
        toast.success("Order Delivered Successfully!", {
          className: "bg-green-500 text-white",
        });
      } else {
        toast.error(data.message, {
          className: "bg-red-500 text-white",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Try again!", {
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-5 pb-2 border-b-2">
          Order Management
        </h1>
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          // Add a div wrapper with overflow-x-auto for horizontal scrolling
          <div className="overflow-x-auto">
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
                    <TableCell>{order?.totalAmount}</TableCell>
                    <TableCell>{order?.quantity}</TableCell>
                    <TableCell>{order?.status}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeliveredProduct(order._id)}
                        isDisabled={order?.status === "delivered"}
                        color="primary"
                        variant="shadow"
                        size="sm"
                      >
                        Delivered
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersPage;
