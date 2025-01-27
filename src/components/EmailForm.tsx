import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('emails')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "We'll notify you when ObservIQ launches."
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="glass-morphism"
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Notify Me"}
      </Button>
    </form>
  );
};

export default EmailForm;