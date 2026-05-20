import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_acof4p7",
        "template_k3pjm6d",
        formRef.current,
        "aUm13ANPyZ9_7zB0k"
      );

      toast.success("Message sent successfully");

      formRef.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message");
    }
  };

  return (
    <section className="w-full pt-24 md:pt-32 mb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-bold text-3xl">
            Let's build something together
          </p>

          <p className="mt-4 text-center opacity-70 max-w-xl">
            Whether you have a question, a project
            proposal, or just want to say hi,
            my inbox is always open.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <Card className="w-full max-w-xl mt-16">

            <CardContent>
              <form
                ref={formRef}
                onSubmit={sendEmail}
              >
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">
                    <Label htmlFor="name">
                      Name
                    </Label>

                    <Input
                      id="name"
                      name="user_name"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      Email
                    </Label>

                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">
                      Message
                    </Label>

                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="How can I help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                  >
                    Send Message
                  </Button>

                </div>
              </form>
            </CardContent>

          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;