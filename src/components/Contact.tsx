import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormspark } from "@formspark/use-formspark";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .min(1, { message: "First Name cannot be empty" }),
  lastName: z
    .string({ required_error: "Last Name is required" })
    .min(1, { message: "Last Name cannot be empty" }),
  emailAddress: z
    .string({ required_error: "Email Address is required" })
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email Address cannot be empty" }),
  title: z
    .string({ required_error: "Title is required" })
    .min(1, { message: "Title cannot be empty" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, { message: "Message cannot be empty" }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      title: "",
      message: "",
    },
  });

  const [submit] = useFormspark({
    formId: "xiiZCIZA",
  });

  const onSubmit = async ({
    firstName,
    lastName,
    emailAddress,
    title,
    message,
  }: z.infer<typeof formSchema>) => {
    try {
      await submit({
        firstName,
        lastName,
        email: emailAddress,
        title,
        message,
      });
      toast.success("Successfully submitted!", { position: "bottom-center" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.", {
        position: "bottom-center",
      });
    } finally {
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-emerald-50/30 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Build <span className="text-emerald-500">Together</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? Get in touch and let's create something
            amazing.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">
          <Form {...form}>
            <form
              noValidate
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="lg:flex lg:gap-4 space-y-8 lg:space-y-0">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="lg:basis-1/2">
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="lg:basis-1/2">
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Title"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="bg-emerald-500 text-white px-8 py-3 rounded-md hover:bg-emerald-600 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
