"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Check, Globe } from 'lucide-react';
import { useRouter, usePathname } from '@/navigation';

const languages: Record<string, { name: string }> = {
  en: { name: 'English' },
  es: { name: 'Español' },
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Globe className="h-4 w-4" />
          <span>{languages[currentLocale]?.name || 'English'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, { name }]) => (
          <DropdownMenuItem 
            key={code}
            onClick={() => handleLanguageChange(code)}
            className="flex items-center gap-2"
          >
            {currentLocale === code && <Check className="h-4 w-4" />}
            <span className={currentLocale === code ? "font-medium" : ""}>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 