import { useSwitch } from '@react-aria/switch'
import type { AriaSwitchProps } from '@react-types/switch'
import React, { useMemo, memo, forwardRef } from 'react'
import { useToggleState } from 'react-stately'
import styled from 'styled-components'
import { theme } from '../../styled'
import { disabledSelector } from '@charcoal-ui/utils'
import { useObjectRef } from '@react-aria/utils'

export type SwitchProps = {
  name: string
  className?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange(checked: boolean): void
} & (
  | // children か label は片方が必須
  {
      children: React.ReactNode
    }
  | {
      label: string
    }
)

const SwitchCheckbox = forwardRef<HTMLInputElement, SwitchProps>(
  function SwitchCheckboxInner(props, external) {
    const { disabled, className } = props

    const ariaSwitchProps: AriaSwitchProps = useMemo(
      () => ({
        ...props,

        // children がいない場合は aria-label をつけないといけない
        'aria-label': 'children' in props ? undefined : props.label,
        isDisabled: props.disabled,
        isSelected: props.checked,
      }),
      [props]
    )

    const state = useToggleState(ariaSwitchProps)
    const ref = useObjectRef<HTMLInputElement>(external)
    const {
      inputProps: { className: _className, type: _type, ...rest },
    } = useSwitch(ariaSwitchProps, state, ref)

    return (
      <Label className={className} aria-disabled={disabled}>
        <SwitchInput {...rest} ref={ref} />
        {'children' in props ? (
          // eslint-disable-next-line react/destructuring-assignment
          <LabelInner>{props.children}</LabelInner>
        ) : undefined}
      </Label>
    )
  }
)

export default memo(SwitchCheckbox)

const Label = styled.label`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  cursor: pointer;
  outline: 0;

  ${theme((o) => o.disabled)}

  ${disabledSelector} {
    cursor: default;
  }
`

const LabelInner = styled.div`
  ${theme((o) => [
    o.typography(14).preserveHalfLeading,
    o.font.text2,
    o.margin.left(4),
  ])}
`

const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
  &[type='checkbox'] {
    appearance: none;
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    width: 28px;
    border: 2px solid transparent;
    transition: box-shadow 0.2s, background-color 0.2s;
    cursor: inherit;
    ${theme((o) => [
      o.borderRadius(16),
      o.height.px(16),
      o.bg.text4.hover.press,
      o.outline.default.focus,
      o.margin.all(0),
    ])}

    &::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      transform: translateX(0);
      transition: transform 0.2s;
      ${theme((o) => [o.bg.text5.hover.press, o.borderRadius('oval')])}
    }

    &:checked {
      /* FIXME: o.outline.default.focus の transition に o.bg.brand の transition が打ち消されてしまう */
      transition: all 0.2s !important;
      ${theme((o) => o.bg.brand.hover.press)}

      &::after {
        transform: translateX(12px);
      }
    }
  }
`
