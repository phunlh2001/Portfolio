"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  content: z.string().min(10, "Message must be at least 10 characters long.").max(1000, "Message must be less than 1000 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      subject: "",
      content: "",
    },
  });

  const onSubmit = () => {
    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Replace with your EmailJS Template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          form.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
          console.error("EmailJS Error:", error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center">Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What is this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
