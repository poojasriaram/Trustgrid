import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(100),
  company: z.string().trim().min(2, "Required").max(150),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(30).optional(),
  country: z.string().trim().min(2).max(80),
  industry: z.string().trim().max(80),
  budget: z.string().trim().max(80),
  description: z.string().trim().min(20, "Tell us a bit more").max(2000),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-primary/30 bg-surface/40 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 text-2xl font-semibold text-gradient">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          An enterprise architect from TrustGrid.AI will reach out within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-border/60 bg-surface/40 backdrop-blur p-6 md:p-10 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message}>
          <Input {...register("name")} className="bg-background border-border" placeholder="Jane Doe" />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <Input {...register("company")} className="bg-background border-border" placeholder="Acme Corp" />
        </Field>
        <Field label="Work Email" error={errors.email?.message}>
          <Input {...register("email")} type="email" className="bg-background border-border" placeholder="jane@acme.com" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input {...register("phone")} className="bg-background border-border" placeholder="+1 555 000 0000" />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <Input {...register("country")} className="bg-background border-border" placeholder="United States" />
        </Field>
        <Field label="Industry" error={errors.industry?.message}>
          <Input {...register("industry")} className="bg-background border-border" placeholder="Financial Services" />
        </Field>
        <Field label="Project Budget" error={errors.budget?.message}>
          <select
            {...register("budget")}
            className="flex h-9 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground"
          >
            <option value="">Select range</option>
            <option>$100K – $500K</option>
            <option>$500K – $1M</option>
            <option>$1M – $5M</option>
            <option>$5M+</option>
          </select>
        </Field>
      </div>
      <Field label="Project Description" error={errors.description?.message}>
        <Textarea
          {...register("description")}
          className="bg-background border-border min-h-32"
          placeholder="Describe your AI initiative, current infrastructure, timeline, and success criteria."
        />
      </Field>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary group w-full md:w-auto"
      >
        Schedule Enterprise Consultation
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
