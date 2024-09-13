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
import { TProduct } from "@/types";
import Image from "next/image";
import UpdateProduct from "@/components/dashboard/UpdateProduct";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = useAuth();
  const columns = [
    {
      key: "image",
      label: "Product Image",
    },
    {
      key: "name",
      label: "Product Name",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "rating",
      label: "Rating",
    },
    {
      key: "sale",
      label: "Flash Sale",
    },
    {
      key: "action",
      label: "Actions",
    },
  ];
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/products`,
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
        setProducts(data);
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
            {products?.map((product: TProduct) => (
              <TableRow key={product._id}>
                <TableCell>
                    <Image
                    alt="product_image"
                    src={product.image}
                    width={50}
                    height={50}
                    />
                </TableCell>
                <TableCell>{product?.name}</TableCell>
                <TableCell>{product?.price}</TableCell>
                <TableCell>{product?.rating}</TableCell>
                <TableCell>{product?.isFlashSale ? "Yes" : "No"}</TableCell>
                <TableCell className="flex items-center gap-3">
                  <UpdateProduct product={product} setProducts={setProducts}/>
                  <Button color="danger" variant="shadow" size="sm">
                    Delete
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

export default ProductsPage;
