import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, MessageCircle, Pencil } from "lucide-react";

// Replace with your real WhatsApp number in international format (digits only, no +)
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string;

const experienceOptions = ["Beginner", "Intermediate", "Advanced"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Digits, spaces and + only"),
  experience: z.enum(experienceOptions, { message: "Select your level" }),
  goal: z.string().trim().max(300).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

function buildMessage(values: FormValues) {
  const lines = [
    "Hi VeloLearn team — I'd like to enroll in the next cohort.",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Experience: ${values.experience}`,
    values.goal ? `Goal: ${values.goal}` : null,
  ].filter(Boolean) as string[];
  return lines.join("\n");
}

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type Stage =
  | { step: "form" }
  | { step: "confirm"; values: FormValues; message: string }
  | { step: "sent"; url: string };

export function EnrollForm() {
  const [stage, setStage] = useState<Stage>({ step: "form" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", phone: "", goal: "" },
  });

  const onSubmit = (values: FormValues) => {
    setStage({ step: "confirm", values, message: buildMessage(values) });
  };

  const sendNow = () => {
  if (stage.step !== "confirm") return;
  const url = buildWhatsAppUrl(stage.message);
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setStage({ step: "sent", url });
  reset();
};

  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8 text-left shadow-[0_24px_60px_-32px_oklch(0.38_0.13_255/0.25)]">
      <AnimatePresence mode="wait">
        {stage.step === "sent" && (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-start gap-4 py-4"
          >
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-display text-xl font-semibold">Application sent.</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                If WhatsApp didn't open automatically, tap the button below to message us.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={stage.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Open WhatsApp
              </a>
              <button
                onClick={() => setStage({ step: "form" })}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold"
              >
                Submit another
              </button>
            </div>
          </motion.div>
        )}

        {stage.step === "confirm" && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <div>
              <h3 className="font-display text-xl font-semibold">Review your message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                This is what we'll receive on WhatsApp. Send it as-is or edit your details.
              </p>
            </div>
            <pre className="whitespace-pre-wrap rounded-lg border border-border bg-muted/60 p-4 font-mono text-xs leading-relaxed text-foreground">
              {stage.message}
            </pre>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={sendNow}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> Confirm & send via WhatsApp
              </button>
              <button
                onClick={() =>
                  setStage({ step: "form" })
                }
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold"
              >
                <Pencil className="h-4 w-4" /> Edit details
              </button>
            </div>
          </motion.div>
        )}

        {stage.step === "form" && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 sm:grid-cols-2"
            noValidate
          >
            <Field
              label="Full name"
              hint="As you'd like it on your certificate."
              error={errors.name?.message}
            >
              <input
                {...register("name")}
                maxLength={80}
                autoComplete="name"
                className="form-input"
                placeholder="Ada Lovelace"
              />
            </Field>
            <Field
              label="Email"
              hint="We'll send your enrolment receipt here."
              error={errors.email?.message}
            >
              <input
                {...register("email")}
                type="email"
                maxLength={255}
                autoComplete="email"
                className="form-input"
                placeholder="you@domain.com"
              />
            </Field>
            <Field
              label="Phone (WhatsApp)"
              hint="Include country code, e.g. +1, +44, +91."
              error={errors.phone?.message}
            >
              <input
                {...register("phone")}
                inputMode="tel"
                maxLength={20}
                autoComplete="tel"
                className="form-input"
                placeholder="+1 555 123 4567"
              />
            </Field>
            <Field
              label="Experience level"
              hint="Helps us tailor onboarding — pick what fits today."
              error={errors.experience?.message}
            >
              <select {...register("experience")} className="form-input" defaultValue="">
                <option value="" disabled>Select your level</option>
                {experienceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field
              label="What do you want to build? (optional)"
              hint="One sentence is enough — we love specifics."
              error={errors.goal?.message}
              full
            >
              <textarea
                {...register("goal")}
                maxLength={300}
                rows={3}
                className="form-input resize-none"
                placeholder="A research agent, an internal RAG copilot, a multi-agent workflow..."
              />
            </Field>

            <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                You'll see a preview before anything is sent to WhatsApp.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60"
              >
                Review message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  hint,
  error,
  children,
  full,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? (
        <span className="text-xs font-medium text-destructive">{error}</span>
      ) : hint ? (
        <span className="text-xs text-muted-foreground/80">{hint}</span>
      ) : null}
    </label>
  );
}
