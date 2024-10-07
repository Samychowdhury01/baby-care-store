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
} from "@nextui-org/react";
import Image from "next/image";
import { useAuth } from "@/lib/AuthProviders";

const UserOrdersTable = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.userId && token) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_PRODUCTION_SERVER}/orders/${user.userId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const  data  = await res.json();
          console.log(data);
          setOrders(data.data);
        } catch (error) {
          console.log(error);
         
        }
      }
    };

    fetchOrders();
  }, [user, token]);

  const columns = [
    {
      key: "products",
      label: "Products",
    },
    {
      key: "total",
      label: "Total Amount",
    },
    {
      key: "status",
      label: "Status",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-center mb-5 pb-2 border-b-2 bor">
        My Orders List
      </h1>
      {orders.length > 0 ? (
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {orders?.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell>
                  {order?.products?.map((product: any) => (
                    <div key={product._id} className="flex items-center gap-5">
                      <Image
                        src={product.image}
                        alt="product_image"
                        width={50}
                        height={50}
                      />
                      <p>{product.name}</p>
                    </div>
                  ))}
                </TableCell>
                <TableCell className="w-16">{order?.totalAmount}</TableCell>
                <TableCell>{order?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center text-lg font-bold pt-10">
          <p>No orders found</p>
        </div>
      )}
    </div>
  );
};

export default UserOrdersTable;
