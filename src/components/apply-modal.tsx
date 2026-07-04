"use client";

import { ReactNode, useState } from "react";
import { SuccessDialog } from "@/components/success-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApplyModalProps {
  children: ReactNode;
}

export function ApplyModal({ children }: ApplyModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"), // We don't have email in the UI, maybe add it or fallback
      phone: formData.get("phone"),
      serviceType: formData.get("visa-type"),
      message: formData.get("query"),
    };

    // Since email isn't in this modal, let's just make it a fallback for the API requirements
    if (!data.email) data.email = "no-email@provided.com";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setOpen(false); // Close the modal
      setShowSuccess(true);
    } catch (error) {
      alert("Submission Failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for Visa Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below with your details and we will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="+1 234 567 8900" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="visa-type">Visa Type</Label>
            <Select name="visa-type" required>
              <SelectTrigger id="visa-type">
                <SelectValue placeholder="Select Visa Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tourist">Tourist Visa</SelectItem>
                <SelectItem value="student">Student Visa</SelectItem>
                <SelectItem value="business">Business Visa</SelectItem>
                <SelectItem value="work">Work Permit</SelectItem>
                <SelectItem value="pr">Permanent Residency</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="query">Your Query</Label>
            <Textarea
              id="query"
              name="query"
              required
              placeholder="Tell us a bit about your travel plans..."
              className="resize-none"
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="mt-2 w-full disabled:cursor-not-allowed disabled:opacity-50">
            {isSubmitting ? "Submitting..." : "Submit Query"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
    <SuccessDialog open={showSuccess} onOpenChange={setShowSuccess} title="Query Submitted Successfully!" />
    </>
  );
}
