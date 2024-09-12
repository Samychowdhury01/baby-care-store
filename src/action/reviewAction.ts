"use server";
import { toast } from "sonner";

export const postReview = async (reviewData: {
  userName: string;
  review: string;
}) => {
  try {
    const res = await fetch(`${process.env.LOCAL_SERVER}/reviews`, {
      method: "POST",
      body: JSON.stringify(reviewData),
    });
    const data = await res.json();
    if (data) {
      toast.success("Review submitted successfully");
    }
  } catch (error) {
    toast.error("something went wrong! try again");
  }
};
