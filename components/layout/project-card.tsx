"use client";
import React from "react";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../ui/tooltip";
import db from "@/lib/db.json";
import Markdown from "react-markdown";
import Image from "next/image";

export default function ProjectInfoCard() {
  const [selectedProject, setSelectedProject] = React.useState(db.projects[0]);
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Projelerim</CardTitle>
        <CardDescription>Detaylı bilgi için soldan proje seçin. </CardDescription>
      </CardHeader>
      <CardContent className="flex p-0">
        <nav className="flex flex-col items-start text-sm border-r">
          {db.projects.map((project) => (
            <button
              key={project.key}
              onClick={() => setSelectedProject(project)}
              className="text-left h-full max-h-20 min-w-40 flex items-center border-b justify-start py-12 text-wrap break-words px-8 hover:bg-accent hover:text-accent-foreground"
            >
              {project.title}
            </button>
          ))}
        </nav>
        <div className="flex flex-col">
          <ScrollArea className="h-[600px]">
            <Image
              alt="Project Name"
              className="w-full aspect-[2/1] lg:aspect-[3/1] overflow-hidden object-center object-cover rounded-none pb-2 px-2 md:px-4 lg:px-6 xl:px-8 pt-2 md:pt-4 lg:pt-6 xl:pt-8"
              height="200"
              width="200"
              src="/foto.jpeg"
            />
            <div className="w-full pt-0 px-2 md:px-4 lg:px-6 xl:px-8 pb-2 md:pb-4 lg:pb-6 xl:pb-8 text-left">
              <div className="my-2 relative">
                <TooltipProvider>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                      <Link className="absolute top-0 right-2" href={selectedProject.githubRepo}>
                        <Button size="icon" variant="ghost">
                          <GitHubLogoIcon className="h-6 w-6" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>GitHub Link</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Markdown className="min-w-full prose-sm sm:prose prose-ol:my-0 prose-ul:my-0 prose-p:my-0 dark:prose-invert prose-headings:mb-4 prose-headings:mt-6 prose-hr:my-4 prose-hr:border-primary/70">
                {selectedProject.description}
              </Markdown>
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
