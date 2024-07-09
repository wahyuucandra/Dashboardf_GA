import { joinClass } from '@utils/common'
import React, { ComponentPropsWithRef, FC, forwardRef } from 'react'

export interface TextAreaInputProps extends ComponentPropsWithRef<'textarea'> {
  isLoading?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isValid?: boolean
  counter?: boolean
  maxLength?: number
}

const TextAreaInput: FC<TextAreaInputProps> = forwardRef(
  ({ className, isDisabled, isInvalid, counter, maxLength = 200, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          ref={ref}
          disabled={isDisabled}
          className={joinClass(
            'w-full py-2 px-3 border rounded-lg outline-none focus:border-primary/60',
            isInvalid ? 'border-error' : 'border-gray-300',
            className
          )}
          rows={props.rows ?? 3}
          {...props}
        >
          {props.value}
        </textarea>
        {counter ? (
          <span className="absolute bottom-2 right-2 text-xs">
            {props.value?.toString()?.length || 0} / {maxLength}
          </span>
        ) : null}
      </div>
    )
  }
)

TextAreaInput.displayName = 'TextAreaInput'

export default TextAreaInput
