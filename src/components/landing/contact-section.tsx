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
import { Card, CardContent } from "@/components/ui/card";
import { Send, Phone, Mail, GraduationCap, Home, MapPin, User, FileText, MessageSquare } from "lucide-react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/env";
import { Separator } from "@/components/ui/separator";

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
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">Have a question or a project in mind? I'd love to hear from you.</p>
        </div>

        <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Form Section */}
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    <Form {...form}>
                        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center"><User className="mr-2 h-4 w-4"/>Name</FormLabel>
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
                                    <FormLabel className="flex items-center"><FileText className="mr-2 h-4 w-4"/>Subject</FormLabel>
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
                                    <FormLabel className="flex items-center"><MessageSquare className="mr-2 h-4 w-4"/>Message</FormLabel>
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
                </div>
                
                {/* Info Section */}
                <div className="bg-secondary p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="text-muted-foreground mb-8">
                        Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <ul className="space-y-6 text-sm">
                        <li className="flex items-start gap-4">
                            <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <span className="text-muted-foreground">0396384095</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                             <div>
                                <h4 className="font-semibold">Email</h4>
                                <a href="mailto:phunlh2001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    phunlh2001@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                             <div>
                                <h4 className="font-semibold">Location</h4>
                                <span className="text-muted-foreground">From Dong Thap, based in Can Tho</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold">Education</h4>
                                <span className="text-muted-foreground">7.9 GPA from FPT University</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
