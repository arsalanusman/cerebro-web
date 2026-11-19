import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = "", required, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className="w-full text-left">
        <label
          htmlFor={inputId}
          className="block text-small font-medium text-ink mb-1.5"
        >
          {label} {required && <span className="text-negative">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-control border bg-white text-ink text-small transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand ${
            error ? "border-negative focus:ring-negative" : "border-border"
          } ${className}`}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-caption text-muted">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-negative font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className = "", required, ...props }, ref) => {
    const inputId = id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className="w-full text-left">
        <label
          htmlFor={inputId}
          className="block text-small font-medium text-ink mb-1.5"
        >
          {label} {required && <span className="text-negative">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          rows={4}
          className={`w-full px-3.5 py-2.5 rounded-control border bg-white text-ink text-small transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand ${
            error ? "border-negative focus:ring-negative" : "border-border"
          } ${className}`}
          {...props}
        />
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-caption text-muted">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-negative font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, helperText, id, className = "", required, ...props }, ref) => {
    const inputId = id || `select-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className="w-full text-left">
        <label
          htmlFor={inputId}
          className="block text-small font-medium text-ink mb-1.5"
        >
          {label} {required && <span className="text-negative">*</span>}
        </label>
        <select
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-control border bg-white text-ink text-small transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand ${
            error ? "border-negative focus:ring-negative" : "border-border"
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-caption text-muted">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-negative font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, className = "", required, ...props }, ref) => {
    const inputId = id || `checkbox-${typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : "cb"}`;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="text-left">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            className={`mt-1 w-4 h-4 rounded-[4px] border border-border text-brand focus:ring-brand focus:ring-offset-0 focus:outline-none ${className}`}
            {...props}
          />
          <label htmlFor={inputId} className="text-small text-text cursor-pointer select-none">
            {label}
          </label>
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-caption text-negative font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
