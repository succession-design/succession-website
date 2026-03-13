"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export function BetaSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companySize: "11-50",
    yearsInBusiness: "",
    dealVolume: "",
    specificInterest: "",
    phone: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/beta-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit beta signup");
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        companySize: "11-50",
        yearsInBusiness: "",
        dealVolume: "",
        specificInterest: "",
        phone: "",
        website: "",
      });

      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = "/beta/thank-you";
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">
          Thank You for Signing Up!
        </h3>
        <p className="text-gray-600">
          Redirecting you to the next step...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name *
        </label>
        <Input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          placeholder="Your Brokerage"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Size *
          </label>
          <Select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
          >
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="200+">200+ employees</option>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years in Business *
          </label>
          <Input
            type="text"
            name="yearsInBusiness"
            value={formData.yearsInBusiness}
            onChange={handleChange}
            required
            placeholder="e.g., 5 years"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Annual Deal Volume *
        </label>
        <Input
          type="text"
          name="dealVolume"
          value={formData.dealVolume}
          onChange={handleChange}
          required
          placeholder="e.g., 10-20 deals per year"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What are you most interested in? *
        </label>
        <Textarea
          name="specificInterest"
          value={formData.specificInterest}
          onChange={handleChange}
          required
          placeholder="e.g., Accelerating deal closings, reducing diligence surprises, etc."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <Input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg shadow-lg"
      >
        {loading ? "Submitting..." : "🚀 Join Beta Program"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We'll review your application and send you access details within 24 hours.
      </p>
    </form>
  );
}
