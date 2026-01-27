"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { urgencyTypes } from "@/lib/data";

const urgencyFormSchema = z.object({
  name: z.string().min(2, "Veuillez entrer votre nom"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[0-9\s+]+$/, "Numéro de téléphone invalide"),
  city: z.string().min(2, "Veuillez entrer votre ville"),
  urgencyType: z.string().min(1, "Veuillez sélectionner le type d'urgence"),
});

type UrgencyFormValues = z.infer<typeof urgencyFormSchema>;

export function UrgencyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<UrgencyFormValues>({
    resolver: zodResolver(urgencyFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      urgencyType: "",
    },
  });

  async function onSubmit(data: UrgencyFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/urgency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">
          Demande envoyée !
        </p>
        <p className="mt-2 text-green-700">
          Nous vous rappelons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre nom *</FormLabel>
              <FormControl>
                <Input placeholder="Jean Dupont" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone *</FormLabel>
              <FormControl>
                <Input placeholder="06 12 34 56 78" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ville *</FormLabel>
              <FormControl>
                <Input placeholder="Paris 15e" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="urgencyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nature de l&apos;urgence *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type d'urgence" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {urgencyTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full gap-2"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Demander un rappel urgent
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
