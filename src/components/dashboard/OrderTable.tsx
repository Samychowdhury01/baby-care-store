/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";

const OrderTable = ({ orders, type }: any) => {
  const columns = [
    {
      key: "username",
      label: type === "admin" ? "Name" : "product",
    },
    {
      key: "quantity",
      label: "Total Quantity",
    },
    {
      key: "totalAmount",
      label: "Total Amount",
    },
    {
      key: "status",
      label: "Status",
    },
  ];

  return (
    <>
      {type === "admin" ? (
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {orders?.slice(0, 5)?.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell>{order.username}</TableCell>
                <TableCell className="w-16">{order?.quantity}</TableCell>
                <TableCell className="w-16">{order?.totalAmount}</TableCell>
                <TableCell>{order?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {orders?.slice(0, 5)?.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell>
                  {order?.products?.map((p: any) => (
                    <div key={p._id} className="flex items-center gap-5">
                      <Image
                        src={p.image}
                        alt="product_image"
                        width={50}
                        height={50}
                      />
                      <p>{p.name}</p>
                    </div>
                  ))}
                </TableCell>
                <TableCell className="w-16">{order?.quantity}</TableCell>
                <TableCell className="w-16">{order?.totalAmount}</TableCell>
                <TableCell>{order?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default OrderTable;
