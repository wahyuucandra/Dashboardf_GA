import { joinClass } from '@utils/common'
import React, { ComponentPropsWithRef, FC, forwardRef } from 'react'

export interface RadioProps extends ComponentPropsWithRef<'input'> {
  checked?: boolean
  label?: React.ReactNode
  isInvalid?: boolean
  isValid?: boolean
}

const Radio: FC<RadioProps> = forwardRef(({ className, label, isValid, isInvalid, ...props }, ref) => {
  return (
    <div className="form-control">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          ref={ref}
          className={joinClass(
            'peer checked:bg-primary radio radio-xs rounded-full w-6 h-6',
            isInvalid ? 'border-error' : isValid ? 'border-success' : '',
            className
          )}
          type="radio"
          {...props}
        />
        <span className="text-base font-nunito peer-checked:text-primary">{label}</span>
      </label>
    </div>
  )
})

Radio.displayName = 'Radio'

export default Radio
