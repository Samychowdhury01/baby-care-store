/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAuth } from "@/lib/AuthProviders";
import { TProduct } from "@/types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateProduct = ({
  product,
  setProducts,
}: {
  product: TProduct;
  setProducts: any;
}) => {
  const { token } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   submit handler
  const onSubmit = async (data: any) => {
    const { isFlashSale, price, rating, ...rest } = data;

    // converting the string value to lowercase for validation
    const flashSaleString = String(isFlashSale).toLocaleLowerCase();
    // validation condition
    if (flashSaleString !== "yes" && flashSaleString !== "no") {
      toast.error("Flash sale value must be 'Yes' or 'No'", {
        className: "bg-red-500 text-white",
      });
      return;
    }
    if (Number(rating) < 1 || Number(rating) > 5) {
      toast.error("Rating must be 1-5", {
        className: "bg-red-500 text-white",
      });
      return;
    }

    const updateData = {
      ...rest,
      isFlashSale: flashSaleString === "yes" ? true : false,
      price: Number(price),
      rating: Number(rating),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/products/${product._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      }
    );
    const result = await res.json();

    console.log(result);
    if (result.success) {
      setProducts((prevProducts: any) =>
        prevProducts.map((prod: TProduct) =>
          prod._id === product._id ? { ...prod, ...updateData } : prod
        )
      );
      toast.success("Product updated successfully", {
        className: "bg-green-500 text-white",
      });
      onOpenChange();
    } else {
      toast.error(result.message, {
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="secondary"
        size="sm"
        variant="shadow"
        className="text-black"
      >
        Edit
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex flex-col gap-1">
                  Product Management
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="Product Name"
                      placeholder="Enter your email"
                      variant="bordered"
                      defaultValue={product?.name}
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">Name is required</p>
                    )}
                    <Input
                      label="Price"
                      placeholder="Enter your password"
                      type="number"
                      variant="bordered"
                      defaultValue={product?.price.toString()}
                      {...register("price", { required: true })}
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm">Price is required</p>
                    )}
                    <Input
                      label="Rating"
                      placeholder="Enter your password"
                      type="number"
                      variant="bordered"
                      defaultValue={product?.rating!.toString()}
                      {...register("rating", { required: true })}
                    />
                    {errors.rating && (
                      <p className="text-red-500 text-sm">Rating is required</p>
                    )}
                    <Input
                      label="Flash Sale"
                      placeholder="Enter your password"
                      type="text"
                      variant="bordered"
                      defaultValue={product!.isFlashSale ? "Yes" : "No"}
                      {...register("isFlashSale", { required: true })}
                    />
                    {errors.isFlashSale && (
                      <p className="text-red-500 text-sm">
                        Flash sale is required
                      </p>
                    )}
                  </div>
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="w-full"
                    defaultValue={product?.description}
                    {...register("description", { required: true })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      Description is required
                    </p>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="primary">
                    Update
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProduct;
