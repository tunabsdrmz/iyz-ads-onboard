"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import Image from "next/image";

const MinusCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer w-6 h-6 shrink-0 rounded-sm border border-line-border-gray shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-main-bg-green data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Image
        src="/icons/checkboxMinusIcon.png"
        alt="minus icon"
        width={16}
        height={1}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
MinusCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { MinusCheckbox };
