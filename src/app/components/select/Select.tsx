"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ISelectProps } from "./select.type";
import { selectVariants } from "./selectVariants";

export const Select = ({
  placeholder,
  options,
  value,
  onValueChange,
  className,
  variant = "default",
  size = "default",
  disabled = false,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { trigger, content, item } = selectVariants({ variant, size });

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (optionValue: string) => {
    onValueChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`${trigger()} ${className || ""}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span
          className={
            selectedOption
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className={content()}>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={item()}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
