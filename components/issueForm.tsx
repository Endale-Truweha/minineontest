"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const issueSchema = z.object({
  description: z.string().min(3, { message: "Description must be at least 3 characters." }),
  status: z.enum(["STOP", "SLOW"], {
    invalid_type_error: "Select a valid status.",
  }),
  telegramUserId: z.string().min(1, { message: "Telegram User ID is required." }),
});

type IssueFormValues = z.infer<typeof issueSchema>;

export default function IssueForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IssueFormValues>({
    resolver: zodResolver(issueSchema),
  });

  const onSubmit = async (data: IssueFormValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Issue created successfully!");
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Failed to create the issue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white text-black shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create Issue</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Input
            id="description"
            placeholder="Enter issue description"
            {...register("description")}
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Status Field */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <Select onValueChange={(value: "STOP" | "SLOW" ) => setValue("status", value)} defaultValue="OPEN">

            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="STOP">STOP</SelectItem>
              <SelectItem value="SLOW">SLOW</SelectItem>
           
            </SelectContent>
          </Select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Telegram User ID Field */}
        <div>
          <label htmlFor="telegramUserId" className="block text-sm font-medium text-gray-700">
            Telegram User ID
          </label>
          <Input
            id="telegramUserId"
            placeholder="Enter Telegram User ID"
            {...register("telegramUserId")}
            className={errors.telegramUserId ? "border-red-500" : ""}
          />
          {errors.telegramUserId && (
            <p className="text-red-500 text-sm mt-1">{errors.telegramUserId.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Submitting..." : "Create Issue"}
        </Button>
      </form>
    </div>
  );
}
