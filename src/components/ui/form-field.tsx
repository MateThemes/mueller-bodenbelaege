'use client'

import { forwardRef } from 'react'
import { Label } from './label'
import { Input } from './input'
import { cn } from '@/utils/cn'

interface FormFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'error'> {
  label: string
  error?: string
  className?: string
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className={cn('space-y-2', className)}>
        <Label
          htmlFor={id}
          className={cn(error && 'text-destructive')}
        >
          {label}
        </Label>
        <Input
          id={id}
          error={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          ref={ref}
          {...props}
        />
        {error && (
          <p
            className="text-sm font-medium text-destructive"
            id={`${id}-error`}
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = 'FormField'

export { FormField }
