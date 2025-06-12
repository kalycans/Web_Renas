"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Zap, AlertTriangle } from 'lucide-react';
import { generateProjectSummary } from '@/ai/flows/project-summary-generator';
import { useToast } from '@/hooks/use-toast';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    try {
      const result = await generateProjectSummary({ projectDescription: project.description });
      setSummary(result.summaryQuote);
      toast({
        title: "AI Summary Generated!",
        description: "The project summary has been successfully generated.",
      });
    } catch (e) {
      console.error("Failed to generate summary:", e);
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(`Failed to generate summary. ${errorMessage}`);
      toast({
        variant: "destructive",
        title: "Error Generating Summary",
        description: `Could not generate AI summary for "${project.title}". Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={project.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 leading-relaxed text-balance">
          {project.reflectiveNarrative}
        </CardDescription>
        
        {summary && (
          <div className="mt-4 p-3 bg-accent/30 rounded-md border border-accent">
            <p className="text-sm font-semibold text-accent-foreground mb-1">AI Generated Insight:</p>
            <blockquote className="text-sm text-accent-foreground/90 italic">"{summary}"</blockquote>
          </div>
        )}
        {error && (
          <div className="mt-4 p-3 bg-destructive/10 rounded-md border border-destructive text-destructive flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
            <p className="text-xs">{error}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleGenerateSummary}
          disabled={isLoading}
          variant="outline"
          className="w-full transition-colors duration-300"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Zap className="mr-2 h-4 w-4" />
          )}
          {isLoading ? 'Generating...' : (summary ? 'Regenerate AI Summary' : 'Generate AI Summary')}
        </Button>
      </CardFooter>
    </Card>
  );
}
