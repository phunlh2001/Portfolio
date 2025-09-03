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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, Phone, Mail, GraduationCap, Home, MapPin } from "lucide-react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/env";

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
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
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
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Have a question or a project in mind? Let's talk.
              </CardDescription>
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

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                You can also reach me directly through the details below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary"/>
                  <span className="text-muted-foreground">0396384095</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary"/>
                  <a href="mailto:phunlh2001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    phunlh2001@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary"/>
                  <span className="text-muted-foreground">7.9 (FPT University)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-primary"/>
                  <span className="text-muted-foreground">From: Dong Thap</span>
                </li>
                 <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary"/>
                  <span className="text-muted-foreground">Based in: Can Tho</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
